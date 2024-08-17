import * as React from "react";
import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  Snackbar,
  Alert,
  AppBar,
  Grid,
  Fab,
  useTheme,
  Avatar,
  Tooltip,
  IconButton,
  Box,
  Typography,
  Theme,
  Button,
} from "@mui/material";
import { IconMessageReport } from "@tabler/icons-react";
import LightDarkSwitchBtn from "@/components/shared/LightDarkSwitchBtn";
import PracticeSessionButton from "@/components/shared/PracticeSessionButton";
import StartPracticeSessionModel from "@/components/models/StartPracticeSessionModel";
import { snackbarAtom, snackbarMessage, snackbarSeverity } from "@/store/snackbar";
import { useRouter } from "next/router";
import { NotificationsOutlined, PlayCircle } from "@mui/icons-material";
import { IThemeMode } from "@/theme/types";
import SideBar from "@/components/layout/Sidebar";
import { SessionType } from "@/Enums/SessionType";
import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth";
import { currentUserAtom } from "@/store/store";
import CreateLearningPathModel from "@/components/models/CreateLearningPathModel";

interface LayoutProps {
  children: React.ReactNode;
}

interface PageContainerProps {
  children: React.ReactNode;
  theme: Theme;
  sidebarWidth: number;
}

const PageContainer = ({ children, theme, sidebarWidth }: PageContainerProps) => (
  <Box
    sx={{
      marginTop: 7,
      marginLeft: { sm: sidebarWidth },
      paddingLeft: sidebarWidth === 0 ? 0 : 3,
      paddingRight: sidebarWidth === 0 ? 0 : 3,
      marginRight: sidebarWidth === 0 ? 0 : 1,
      marginBottom: sidebarWidth === 0 ? 0 : 3,
      backgroundColor: theme.palette.background.default,
      borderRadius: sidebarWidth === 0 ? 0 : 5,
      maxHeight: "calc(100vh - 64px)",
      minHeight: sidebarWidth === 0 ? "calc(100vh - 56px)" : "calc(100vh - 64px)",
      overflowY: sidebarWidth === 0 ? "hidden" : "auto",
    }}
  >
    {children}
  </Box>
);
export default function Layout(props: LayoutProps) {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [sessionType, setSessionType] = React.useState<SessionType>();
  const [sidebarWidth, setSidebarWidth] = React.useState(32);
  const [, setCurrentUser] = useAtom(currentUserAtom);

  useEffect(() => {
    fetchUserAttributes()
      .then((user) => {
        setCurrentUser(user);
        console.log("user", user);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);

  const handleClick = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  const [snackbarStatus, setSnackbarStatus] = useAtom(snackbarAtom);
  const [severity] = useAtom(snackbarSeverity);
  const [message] = useAtom(snackbarMessage);

  // const snackbar = useSnackbar();

  const router = useRouter();
  const currentURL = router.asPath;

  const goToAccount = () => {
    router.push(`/account`);
  };

  const updateSideBarWidth = (open: boolean) => {
    if (open) {
      setSidebarWidth(32);
    } else {
      setSidebarWidth(10);
    }
  };

  useEffect(() => {
    // Function to update sidebar width based on the route
    const handleRouteChange = () => {
      if (router.pathname.includes("live-practice-session")) {
        setSidebarWidth(0);
      }
      // else {
      //   setSidebarWidth(32);
      // }
    };

    // Call the function on mount and subscribe to route changes
    handleRouteChange();

    // Optional: Listen to route changes if you expect the pathname could change without unmounting the component
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup function to remove event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      {true && (
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            right: 25,
            bottom: 25,
          }}
          onClick={() => router.replace("/inbox")}
        >
          <Tooltip title="Report an Issue" arrow>
            <IconMessageReport color="white" />
          </Tooltip>
        </Fab>
      )}
      <Snackbar
        open={snackbarStatus}
        autoHideDuration={6000}
        onClose={() => setSnackbarStatus(false)}
      >
        <Alert onClose={() => setSnackbarStatus(false)} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>

      <Box
        style={{
          backgroundColor: theme.palette.mode == "dark" ? "#000" : "#E2F1FA",
          minHeight: "100vh",
        }}
      >
        {!(currentURL.includes("login") || currentURL.includes("register")) && (
          <div>
            <AppBar
              position="fixed"
              elevation={0}
              sx={{
                backgroundColor: theme.palette.mode == "dark" ? "#000" : "#E2F1FA",
                height: "fit-content",
              }}
            >
              <Grid container sx={{ width: "100%" }} alignItems="center">
                <Grid
                  item
                  xs={1}
                  sx={{
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "80%",
                      objectFit: "contain",
                      display: "block",
                      marginLeft: theme.spacing(2),
                      marginRight: "auto",
                    }}
                    alt="WePrep logo"
                    src={
                      theme.palette.mode === IThemeMode.LIGHT
                        ? "/app-logo-light.png"
                        : "/app-logo-dark.png"
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={11}
                  sx={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ textTransform: "none", height: "fit-content" }}
                    startIcon={<PlayCircle style={{ fill: "#fff" }} />}
                    onClick={handleClick}
                  >
                    Start a New Learning Path
                  </Button>
                  <CreateLearningPathModel
                    open={isModalOpen}
                    handleClose={() => setIsModalOpen(false)}
                  />

                  <IconButton size="small">
                    <NotificationsOutlined style={{ fill: theme.palette.primary.main }} />
                  </IconButton>
                  <Box onClick={goToAccount}>
                    <Avatar src={"/user-avatar.svg"} />
                  </Box>
                  <Typography variant="subtitle2" color={theme.palette.primary.main}>
                    Arshia Bakhshayesh
                  </Typography>
                  <LightDarkSwitchBtn />
                </Grid>
              </Grid>
            </AppBar>

            {!currentURL.includes("live-practice-session") && (
              <SideBar updateSideBarWidth={updateSideBarWidth} />
            )}
          </div>
        )}
        <PageContainer theme={theme} sidebarWidth={sidebarWidth}>
          {props.children}
        </PageContainer>
      </Box>
    </>
  );
}
