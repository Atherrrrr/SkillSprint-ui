import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";

type EmotionScores = {
  Anger: number;
  Disgust: number;
  Fear: number;
  Happiness: number;
  Neutral: number;
  Sadness: number;
  Surprise: number;
};

// Dynamically import ApexCharts only on the client-side
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const EmotionPieChart = () => {
  const theme = useTheme();
  // Static data as provided
  const emotions: EmotionScores = {
    Anger: 71,
    Disgust: 0,
    Fear: 4,
    Happiness: 94,
    Neutral: 274,
    Sadness: 0,
    Surprise: 575,
  };
  const total = Object.values(emotions).reduce((sum, current) => sum + current, 0);

  // Prepare data for the pie chart as percentages of the total
  const data = Object.keys(emotions).map((key) => {
    const value = emotions[key as keyof EmotionScores];
    return total > 0 ? parseFloat(((value / total) * 100).toFixed(2)) : 0;
  });

  const labels = Object.keys(emotions);

  const options: ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    title: {
      text: "Summary",
      align: "center",
      style: {
        color: theme.palette.text.primary,
      },
    },
    legend: {
      position: "right",
      // verticalAlign: "center",
      offsetX: 0,
      offsetY: 70,
      labels: {
        colors: theme.palette.text.primary,
      },
    },
  };

  return (
    <Card raised sx={{ mt: 2, mb: 2 }}>
      <CardContent>
        <ReactApexChart options={options} series={data} type={"pie"} height={350} />
      </CardContent>
    </Card>
  );
};

export default EmotionPieChart;
