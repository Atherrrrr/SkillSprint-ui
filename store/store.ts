import { atom, useAtom } from "jotai";
import { PaletteMode } from "@mui/material";
import { fetchUserAttributes, FetchUserAttributesOutput } from "aws-amplify/auth";
import { useEffect } from "react";

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

export const currentUserAtom = atom<FetchUserAttributesOutput | null>({
  // Getter: Read from local storage or return null if not present
  get: () => {
    const user = localStorage.getItem("currentUser");
    return user ? (JSON.parse(user) as FetchUserAttributesOutput) : null;
  },
  // Setter: Update the atom's value and sync with local storage
  set: (_, set, newUser: FetchUserAttributesOutput | null) => {
    set(currentUserAtom, newUser);
    if (newUser) {
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  },
});

export const exampleCompletedLearningPaths = [
  {
    currentLesson: "10",
    currentPhase: "3",
    currentSkillLevel: "Beginner",
    dailyTime: "2 hours",
    description:
      "A comprehensive guide to Amazon S3, covering storage classes, data lifecycle management, and security best practices. Ideal for developers and solution architects looking to optimize cloud storage.",
    desiredSkillLevel: "Advanced",
    estimatedLearningDuration: "6 weeks",
    goal: "Performance Optimization",
    id: "a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d",
    imageURL: "https://neelbhatt.com/wp-content/uploads/2017/05/s3.png",
    phaseCount: 4,
    status: "Completed",
    title: "Amazon S3 Mastery",
    totalLessons: 20,
  },
  {
    currentLesson: "18",
    currentPhase: "5",
    currentSkillLevel: "Beginner",
    dailyTime: "2.5 hours",
    description:
      "Master AWS Lambda for serverless computing, covering advanced patterns, performance optimization, and integration with other AWS services. Perfect for developers looking to build scalable, event-driven applications.",
    desiredSkillLevel: "Intermediate",
    estimatedLearningDuration: "12 weeks",
    goal: "Serverless Architecture",
    id: "f6g7h8i9-j0k1-9f0g-3h4i-6j7k8l9m0n1",
    imageURL:
      "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/AWS-Lambda.component.complex-narrative-xl.ts=1721719525328.png/content/adobe-cms/us/en/products/instana/supported-technologies/aws-lambda-monitoring-and-tracing/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage",
    phaseCount: 6,
    status: "Completed",
    title: "AWS Lambda Fundamentals",
    totalLessons: 35,
  },
  {
    currentLesson: "7",
    currentPhase: "2",
    currentSkillLevel: "Intermediate",
    dailyTime: "1.5 hours",
    description:
      "Dive into AWS CloudWatch for comprehensive monitoring and observability. Learn about custom metrics, alarms, and automated actions. Essential for SysOps and DevOps professionals.",
    desiredSkillLevel: "Advanced",
    estimatedLearningDuration: "5 weeks",
    goal: "Monitoring and Observability",
    id: "g7h8i9j0-k1l2-0g1h-4i5j-7k8l9m0n1o2",
    imageURL:
      "https://notificare.com/static/c3b66048908a0c607c21813493a73859/ab5a8/custom-metrics-with-aws-cloudwatch-cover.png",
    phaseCount: 4,
    status: "Completed",
    title: "AWS CloudWatch in Action",
    totalLessons: 18,
  },
  {
    currentLesson: "12",
    currentPhase: "4",
    currentSkillLevel: "Intermediate",
    dailyTime: "2 hours",
    description:
      "Explore AWS EKS in-depth, covering cluster management, application deployment, and integration with other AWS services. Designed for container enthusiasts and Kubernetes administrators.",
    desiredSkillLevel: "Expert",
    estimatedLearningDuration: "10 weeks",
    goal: "Containerization",
    id: "d4e5f6g7-h8i9-7d8e-1f2g-4h5i6j7k8l9",
    imageURL:
      "https://cdn.prod.website-files.com/6203daf47137054c031fa0e6/64db8ec0b33df54513052146_Screenshot%202023-08-15%20at%2021.41.48.png",
    phaseCount: 6,
    status: "Completed",
    title: "AWS EKS Deep Dive",
    totalLessons: 30,
  },
];
