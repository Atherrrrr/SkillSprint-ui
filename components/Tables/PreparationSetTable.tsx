import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Tooltip,
  IconButton,
  useTheme,
  Avatar,
  Box,
  styled,
  TypographyProps,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { circularProgressClasses } from "@mui/material/CircularProgress";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { grey } from "@mui/material/colors";

export interface PreparationSetData {
  name: string;
  type: string;
  date: string;
  avgScore: number;
  status: string;
  sessionCount: number;
  duration: string;
  imageSrc: string;
}

interface PreparationSetTableProps {
  data: PreparationSetData[];
}

const ProgressContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "50%",
    bottom: 0,
  },
}));

const PreparationSetTable: React.FC<PreparationSetTableProps> = ({ data }) => {
  // Function to render action buttons
  const theme = useTheme();

  const renderActions = () => (
    <>
      <Tooltip title="Edit" placement="top" arrow>
        <IconButton onClick={() => console.log("Edit")}>
          <EditOutlinedIcon sx={{ fill: "#006FEE" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="View" placement="top" arrow>
        <IconButton onClick={() => console.log("View")}>
          <VisibilityOutlinedIcon sx={{ fill: "#17C964" }} />
        </IconButton>
      </Tooltip>
    </>
  );

  const getColorForProgressScore = (score: number): string => {
    if (score >= 80) return "#17C964";
    if (score >= 60) return "#C5E866";
    if (score >= 40) return "#F5A524";
    return "#F31260";
  };

  interface ProgressLabelProps extends TypographyProps {
    score: number; // Your custom property
  }

  const ProgressLabel = styled(Typography)<ProgressLabelProps>(({ score }) => ({
    position: "absolute",
    zIndex: 1,
    color: getColorForProgressScore(score), // Assume getColorForProgressScore is a function that returns a color based on the score
  }));

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 830 }}>
          <Table stickyHeader aria-label="preparation set table">
            <TableHead>
              <TableRow>
                {/* Apply a grey background to header cells */}
                <TableCell sx={{ bgcolor: theme.palette.info.main }}></TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Name</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Type</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }}>Date</TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }} align="center">
                  Avg Score
                </TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }} align="center">
                  Number of Practice Sessions
                </TableCell>
                <TableCell sx={{ bgcolor: theme.palette.info.main }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((session, index) => (
                <TableRow hover key={index} sx={{ "& > *": { bgcolor: theme.palette.info.light } }}>
                  <TableCell>
                    <Box sx={{ position: "relative", width: 75, height: 75 }}>
                      <Avatar
                        variant="square"
                        src={session.imageSrc}
                        alt={session.name}
                        sx={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>{session.name}</TableCell>
                  <TableCell>{session.type}</TableCell>
                  <TableCell>{session.date}</TableCell>
                  <TableCell align="center">
                    <ProgressContainer>
                      {session.status !== "Processing" && (
                        <ProgressLabel
                          variant="subtitle2"
                          score={session.avgScore}
                        >{`${session.avgScore}%`}</ProgressLabel>
                      )}
                      <CircularProgress
                        variant="determinate"
                        value={100} // This creates a full circle
                        size={65}
                        thickness={4}
                        sx={{
                          position: "absolute",
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: "round",
                            stroke: theme.palette.mode === "dark" ? grey[600] : grey[300],
                          },
                        }}
                      />
                      {session.status !== "Processing" && (
                        <CircularProgress
                          variant="determinate"
                          value={session.avgScore} // Assuming semi-circle effect is needed, multiply by 2
                          size={65}
                          thickness={4}
                          sx={{
                            borderRadius: "50%",
                            transform: "rotate(-90deg)",
                            [`& .${circularProgressClasses.circle}`]: {
                              strokeLinecap: "round",
                              stroke: getColorForProgressScore(session.avgScore), // Dynamic color for the progress bar
                            },
                          }}
                        />
                      )}
                    </ProgressContainer>
                  </TableCell>

                  <TableCell align="center">{session.sessionCount}</TableCell>
                  <TableCell align="center">{renderActions()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default PreparationSetTable;
