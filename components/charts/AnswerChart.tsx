import React from "react";
import { Card, CardContent, Typography, Box, Grid, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const data = [
  {
    question: "Could you share your experience with unit testing in React applications?",
    correctness_score: 8,
    structure_score: 8,
    detail_score: 8,
    preciseness_score: 7,
    relevancy_score: 9,
  },
  {
    question: "In your experience, how do you manage state in large-scale React projects?",
    correctness_score: 7,
    structure_score: 7,
    detail_score: 6,
    preciseness_score: 6,
    relevancy_score: 7,
  },
  {
    question: "What techniques do you use to optimize the performance of React applications?",
    correctness_score: 3,
    structure_score: 4,
    detail_score: 2,
    preciseness_score: 2,
    relevancy_score: 3,
  },
  {
    question: "How do you ensure your React applications are accessible?",
    correctness_score: 8,
    structure_score: 9,
    detail_score: 9,
    preciseness_score: 8,
    relevancy_score: 9,
  },
  {
    question: "Can you explain how you incorporate React hooks into your projects?",
    correctness_score: 8,
    structure_score: 8,
    detail_score: 8,
    preciseness_score: 7,
    relevancy_score: 9,
  },
];

const FeedbackRadarChart = () => {
  const theme = useTheme();
  const options: ApexOptions = {
    chart: {
      type: "radar" as const, // Ensures the type is recognized as a specific string literal
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: ["Correctness", "Structure", "Detail", "Preciseness", "Relevancy"],
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    fill: {
      opacity: 0.4,
    },
    markers: {
      size: 4,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}/10`,
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 10,
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    legend: {
      position: "bottom",
      offsetX: 0,
      offsetY: -5,
      labels: {
        colors: theme.palette.text.primary,
      },
    },
  };

  const series = data.map((item, index) => ({
    name: `Question ${index + 1}`,
    data: [
      item.correctness_score,
      item.structure_score,
      item.detail_score,
      item.preciseness_score,
      item.relevancy_score,
    ],
  }));

  return (
    <Card raised sx={{ mt: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ReactApexChart options={options} series={series} type="radar" height={450} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ maxHeight: 450, overflow: "auto" }}>
              <Typography align="center" variant="h3" gutterBottom mb={2} mt={3}>
                Questions
              </Typography>
              {data.map((item, index) => (
                <Typography key={index} variant="body1" mb={2}>
                  {index + 1}. {item.question}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeedbackRadarChart;
