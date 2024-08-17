import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";

interface Area {
  title: string;
  avg: number;
  last: number;
}

interface PerformanceBarProps {
  areas: Area[];
}

const PerformanceBarChart: React.FC<PerformanceBarProps> = ({ areas }) => {
  // Extracting titles, averages, and last session scores into separate arrays
  const categories = areas.map((area) => area.title);
  const avgs = areas.map((area) => area.avg);
  const lasts = areas.map((area) => area.last);
  const theme = useTheme();

  // Setting up the options for the ApexCharts component
  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    yaxis: {
      title: {
        text: "Scores",
        style: {
          color: theme.palette.text.primary,
        },
      },
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " points";
        },
      },
    },
    legend: {
      position: "bottom",
      offsetX: 0,
      offsetY: 5,
      labels: {
        colors: theme.palette.text.primary,
      },
    },
  };

  const series = [
    {
      name: "Average Score",
      data: avgs,
    },
    {
      name: "Last Practice Session",
      data: lasts,
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </Box>
  );
};

export default PerformanceBarChart;
