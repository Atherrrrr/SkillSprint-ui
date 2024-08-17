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
import ErrorIcon from "@mui/icons-material/Error";

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
  const default_result = { correct: 0, wrong: 0 };
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState(null);
  const theme = useTheme();
  const [openConfirm, setOpenConfirm] = useState(false);
  const [result, setResult] = useState(default_result);
  const [passed, setPassed] = useState(false);
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
  }, [completeQuestions]);

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

  const handleQuizComplete = () => {
    console.log("Quiz Completed");
    let passed = false;
    if (result.correct >= 6 && result.wrong <= 1) {
      setPassed(true);
    }
    setShowResult(true);
  };

  const exitViaComplete = () => {
    setShowResult(false);
    resetData();
    handleComplete(passed);
  };

  const resetData = () => {
    setCurrent(0);
    setSelectedOption("");
    setSubmitted(false);
    setResult(default_result);
    setPassed(false);
  };

  const confirmForExit = () => {
    setOpenConfirm(true);
  };

  const updateResult = () => {
    if (isAnswerCorrect(selectedOption)) {
      setResult((prevResult) => ({
        correct: prevResult.correct + 1,
        wrong: prevResult.wrong,
      }));
    } else {
      setResult((prevResult) => ({
        correct: prevResult.correct,
        wrong: prevResult.wrong + 1,
      }));
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      updateResult();
      setCurrent(current + 1);
      setSubmitted(false);
      setSelectedOption("");
    } else {
      updateResult();
      handleQuizComplete(); // Optionally, handle the completion differently
    }
  };

  const isAnswerCorrect = (option: string) => {
    const answer = questions[current]?.answer;
    return option === answer;
  };
  const isOptionSelected = (option: string) => option === selectedOption;

  const renderOptions = () => {
    const question = questions[current];
    const correctOption = question.correctAnswer; // Assuming there's a 'correctAnswer' field

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
              <FormLabel component="legend" sx={{ mb: 2, fontWeight: "bold" }}>
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
      <Dialog
        open={showResult}
        onClose={exitViaComplete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Exit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              sx={{
                padding: 2,
                margin: 2,
                border: "1px solid grey",
                borderRadius: "4px",
                bgcolor: passed ? "lightgreen" : "#E57373",
              }}
            >
              <Typography variant="body1">
                You have {result.wrong} incorrect answer{result.wrong !== 1 ? "s" : ""} and{" "}
                {result.correct} correct answer{result.correct !== 1 ? "s" : ""}. Please review and
                reattempt the quiz.
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button variant="outlined" onClick={exitViaComplete} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>

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
