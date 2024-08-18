import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  circularProgressClasses,
  Grid,
  Typography,
  useTheme,
} from "@mui/material"; // Adjust the import path as necessary
import CourseProgressChart from "@/components/charts/CourseProgressChart";
import CompletionBadge from "@/components/atoms/CompletionBadge";
import { GET_USER_ROADMAP } from "@/hooks/apiHelper";
import axios from "axios";
import { currentUserAtom, exampleCompletedLearningPaths } from "@/store/store";
import { useAtom } from "jotai";

const Trends: React.FC = () => {
  const [completedLearningPaths, setCompletedLearningPaths] = useState(null);
  const theme = useTheme();
  const [currentUser] = useAtom(currentUserAtom);

  useEffect(() => {
    //get learning path.
    if (currentUser?.sub) {
      fetchUserLearningPath(currentUser.sub);
    }
  }, [currentUser]);

  const fetchUserLearningPath = async (userId: string) => {
    try {
      const response = await axios.get(GET_USER_ROADMAP(userId));

      const updatedPaths = response.data;

      // Filter completed learning paths
      let completedPaths = updatedPaths.filter((path) => path.status === "Completed");
      completedPaths = [...completedPaths, ...exampleCompletedLearningPaths];

      setCompletedLearningPaths(completedPaths);
    } catch (error) {
      console.error("Failed to fetch user learning paths:", error);
      // Optionally, handle the error further, e.g., setting state to display an error message.
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Trends
      </Typography>
      <CourseProgressChart />
      <Grid container spacing={5}>
        {completedLearningPaths ? (
          completedLearningPaths.length > 0 && (
            <Box
              sx={{
                ml: 3,
                mt: 8,
              }}
            >
              <Typography variant="h3" sx={{ ml: 2, mb: 2 }}>
                Completed Learning Paths:
              </Typography>
              <Grid container spacing={5}>
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
    </Box>
  );
};

export default Trends;
