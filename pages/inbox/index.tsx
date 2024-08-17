import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

export default function InboxPage() {
  const [profile, setProfile] = useState({
    issueType: "",
    description: ""
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handlers
  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = () => {
    if (!profile.issueType || !profile.description) {
      // If either field is empty, do not submit
      return;
    }
    // Simulate submission for demonstration purpose
    setTimeout(() => {
      setShowSuccessMessage(true);
      setProfile({ issueType: "", description: "" }); // Reset form fields
      setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 3 seconds
      }, 3000);
    }, 2000);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Report an Issue
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Issue Type"
            variant="outlined"
            value={profile.issueType}
            name="issueType"
            onChange={handleChange}
            select
            SelectProps={{ displayEmpty: true }}
            sx={{ mb: 2 }} // Add margin bottom to match the TextField below
          >
            <MenuItem value="BugReport">Report a Bug</MenuItem>
            <MenuItem value="Feedback">Give Feedback</MenuItem>
            <MenuItem value="FeatureRequest">Request a Feature</MenuItem>
            <MenuItem value="Support">Request Support</MenuItem>
            <MenuItem value="Inquiry">General Inquiry</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            value={profile.description}
            onChange={handleChange}
            name="description"
            multiline
            rows={4}
            margin="normal"
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="large"
            sx={{ mt: 2, width: 300 }}
            disabled={!profile.issueType || !profile.description} // Disable if fields are empty
          >
            Submit
          </Button>
        </Grid>

        {/* Submission Status */}
        {showSuccessMessage && (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1" color="success">
              Report submitted successfully!
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
