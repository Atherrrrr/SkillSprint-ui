import React, { ChangeEvent, useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  Avatar,
  useTheme,
  Paper,
  CardActions,
  Card,
  CardContent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SaveIcon from "@mui/icons-material/Save";
import { Image, InsertDriveFile } from "@mui/icons-material";
import { currentUserAtom } from "@/store/store";
import { useAtom } from "jotai";
import { Document, Page, pdfjs } from "react-pdf";

// Configure pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resume = {
  id: 1,
  path: "resume1.pdf",
};

export default function AccountsPage() {
  const [isEditable, setIsEditable] = useState(false);
  const [currentUser] = useAtom(currentUserAtom);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    skills: "",
    dateOfBirth: "",
    resume: resume,
  });

  const theme = useTheme();

  useEffect(() => {
    //get learning path.
    if (currentUser) {
      setProfile({
        firstName: currentUser.given_name,
        lastName: currentUser.family_name,
        email: currentUser.email,
        phoneNumber: currentUser.phone_number,
        dateOfBirth: currentUser.birthdate,
        skills: "",
        resume: resume,
      });
    }
  }, [currentUser]);

  // Handlers
  const handleEditSave = () => {
    setIsEditable(!isEditable);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Assuming id is a string or number
  const handleDelete = (id: number) => {
    console.log("Delete resume with id:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit resume with id:", id);
  };

  // Path as a string
  const handleDownload = (path: string) => {
    window.open(path);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Account
        </Typography>
        <Grid container spacing={2}>
          {/* Left side fields */}
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={profile.firstName}
              onChange={handleChange}
              name="firstName"
              disabled={!isEditable}
              margin="normal"
              sx={{ color: isEditable ? "initial" : theme.palette.primary.main }}
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={profile.lastName}
              onChange={handleChange}
              name="lastName"
              disabled={!isEditable}
              margin="normal"
              sx={{ color: isEditable ? "initial" : theme.palette.primary.main }}
            />
            <TextField
              disabled
              fullWidth
              label="Email"
              variant="outlined"
              value={profile.email}
              onChange={handleChange}
              name="email"
              margin="normal"
              sx={{ color: theme.palette.primary.main }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={profile.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              disabled
              margin="normal"
              sx={{ color: theme.palette.primary.main }}
            />
            <TextField
              fullWidth
              label="Skills"
              variant="outlined"
              value={profile.skills}
              onChange={handleChange}
              name="skills"
              disabled={!isEditable}
              multiline
              margin="normal"
            />{" "}
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              variant="outlined"
              value={profile.dateOfBirth}
              onChange={handleChange}
              name="dateOfBirth"
              disabled={!isEditable}
              margin="normal"
              InputLabelProps={{
                shrink: true, // Ensures the label is always visible
              }}
              sx={{ color: isEditable ? "initial" : theme.palette.primary.main }}
            />
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                startIcon={
                  isEditable ? (
                    <SaveIcon sx={{ fill: "#fff" }} />
                  ) : (
                    <EditIcon sx={{ fill: "#fff" }} />
                  )
                }
                onClick={handleEditSave}
                variant="contained"
                size="large"
                sx={{ mt: 2, width: 300 }}
              >
                {isEditable ? "Save" : "Edit"}
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <Typography variant="h4" align="left" gutterBottom>
              Resume
            </Typography>
            {profile.resume && (
              <Card>
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <Typography variant="h3" component="div" align="center" marginBottom={1}>
                    {resume.title}
                  </Typography>
                  <Document file={resume.path}>
                    <Page pageNumber={1} width={200} height={200} />
                  </Document>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    onClick={() => handleEdit(resume.id)}
                    sx={{ color: "#006FEE" }}
                    startIcon={<EditIcon sx={{ fill: "#006FEE" }} />}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleDelete(resume.id)}
                    sx={{ color: "#EE0000" }}
                    startIcon={<DeleteIcon sx={{ fill: "#EE0000" }} />}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleDownload(resume.path)}
                    sx={{ color: "#17C964" }}
                    startIcon={<FileDownloadIcon sx={{ fill: "#17C964" }} />}
                  >
                    Download
                  </Button>
                </CardActions>
              </Card>
            )}
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mt: 2,
                ml: 2,
                textAlign: "center",
                ...(isDragActive && { bgcolor: "action.hover" }),
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <IconButton color="primary" sx={{ fontSize: 50 }}>
                <InsertDriveFile sx={{ fontSize: 50, fill: theme.palette.primary.main }} />
              </IconButton>
              {isDragActive ? (
                <Typography>Drop the resumes here ...</Typography>
              ) : (
                <Typography>Drag & drop your Resume here, or click to select resumes</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
