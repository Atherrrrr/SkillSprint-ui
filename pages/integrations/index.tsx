import React from "react";
import { Box, Typography, Grid, Card, CardContent, useTheme, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

export default function IntegrationsPage() {
  interface Connection {
    title: string;
    description: string;
    icon: React.ComponentType;
  }

  const theme = useTheme();

  const connections: Connection[] = [
    {
      title: "Linkedin",
      description:
        "Connect Linkedin to help Personalize your Learning Paths and Recommendations better.",
      icon: LinkedInIcon,
    },
    {
      title: "Google Calendar",
      description: "Connect Google Calendar to allow SkillSprint to remind you for daily practices",
      icon: GoogleIcon,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Integrations Settings
      </Typography>
      <Grid container spacing={2}>
        {connections.map((connection) => (
          <Grid item xs={12} key={connection.title}>
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box sx={{ fontSize: "40px", color: theme.palette.primary.main }}>
                      {/* Apply color directly to the icon */}
                      <connection.icon sx={{ fill: theme.palette.primary.main }} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h5" color="text.primary">
                      {connection.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {connection.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, display: "flex", alignItems: "center" }}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
