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
import { ArrowForward, NewReleases, School, Star, TrendingUp } from "@mui/icons-material";
import { useRouter } from "next/router";
import UseBaseRoadmapModel from "../models/UseBaseRoadmapModel";

function BaseLearningPathThumbnail({
  id,
  title,
  description,
  imageURL,
  mostPopular = false,
  trending = false,
  newRelease = false,
  forBeginners = false,
  phaseCount,
  totalLessons,
  currentSkillLevel,
  desiredSkillLevel,
  goal,
}) {
  const theme = useTheme();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
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
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Typography variant="h6" sx={{ mr: 1, flexShrink: 0 }}>
                      Goal:
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }}>{goal}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography variant="h6" sx={{ mr: 1, flexShrink: 0 }}>
                      Skill Level:
                    </Typography>
                    <Chip label={currentSkillLevel} color="secondary" sx={{ marginRight: 1 }} />
                    <ArrowForward sx={{ mx: 1, fill: theme.palette.text.primary }} />
                    <Chip label={desiredSkillLevel} color="secondary" />
                  </Box>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={4.5}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                <Avatar
                  src={imageURL}
                  alt={title} // Using the title variable for alt text
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image fits within the container without stretching
                    borderRadius: "6px",
                    border: `2px solid ${theme.palette.primary.main}`,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
              {typeof totalLessons === "number" && (
                <Typography variant="body2" color="text.secondary">
                  {`Total Lessons ${totalLessons}`}
                </Typography>
              )}
              {typeof phaseCount === "number" && (
                <Typography variant="body2" color="text.secondary">
                  {`Total Phases ${phaseCount}`}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Card>
      <UseBaseRoadmapModel
        title={title}
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default BaseLearningPathThumbnail;
