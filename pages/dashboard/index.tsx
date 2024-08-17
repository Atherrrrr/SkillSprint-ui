import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Box,
  useTheme,
  CircularProgress,
  circularProgressClasses,
  styled,
  CardContent,
  Chip,
  CardMedia,
  Card,
} from "@mui/material";
import CircularScore from "@/components/analytics/CircularScore";
import Calendar from "react-github-contribution-calendar";
import PracticeSessionsTable from "@/components/Tables/PracticeSessionsTable";
// import { calculateEmotionalPositivity } from "@/utils/EmotionalPositivityCalculator";
import { engagement } from "@/components/charts/AttentionChart";
import { calculateAttentionScore } from "@/utils/AttentionCalculator";
import { calculateBodyLanguageScore } from "@/utils/calculateBodyLanguageScore";
import { audioData } from "@/components/charts/AudioEmotionChart";
import {
  AudioSummaryCalculator,
  calculateAudioEmotionalPositivity,
} from "@/utils/AudioSummaryCalculator";
import axios from "axios";
import { SESSIONS_LIST, USER_AVG_SCORES } from "@/hooks/apiHelper";
import {
  MockInterviewSessionData,
  PracticeSessionData,
  PresentationPracticeSessionData,
  QuickStartSessionData,
  SessionType,
} from "@/Enums/SessionType";
import { useSnackbar } from "@/store/snackbar";

import { formatDate } from "@/utils/formatData";
import { DetailData } from "../past-sessions";
import LearningPathThumbnail from "@/components/LearningPath/thumbnail";
const userIdScore = "73246862-10e1-7048-87fa-97fd9947fa34";
// const sessionData = [
//   {
//     name: "Frontend React Developer",
//     type: "Mock Interview",
//     date: "2024-08-23",
//     avgScore: 88,
//     status: "Analyzed",
//     duration: "5 mins",
//     imageSrc: "/react.jpg",
//   },
//   {
//     name: "WePrep Pitch",
//     type: "Sales Pitch",
//     date: "2024-08-25",
//     avgScore: 65,
//     status: "Analyzed",
//     duration: "3 mins",
//     imageSrc: "/ps2.jpg",
//   },
//   {
//     name: "WePrep Pitch",
//     type: "Sales Pitch",
//     date: "2024-08-25",
//     avgScore: 42,
//     status: "Analyzed",
//     duration: "2 mins",
//     imageSrc: "/ps1.jpg",
//   },
//   {
//     name: "Presentation Recording",
//     type: "Upload Video",
//     date: "2021-08-12",
//     avgScore: 92,
//     status: "Analyzed",
//     duration: "6 mins",
//     imageSrc: "/ps2.jpg",
//   },
//   {
//     name: "Frontend React Developer",
//     type: "Mock Interview",
//     date: "2024-08-23",
//     avgScore: 83,
//     status: "Analyzed",
//     duration: "5 mins",
//     imageSrc: "/ps1.jpg",
//   },
//   {
//     name: "Frontend React Developer",
//     type: "Mock Interview",
//     date: "2024-08-23",
//     avgScore: 26,
//     status: "Analyzed",
//     duration: "5 mins",
//     imageSrc: "/react.jpg",
//   },
// ];
export default function BasicCard() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setScoreData] = useState();
  const snackbar = useSnackbar();
  const [sessionsList, setSessionsList] = useState<PracticeSessionData[]>();

  const fetchVideosList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(SESSIONS_LIST(userIdScore));
      const interviewDetails = response.data.interviewDetails;
      console.log("interviewDetails", interviewDetails);

      const processedSessions: PracticeSessionData[] = interviewDetails.map(
        (detail: DetailData): PracticeSessionData => {
          // The type of baseSessionData should be properly declared based on the sessionType field
          const sessionType = detail.sessionType as SessionType;
          let date = "";
          let time = "";
          if (detail.createdAt) {
            ({ date, time } = formatDate(detail.createdAt));
          }

          const baseSessionData = {
            id: detail.interviewId || "",
            title: detail.title || "",
            description: detail.description || "",
            sessionType: sessionType,
            status: detail.status || "Processing",
            score: detail.avgScore || 0,
            duration: detail.duration || "1min",
            thumbnailUrl: detail.thumbnailUrl || "",
            creationDate: date,
            creationTime: time,
          };

          switch (sessionType) {
            case SessionType.MockInterview:
              return {
                ...baseSessionData,
                interviewType: detail.interviewType || "",
                interviewDuration: detail.interviewDuration || "",
                questionMode: detail.questionMode || "",
                interviewTone: detail.interviewTone || "",
                resumeId: detail.resumeId || "",
              } as MockInterviewSessionData;
            case SessionType.PresentationPractice:
            case SessionType.SalesPitch:
            case SessionType.UploadVideo:
              return {
                ...baseSessionData,
                desiredTone: detail.desiredTone || "",
              } as PresentationPracticeSessionData;
            case SessionType.QuickStart:
            default:
              return baseSessionData as QuickStartSessionData; // No additional fields for QuickStart
          }
        }
      );

      processedSessions.push({
        id: "0",
        description: "Mock interview session for a frontend developer role",
        title: "React Frontend Developer",
        sessionType: SessionType.MockInterview,
        creationDate: "2024-08-26",
        creationTime: "12:40 PM",
        score: 75,
        status: "Analyzed",
        duration: "3 mins",
        thumbnailUrl: "/react.jpg",
        // Adding the following required properties
        interviewType: "Technical", // Example value, adjust as necessary
        interviewDuration: "30 mins", // Example value
        questionMode: "Sequential", // Example value
        interviewTone: "Strict", // Example value
        resumeId: "123456789", // Example value
      });
      setSessionsList(processedSessions);
    } catch (error) {
      console.error("Failed to fetch Practice Sessions:", error);
      snackbar("error", "Failed to load Practice Sessions. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();
    fetchVideosList();
  }, []);

  const fetchScores = async () => {
    setIsLoading(true);
    console.log("Fetching fetchScores");
    try {
      const response = await axios.get(USER_AVG_SCORES(userIdScore));
      setScoreData(response.data);
      console.log("Response", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch fetchScores:", error);
      // snackbar("error", "Failed to load videos. Please try again later.");
      console.log("sessionsData");
      setIsLoading(false);
    }
  };
  const values = {
    "2023-07-23": 41,
    "2024-01-26": 42,
    "2024-02-27": 43,
    "2024-01-28": 44,
    "2024-01-29": 44,
    "2024-02-01": 43,
    "2024-02-05": 42,
    "2024-02-15": 41,
    "2024-02-20": 44,
    "2024-03-01": 42,
    "2024-03-05": 43,
    "2024-03-10": 44,
    "2024-03-15": 14,
    "2024-03-20": 42,
    "2024-03-25": 0,
    "2024-04-24": 42,
    "2024-04-25": 43,
    "2024-04-26": 41,
    "2024-04-27": 44,
    "2024-04-28": 41,
    "2024-04-29": 42,
    "2024-04-30": 44,
    "2024-05-01": 34,
    "2024-05-02": 41,
    "2024-05-03": 34,
    "2024-05-04": 24,
    "2024-05-05": 44,
    "2024-05-06": 14,
    "2024-05-07": 0,
    "2024-05-08": 0,
    "2024-05-09": 0,
    "2024-05-10": 34,
    "2024-05-11": 44,
    "2024-05-12": 61,
    "2024-05-13": 15,
    "2024-05-14": 81,
    "2024-05-15": 51,
    "2024-05-16": 15,
    "2024-05-17": 7,
  };

  const until = "2024-05-17";

  const panelColors = [
    theme.palette.mode === "light" ? "#D4D4D8" : "#2D2F39",
    "#E2F1FA",
    "#99C7FB",
    "#2A93D5",
    "#00255A",
  ];

  const monthLabelAttributes = {
    style: {
      fontSize: 10,
      alignmentBaseline: "central",
      fill: theme.palette.text.secondary,
    },
  };
  const weekLabelAttributes = {
    style: {
      fontSize: 10,
      alignmentBaseline: "central",
      fill: theme.palette.text.secondary,
    },
  };
  const panelAttributes = {
    rx: 3,
    ry: 3,
  };

  const StyledCard = styled(Card)({
    display: "flex",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: 600,
  });

  const ContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
  });

  interface CloudComputingCardProps {
    imageUrl: string;
  }

  const myLearningPaths = [
    {
      id: "123",
      title: "AWS Cloud Computing",
      description:
        "Master Cloud Computing using AWS services. This learning path will teach you about popular AWS services and how to effectively utilize them. Gain insights into optimizing cloud resources for real-world applications.",
      image: "https://i.pinimg.com/736x/d4/74/7c/d4747cb7dcbecb5223b83355ea97a3be.jpg",
      mostPopular: true,
      currentPhase: 1,
      totalPhases: 2,
      currentLesson: 1,
      totalLessons: 8,
      currentTime: 0,
      totalTime: 3,
    },
    {
      id: "124",
      title: "Full-Stack Development",
      description:
        "Learn to build scalable full-stack applications using modern technologies like React, Node.js, and MongoDB. Understand how to connect your frontend and backend seamlessly.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
      mostPopular: false,
      currentPhase: 2,
      totalPhases: 4,
      currentLesson: 5,
      totalLessons: 20,
      currentTime: 12,
      totalTime: 40,
    },
    {
      id: "127",
      title: "Data Science with Python",
      description:
        "Dive into the world of data science with Python. Analyze data, create beautiful visualizations, and use machine learning to glean insights and make predictions.",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2",
      mostPopular: false,
      currentPhase: 1,
      totalPhases: 3,
      currentLesson: 2,
      totalLessons: 10,
      currentTime: 4,
      totalTime: 20,
    },
  ];

  return (
    <Box sx={{ width: "95%", overflowX: "auto", pl: "5", ml: 3, mb: 5 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome Arshia 👋
      </Typography>
      <Typography variant="h3" sx={{ ml: 2, mb: 2 }}>
        Your Scores:
      </Typography>
      <Box
        sx={{
          p: 2,
          pb: 3,
          mt: 1,
          mb: 1,
          border: 2,
          borderRadius: 3,
          borderColor: theme.palette.primary.main,
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <CircularScore
              label="Regularity Score"
              toolTipInfo="Measures your consistency in completing daily learning activities and quizzes."
              progressScore={92}
            />
          </Grid>
          <Grid item>
            <CircularScore
              label="Progress Score"
              toolTipInfo="Tracks your overall progress towards the completion of your learning roadmap."
              progressScore={33}
            />
          </Grid>
          <Grid item>
            <CircularScore
              label="Quiz Performance Score"
              toolTipInfo="Indicates the average score or accuracy of your quiz attempts."
              progressScore={53}
            />
          </Grid>
          <Grid item>
            <CircularScore
              label="Skill Acquisition Score"
              toolTipInfo="Reflects the number of new skills or sub-skills you have learned and mastered."
              progressScore={80}
            />
          </Grid>
          <Grid item>
            <CircularScore
              label="Resource Utilization Score"
              toolTipInfo="Measures how effectively you are using the provided learning resources."
              progressScore={75}
            />
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h3" sx={{ ml: 2, mb: 3, mt: 3 }}>
        You Practiced 36 days this Year
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Calendar
          monthLabelAttributes={monthLabelAttributes}
          weekLabelAttributes={weekLabelAttributes}
          panelAttributes={panelAttributes}
          values={values}
          until={until}
          panelColors={panelColors}
        />
      </div>
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mt: 2 }}>
        <Typography variant="body2" sx={{ mr: 1 }}>
          Less
        </Typography>
        {panelColors.map((color, index) => (
          <Box
            key={index}
            sx={{
              width: 17,
              height: 17,
              backgroundColor: color,
              mx: 0.5,
              borderRadius: 1,
            }}
          />
        ))}
        <Typography variant="body2" sx={{ ml: 1 }}>
          More
        </Typography>
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          My Learning Paths
        </Typography>
        <Grid container spacing={3}>
          {myLearningPaths.map((path, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <LearningPathThumbnail {...path} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
