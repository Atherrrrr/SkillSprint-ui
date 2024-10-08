// components/InfoBitFlashCard.tsx
import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Typography,
  Box,
  IconButton,
  Link,
  Chip,
  useTheme,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Microlink from "@microlink/react";
import { Refresh } from "@mui/icons-material";

interface InfoBit {
  text: string;
  keywords: string[];
  example?: string;
}

interface SearchResult {
  videoResult: { link: string }[];
  webResult: { url: string }[];
}

interface Props {
  lessonTitle: string;
  infoBits: InfoBit[];
  open: boolean;
  searchResult: SearchResult;
  handleClose: () => void;
  handleComplete: () => void;
}

const InfoBitFlashCard: React.FC<Props> = ({
  lessonTitle,
  infoBits,
  searchResult,
  open,
  handleClose,
  handleComplete,
}) => {
  const [current, setCurrent] = useState(0);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [webResultIndex, setWebResultIndex] = useState(0);
  const [videoResultIndex, setVideoResultIndex] = useState(0);
  const theme = useTheme();

  const refreshWebResult = () => {
    const length = searchResult.webResult.length;

    if (length > 0) {
      let newIndex = webResultIndex;

      // Ensure the new index is different from the current index
      while (newIndex === webResultIndex) {
        newIndex = Math.floor(Math.random() * length);
      }

      setWebResultIndex(newIndex);
    }
  };

  const refreshVideoResult = () => {
    const length = searchResult.videoResult.length;

    if (length > 0) {
      let newIndex = videoResultIndex;

      // Ensure the new index is different from the current index
      while (newIndex === videoResultIndex) {
        newIndex = Math.floor(Math.random() * length);
      }

      setVideoResultIndex(newIndex);
    }
  };

  const confirmForExit = () => {
    if (showSearchResults) {
      handleExitResources();
    } else {
      setOpenConfirm(true);
    }
  };

  const handleCancelExit = () => {
    setOpenConfirm(false);
  };

  const handleInfoBitComplete = () => {
    setShowSearchResults(true);
    setCurrent(current + 1);
  };

  const handleNext = () => {
    if (current < infoBits.length - 1) {
      setCurrent(current + 1);
    } else {
      handleInfoBitComplete();
    }
  };
  const handleExitResources = () => {
    setShowSearchResults(false);
    setCurrent(0);
    handleComplete();
  };

  const handleExit = () => {
    setShowSearchResults(false);
    setOpenConfirm(false);
    setCurrent(0);

    handleClose();
  };

  const highlightKeywords = (text: string, keywords: string[]): JSX.Element => {
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) => {
          // Check if part is a keyword
          if (keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase())) {
            return (
              <Typography
                key={index}
                variant="body1"
                component="div"
                sx={{ display: "inline", fontWeight: "bold", color: "primary.main" }}
              >
                {part}
              </Typography>
            );
          } else {
            return (
              <Typography key={index} variant="body1" component="span" sx={{ display: "inline" }}>
                {part}
              </Typography>
            );
          }
        })}
      </span>
    );
  };

  return (
    <>
      {infoBits && (
        <Modal open={open} onClose={confirmForExit}>
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
                {lessonTitle}
              </Typography>
              <IconButton sx={{}} onClick={confirmForExit}>
                <CloseIcon sx={{ fill: theme.palette.text.primary }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={(current / infoBits.length) * 100}
                  sx={{ my: 2 }}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                  (current / infoBits.length) * 100
                )}%`}</Typography>
              </Box>
            </Box>

            {!showSearchResults ? (
              <>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {highlightKeywords(infoBits[current].text, infoBits[current].keywords)}
                </Typography>
                {infoBits[current].example && (
                  <>
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>
                      Example:
                    </Typography>
                    <Typography variant="body2">{infoBits[current].example}</Typography>
                  </>
                )}
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                  {current !== infoBits.length - 1 && (
                    <Button variant="outlined" sx={{ mr: 2 }} onClick={confirmForExit}>
                      Exit
                    </Button>
                  )}
                  <Button variant="contained" onClick={handleNext}>
                    {current === infoBits.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h4" align="center" sx={{ mt: 2 }}>
                  Recommended Resources
                </Typography>
                {searchResult.videoResult.length > 0 && (
                  <>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                        Video Resource:
                      </Typography>
                      <IconButton onClick={refreshVideoResult} aria-label="refresh video result">
                        <Refresh sx={{ fill: theme.palette.primary.main }} />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    >
                      <Microlink
                        url={searchResult.videoResult[videoResultIndex].link}
                        style={{
                          flexGrow: 1,
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                    </Box>
                  </>
                )}

                {searchResult.webResult.length > 0 && (
                  <>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                        Web Resource:
                      </Typography>
                      <IconButton onClick={refreshWebResult} aria-label="refresh web result">
                        <Refresh sx={{ fill: theme.palette.primary.main }} />
                      </IconButton>
                    </Box>
                    <Microlink url={searchResult.webResult[webResultIndex].url} />
                  </>
                )}
                <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                  <Button variant="contained" onClick={handleExitResources}>
                    Exit
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Modal>
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

export default InfoBitFlashCard;
