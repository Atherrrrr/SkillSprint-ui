import React from "react";
import { Typography } from "@mui/material";
import PracticeGuide from "@/components/PracticeGuides/PracticeGuide";
import jsonData from "./roadmap.json";

// console.log("jsonData[0].Query", jsonData[0].Query);

const recommendations: {
  title: string;
  ytLink1: string;
  ytLink2: string;
  ytLink3: string;
  googleLink1: string;
  googleTitle1: string;
  googleLink2: string;
  googleTitle2: string;
  googleLink3: string;
  googleTitle3: string;
  courseraLink1: string;
  courseraTitle1: string;
  courseraLink2: string;
  courseraTitle2: string;
  courseraLink3: string;
  courseraTitle3: string;
}[] = [];
Object.keys(jsonData).forEach((query, key: number) => {
  const recommendation = {
    title: jsonData[key].Query,
    ytLink1: jsonData[key].YouTube[0].url,
    ytLink2: jsonData[key].YouTube[1].url,
    ytLink3: jsonData[key].YouTube[2].url,
    googleLink1: jsonData[key].Google[0].url,
    googleTitle1: jsonData[key].Google[0].title,
    googleLink2: jsonData[key].Google[1].url,
    googleTitle2: jsonData[key].Google[1].title,
    googleLink3: jsonData[key].Google[2].url,
    googleTitle3: jsonData[key].Google[2].title,
    courseraLink1: jsonData[key].Coursera[0].url,
    courseraTitle1: jsonData[key].Coursera[0].title,
    courseraLink2: jsonData[key].Coursera[1].url,
    courseraTitle2: jsonData[key].Coursera[1].title,
    courseraLink3: jsonData[key].Coursera[2].url,
    courseraTitle3: jsonData[key].Coursera[2].title,
  };
  recommendations.push(recommendation);
});

export default function AnalyticsPage() {
  return (
    <>
      <Typography variant="h2" align="center" gutterBottom>
        Training Roadmap
      </Typography>
      <PracticeGuide guides={recommendations} />
    </>
  );
}
