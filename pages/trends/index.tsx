import React from "react";
import { Box, Grid, Typography } from "@mui/material"; // Adjust the import path as necessary
import CourseProgressChart from "@/components/charts/CourseProgressChart";
import CompletionBadge from "@/components/LearningPath/CompletionBadge";

const Trends: React.FC = () => {
  const myLearningPaths = [
    {
      id: "123",
      title: "AWS Cloud Computing",
      description:
        "Master Cloud Computing using AWS services. This learning path will teach you about popular AWS services and how to effectively utilize them. Gain insights into optimizing cloud resources for real-world applications.",
      completionDate: "August 16, 2024",
      totalTimeSpent: "3 hours",
    },
    {
      id: "124",
      title: "Full-Stack Development",
      description:
        "Learn to build scalable full-stack applications using modern technologies like React, Node.js, and MongoDB. Understand how to connect your frontend and backend seamlessly.",
      completionDate: "August 17, 2024",
      totalTimeSpent: "40 hours",
    },
    {
      id: "127",
      title: "Data Science with Python",
      description:
        "Dive into the world of data science with Python. Analyze data, create beautiful visualizations, and use machine learning to glean insights and make predictions.",
      completionDate: "August 18, 2024",
      totalTimeSpent: "20 hours",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Trends
      </Typography>
      <CourseProgressChart />
      <Grid container spacing={2}>
        {myLearningPaths.map((path) => (
          <Grid item xs={12} sm={4} key={path.id}>
            <CompletionBadge
              id={path.id}
              title={path.title}
              description={path.description}
              completionDate={path.completionDate}
              totalTimeSpent={path.totalTimeSpent}
              onCompletion={() => handleCompletionClick(path.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Trends;
