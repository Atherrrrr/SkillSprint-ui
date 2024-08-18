import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Box,
  CircularProgress,
  circularProgressClasses,
  useTheme,
} from "@mui/material";
import UserLearningPathThumbnail from "@/components/LearningPath/UserLearningPathThumbnail";
import BaseLearningPathThumbnail from "@/components/LearningPath/BaseLearningPathThumbnail";
import { currentUserAtom } from "@/store/store";
import axios from "axios";
import { GET_ALL_ROADMAP, GET_USER_ROADMAP } from "@/hooks/apiHelper";
import { useAtom } from "jotai";

function LearningPathsGrid() {
  // Example data array for learning paths
  const [userLearningPaths, setUserLearningPaths] = useState(null);
  const [allLearningPaths, setAllLearningPaths] = useState(null);
  const theme = useTheme();
  const [currentUser] = useAtom(currentUserAtom);

  useEffect(() => {
    //get learning path.
    if (currentUser?.sub) {
      fetchUserLearningPath(currentUser.sub);
    }
  }, [allLearningPaths, currentUser]);

  useEffect(() => {
    //get learning path.
    fetchAllLearningPaths();
  }, []);

  const fetchUserLearningPath = async (userId: string) => {
    try {
      const response = await axios.get(GET_USER_ROADMAP(userId));

      const updatedPaths = response.data.map((path) => {
        const title = path.title.toLowerCase();
        return {
          ...path,
          mostPopular: title.includes("aws") || title.includes("frontend"),
          forBeginners:
            path.currentSkillLevel === "No Experience" || path.currentSkillLevel === "Beginner",
        };
      });

      const remainingPaths = updatedPaths.filter((path) => path.status !== "Completed");

      setUserLearningPaths(remainingPaths);

      if (allLearningPaths) {
        setAllLearningPaths((prevAllLearningPaths) =>
          prevAllLearningPaths.filter(
            (path) => !updatedPaths.some((userPath) => userPath.id === path.id)
          )
        );
      }
    } catch (error) {
      console.error("Failed to fetch user learning paths:", error);
      setUserLearningPaths([]);
      // Optionally, handle the error further, e.g., setting state to display an error message.
    }
  };

  const fetchAllLearningPaths = async () => {
    try {
      const response = await axios.get(GET_ALL_ROADMAP);
      const totalPaths = response.data.length; // Get the total number of paths

      const updatedPaths = response.data.map((path, index) => {
        const title = path.title.toLowerCase();
        return {
          ...path,
          mostPopular: title.includes("aws") || title.includes("frontend"),
          trending: Math.random() < 0.2, // 30% chance to be true
          newRelease:
            index >= totalPaths - 3 && !title.includes("aws") && !title.includes("frontend"), // 30% chance to be true
          forBeginners:
            path.currentSkillLevel === "No Experience" || path.currentSkillLevel === "Beginner",
        };
      });
      updatedPaths.sort((a, b) => {
        return (
          b.mostPopular - a.mostPopular || // Most popular first
          b.trending - a.trending || // Then trending
          b.newRelease - a.newRelease || // Then new release
          b.forBeginners - a.forBeginners
        ); // Then for beginners
      });

      setAllLearningPaths(updatedPaths);
    } catch (error) {
      console.error("Failed to fetch all learning paths:", error);
      setAllLearningPaths([]);
      // Optionally, handle the error further, e.g., setting state to display an error message.
    }
  };

  return (
    <Box sx={{ width: "100%", overflowX: "auto", pl: "5" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Learning Paths
      </Typography>
      <Typography variant="h3" gutterBottom>
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
      <Typography variant="h3" gutterBottom sx={{ marginTop: 4, mb: 5 }}>
        Recommended Learning Paths:
      </Typography>

      {allLearningPaths ? (
        allLearningPaths.length > 0 ? (
          <Grid container spacing={4}>
            {allLearningPaths.map((path, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <BaseLearningPathThumbnail {...path} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh", // This takes the full height of the viewport
            }}
          >
            <Typography variant="h6" gutterBottom>
              No Learning Paths Found
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

export default LearningPathsGrid;
