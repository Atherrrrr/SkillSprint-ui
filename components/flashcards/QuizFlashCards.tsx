// components/QuizFlashCard.tsx
import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  LinearProgress,
  IconButton,
  useTheme,
  Divider,
  DialogContentText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CheckCircleOutline, Circle, ErrorOutline } from "@mui/icons-material";

interface Quiz {
  text: string;
  type: string;
  options?: string[];
  answer: string;
}

interface Props {
  completeQuestions: Quiz[];
  open: boolean;
  handleClose: () => void;
  handleComplete: (passed: boolean) => void;
}

const QuizFlashCards: React.FC<Props> = ({
  completeQuestions,
  open,
  handleClose,
  handleComplete,
}) => {
  const default_finalResult = { passed: false, wrongCount: 0, correctCount: 0 };
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState(null);
  const theme = useTheme();
  const [openConfirm, setOpenConfirm] = useState(false);
  const [result, setResult] = useState<boolean[]>([]);
  const [finalResult, setFinalResult] = useState(default_finalResult);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (completeQuestions.length > 7) {
      // Select random 7 questions from completeQuestions
      const shuffled = completeQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, 7);
      setQuestions(selectedQuestions);
    } else {
      setQuestions(completeQuestions);
    }
  }, [completeQuestions, handleComplete]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!submitted) {
      setSelectedOption(event.target.value);
    }
  };

  const handleExit = () => {
    setOpenConfirm(false);
    resetData();
    handleClose();
  };

  const handleCancelExit = () => {
    setOpenConfirm(false);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleQuizComplete = (complete_result) => {
    console.log("Quiz Completed", complete_result);

    // Calculate the number of correct and wrong answers
    const correctCount_r = complete_result.filter((answer) => answer === true).length;
    const wrongCount_r = complete_result.filter((answer) => answer === false).length;

    let passed_r = false;
    if (correctCount_r >= 6 && wrongCount_r <= 1) {
      passed_r = true;
    }

    setFinalResult({ passed: passed_r, wrongCount: wrongCount_r, correctCount: correctCount_r });
    setShowResult(true);
  };

  const exitViaComplete = () => {
    handleComplete(finalResult.passed);
    setShowResult(false);
    resetData();
  };

  const resetData = () => {
    setCurrent(0);
    setSelectedOption("");
    setSubmitted(false);
    setResult([]);
    setFinalResult(default_finalResult);
  };

  const confirmForExit = () => {
    setOpenConfirm(true);
  };

  const updateResult = () => {
    let newResult: boolean[] = [];

    setResult((prevResult) => {
      // Calculate the new result array
      newResult = [...prevResult, isAnswerCorrect(selectedOption)];
      return newResult;
    });

    // Return the new result array
    return newResult;
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      updateResult();
      setCurrent(current + 1);
      setSubmitted(false);
      setSelectedOption("");
    } else {
      handleQuizComplete(updateResult());
    }
  };

  const isAnswerCorrect = (option: string) => {
    const answer = questions[current]?.answer;
    return option === answer;
  };
  const isOptionSelected = (option: string) => option === selectedOption;

  const renderOptions = () => {
    const question = questions[current];

    if (question.type === "multiple-choice") {
      return (
        <RadioGroup name="quiz-options" value={selectedOption} onChange={handleChange}>
          {question.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio sx={{ color: "#fff" }} />}
              label={option}
              sx={{
                "& .MuiFormControlLabel-label": {
                  color:
                    submitted && isAnswerCorrect(option)
                      ? "green"
                      : submitted && isOptionSelected(option)
                        ? "red"
                        : "default",
                },
                "& .MuiRadio-root": {
                  // Default color of the Radio button (unchecked state)
                  color: "default",
                },
                "& .Mui-checked": {
                  // Conditional styling for the checked state based on correctness
                  color: submitted
                    ? isAnswerCorrect(option)
                      ? "green" // Correct answer checked color
                      : "red" // Incorrect answer checked color
                    : theme.palette.primary.main, // Default checked color when not submitted
                },
              }}
            />
          ))}
        </RadioGroup>
      );
    } else if (question.type === "true-false") {
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          {["True", "False"].map((option, index) => (
            <Button
              key={index}
              variant={"outlined"}
              sx={{
                color: isOptionSelected(option) ? "#fff" : theme.palette.text.primary,
                bgcolor:
                  submitted && isAnswerCorrect(option)
                    ? "green"
                    : submitted && isOptionSelected(option)
                      ? "red"
                      : isOptionSelected(option)
                        ? "primary.main"
                        : "default",
                "&:hover": {
                  bgcolor: "secondary.main",
                },
                "&.MuiButton-outlined": {
                  borderColor: "primary.main", // Consistent border color for outlined buttons
                },
              }}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </Button>
          ))}
        </Box>
      );
    }
  };

  return (
    <>
      {questions && (
        <Modal open={open} onClose={handleExit}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: "600px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Question {current + 1} of {questions.length}
              </Typography>
              <IconButton sx={{}} onClick={handleExit}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={(current / questions.length) * 100}
                  sx={{ my: 2 }}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                  (current / questions.length) * 100
                )}%`}</Typography>
              </Box>
            </Box>

            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                sx={{ mb: 2, fontWeight: "bold", color: theme.palette.text.primary }}
              >
                Q: {questions[current].text}
              </FormLabel>
              {renderOptions()}
            </FormControl>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Button variant="outlined" sx={{ mr: 2 }} onClick={confirmForExit}>
                Exit
              </Button>
              {submitted ? (
                <Button variant="contained" onClick={handleNext}>
                  {current === questions.length - 1 ? "Finish" : "Next"}
                </Button>
              ) : (
                <Button variant="contained" onClick={handleSubmit} disabled={!selectedOption}>
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Modal>
      )}
      {showResult && (
        <Dialog
          open={showResult}
          onClose={exitViaComplete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ color: "#fff" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              borderRadius: "8px",
              margin: "auto",
            }}
          >
            {finalResult.passed ? (
              <CheckCircleOutline sx={{ fontSize: "60px", fill: "green", marginBottom: "16px" }} />
            ) : (
              <ErrorOutline sx={{ fontSize: "60px", fill: "red", marginBottom: "16px" }} />
            )}

            <Typography variant="h4" align="center" gutterBottom>
              {finalResult.passed
                ? "Quiz Completed Successfully"
                : "Please review and reattempt the Quiz"}
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
              You have {finalResult.wrongCount} incorrect answer
              {finalResult.wrongCount !== 1 ? "s" : ""} and {finalResult.correctCount} correct
              answer
              {finalResult.correctCount !== 1 ? "s" : ""}.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
              {result.map((answer, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  <Circle
                    sx={{
                      fontSize: "40px",
                      fill: answer ? "green" : "red",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      fontSize: "16px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <DialogContentText id="alert-dialog-description"></DialogContentText>

          <DialogActions style={{ justifyContent: "center" }}>
            <Button variant="contained" onClick={exitViaComplete} color="primary">
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog
        open={openConfirm}
        onClose={handleCancelExit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Exit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to exit?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button variant="outlined" onClick={handleCancelExit} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleExit} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuizFlashCards;
