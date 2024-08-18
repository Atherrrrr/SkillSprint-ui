import React, { useState, useEffect, useRef } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import domtoimage from "dom-to-image";

import {
  Typography,
  Box,
  Divider,
  Paper,
  Button,
  Grid,
  Card,
  Avatar,
  useTheme,
  Chip,
  Badge,
  Stack,
  CircularProgress,
  circularProgressClasses,
} from "@mui/material";
import {
  AddTask,
  ArrowBack,
  ArrowForward,
  AssignmentIndOutlined,
  AssignmentLateOutlined,
  AssignmentOutlined,
  AutoStories,
  AutoStoriesOutlined,
  Check,
  EmojiEvents,
  PsychologyAlt,
  SchoolOutlined,
  Share,
  Verified,
  WorkspacePremium,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import InfoBitFlashCard from "@/components/flashcards/InfoBitFlashCards";
import { useRouter } from "next/router";
import CircularScore from "@/components/analytics/CircularScore";
import { Colors } from "@/theme/themes";
import QuizFlashCards from "@/components/flashcards/QuizFlashCards";
import axios from "axios";
import { currentUserAtom } from "@/store/store";
import { useAtom } from "jotai";
import { GET_USER_ROADMAP_BY_ID } from "@/hooks/apiHelper";
import { PHASE_INFO } from "next/dist/shared/lib/constants";
import Congrats from "@/components/atoms/Congrats";
import CompletionBadge from "@/components/atoms/CompletionBadge";

export default function SkillTimeline() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [currentPhase, setCurrentPhase] = useState(1);
  const [showCongrats, setShowCongrats] = useState(false);
  const [congratsMsg, setCongratsMsg] = useState("Congratulations");
  const [currentLessonData, setCurrentLessonData] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [learningPathId, setLearningPathId] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentUser] = useAtom(currentUserAtom);
  const componentRef = useRef();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const qlearningPathId = decodeURIComponent(router.query.learningPathId as string);

      setLearningPathId(qlearningPathId);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (learningPathId && currentUser) {
      fetchLearningPath(learningPathId);
    }
  }, [learningPathId, currentUser]);

  const fetchLearningPath = async (learningPathId: string) => {
    try {
      if (currentUser?.sub) {
        // const response = await axios.post(GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId), {
        //   ...roadmap,
        //   currentPhase: String(4),
        //   currentLesson: String(10),
        //   status: "ongoing",
        // });
        // console.log("Done");
        const response = await axios.get(GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId));
        let temp_roadmap = response.data;
        console.log("roadmap", temp_roadmap);
        if (temp_roadmap) {
          temp_roadmap = extractAndAssignQuizzes(temp_roadmap);
          setCurrentLesson(parseInt(temp_roadmap.currentLesson, 10));
          setCurrentPhase(parseInt(temp_roadmap.currentPhase, 10));
          setRoadmap(temp_roadmap);
        }
      }
    } catch (error) {
      console.error("Failed to fetch user learning path:", error);
      return null; // Return null or appropriate value in case of error
    }
  };

  function extractAndAssignQuizzes(response) {
    response.phases.forEach((phase) => {
      const questions = [];
      phase.topics.forEach((topic) => {
        topic.infoBits.forEach((infoBit) => {
          if (infoBit.quiz) {
            questions.push(infoBit.quiz);
            // Optionally remove the quiz object from the infoBit if needed
            delete infoBit.quiz;
          }
        });
      });
      phase.quiz = {
        questions: questions,
        questionsCount: questions.length,
      };
    });
    return response;
  }

  const handleOpenQuiz = (quiz, phaseNo: number) => {
    if (
      roadmap.status !== "Final Quiz" &&
      roadmap.status !== "Completed" &&
      (roadmap.status === "Last Phase Quiz" || currentLesson > getCurrentPhaseLessonNum(phaseNo)) &&
      currentPhase === phaseNo
    ) {
      setCurrentQuiz(quiz);
      setOpenQuiz(true);
    }
  };

  const handleOpenFinalQuiz = () => {
    if (roadmap.status === "Final Quiz") {
      setCurrentQuiz(roadmap.phases[roadmap.phaseCount].quiz);
      setOpenQuiz(true);
    }
  };

  const handleOpenInfoBit = (currentTopic, phaseNo: number) => {
    if (
      currentTopic.topicNumber === currentLesson &&
      currentPhase === phaseNo &&
      roadmap.status === "ongoing"
    ) {
      setCurrentLessonData(currentTopic);
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  const handleCloseQuiz = () => setOpenQuiz(false);
  const handleCloseCongrats = () => setShowCongrats(false);

  const displayCongrats = (msg: string) => {
    setCongratsMsg(msg);
    setShowCongrats(true);
  };

  const shareWithFriends = () => {
    downloadImage();
  };

  const handleQuizComplete = async (passed: boolean) => {
    if (passed) {
      try {
        if (currentUser?.sub && learningPathId) {
          if (roadmap.status == "Final Quiz") {
            //All Phases Done
            const response = await axios.post(
              GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId),
              {
                ...roadmap,
                status: "Completed",
              }
            );
            setRoadmap({ ...roadmap, status: "Completed" });
            displayCongrats("Congratulations! You have Completed the Learning Path.");
          } else if (currentPhase == roadmap.phaseCount) {
            //All Phases Done
            const response = await axios.post(
              GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId),
              {
                ...roadmap,
                status: "Final Quiz",
              }
            );
            setRoadmap({ ...roadmap, status: "Final Quiz" });
            displayCongrats(`Congratulations! You have Completed Phase ${currentPhase}.`);
          } else {
            // Update Phase Count
            const response = await axios.post(
              GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId),
              {
                ...roadmap,
                currentPhase: String(currentPhase + 1),
              }
            );
            setCurrentPhase(currentPhase + 1);
            setRoadmap({ ...roadmap, currentPhase: String(currentPhase + 1) });
            displayCongrats(`Congratulations! You have Completed Phase ${currentPhase}.`);
          }
        }
      } catch (error) {
        console.error("Failed to fetch update progress to user learning path:", error);
        return null; // Return null or appropriate value in case of error
      }
    }
    setOpenQuiz(false);
  };

  const handleComplete = async () => {
    handleClose();
    try {
      if (currentUser?.sub && learningPathId) {
        if (currentLesson != roadmap.totalLessons) {
          const response = await axios.post(
            GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId),
            {
              ...roadmap,
              currentLesson: String(currentLesson + 1),
            }
          );
          setCurrentLesson(currentLesson + 1);
          setRoadmap({ ...roadmap, currentLesson: String(currentLesson + 1) });
        } else {
          const response = await axios.post(
            GET_USER_ROADMAP_BY_ID(currentUser.sub, learningPathId),
            {
              ...roadmap,
              status: "Last Phase Quiz",
            }
          );
          setRoadmap({ ...roadmap, status: "Last Phase Quiz" });
        }
      }
    } catch (error) {
      console.error("Failed to fetch update progress to user learning path:", error);
      return null; // Return null or appropriate value in case of error
    }
  };

  const goBack = () => {
    router.push("/learning-path");
  };

  const getProgress = () => {
    let currentLevel = currentLesson + currentPhase - 2;
    const totalLevel = roadmap.totalLessons + roadmap.phaseCount + 1;

    if (roadmap.status === "Last Phase Quiz") {
      currentLevel = totalLevel - 2;
    } else if (roadmap.status === "Final Quiz") {
      currentLevel = totalLevel - 1;
    } else if (roadmap.status === "Completed") {
      currentLevel = totalLevel;
    }

    const result = Math.floor((100 * currentLevel) / totalLevel);

    return result;
  };

  const getCurrentPhaseLessonNum = (phaseNo) => {
    let result = 0;
    for (const phase of roadmap.phases) {
      if (phaseNo >= phase.phaseNumber) {
        result += phase.topicCount;
      } else {
        break;
      }
    }
    return result;
  };

  const downloadImage = async () => {
    const scale = 5; // Adjust the scale for higher resolution

    const node = componentRef.current;
    const style = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: `${node.offsetWidth}px`,
      height: `${node.offsetHeight}px`,
    };

    // Apply scaling to the component
    domtoimage
      .toPng(node, {
        width: node.offsetWidth * scale,
        height: node.offsetHeight * scale,
        style: style,
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "learning_path_completed.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error capturing the screenshot:", error);
      });
  };

  return (
    <div>
      <Box sx={{ width: "100%", overflowX: "auto", maring: "5" }}>
        {roadmap ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                padding: 2,
              }}
            >
              <Button
                variant="contained"
                startIcon={<ArrowBack sx={{ fill: "#fff" }} />}
                sx={{ marginRight: 2 }}
                onClick={goBack}
              >
                Back
              </Button>
              <Typography variant="h2" align="center" sx={{ flexGrow: 1 }}>
                {roadmap.title}
              </Typography>
            </Box>
            <Box sx={{ overflowY: "auto", mb: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={roadmap.status === "Completed" ? 10 : 12}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "transparent",
                      border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3} mt={2}>
                        <CircularScore
                          label="Progress"
                          toolTipInfo="This score reflects your current progress in the Learning Path."
                          progressScore={getProgress()}
                        />
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "70%",
                              mt: 5,
                            }}
                          >
                            {typeof currentLesson === "number" &&
                              typeof roadmap.totalLessons === "number" && (
                                <Typography variant="body2" color="text.secondary">
                                  {`Lesson ${currentLesson}/${roadmap.totalLessons}`}
                                </Typography>
                              )}
                            {typeof currentPhase === "number" &&
                              typeof roadmap.phaseCount === "number" && (
                                <Typography variant="body2" color="text.secondary">
                                  {`Phase ${currentPhase}/${roadmap.phaseCount}`}
                                </Typography>
                              )}
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ padding: 2 }}>
                          <Typography variant="h6">Roadmap Description</Typography>
                          <Typography>{roadmap.description}</Typography>
                          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                            <Typography variant="h6" sx={{ mr: 1 }}>
                              Goal:
                            </Typography>
                            <Typography>{roadmap.goal}</Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                            <Typography variant="h6" sx={{ mr: 1 }}>
                              Skill Level:
                            </Typography>
                            <Chip
                              label={roadmap.currentSkillLevel}
                              color="secondary"
                              sx={{ marginRight: 1 }}
                            />
                            <ArrowForward sx={{ mx: 1, fill: theme.palette.text.primary }} />
                            <Chip label={roadmap.desiredSkillLevel} color="secondary" />
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                            <Typography variant="h6" sx={{ mr: 1 }}>
                              Estimated Learning Duration:
                            </Typography>
                            <Typography>{roadmap.estimatedLearningDuration}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3} mt={1}>
                        <Avatar
                          src={roadmap.imageURL}
                          alt="Learning Path"
                          sx={{
                            width: "auto", // Use 100% width to fill the parent Grid item
                            height: "90%", // Set height to auto to maintain the aspect ratio
                            maxWidth: "100%", // Ensures the image does not exceed the grid area vertically
                            borderRadius: "6px", // Slightly curved edges
                            border: `2px solid ${theme.palette.primary.main}`, // Stylish border using theme color
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {roadmap.status === "Completed" && (
                  <Grid item xs={2} mb={2}>
                    <div ref={componentRef}>
                      <CompletionBadge {...roadmap} />
                    </div>
                  </Grid>
                )}
              </Grid>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  mt: 1,
                  borderRadius: 2,
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              >
                <Timeline position="alternate">
                  {roadmap.phases.map(
                    (phase, index) =>
                      index !== roadmap.phases.length - 1 && (
                        <React.Fragment key={index}>
                          {index > 0 && <Divider />}
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot
                                color={
                                  roadmap.status === "Final Quiz" ||
                                  roadmap.status === "Completed" ||
                                  index === roadmap.currentPhase - 1
                                    ? "success"
                                    : "grey"
                                }
                                // variant="outlined"
                                sx={{
                                  width: "auto",
                                  height: "auto",
                                  m: "auto",
                                  backgroundColor:
                                    roadmap.status === "Final Quiz" ||
                                    roadmap.status === "Completed"
                                      ? theme.palette.success.main
                                      : index === currentPhase - 1
                                        ? theme.palette.primary.main //Current
                                        : index < currentPhase - 1
                                          ? theme.palette.success.main //Completed
                                          : "grey", // Future
                                }}
                              >
                                {index >= currentPhase - 1 ? (
                                  <WorkspacePremiumOutlined
                                    sx={{
                                      fontSize: 45,
                                      fill: "#fff",
                                    }}
                                  />
                                ) : (
                                  <Check
                                    sx={{
                                      fontSize: 45,
                                      fill: "#fff",
                                    }}
                                  />
                                )}
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography
                                variant="h4"
                                component="span"
                                sx={{
                                  color:
                                    roadmap.status === "Final Quiz" ||
                                    roadmap.status === "Completed"
                                      ? theme.palette.success.main
                                      : index <= currentPhase - 1
                                        ? theme.palette.text.primary //Completed
                                        : "grey", // Future
                                }}
                              >
                                Phase {phase.phaseNumber}: {phase.phaseDescription}
                              </Typography>
                              <Typography
                                sx={{
                                  color:
                                    roadmap.status === "Final Quiz" ||
                                    roadmap.status === "Completed"
                                      ? theme.palette.success.main
                                      : index <= currentPhase - 1
                                        ? theme.palette.text.primary //Completed
                                        : "grey", // Future
                                }}
                              >
                                Lessons covered: {phase.topics.length}
                              </Typography>
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <Divider />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
                          </TimelineItem>
                          {phase.topics.map((topic, topicIndex) => (
                            <TimelineItem
                              key={topicIndex}
                              onClick={() => handleOpenInfoBit(topic, phase.phaseNumber)}
                            >
                              <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot
                                  sx={{
                                    backgroundColor:
                                      roadmap.status !== "ongoing"
                                        ? theme.palette.success.main
                                        : topic.topicNumber === currentLesson &&
                                            currentPhase === phase.phaseNumber
                                          ? theme.palette.primary.main
                                          : topic.topicNumber < currentLesson
                                            ? theme.palette.success.main
                                            : "grey",
                                  }}
                                >
                                  {topic.topicName.toLowerCase().includes("quiz") ? (
                                    <PsychologyAlt
                                      sx={{
                                        fontSize: 32,
                                        fill: "#Fff",
                                      }}
                                    />
                                  ) : (
                                    <SchoolOutlined
                                      sx={{
                                        fontSize: 32,
                                        fill: "#Fff",
                                      }}
                                    />
                                  )}
                                </TimelineDot>
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography
                                  variant="h6"
                                  component="span"
                                  sx={{
                                    color:
                                      roadmap.status !== "ongoing"
                                        ? theme.palette.success.main
                                        : topic.topicNumber === currentLesson &&
                                            currentPhase === phase.phaseNumber
                                          ? theme.palette.primary.main
                                          : topic.topicNumber < currentLesson
                                            ? theme.palette.success.main
                                            : "grey",
                                  }}
                                >
                                  Lesson {topic.topicNumber}: {topic.topicName}
                                </Typography>
                                {currentLesson === topic.topicNumber &&
                                  currentPhase === phase.phaseNumber &&
                                  roadmap.status == "ongoing" && (
                                    <Typography style={{ textDecoration: "underline" }}>
                                      Click to continue
                                    </Typography>
                                  )}
                              </TimelineContent>
                            </TimelineItem>
                          ))}

                          {/* QUIZ BLOCK */}
                          <TimelineItem
                            onClick={() => handleOpenQuiz(phase.quiz, phase.phaseNumber)}
                          >
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot
                                sx={{
                                  backgroundColor:
                                    roadmap.status === "Final Quiz" ||
                                    roadmap.status === "Completed"
                                      ? theme.palette.success.main
                                      : (roadmap.status === "Last Phase Quiz" ||
                                            currentLesson >
                                              getCurrentPhaseLessonNum(phase.phaseNumber)) &&
                                          currentPhase === phase.phaseNumber
                                        ? theme.palette.primary.main // Current
                                        : currentPhase > phase.phaseNumber
                                          ? theme.palette.success.main // Completed
                                          : "grey", // Future
                                }}
                              >
                                <AssignmentOutlined
                                  sx={{
                                    fontSize: 32,
                                    fill: "#Fff",
                                  }}
                                />
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography
                                variant="h6"
                                component="span"
                                sx={{
                                  color:
                                    roadmap.status === "Final Quiz" ||
                                    roadmap.status === "Completed"
                                      ? theme.palette.success.main
                                      : (roadmap.status === "Last Phase Quiz" ||
                                            currentLesson >
                                              getCurrentPhaseLessonNum(phase.phaseNumber)) &&
                                          currentPhase === phase.phaseNumber
                                        ? theme.palette.primary.main // Current
                                        : currentPhase > phase.phaseNumber
                                          ? theme.palette.success.main // Completed
                                          : "grey", // Future
                                }}
                              >
                                Phase {phase.phaseNumber} Quiz
                              </Typography>
                              {(roadmap.status === "Last Phase Quiz" ||
                                currentLesson > getCurrentPhaseLessonNum(phase.phaseNumber)) &&
                                currentPhase === phase.phaseNumber && (
                                  <Typography style={{ textDecoration: "underline" }}>
                                    Click to continue
                                  </Typography>
                                )}
                            </TimelineContent>
                          </TimelineItem>

                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <Divider flexItem orientation="horizontal" sx={{ my: 2 }} />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              {index < currentPhase - 1 ||
                              roadmap.status === "Final Quiz" ||
                              roadmap.status === "Completed" ? (
                                <Typography variant="body2" color="text.primary">
                                  Phase {phase.phaseNumber} Completed
                                </Typography>
                              ) : (
                                <Typography variant="body2" color="grey">
                                  End of Phase {phase.phaseNumber}
                                </Typography>
                              )}
                            </TimelineContent>
                          </TimelineItem>
                        </React.Fragment>
                      )
                  )}
                  {/* End of Learning Path Block */}
                  <Divider />

                  {/* Final Quiz*/}

                  <TimelineItem onClick={() => handleOpenFinalQuiz()}>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot
                        sx={{
                          width: "auto",
                          height: "auto",
                          m: "auto",
                          backgroundColor:
                            roadmap.status == "Final Quiz"
                              ? theme.palette.primary.main //Completed
                              : roadmap.status == "Completed"
                                ? theme.palette.success.main
                                : "grey", // Future
                        }}
                      >
                        {roadmap.status != "Completed" ? (
                          <AssignmentLateOutlined
                            sx={{
                              fontSize: 45,
                              fill: "#fff",
                            }}
                          />
                        ) : (
                          <Check
                            sx={{
                              fontSize: 45,
                              fill: "#fff",
                            }}
                          />
                        )}
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant="h4"
                        component="span"
                        sx={{
                          color:
                            roadmap.status == "Final Quiz"
                              ? theme.palette.primary.main //Current
                              : roadmap.status == "Completed"
                                ? theme.palette.success.main
                                : "grey", // Future
                        }}
                      >
                        Final Quiz
                      </Typography>
                      {roadmap.status == "Final Quiz" && (
                        <Typography style={{ textDecoration: "underline" }}>
                          Click to continue
                        </Typography>
                      )}
                    </TimelineContent>
                  </TimelineItem>

                  {/* Compelted Roadmap */}

                  {roadmap.status == "Completed" && (
                    <>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot
                            sx={{
                              width: "auto",
                              height: "auto",
                              mt: 4,
                              backgroundColor: theme.palette.success.main, //Completed
                            }}
                          >
                            <EmojiEvents
                              sx={{
                                fontSize: 45,
                                fill: "#fff",
                              }}
                            />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography variant="h4">
                            Congratulations! You have completed {roadmap.title}.
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<Share sx={{ fill: "#fff" }} />}
                            style={{ marginTop: 8, width: "auto" }}
                            onClick={shareWithFriends}
                          >
                            Share with Friends
                          </Button>
                        </TimelineContent>
                      </TimelineItem>
                    </>
                  )}
                </Timeline>
              </Paper>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // This takes the full height of the viewport
            }}
          >
            <CircularProgress
              size={115}
              thickness={2}
              sx={{
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round",
                  stroke: theme.palette.primary.main,
                },
              }}
            />
          </Box>
        )}
        {currentLessonData && (
          <InfoBitFlashCard
            lessonTitle={
              "Lesson " + currentLessonData.topicNumber + ": " + currentLessonData.topicName
            }
            infoBits={currentLessonData.infoBits}
            searchResult={currentLessonData.searchResult}
            open={open}
            handleClose={handleClose}
            handleComplete={handleComplete}
          />
        )}
        {currentQuiz && (
          <QuizFlashCards
            completeQuestions={currentQuiz.questions}
            open={openQuiz}
            handleClose={handleCloseQuiz}
            handleComplete={handleQuizComplete}
          />
        )}
      </Box>
      <Congrats open={showCongrats} message={congratsMsg} onClose={handleCloseCongrats} />
    </div>
  );
}
