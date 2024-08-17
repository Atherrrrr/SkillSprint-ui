import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CourseProgressChart: React.FC = () => {
  const theme = useTheme();

  const courses = [
    {
      name: "Data Science",
      startDate: new Date(2023, 7, 1),
      incrementPattern: [1, 2, 1, 0, 2, 2, 1, 0, 1, 2, 1, 0, 2, 1, 1, 2],
    },
    {
      name: "Cloud Computing",
      startDate: new Date(2023, 7, 3),
      incrementPattern: [1, 2, 0, 1, 2, 2, 0, 1, 1, 2, 0, 1, 2, 1, 1, 2],
    },
    {
      name: "Python Development",
      startDate: new Date(2023, 7, 2),
      incrementPattern: [1, 0, 2, 1, 1, 2, 0, 2, 1, 2, 0, 1, 1, 1, 2, 0, 2, 2],
    },
    {
      name: "React UI/UX Design",
      startDate: new Date(2023, 7, 4),
      incrementPattern: [1, 1, 1, 0, 2, 1, 0, 2, 2, 1, 0, 1, 2, 1, 2, 0, 1],
    },
    {
      name: "Machine Learning",
      startDate: new Date(2023, 7, 1),
      incrementPattern: [1, 1, 2, 2, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0, 2, 2],
    },
    {
      name: "Frontend Development",
      startDate: new Date(2023, 7, 5),
      incrementPattern: [1, 0, 1, 2, 1, 2, 0, 1, 2, 1, 1, 2, 0, 2, 1, 2, 0],
    },
  ];

  // Find the earliest start date and the latest end date
  const startDates = courses.map((course) => course.startDate);
  const minDate = new Date(Math.min(...startDates));

  const endDates = courses.map(
    (course, index) =>
      new Date(course.startDate.getTime() + (course.incrementPattern.length - 1) * 86400000)
  );
  const maxDate = new Date(Math.max(...endDates));

  const totalDays = (maxDate - minDate) / 86400000 + 1; // Calculate total days to display
  const categories = Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(minDate);
    date.setDate(minDate.getDate() + i);
    return date.toLocaleDateString();
  });

  const series = courses.map((course) => {
    const offset = (course.startDate - minDate) / 86400000; // Calculate offset days for course start
    let lessonCount = 0;
    const activeDays = course.incrementPattern.map((increment) => {
      lessonCount += increment;
      return lessonCount;
    });

    // Extend the active days array to the end of the chart with the last lesson count
    const totalChartDays = (maxDate - minDate) / 86400000 + 1; // Total days in the chart
    const daysAfterCourse = totalChartDays - (offset + activeDays.length); // Days after course ends
    const extendedDays = new Array(daysAfterCourse).fill(lessonCount); // Fill these days with the last lesson count

    const data = new Array(offset).fill(null).concat(activeDays).concat(extendedDays);
    return { name: course.name, data };
  });

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
      title: {
        text: "Dates",
        style: {
          color: theme.palette.text.primary,
        },
      },
    },
    yaxis: {
      min: 1,
      max: 20,
      labels: {
        formatter: (val: number) => `${Math.round(val)}`, // Rounds to the nearest integer
        style: {
          colors: theme.palette.text.primary,
        },
      },
      title: {
        text: "Lesson Count",
        style: {
          color: theme.palette.text.primary,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "14px",
      labels: {
        colors: theme.palette.text.primary,
      },
    },
  };

  return (
    <Card raised sx={{ mt: 2, mb: 2 }}>
      <CardContent>
        <ReactApexChart options={options} series={series} height={350} />
      </CardContent>
    </Card>
  );
};

export default CourseProgressChart;
