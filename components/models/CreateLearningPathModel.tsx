import { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useSnackbar } from "@/store/snackbar";
import axios from "axios";
import { CREATE_ROADMAP, SUBMIT_PRACTICE_SESSION_MODEL } from "@/hooks/apiHelper";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Width adjusts to content with a minimum
  minWidth: 600, // Minimum width set
  height: "auto", // Height adjusts to content with a minimum
  minHeight: 400, // Minimum height set
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  display: "flex",
  flexDirection: "column", // Ensures vertical layout for content and actions
  justifyContent: "space-between", // Centers content and pushes actions to the bottom
};

const learningGoals = [
  "Casual Learning",
  "Passion Project",
  "Career Advancement",
  "Job Transition",
  "High School Studies",
  "University Studies",
  "Personal Development",
  "Certification Preparation",
];

const currentSkillLevels = [
  "No Experience",
  "Beginner",
  "Intermediate",
  "Proficient",
  "Advanced",
  "Expert",
];

const desiredSkillLevels = [
  "Beginner",
  "Intermediate",
  "Proficient",
  "Advanced",
  "Expert",
  "Master",
];

const timeOptions = ["5 minutes", "10 minutes", "15 minutes", "20 minutes", "30 minutes"];
const estimatedLearningDurationOptions = ["5 days", "1 week", "2 weeks", "3 weeks", "1 month"];

function LearningPathModal({ open, handleClose }) {
  const steps = 6;
  const [activeStep, setActiveStep] = useState(0);
  const snackbar = useSnackbar();

  const [formData, setFormData] = useState({
    title: "",
    goal: "",
    currentSkillLevel: "",
    desiredSkillLevel: "",
    dailyTime: "",
    estimatedLearningDuration: "",
  });

  const handleNext = () => {
    if (activeStep < steps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      onFinish();
    }
  };

  const onFinish = async () => {
    console.log("formData", formData);
    const userId = "9cbf6343-3c5a-493f-b004-1a980cce0ee7";
    // const response = axios.post(CREATE_ROADMAP(userId), {
    //   ...formData,
    //   userId: "9cbf6343-3c5a-493f-b004-1a980cce0ee7",
    // });

    snackbar(
      "success",
      "Creation of the roadmap was successful! The new learning path is being prepared and will soon be added to your learning paths."
    );
    handleClose();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      if (name === "currentSkillLevel") {
        if (
          desiredSkillLevels.indexOf(prev.desiredSkillLevel) < currentSkillLevels.indexOf(value)
        ) {
          return {
            ...prev,
            [name]: value,
            desiredSkillLevel: "",
          };
        }
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const canProceed = () => {
    switch (activeStep) {
      case 0:
        return formData.title !== "";
      case 1:
        return formData.goal !== "";
      case 2:
        return formData.currentSkillLevel !== "";
      case 3:
        return formData.desiredSkillLevel !== "";
      case 4:
        return formData.dailyTime !== "";
      case 5:
        return formData.estimatedLearningDuration !== "";
      default:
        return false;
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Learning Path
          </Typography>
          <div id="modal-modal-description">
            {activeStep === 0 && (
              <TextField
                autoFocus
                margin="dense"
                name="title"
                label="Title of the Learning Path"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
              />
            )}
            {activeStep === 1 && (
              <FormControl fullWidth>
                <InputLabel>Goal for this Learning Path</InputLabel>
                <Select
                  name="goal"
                  value={formData.goal}
                  label="Goal for this Learning Path"
                  onChange={handleChange}
                >
                  {learningGoals.map((goal, index) => (
                    <MenuItem key={index} value={goal}>
                      {goal}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {activeStep === 2 && (
              <FormControl fullWidth>
                <InputLabel>Current Skill Level</InputLabel>
                <Select
                  name="currentSkillLevel"
                  value={formData.currentSkillLevel}
                  label="Current Skill Level"
                  onChange={handleChange}
                >
                  {currentSkillLevels.map((level, index) => (
                    <MenuItem key={index} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {activeStep === 3 && (
              <FormControl fullWidth>
                <InputLabel>Desired Skill Level</InputLabel>
                <Select
                  name="desiredSkillLevel"
                  value={formData.desiredSkillLevel}
                  label="Desired Skill Level"
                  onChange={handleChange}
                >
                  {desiredSkillLevels
                    .filter(
                      (level) =>
                        desiredSkillLevels.indexOf(level) >=
                        currentSkillLevels.indexOf(formData.currentSkillLevel)
                    )
                    .map((level, index) => (
                      <MenuItem key={index} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
            {activeStep === 4 && (
              <FormControl fullWidth>
                <InputLabel>How much time you want to spend daily</InputLabel>
                <Select
                  name="dailyTime"
                  value={formData.dailyTime}
                  label="How much time you want to spend daily"
                  onChange={handleChange}
                >
                  {timeOptions.map((time, index) => (
                    <MenuItem key={index} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {activeStep === 5 && (
              <FormControl fullWidth>
                <InputLabel>Deadline to complete Learning Path</InputLabel>
                <Select
                  name="estimatedLearningDuration"
                  value={formData.estimatedLearningDuration}
                  label="Deadline to complete Learning Path"
                  onChange={handleChange}
                >
                  {estimatedLearningDurationOptions.map((estimatedLearningDuration, index) => (
                    <MenuItem key={index} value={estimatedLearningDuration}>
                      {estimatedLearningDuration}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </div>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button onClick={handleClose} variant="outlined" sx={{ ml: 1 }}>
              Cancel
            </Button>
            {activeStep > 0 && (
              <Button onClick={handleBack} variant="contained" sx={{ ml: 1 }}>
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              variant="contained"
              sx={{ ml: 1 }}
            >
              {activeStep === steps - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default LearningPathModal;
