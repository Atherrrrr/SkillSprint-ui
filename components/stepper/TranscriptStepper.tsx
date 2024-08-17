import React from "react";
import { Typography, Stepper, Step, StepLabel, StepContent, Box, useTheme } from "@mui/material";
import StepIcon from "../atoms/StepIcon";
import { QuestionAnswer } from "@/pages/past-sessions/view-session";

const TranscriptStepper: React.FC<{ questions: QuestionAnswer[] }> = ({ questions }) => {
  const theme = useTheme();

  return (
    <Box mt={2}>
      <Stepper
        orientation="vertical"
        nonLinear
        sx={{
          "& .MuiStepIcon-root": {
            // Style the step icons
            color: theme.palette.primary.main, // Icon color for all states
            "& text": {
              // Text inside the icon
              fill: theme.palette.common.white, // Making the text white
            },
          },
          "& .MuiStepLabel-label": {
            // Label styling
            color: theme.palette.text.primary, // Text color for the labels
            fontWeight: "600",
          },
        }}
      >
        {questions.map((item, index) => (
          <Step key={index} expanded>
            <StepLabel icon={<StepIcon index={index}></StepIcon>}>{item.question}</StepLabel>
            <StepContent>
              <Typography>{item.answer}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default TranscriptStepper;
