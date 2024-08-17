import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import { red, grey } from "@mui/material/colors";

const commonTypography = {
  button: {
    textTransform: "none" as const,
  },
  fontFamily: [
    "Inter",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ].join(","),
  h1: {
    fontSize: "4rem", // Default
    "@media (max-width:600px)": {
      fontSize: "2.5rem", // Smaller screens
    },
    "@media (max-width:400px)": {
      fontSize: "2rem", // Even smaller screens
    },
  },
  h2: {
    letterSpacing: "-.025em",
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: 2.5,
    "@media (max-width:600px)": {
      fontSize: "2rem",
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: "1.65rem",
    lineHeight: 1.75,
    "@media (max-width:600px)": {
      fontSize: "1.5rem",
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: "1.35rem",
    lineHeight: 1.65,
    "@media (max-width:600px)": {
      fontSize: "1.25rem",
    },
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.75,
    "@media (max-width:600px)": {
      fontSize: "0.9rem",
    },
  },
  body2: {
    fontSize: "1rem",
    lineHeight: 1.75,
    "@media (max-width:600px)": {
      fontSize: "0.9rem",
    },
  },
  subtitle1: {
    fontSize: "1.1rem",
    lineHeight: 1.75,
    "@media (max-width:600px)": {
      fontSize: "1rem",
    },
  },
};

let AppLightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00255A",
      light: "#E2F1FA",
    },
    secondary: {
      main: "#89CFF0",
      light: "#FFFFFF",
    },
    error: {
      main: red[500],
      light: "#ECC8C7",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000",
      secondary: "#00255A",
      disabled: grey[600],
    },
    action: {
      hover: "#E2F1FA",
    },
    info: {
      light: "#fff",
      main: "#A1A1AA",
    },
    success: {
      main: "#008200",
    },
  },
  typography: {
    ...commonTypography,
    // Any light-theme-specific overrides can go here
    h1: { ...commonTypography.h1, color: "#00255A" },
    h2: { ...commonTypography.h2, color: "#00255A" },
    h3: { ...commonTypography.h3, color: "#00255A" },
    h4: { ...commonTypography.h4, color: "#00255A" },
    h6: { color: "#00255A" },
    body1: { ...commonTypography.body1, color: "#000" },
    body2: { ...commonTypography.body2, color: "#666" },
    subtitle1: { ...commonTypography.subtitle1, color: "#00255A" },
  },
});

// Apply responsive font sizes to the theme
AppLightTheme = responsiveFontSizes(AppLightTheme);

let AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2A93D5",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#89CFF0",
      light: "#FFF",
    },
    error: {
      main: "#EF3C34",
      light: "#FFA9A5",
    },
    background: {
      default: "#161A23",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      disabled: grey[500],
    },
    action: {
      hover: "#2A93D5",
    },
    info: {
      light: "#161A23",
      main: "#58585C",
    },
    success: {
      main: "#009000",
    },
  },
  typography: {
    ...commonTypography,
    // Any dark-theme-specific overrides can go here
    h1: { ...commonTypography.h1, color: "#fff" },
    h2: { ...commonTypography.h2, color: "#fff" },
    h3: { ...commonTypography.h3, color: "#fff" },
    h4: { ...commonTypography.h4, color: "#fff" },
    h6: { color: "#2A93D5" },
    body1: { ...commonTypography.body1, color: "#fff" },
    body2: { ...commonTypography.body2, color: "#9CA3AF" },
    subtitle1: { ...commonTypography.subtitle1, color: "#fff" },
  },
});

AppDarkTheme = responsiveFontSizes(AppLightTheme);

export { AppLightTheme, AppDarkTheme };

export enum Colors {
  RED = "#F31260",
  ORANGE = "#F5A524",
  YELLOW = "#C5E866",
  GREEN = "#17C964",
}
