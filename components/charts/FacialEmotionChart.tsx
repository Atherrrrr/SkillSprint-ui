import { Card, CardContent } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export interface ChartContext {
  // Placeholder properties for the chart context
  chart: {
    id: string;
  };
  series: {
    name: string;
    data: number[];
  }[];
}

type EmotionScores = {
  Anger: number;
  Disgust: number;
  Fear: number;
  Happiness: number;
  Neutral: number;
  Sadness: number;
  Surprise: number;
};

// Function to extract data points for each emotion
function averageEveryFive(data: Record<string, EmotionScores>): Record<string, number[]> {
  const keys = Object.keys(data);
  const averagedData: Record<string, number[]> = {
    Anger: [],
    Disgust: [],
    Fear: [],
    Happiness: [],
    Neutral: [],
    Sadness: [],
    Surprise: [],
  };

  // Iterate through data in steps of 5
  for (let i = 0; i < keys.length; i += 6) {
    const temp: Record<keyof EmotionScores, number> = {
      Anger: 0,
      Disgust: 0,
      Fear: 0,
      Happiness: 0,
      Neutral: 0,
      Sadness: 0,
      Surprise: 0,
    };
    let count = 0;

    // Accumulate emotion scores over a group of 5 entries or until the end of the data
    for (let j = i; j < i + 6 && j < keys.length; j++) {
      count++;
      Object.keys(temp).forEach((emotion) => {
        const key = emotion as keyof EmotionScores;
        temp[key] += data[keys[j]][key]; // Safe to add as all keys and their values are defined in temp and data
      });
    }

    // Calculate average for each emotion and add to averaged data
    Object.keys(temp).forEach((emotion) => {
      const key = emotion as keyof EmotionScores;
      if (count > 0) {
        averagedData[key].push(parseFloat(((100 * temp[key]) / count).toFixed(2)));
      }
    });
  }

  return averagedData;
}
interface AudioEmotionChartProps {
  playAt: (time: number) => void;
}

const FacialEmotionChart: React.FC<AudioEmotionChartProps> = ({ playAt }) => {
  const theme = useTheme();
  const averagedData = averageEveryFive(videoData);
  const series = Object.keys(averagedData).map((emotion) => ({
    name: emotion,
    data: averagedData[emotion],
  }));

  // Calculate dynamic labels for x-axis based on total data points
  const totalPoints = averagedData.Anger.length;
  const labelCount = 20;
  // Calculating the interval between the labels
  const stepSize = Math.max(1, Math.floor(totalPoints / labelCount));
  const categories = Array.from({ length: totalPoints }, (_, i) => {
    if (i % stepSize === 0) {
      const totalSeconds = i; // Convert frame index to seconds
      const minutes = Math.floor(totalSeconds / 60); // Calculate total minutes
      const seconds = Math.round(totalSeconds % 60); // Remaining seconds after minutes are accounted for
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return "";
  });

  interface ChartEvent {
    event: React.MouseEvent;
    chartContext: ChartContext;
    config: {
      seriesIndex: number;
      dataPointIndex: number;
      w: {
        config: {
          series: {
            name: string;
            data: number[];
          }[];
        };
      };
    };
  }

  const options: ApexOptions = {
    chart: {
      height: 400,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true, // Enables the toolbar for zooming and resetting
      },
      events: {
        click: (
          event: React.MouseEvent,
          chartContext: ChartContext,
          config: ChartEvent["config"]
        ) => {
          // this will print mango, apple etc. when clicked on respective datapoint
          console.log("Event chartContext:", chartContext);
          console.log("Event event:", event);
          console.log("Event cmth:", config);

          const time_stamp = config.dataPointIndex;
          playAt(time_stamp);
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: theme.palette.text.primary,
        },
      },
      tooltip: {
        enabled: true, // This ensures that users can still see the values between two labels
      },
    },
    yaxis: {
      title: {
        text: "Percentage",
        style: {
          color: theme.palette.text.primary,
        },
      },
      labels: {
        formatter: (val: number) => `${Math.round(val)}`, // Rounds to the nearest integer
        style: {
          colors: theme.palette.text.primary,
        },
      },
    },
    legend: {
      show: true,
      fontSize: "13px",
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

export default FacialEmotionChart;
