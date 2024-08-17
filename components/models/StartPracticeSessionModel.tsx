import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme, FormGroup } from "@mui/material";
import { useRouter } from "next/router";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { SessionType } from "@/Enums/SessionType";
import { useSnackbar } from "@/store/snackbar";
import axios from "axios";
import { SUBMIT_PRACTICE_SESSION_MODEL } from "@/hooks/apiHelper";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface PracticeSessionModalProps {
  open: boolean;
  onClose: () => void;
  sessionType: SessionType;
}

function renderSelect(
  label: string,
  value: string | string[],
  setValue: React.Dispatch<React.SetStateAction<string | string[]>>,
  options: { value: string; label: string }[],
  multiple: boolean = false
) {
  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    setValue(event.target.value); // `value` is now correctly typed as `string | string[]`
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select
        multiple={multiple}
        value={value}
        label={label}
        onChange={handleChange}
        renderValue={(selected) => {
          // Check if `selected` is an array when `multiple` is true
          if (multiple) {
            return Array.isArray(selected) ? selected.join(", ") : "";
          }
          return selected as string;
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            style={{ fontWeight: (value as string[]).includes(option.value) ? "bold" : "normal" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const StartPracticeSessionModel: React.FC<PracticeSessionModalProps> = ({
  open,
  onClose,
  sessionType,
}) => {
  // State for form fields
  // const userId = "59c8dab4-2ce9-477c-b35f-d55ae911a750";
  const userId = "73246862-10e1-7048-87fa-97fd9947fa34";

  // const [practiceSetId, setPracticeSetId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [interviewId, setInterviewId] = useState<string>();
  const [videoId, setVideoId] = useState<string>();
  const [interviewType, setInterviewType] = useState<string | string[]>("");
  const [interviewDuration, setInterviewDuration] = useState<string | string[]>("");
  const [questionMode, setQuestionMode] = useState<string | string[]>("");
  const [interviewTone, setInterviewTone] = useState<string | string[]>("");
  const [desiredTone, setDesiredTone] = useState<string | string[]>([]);
  const [resume, setResume] = useState<string[] | string>("");
  const router = useRouter();
  const snackbar = useSnackbar();

  const theme = useTheme();

  const areFieldsValid = () => {
    if (sessionType === SessionType.MockInterview) {
      return (
        title.trim() !== "" &&
        description.trim() !== "" &&
        interviewType !== "" &&
        interviewDuration !== "" &&
        questionMode !== "" &&
        interviewTone !== "" &&
        resume !== ""
      );
    } else {
      // For other session types, adjust the required fields as necessary
      return (
        title.trim() !== "" &&
        description.trim() !== "" &&
        Array.isArray(desiredTone) &&
        desiredTone.length > 0
      );
    }
  };

  const onSubmit = async () => {
    if (!areFieldsValid()) {
      snackbar("error", "Please fill in all required fields.");
      return;
    }
    let response = null;
    try {
      if (sessionType === SessionType.MockInterview) {
        response = await axios.post(SUBMIT_PRACTICE_SESSION_MODEL(userId), {
          description: description,
          sessionType: sessionType,
          title: title,
          interviewType: interviewType,
          interviewDuration: interviewDuration,
          questionMode: questionMode,
          interviewTone: interviewTone,
          resumeId: "9cbf6343-3c5a-493f-b004-1a980cce0ee7",
        });
        console.log("Upload response = ", response.data.interviewId);
        console.log("Upload response = ", response.data.videoId);
        setInterviewId(response.data.interviewId);
        setVideoId(response.data.videoId);
        goToSession(response.data.interviewId, response.data.videoId);
      } else {
        const response = await axios.post(SUBMIT_PRACTICE_SESSION_MODEL(userId), {
          description: description,
          sessionType: sessionType,
          title: title,
          desiredTone: desiredTone.toString(),
        });
        console.log("Upload videoId = ", response.data.videoId);
        console.log("Upload interviewId = ", response.data.interviewId);
        setInterviewId(response.data.interviewId);
        setVideoId(response.data.videoId);
        goToSession(response.data.interviewId, response.data.videoId);
      }
    } catch (error) {
      console.error("Error while tring to start the interview:", error);
      snackbar("error", "Failed to start the interview. Please try again later.");
      onClose();
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40rem",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" textAlign="center">
          Start New {sessionType}
        </Typography>
        <FormGroup>
          {/* <TextField
            label="Practice Set ID:"
            variant="outlined"
            margin="normal"
            fullWidth
            value={practiceSetId}
            onChange={(e) => setPracticeSetId(e.target.value)}
          /> */}
          {sessionType === SessionType.MockInterview ? (
            <>
              <TextField
                label="Job Title"
                variant="outlined"
                margin="normal"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                fullWidth
                label="Job Description"
                variant="outlined"
                margin="normal"
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {renderSelect(
                "Interview Type",
                interviewType,
                setInterviewType,
                interviewTypeOptions,
                false
              )}
              {renderSelect(
                "Interview Duration",
                interviewDuration,
                setInterviewDuration,
                interviewDurationOptions,
                false
              )}
              {renderSelect(
                "Question Mode",
                questionMode,
                setQuestionMode,
                questionModeOptions,
                false
              )}
              {renderSelect(
                "Interview Tone",
                interviewTone,
                setInterviewTone,
                interviewToneOptions,
                false
              )}
              {renderSelect("Resume", resume, setResume, resumeOptions, false)}
            </>
          ) : (
            <>
              <TextField
                label="Practice Title"
                variant="outlined"
                margin="normal"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                fullWidth
                label="Goal Description"
                variant="outlined"
                margin="normal"
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {renderSelect("Desired Tone", desiredTone, setDesiredTone, desiredToneOptions, true)}
            </>
          )}
        </FormGroup>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 2, gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<CancelIcon style={{ fill: theme.palette.primary.main }} />}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<PlayCircleFilledIcon style={{ fill: "#fff" }} />}
            onClick={onSubmit}
          >
            Start
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default StartPracticeSessionModel;
