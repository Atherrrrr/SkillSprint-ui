import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Box,
  useTheme,
  CircularProgress,
  circularProgressClasses,
} from "@mui/material";
import CircularScore from "@/components/analytics/CircularScore";
import Calendar from "react-github-contribution-calendar";
import axios from "axios";
import { GET_USER_ROADMAP } from "@/hooks/apiHelper";

import UserLearningPathThumbnail from "@/components/LearningPath/UserLearningPathThumbnail";
import { currentUserAtom, exampleCompletedLearningPaths } from "@/store/store";
import { useAtom } from "jotai";
import CompletionBadge from "@/components/atoms/CompletionBadge";

export default function BasicCard() {
  const theme = useTheme();

  const [currentUser] = useAtom(currentUserAtom);
  const [userLearningPaths, setUserLearningPaths] = useState(null);
  const [completedLearningPaths, setCompletedLearningPaths] = useState([]);
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //get learning path.
    if (currentUser?.sub) {
      fetchUserLearningPath(currentUser.sub);
      if (currentUser.given_name === "Ather") {
        setValues(AtherValues);
      }
    }
  }, [currentUser]);

  const fetchUserLearningPath = async (userId: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(GET_USER_ROADMAP(userId));
      if (response.data.length <= 0) {
        setCompletedLearningPaths([]);
        setUserLearningPaths([]);
        setIsLoading(false);
        return;
      }
      const updatedPaths = response.data.map((path) => {
        const title = path.title.toLowerCase();
        return {
          ...path,
          mostPopular: title.includes("aws") || title.includes("frontend"),
          forBeginners:
            path.currentSkillLevel === "No Experience" || path.currentSkillLevel === "Beginner",
        };
      });

      // Filter completed learning paths
      let completedPaths = updatedPaths.filter((path) => path.status === "Completed");
      const remainingPaths = updatedPaths.filter((path) => path.status !== "Completed");

      completedPaths = [...completedPaths, ...exampleCompletedLearningPaths];

      // Update the states
      setUserLearningPaths(remainingPaths);
      setCompletedLearningPaths(completedPaths);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch user learning paths:", error);
      setUserLearningPaths([]);
      // Optionally, handle the error further, e.g., setting state to display an error message.
    }
  };

  const AtherValues = {
    "2024-05-23": 44,
    "2024-05-24": 14,
    "2024-05-25": 28,
    "2024-05-26": 37,
    "2024-05-29": 34,
    "2024-05-30": 43,
    "2024-05-31": 52,
    "2024-06-01": 44,
    "2024-06-02": 38,
    "2024-06-03": 17,
    "2024-06-04": 61,
    "2024-06-05": 42,
    "2024-06-06": 13,
    "2024-06-07": 44,
    "2024-06-08": 14,
    "2024-06-09": 0,
    "2024-06-10": 44,
    "2024-06-13": 47,
    "2024-06-14": 42,
    "2024-06-15": 12,
    "2024-06-16": 41,
    "2024-06-17": 15,
    "2024-06-18": 44,
    "2024-06-19": 27,
    "2024-06-22": 44,
    "2024-06-23": 29,
    "2024-06-24": 43,
    "2024-06-25": 28,
    "2024-06-26": 44,
    "2024-06-27": 41,
    "2024-06-28": 39,
    "2024-06-29": 0,
    "2024-06-30": 37,
    "2024-07-01": 41,
    "2024-07-02": 44,
    "2024-07-03": 21,
    "2024-07-06": 42,
    "2024-07-07": 27,
    "2024-07-08": 39,
    "2024-07-09": 38,
    "2024-07-10": 41,
    "2024-07-11": 35,
    "2024-07-12": 44,
    "2024-07-15": 41,
    "2024-07-16": 32,
    "2024-07-17": 44,
    "2024-07-18": 41,
    "2024-07-19": 42,
    "2024-07-20": 35,
    "2024-07-21": 44,
    "2024-07-22": 28,
    "2024-07-25": 44,
    "2024-07-26": 37,
    "2024-07-27": 41,
    "2024-07-28": 44,
    "2024-07-29": 43,
    "2024-07-30": 41,
    "2024-07-31": 42,
    "2024-08-01": 35,
    "2024-08-05": 29,
    "2024-08-06": 42,
    "2024-08-07": 44,
    "2024-08-08": 39,
    "2024-08-09": 42,
    "2024-08-10": 41,
    "2024-08-11": 37,
    "2024-08-12": 44,
    "2024-08-13": 41,
    "2024-08-14": 32,
    "2024-08-15": 44,
    "2024-08-16": 41,
    "2024-08-17": 35,
    "2024-08-18": 44,
  };

  const until = "2024-08-18";

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

  return (
    <Box sx={{ width: "95%", overflowX: "auto", pl: "5", ml: 3, mb: 5 }}>
      <Typography variant="h2" align="center" gutterBottom>
        {`Welcome ${currentUser.given_name} 👋`}
      </Typography>
      <Box
        sx={{
          p: 2,
          pb: 3,
          mt: 1,
          mb: 7,
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
      <Grid container spacing={1}>
        {!isLoading ? (
          completedLearningPaths.length > 0 && (
            <Box sx={{ ml: 8 }}>
              <Typography variant="h3" sx={{ ml: 2, mb: 2 }}>
                Completed Learning Paths:
              </Typography>
              <Grid container spacing={3}>
                {completedLearningPaths.map((roadmap) => (
                  <Grid item key={roadmap.id} xs={12} sm={6} md={4} lg={3}>
                    <CompletionBadge {...roadmap} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
              ml: 50,
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
      </Grid>

      <Typography variant="h3" sx={{ ml: 2, mb: 3, mt: 2 }}>
        You Practiced {Object.keys(values).length} days this Year
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

      <Typography variant="h3" gutterBottom sx={{ mt: 3 }}>
        My Learning Paths:
      </Typography>
      {userLearningPaths ? (
        userLearningPaths.length > 0 ? (
          <Grid container spacing={4}>
            {userLearningPaths.map((path, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <UserLearningPathThumbnail {...path} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Stacks children vertically
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
            }}
          >
            <Typography variant="h6" gutterBottom>
              No Learning Paths Found.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Start a new Learning Path by creating one or search from the Recommended Learning
              Paths
            </Typography>
          </Box>
        )
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh", // This takes the full height of the viewport
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
    </Box>
  );
}
