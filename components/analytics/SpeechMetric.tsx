import React from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import { ArrowDownward, ArrowUpward, CheckCircle, InfoOutlined } from "@mui/icons-material";

interface SpeechMetricProps {
  title: string;
  unit: string;
  recommendedMin: number;
  recommendedMax: number;
  value: number;
  tooltipText: string;
}

function SpeechMetric({
  title,
  unit,
  recommendedMin,
  recommendedMax,
  value,
  tooltipText,
}: SpeechMetricProps) {
  // const theme = useTheme();

  const getColorAndIcon = () => {
    if (value >= recommendedMin && value <= recommendedMax) {
      const icon = <CheckCircle />;
      return { color: "#17C964", icon };
    } else if (value < recommendedMin) {
      const diff = recommendedMin - value;
      const icon = <ArrowDownward />;
      if (diff < recommendedMin * 0.1) return { color: "#C5E866", icon };
      if (diff < recommendedMin * 0.3) return { color: "#F5A524", icon };
      return { color: "#F31260", icon };
    } else {
      const diff = value - recommendedMax;
      const icon = <ArrowUpward />;
      if (diff < recommendedMax * 0.1) return { color: "#C5E866", icon };
      if (diff < recommendedMax * 0.3) return { color: "#F5A524", icon };
      return { color: "#F31260", icon };
    }
  };

  const { color, icon } = getColorAndIcon();

  return (
    <Box
      sx={{
        border: 2,
        borderColor: "primary.main",
        borderRadius: 2,
        mb: 2,
        pb: 0.7,
        pt: 0.5,
        display: "flex",
        flexDirection: "column",
        width: "auto",
        alignItems: "center", // Centers children along the cross axis (vertically for column direction)
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <Typography variant="h3" sx={{ mr: 1 }}>
          {title}
        </Typography>
        <Tooltip title={tooltipText} placement="top">
          <IconButton>
            <InfoOutlined sx={{ fill: "#1890FF" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography variant="h3" sx={{ color, flexGrow: 0, mr: 1 }}>
          {value} {unit}
        </Typography>
        {icon && React.cloneElement(icon, { sx: { color, fontSize: "inherit", fill: color } })}
      </Box>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Recommended {recommendedMin} - {recommendedMax} {unit}
      </Typography>
    </Box>
  );
}

export default SpeechMetric;
