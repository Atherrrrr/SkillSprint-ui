import { atom } from "jotai";
import { PaletteMode } from "@mui/material";
import { PreparationSetData } from "@/components/Tables/PreparationSetTable";
import { FetchUserAttributesOutput } from "aws-amplify/auth";

// Function to get the theme mode from localStorage
function getInitialThemeMode(): PaletteMode {
  // Default theme mode
  let savedMode: string | null = "light";

  if (typeof window !== "undefined") {
    // Retrieve the mode from localStorage, if available
    const localStorageMode = localStorage.getItem("themeMode");
    console.log("localStorage = ", localStorageMode);

    // If a valid mode is retrieved, use it; otherwise, stick with the default
    savedMode =
      localStorageMode === "light" || localStorageMode === "dark" ? localStorageMode : "light";
  } else {
    console.log("window is not defined for theme");
  }

  return savedMode as PaletteMode;
}

// Define the atom with the initial value read from localStorage
export const themeModeAtom = atom<PaletteMode>(getInitialThemeMode());

export const currentUserAtom = atom<FetchUserAttributesOutput | null>(null);

// export const accessToken = atom<string | null>(null);

const initialPreparationSetData: PreparationSetData[] = [
  {
    name: "Data Scientist",
    type: "Mock Interview",
    date: "2024-08-26",
    avgScore: 75,
    status: "Processing",
    duration: "3 mins",
    sessionCount: 1,
    imageSrc: "now.jpg",
  },
  {
    name: "Frontend React Developer",
    type: "Mock Interview",
    date: "2024-08-23",
    avgScore: 75,
    sessionCount: 1,
    status: "Analyzed",
    duration: "5 mins",
    imageSrc: "/recording-demo.png",
  },
  {
    name: "Jane Smith",
    type: "Video Upload",
    date: "2024-08-23",
    avgScore: 88,
    sessionCount: 3,
    status: "Analyzed",
    duration: "15 mins",
    imageSrc: "/ps1.jpg",
  },
  {
    name: "William Johnson",
    type: "Sales Pitch",
    date: "2024-08-25",
    avgScore: 65,
    status: "Analyzed",
    sessionCount: 2,
    duration: "3 mins",
    imageSrc: "/ps2.jpg",
  },
];

export const preparationSetData = atom<PreparationSetData[]>(initialPreparationSetData);
