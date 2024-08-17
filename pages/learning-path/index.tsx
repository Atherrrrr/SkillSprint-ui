import React, { useState } from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import LearningPathThumbnail from "@/components/LearningPath/thumbnail";

const userId = "someId";

function LearningPathsGrid() {
  // Example data array for learning paths
  const [userLearningPath, setUserLearningPath] = useState([]);
  const [allLearningPaths, setAllLearningPaths] = useState([]);

  useEffect(() => {
    //get learning path
    if (learningPathId) {
      const temp_roadmap = extractAndAssignQuizzes(original_response);
      setCurrentLesson(temp_roadmap.currentLesson);
      setCurrentLesson(3);
      setCurrentPhase(temp_roadmap.currentPhase);
      setRoadmap(temp_roadmap);
    }
  }, [learningPathId]);

  const myLearningPaths = [
    {
      id: "123",
      title: "AWS Cloud Computing",
      description:
        "Master Cloud Computing using AWS services. This learning path will teach you about popular AWS services and how to effectively utilize them. Gain insights into optimizing cloud resources for real-world applications.",
      image: "https://i.pinimg.com/736x/d4/74/7c/d4747cb7dcbecb5223b83355ea97a3be.jpg",
      mostPopular: true,
      currentPhase: 1,
      totalPhases: 2,
      currentLesson: 1,
      totalLessons: 8,
      currentTime: 0,
      totalTime: 3,
    },
    {
      id: "124",
      title: "Full-Stack Development",
      description:
        "Learn to build scalable full-stack applications using modern technologies like React, Node.js, and MongoDB. Understand how to connect your frontend and backend seamlessly.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
      mostPopular: false,
      currentPhase: 2,
      totalPhases: 4,
      currentLesson: 5,
      totalLessons: 20,
      currentTime: 12,
      totalTime: 40,
    },
    {
      id: "127",
      title: "Data Science with Python",
      description:
        "Dive into the world of data science with Python. Analyze data, create beautiful visualizations, and use machine learning to glean insights and make predictions.",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2",
      mostPopular: false,
      currentPhase: 1,
      totalPhases: 3,
      currentLesson: 2,
      totalLessons: 10,
      currentTime: 4,
      totalTime: 20,
    },
  ];

  const recommendedLearningPaths = [
    {
      id: "1238",
      title: "Machine Learning & AI",
      description:
        "Understand the foundations of machine learning and artificial intelligence. Develop algorithms that improve automatically through experience.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      url: "https://www.edx.org/professional-certificate/harvardx-computer-science-for-artifical-intelligence",
      trending: true,
      mostPopular: true,
    },
    {
      id: "129",
      title: "Cybersecurity Fundamentals",
      description:
        "Protect systems and networks against cyber threats. Learn about encryption, network security, and the latest techniques in cybersecurity.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      url: "https://www.coursera.org/specializations/intro-cyber-security",
      mostPopular: true,
    },
    {
      id: "1231",
      title: "Web Development Bootcamp",
      description:
        "Master full-stack web development. Learn HTML, CSS, JavaScript, and popular frameworks like React and Node.js.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
      newRelease: true,
    },
    {
      id: "12311",
      title: "Data Science Essentials",
      description:
        "Dive into the world of data analysis and visualization. Learn Python, R, and essential statistical concepts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      url: "https://www.datacamp.com/tracks/data-scientist-with-python",
    },
    {
      id: "13",
      title: "Cloud Computing",
      description:
        "Explore cloud platforms like AWS, Azure, and Google Cloud. Learn to deploy, scale, and manage applications in the cloud.",
      image: "https://images.unsplash.com/photo-1560732488-6b0df240254a",
      url: "https://aws.amazon.com/training/",
      forBeginners: true,
    },
    {
      id: "1213",
      title: "Mobile App Development",
      description:
        "Create native mobile apps for iOS and Android. Learn Swift, Kotlin, and cross-platform frameworks like React Native.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      url: "https://developer.apple.com/tutorials/app-dev-training",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "auto", pl: "5" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Learning Paths
      </Typography>
      <Typography variant="h3" gutterBottom>
        My Learning Paths
      </Typography>
      <Grid container spacing={3}>
        {myLearningPaths.map((path, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <LearningPathThumbnail {...path} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3" gutterBottom sx={{ marginTop: 4 }}>
        Recommended Learning Paths
      </Typography>
      <Grid container spacing={4}>
        {recommendedLearningPaths.map((path, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <LearningPathThumbnail {...path} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LearningPathsGrid;
