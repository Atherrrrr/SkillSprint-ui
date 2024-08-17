import { useTheme } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Define the structure of the articulation data
interface ArticulationData {
  [time: string]: number; // Time as a string mapped to a binary articulation value
}

const ClarityGraph: React.FC = () => {
  const originalDuration = 219;
  const theme = useTheme();
  // Function to calculate moving average
  const generateSecondlyClarityData = (data: ArticulationData, duration: number): number[] => {
    const times = Object.keys(data)
      .map(parseFloat)
      .sort((a, b) => a - b);
    const clarityData = new Array(duration).fill(0);
    let lastValue = data[times[0]];

    times.forEach((time, index) => {
      const nextTime = index < times.length - 1 ? times[index + 1] : duration;
      for (let i = Math.ceil(time); i < Math.ceil(nextTime) && i < duration; i++) {
        clarityData[i] = lastValue * 100; // Convert to percentage
      }
      lastValue = data[time];
    });

    // Ensure the last segment is filled if it extends to the original duration
    clarityData.fill(lastValue * 100, Math.ceil(times[times.length - 1]), duration);

    return clarityData;
  };

  // Function to calculate the moving average of clarity data
  const calculateMovingAverage = (data: number[], windowSize: number): number[] => {
    const movingAvg: number[] = [];
    const deque: number[] = []; // Use a deque to handle the window's values

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      deque.push(data[i]);
      sum += data[i];

      if (deque.length > windowSize) {
        const shiftedValue = deque.shift(); // Store the shifted value in a variable
        if (shiftedValue !== undefined) {
          // Check if the shifted value is undefined
          sum -= shiftedValue;
        }
      }

      movingAvg.push(Math.round(sum / Math.min(i + 1, windowSize))); // Round to nearest integer
    }

    return movingAvg;
  };

  const clarityData = generateSecondlyClarityData(articulation, originalDuration);
  const movingAvgClarity = calculateMovingAverage(clarityData, 5); // Using a window size of 5 seconds

  // Setup for the ApexCharts component
  const series = [
    {
      name: "Clarity Percentage",
      data: movingAvgClarity,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
    },
    title: {
      // text: "User Articulation Clarity Over Time",
      align: "center",
      style: {
        color: theme.palette.text.primary,
      },
    },
    xaxis: {
      categories: Array.from(Array(originalDuration).keys()).map((k) => k.toString()),
      tickAmount: 20,
      title: {
        text: "Time (seconds)",
        style: {
          color: theme.palette.text.primary,
        },
      },
      labels: {
        style: {
          //   color: theme.palette.text.primary,
          colors: theme.palette.background.default,
        },
      },
    },

    yaxis: {
      max: 100, // Clarity is a percentage
      min: 0,
      tickAmount: 10, // This will help show integer values
      labels: {
        formatter: (val: number) => `${Math.round(val)}%`,
        style: {
          colors: theme.palette.text.primary,
        }, // Round and display as integer percentages
      },
      title: {
        text: "Clarity (%)",
        style: {
          color: theme.palette.text.primary,
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ClarityGraph;

// interface ClarityGraphProps {
//   articulation: ArticulationData;
//   originalDuration: number; // Total duration of the video in seconds
// }

const articulation: ArticulationData = {
  "24.94531": 0,
  "26.62531": 1,
  "26.96131": 0,
  "27.28131": 1,
  "27.58531": 0,
  "28.49731": 1,
  "28.88131": 0,
  "29.07331": 1,
  "29.64931": 0,
  "33.55331": 1,
  "33.88931": 0,
  "35.32931": 1,
  "35.80931": 0,
  "37.60131": 1,
  "38.59331": 0,
  "43.42531": 1,
  "43.77731": 0,
  "46.36931": 1,
  "58.72131": 0,
  "62.70531": 1,
  "64.40131": 0,
  "72.86531": 1,
  "73.32931": 0,
  "74.04931": 1,
  "74.91331": 0,
  "79.12131": 1,
  "80.09731": 0,
  "83.15331": 1,
  "98.30531": 0,
  "98.62531": 1,
  "98.99331": 0,
  "103.31331": 1,
  "104.19331": 0,
  "106.27331": 1,
  "106.67331": 0,
  "106.91331": 1,
  "108.67331": 0,
  "109.58531": 1,
  "109.93731": 0,
  "110.06531": 1,
  "110.38531": 0,
  "111.52131": 1,
  "111.84131": 0,
  "112.19331": 1,
  "112.59331": 0,
  "112.99331": 1,
  "113.53731": 0,
  "113.80931": 1,
  "114.52931": 0,
  "118.12931": 1,
  "118.56131": 0,
  "118.88131": 1,
  "119.79331": 0,
  "124.46531": 1,
  "124.88131": 0,
  "126.96131": 1,
  "127.96931": 0,
  "131.71331": 1,
  "132.11331": 0,
  "132.88131": 1,
  "147.13731": 0,
  "147.66531": 1,
  "148.60931": 0,
  "150.80131": 1,
  "151.40931": 0,
  "157.63331": 1,
  "158.57731": 0,
  "160.06531": 1,
  "160.43331": 0,
  "165.82531": 1,
  "166.14531": 0,
  "166.83331": 1,
  "167.69731": 0,
  "168.27331": 1,
  "169.24931": 0,
  "172.11331": 1,
  "172.48131": 0,
  "175.24931": 1,
  "175.58531": 0,
  "176.60931": 1,
  "177.18531": 0,
  "177.76131": 1,
  "195.13731": 0,
  "195.92131": 1,
  "196.48131": 0,
  "199.96931": 1,
  "200.32131": 0,
  "203.21731": 1,
  "203.88931": 0,
  "208.80131": 1,
  "209.20131": 0,
  "211.64931": 1,
  "212.06531": 0,
  "215.63331": 1,
  "219.01061": 0,
};
