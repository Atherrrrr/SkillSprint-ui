import React, { useState } from "react";
import { Box, Typography, Checkbox, FormGroup, FormControlLabel, useTheme } from "@mui/material";

export default function AppPreferencesPage() {
  const theme = useTheme();
  console.log(theme.palette.primary.main);

  const [settings, setSettings] = useState({
    useContext: true,
    usePrevHistory: false,
    storeVids: true,
    storeAuds: true,
    useFeedbackForEmailSuggs: true,
    analFin: true,
    roadmapCalc: false,
    newFeats: true,
    goalsRem: false,
    marketing: false,
    emailPref: true,
    inAppPref: true,
  });

  const handleChange = (event: { target: { name: string; checked: boolean } }) => {
    const { name, checked } = event.target;
    setSettings({ ...settings, [name]: checked });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        App Preferences
      </Typography>
      <Typography variant="h3" gutterBottom>
        Learning Path Personalization Preferences
      </Typography>
      <Box sx={{ pl: 7, paddingBottom: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={settings.useContext} onChange={handleChange} name="useContext" />
            }
            label="Use Resume Context"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.usePrevHistory}
                onChange={handleChange}
                name="usePrevHistory"
              />
            }
            label="Use Previous Learning Path History"
          />
        </FormGroup>
      </Box>
      <hr />

      <hr />
      <Typography variant="h3" gutterBottom>
        Show Notifications
      </Typography>
      <Box sx={{ pl: 7, paddingBottom: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={settings.analFin} onChange={handleChange} name="analFin" />}
            label="Learning Path Created"
          />
          <FormControlLabel
            control={
              <Checkbox checked={settings.roadmapCalc} onChange={handleChange} name="roadmapCalc" />
            }
            label="Estimated Deadline Reminder"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: theme.palette.primary.main }}
                checked={settings.newFeats}
                onChange={handleChange}
                name="newFeats"
              />
            }
            label="Daily Reminder"
          />
          <FormControlLabel
            control={
              <Checkbox checked={settings.goalsRem} onChange={handleChange} name="goalsRem" />
            }
            label="Goals Reminder"
          />
          <FormControlLabel
            control={
              <Checkbox checked={settings.marketing} onChange={handleChange} name="marketing" />
            }
            label="Marketing"
          />
        </FormGroup>
      </Box>
      <hr />
      <Typography variant="h3" gutterBottom>
        Notifications Preferences
      </Typography>
      <Box sx={{ pl: 7, paddingBottom: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={settings.emailPref} onChange={handleChange} name="emailPref" />
            }
            label="Email"
          />
          <FormControlLabel
            control={
              <Checkbox checked={settings.inAppPref} onChange={handleChange} name="inAppPref" />
            }
            label="In App"
          />
        </FormGroup>
      </Box>
      <hr />
    </Box>
  );
}
