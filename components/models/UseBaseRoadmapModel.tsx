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
import { currentUserAtom } from "@/store/store";
import { useAtom } from "jotai";

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

const timeOptions = ["5 minutes", "10 minutes", "15 minutes", "20 minutes", "30 minutes"];
const estimatedLearningDurationOptions = ["5 days", "1 week", "2 weeks", "3 weeks", "1 month"];

function UseBaseRoadmapModel({ title, open, handleClose }) {
  const steps = 2;
  const [activeStep, setActiveStep] = useState(0);
  const snackbar = useSnackbar();
  const [currentUser] = useAtom(currentUserAtom);

  const defaultForumData = {
    dailyTime: "",
    estimatedLearningDuration: "",
  };

  const [formData, setFormData] = useState(defaultForumData);

  const resetForum = () => {
    setActiveStep(0);
    setFormData(defaultForumData);
    handleClose();
  };

  const handleNext = () => {
    if (activeStep < steps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      onFinish();
    }
  };

  const onFinish = async () => {
    // if (currentUser?.sub) {
    //   try {
    //     const response = await axios.post(CREATE_ROADMAP(currentUser.sub), {
    //       ...formData,
    //       userId: currentUser.sub,
    //     });
    //     snackbar(
    //       "success",
    //       "Request Submitted! The Learning Path is being personalized to your profile and will soon be added."
    //     );
    //   } catch (error) {
    //     console.error("Failed to create a new learning paths:", error);
    //   }
    // }

    resetForum();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const canProceed = () => {
    switch (activeStep) {
      case 0:
        return formData.dailyTime !== "";
      case 1:
        return formData.estimatedLearningDuration !== "";
      default:
        return false;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={resetForum}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Starting Learning Path : {title}
          </Typography>
          <div id="modal-modal-description">
            {activeStep === 0 && (
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
            {activeStep === 1 && (
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
            <Button onClick={resetForum} variant="outlined" sx={{ ml: 1 }}>
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

export default UseBaseRoadmapModel;
