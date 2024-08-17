import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Stack,
  LinearProgress,
  Grid,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "@mui/material/styles";
import { NewReleases, School, Star, TrendingUp } from "@mui/icons-material";
import { useRouter } from "next/router";

function LearningPathThumbnail({
  id,
  title,
  description,
  image,
  mostPopular = false,
  trending = false,
  newRelease = false,
  forBeginners = false,
  currentPhase,
  totalPhases,
  currentLesson,
  totalLessons,
  currentTime,
  totalTime,
}) {
  const theme = useTheme();
  const router = useRouter();
  const progress = (currentTime / totalTime) * 100; // Calculate progress based on time

  const handleCardClick = () => {
    router.push({
      pathname: "learning-path/continue",
      query: {
        learningPathId: id,
      },
    });
  };

  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: 2,
        boxShadow: 3,
        width: "100%",
        maxWidth: 850, // Max width set to 720px
        backgroundColor: "none",
        border: `1px solid ${theme.palette.primary.main}`,
      }}
      onClick={handleCardClick}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ ml: 2, mt: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            {mostPopular && (
              <Chip
                label="Most Popular"
                icon={<Star sx={{ fill: "#000" }} />}
                sx={{ bgcolor: "#ffeb3b", color: "white", fontWeight: "bold", marginRight: 1 }}
              />
            )}
            {trending && (
              <Chip
                label="Trending"
                icon={<TrendingUp sx={{ fill: "#000" }} />}
                sx={{ bgcolor: "#ff6347", color: "white", fontWeight: "bold", marginRight: 1 }}
              />
            )}
            {newRelease && (
              <Chip
                label="New Release"
                icon={<NewReleases sx={{ fill: "#000" }} />}
                sx={{ bgcolor: "#32cd32", color: "white", fontWeight: "bold", marginRight: 1 }}
              />
            )}
            {forBeginners && (
              <Chip
                label="For Beginners"
                icon={<School sx={{ fill: "#000" }} />}
                sx={{ bgcolor: "#6495ed", color: "white", fontWeight: "bold", marginRight: 1 }}
              />
            )}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={7.5}>
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              xs={4.5}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Avatar
                src={image}
                alt="Learning Path"
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "100%", // Ensures the image does not exceed the grid area
                  borderRadius: "6px", // Slightly curved edges
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {typeof currentLesson === "number" && typeof totalLessons === "number" && (
            <Box sx={{ width: "90%", display: "flex", alignItems: "center" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ flexGrow: 1, marginRight: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                {`${Math.round(progress)}%`}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
            {typeof currentTime === "number" && typeof totalTime === "number" && (
              <Typography variant="body2" color="text.secondary">
                {`${currentTime} / ${totalTime} hours left`}
              </Typography>
            )}
            {typeof currentLesson === "number" && typeof totalLessons === "number" && (
              <Typography variant="body2" color="text.secondary">
                {`Lesson ${currentLesson}/${totalLessons}`}
              </Typography>
            )}
            {typeof currentPhase === "number" && typeof totalPhases === "number" && (
              <Typography variant="body2" color="text.secondary">
                {`Phase ${currentPhase}/${totalPhases}`}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default LearningPathThumbnail;
