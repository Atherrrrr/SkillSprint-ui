import React from "react";
import { Card, CardContent, Typography, Box, LinearProgress, Grid } from "@mui/material";
import { CheckCircle, Star } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface CompletionBadgeProps {
  id: string;
  title: string;
  description: string;
  completionDate: string;
  totalTimeSpent: string;
  onCompletion: () => void;
}

function CompletionBadge({
  id,
  title,
  description,
  completionDate,
  totalTimeSpent,
  onCompletion,
}: CompletionBadgeProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: 2,
        boxShadow: 3,
        width: "100%",
        maxWidth: 850,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`,
      }}
      onClick={onCompletion}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ml: 2,
              mt: 2,
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <CheckCircle sx={{ fill: "#17C964", fontSize: "large" }} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Completed on {completionDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Time Spent: {totalTimeSpent}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%", mt: 1 }}>
            <LinearProgress variant="determinate" value={100} sx={{ height: "10px" }} />
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mt: 1 }}>
              Completion 100%
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CompletionBadge;
