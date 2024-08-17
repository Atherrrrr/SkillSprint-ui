import React from "react";
import { Grid } from "@mui/material";
import SpeechMetric from "./SpeechMetric"; // Assuming SpeechMetric is the component we discussed earlier
import { QuestionAnswer, SessionFeedback } from "@/pages/past-sessions/view-session";

interface SpeechAnalysisGridProps {
  speechAnalysis: SessionFeedback;
}

const SpeechAnalysisGrid: React.FC<SpeechAnalysisGridProps> = ({ speechAnalysis }) => {
  function getTotalWords(questions: QuestionAnswer[]): number {
    let totalWords = 0;
    questions.forEach(({ answer }) => {
      const words = answer.split(/\s+/).filter((word) => word.trim() !== "");
      totalWords += words.length;
    });
    return totalWords;
  }

  const totalWords = getTotalWords(speechAnalysis.questions);
  const fillerWordRate = Math.round(
    (100 * parseInt(speechAnalysis.fillerWordCount) + 0.00001) / totalWords
  );
  const hedgingWordsRate = Math.round(
    (1000 * parseInt(speechAnalysis.hedgingWordCount) + 0.00001) / totalWords
  );

  const metrics = [
    {
      title: "Talking Speed",
      unit: "per minute",
      recommendedMin: 140,
      recommendedMax: 160,
      value: parseInt(speechAnalysis.speechSpeed),
      tooltipText: "The optimal range of spoken words per minute for clear understanding.",
    },
    {
      title: "Filler Usage",
      unit: "per 100 words",
      recommendedMin: 7,
      recommendedMax: 10,
      value: fillerWordRate,
      tooltipText: "Average number of filler words used per 100 words.",
    },
    {
      title: "Hedging Words",
      unit: "per 1000 words",
      recommendedMin: 20,
      recommendedMax: 30,
      value: hedgingWordsRate,
      tooltipText: "Average use of hedging words to soften statements in a lengthy dialogue.",
    },
    {
      title: "Language Positivity",
      unit: "positivity score",
      recommendedMin: 60,
      recommendedMax: 80,
      value: Math.round(parseInt(speechAnalysis.languagePositivity)),
      tooltipText: "Measure of positive language tone and expressions.",
    },
    {
      title: "Articulation Rate",
      unit: "syllables/sec",
      recommendedMin: 1,
      recommendedMax: 3,
      value: 5, //general.articulation_rate
      tooltipText: "TODO",
    },
    {
      title: "Pronounciation Score",
      unit: "score ",
      recommendedMin: 100,
      recommendedMax: 80,
      value: Math.round(60.028), //general.pronunciation_score
      tooltipText: "TODO",
    },
  ];

  return (
    <>
      <Grid container spacing={2} mt={1}>
        {metrics.map((metric) => (
          <Grid item xs={12} sm={6} md={4} key={metric.title}>
            <SpeechMetric
              title={metric.title}
              unit={metric.unit}
              recommendedMin={metric.recommendedMin}
              recommendedMax={metric.recommendedMax}
              value={metric.value}
              tooltipText={metric.tooltipText}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SpeechAnalysisGrid;
