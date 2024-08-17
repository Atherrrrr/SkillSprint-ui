import React, { useState, useEffect } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import QuizIcon from "@mui/icons-material/QuizOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Typography,
  Box,
  Divider,
  Paper,
  Button,
  Grid,
  Card,
  Avatar,
  useTheme,
  Chip,
  Badge,
  Stack,
  CircularProgress,
  circularProgressClasses,
} from "@mui/material";
import {
  AddTask,
  ArrowBack,
  ArrowForward,
  AssignmentIndOutlined,
  AssignmentLateOutlined,
  AssignmentOutlined,
  AutoStories,
  AutoStoriesOutlined,
  Check,
  CheckCircle,
  CheckCircleOutline,
  DoneAll,
  DoneOutline,
  DownloadDone,
  EmojiEvents,
  MenuBook,
  PsychologyAlt,
  SchoolOutlined,
  SchoolRounded,
  Share,
  Verified,
  WorkspacePremium,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import InfoBitFlashCard from "@/components/flashcards/InfoBitFlashCards";
import { useRouter } from "next/router";
import CircularScore from "@/components/analytics/CircularScore";
import { Colors } from "@/theme/themes";
import QuizFlashCards from "@/components/flashcards/QuizFlashCards";

const original_response = {
  id: "a4e4aec4-7401-4eb1-9489-ea9a7703b505",
  title: "AWS Cloud Computing Roadmap for Career Advancement",
  description:
    "This roadmap covers the fundamentals of AWS cloud computing, progressing to advanced topics and real-world applications. By following this path, users will gain expertise in AWS services, architecture, and deployment.",
  imageURL:
    "https://www.cloudwatchhub.com/wp-content/uploads/2021/06/aws-cloud-computing-roadmap.png",
  estimatedLearningDuration: "3 weeks",
  goal: "Career Advancement",
  currentSkillLevel: "Beginner",
  desiredSkillLevel: "Advanced",
  currentLesson: 1.0,
  currentPhase: 1.0,
  dailyTime: "5 minutes",
  phaseCount: 4.0,
  totalLessons: 12.0,
  phases: [
    {
      phaseDescription: "Introduction to AWS Cloud Computing",
      topicCount: 3.0,
      phaseNumber: 1.0,
      topics: [
        {
          topicName: "AWS Overview",
          searchResult: {
            webResult: {
              title: "What is Cloud Computing? - Cloud ...",
              description:
                "Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical ...",
              url: "https://aws.amazon.com/what-is-cloud-computing/",
            },
            videoResult: {
              accessibility: {
                title:
                  "Getting Started With AWS Cloud | Step-by-Step Guide by Travis Media 74,103 views 1 year ago 23 minutes",
                duration: "23 minutes, 54 seconds",
              },
              channel: {
                name: "Travis Media",
                link: "https://www.youtube.com/channel/UCGPGirOab9EGy7VH4IwmWVQ",
                id: "UCGPGirOab9EGy7VH4IwmWVQ",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/ytc/AIdro_l00TDaIm6OxCv6eJtOwdn2RHbFjeUJ8OJYVGmgdA4pEQ=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=CjKhQoYeR4Q",
              type: "video",
              title: "Getting Started With AWS Cloud | Step-by-Step Guide",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/CjKhQoYeR4Q/mqdefault_6s.webp?du=3000&sqp=CLyL_LUG&rs=AOn4CLCHB03A-kvG4mUpKsZ1MDMdhhPa-Q",
                height: 180.0,
              },
              duration: "23:54",
              publishedTime: "1 year ago",
              id: "CjKhQoYeR4Q",
              viewCount: {
                short: "74K views",
                text: "74,103 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/CjKhQoYeR4Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcMVqwf3jm7heqTt9PPEHopadHSA",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/CjKhQoYeR4Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCNBewxN8a2cT0NwH9OkgFlIfsKQ",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "All developers and inspiring developers should be ",
                },
                {
                  text: "cloud",
                  bold: true,
                },
                {
                  text: " competent. This means creating an account and getting your hands dirty.",
                },
              ],
            },
          },
          topicNumber: 1.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#1#INFOBIT#1",
              text: "AWS (Amazon Web Services) is a comprehensive cloud computing platform that provides a wide range of services and solutions for businesses and individuals.",
              keywords: ["cloud computing", "services", "solutions", "businesses", "individuals"],
              example: "",
              quiz: {
                text: "What is AWS (Amazon Web Services)?",
                type: "multiple-choice",
                options: [
                  "A cloud computing platform offering various services and solutions",
                  "A software development company",
                  "An online retail store",
                  "A hardware manufacturing company",
                ],
                answer: "A cloud computing platform offering various services and solutions",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#1#INFOBIT#2",
              text: "AWS Global Infrastructure refers to the network of data centers and edge locations operated by Amazon around the world, enabling AWS services to be delivered with low latency and high availability.",
              keywords: [
                "global infrastructure",
                "data centers",
                "edge locations",
                "low latency",
                "high availability",
              ],
              example: "",
              quiz: {
                text: "What does the AWS Global Infrastructure refer to?",
                type: "multiple-choice",
                options: [
                  "The network of data centers and edge locations operated by Amazon worldwide",
                  "The headquarters of Amazon",
                  "The software development team at Amazon",
                  "The online retail platform of Amazon",
                ],
                answer:
                  "The network of data centers and edge locations operated by Amazon worldwide",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#1#INFOBIT#3",
              text: "AWS offers a vast array of services, including compute power, storage, databases, networking, analytics, machine learning, and more, allowing users to build and deploy applications and services on the cloud.",
              keywords: ["services", "compute power", "storage", "databases", "networking"],
              example:
                "Examples of AWS services include EC2 (Elastic Compute Cloud), S3 (Simple Storage Service), and RDS (Relational Database Service).",
              quiz: {
                text: "Which of the following is NOT an example of an AWS service?",
                type: "multiple-choice",
                options: [
                  "Microsoft Azure",
                  "EC2 (Elastic Compute Cloud)",
                  "S3 (Simple Storage Service)",
                  "RDS (Relational Database Service)",
                ],
                answer: "Microsoft Azure",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#1#INFOBIT#4",
              text: "Cloud computing with AWS provides benefits such as scalability, cost-efficiency, flexibility, and security, enabling businesses to focus on their core competencies instead of managing infrastructure.",
              keywords: [
                "scalability",
                "cost-efficiency",
                "flexibility",
                "security",
                "core competencies",
              ],
              example: "",
              quiz: {
                text: "Which of the following is NOT a benefit of using AWS cloud computing?",
                type: "multiple-choice",
                options: [
                  "Reduced hardware costs",
                  "Increased security risks",
                  "Scalability",
                  "Cost-efficiency",
                ],
                answer: "Increased security risks",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#1#INFOBIT#5",
              text: "AWS offers various pricing models, including pay-as-you-go, reserved instances, and spot instances, allowing users to optimize costs based on their usage patterns and requirements.",
              keywords: [
                "pricing models",
                "pay-as-you-go",
                "reserved instances",
                "spot instances",
                "cost optimization",
              ],
              example: "",
              quiz: {
                text: "True or False: AWS offers only a pay-as-you-go pricing model.",
                type: "true-false",
                options: "",
                answer: "False",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Core Services",
          searchResult: {
            webResult: {
              title: "Core services and additional services - Public Sector Cloud ...",
              description:
                "AWS consists of many cloud services that you can use in combinations tailored to your organizational needs. To access the services, you can use the AWS ...",
              url: "https://docs.aws.amazon.com/whitepapers/latest/public-sector-cloud-transformation/core-services-and-additional-services.html",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS & Cloud Computing for beginners | 50 Services in 50 Minutes by in28minutes - Get Cloud Certified 158,826 views 2 years ago 49 minutes",
                duration: "49 minutes, 26 seconds",
              },
              channel: {
                name: "in28minutes - Get Cloud Certified",
                link: "https://www.youtube.com/channel/UCLz7LG4YVi7_iyk4yOARcxA",
                id: "UCLz7LG4YVi7_iyk4yOARcxA",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/33H4JE7AgaOmwKz5yisVt1mHN-n43vfb7CY3BqZvhb6vBXkk3_DCopAWMty6-fBKBKZR9y5FSA=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=O61gbmYZJmE",
              type: "video",
              title: "AWS & Cloud Computing for beginners | 50 Services in 50 Minutes",
              shelfTitle: null,
              richThumbnail: null,
              duration: "49:26",
              publishedTime: "2 years ago",
              id: "O61gbmYZJmE",
              viewCount: {
                short: "158K views",
                text: "158,826 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/O61gbmYZJmE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwyOYkYbD9ku8MToJmeYIReLvnew",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/O61gbmYZJmE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ7Qakd1XvikAw6U4NJlgZ99j6zA",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "#",
                },
                {
                  text: "aws",
                  bold: true,
                },
                {
                  text: "-tutorial #",
                },
                {
                  text: "aws",
                  bold: true,
                },
                {
                  text: "-tutorial-for-beginners.",
                },
              ],
            },
          },
          topicNumber: 2.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#2#INFOBIT#1",
              text: "EC2 (Elastic Compute Cloud) is a web service that provides secure, resizable compute capacity in the cloud, allowing users to launch and manage virtual servers (instances) with various configurations.",
              keywords: ["compute capacity", "virtual servers", "instances", "configurations"],
              example: "",
              quiz: {
                text: "What is the primary purpose of EC2 (Elastic Compute Cloud)?",
                type: "multiple-choice",
                options: [
                  "Providing secure, resizable compute capacity in the cloud",
                  "Object storage service",
                  "Virtual private network",
                  "Identity and access management",
                ],
                answer: "Providing secure, resizable compute capacity in the cloud",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#2#INFOBIT#2",
              text: "S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance, making it suitable for a wide range of use cases, from data lakes to websites.",
              keywords: [
                "object storage",
                "scalability",
                "data availability",
                "security",
                "performance",
              ],
              example:
                "S3 can be used to store and retrieve any amount of data, from small website assets to large datasets for big data analytics.",
              quiz: {
                text: "Which AWS service is suitable for storing and retrieving large datasets for big data analytics?",
                type: "multiple-choice",
                options: ["EC2", "S3", "VPC", "IAM"],
                answer: "S3",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#2#INFOBIT#3",
              text: "VPC (Virtual Private Cloud) is a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define and control, providing enhanced security and control.",
              keywords: ["virtual network", "security", "control", "AWS resources", "isolation"],
              example: "",
              quiz: {
                text: "True or False: VPC (Virtual Private Cloud) is a physical data center owned by AWS.",
                type: "true-false",
                options: "",
                answer: "False",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#2#INFOBIT#4",
              text: "IAM (Identity and Access Management) is a web service that helps users securely control access to AWS resources, allowing them to create and manage AWS users and groups, and use permissions to grant or deny access.",
              keywords: ["access control", "users", "groups", "permissions", "security"],
              example: "",
              quiz: {
                text: "What is the primary purpose of IAM (Identity and Access Management)?",
                type: "multiple-choice",
                options: [
                  "Monitoring and observability",
                  "Securely controlling access to AWS resources",
                  "Virtual private network",
                  "Object storage service",
                ],
                answer: "Securely controlling access to AWS resources",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#2#INFOBIT#5",
              text: "CloudWatch is a monitoring and observability service that provides data and insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.",
              keywords: [
                "monitoring",
                "observability",
                "performance",
                "resource utilization",
                "operational health",
              ],
              example: "",
              quiz: {
                text: "Which AWS service provides data and insights to monitor applications and optimize resource utilization?",
                type: "multiple-choice",
                options: ["CloudWatch", "EC2", "S3", "VPC"],
                answer: "CloudWatch",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Management Tools",
          searchResult: {
            webResult: {
              title: "AWS service management tools",
              description:
                "AWS Systems Manager is a management service that helps you automatically collect software inventory, apply operating system patches, create system images, and ...",
              url: "https://docs.aws.amazon.com/wellarchitected/latest/management-and-governance-guide/aws-service-management-tools.html",
            },
            videoResult: {
              accessibility: {
                title:
                  "Top 50+ AWS Services Explained in 10 Minutes by Fireship 1,543,883 views 3 years ago 11 minutes, 46 seconds",
                duration: "11 minutes, 46 seconds",
              },
              channel: {
                name: "Fireship",
                link: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA",
                id: "UCsBjURrPoezykLs9EqgamOA",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=JIbIYCM48to",
              type: "video",
              title: "Top 50+ AWS Services Explained in 10 Minutes",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/JIbIYCM48to/mqdefault_6s.webp?du=3000&sqp=CN73-7UG&rs=AOn4CLD3z7njf7oPHVBOMsv_86u1jBdGBA",
                height: 180.0,
              },
              duration: "11:46",
              publishedTime: "3 years ago",
              id: "JIbIYCM48to",
              viewCount: {
                short: "1.5M views",
                text: "1,543,883 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/JIbIYCM48to/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy2kNnu3NBwl5irdoFfcIwJdvSow",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/JIbIYCM48to/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpsvSukRVi6lDt0tN1SRz333I6BA",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "#",
                },
                {
                  text: "aws",
                  bold: true,
                },
                {
                  text: " #cloud #top50 Resources ",
                },
                {
                  text: "AWS",
                  bold: true,
                },
                {
                  text: " Products https://",
                },
                {
                  text: "aws",
                  bold: true,
                },
                {
                  text: ".",
                },
                {
                  text: "amazon",
                  bold: true,
                },
                {
                  text: ".com/products/ Format inspired by this Adobe video ...",
                },
              ],
            },
          },
          topicNumber: 3.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#3#INFOBIT#1",
              text: "The AWS Management Console is a web-based interface that allows users to access and manage AWS services and resources through a user-friendly graphical interface.",
              keywords: [
                "web interface",
                "manage services",
                "manage resources",
                "graphical interface",
              ],
              example: "",
              quiz: {
                text: "What is the AWS Management Console?",
                type: "multiple-choice",
                options: [
                  "A web-based interface to manage AWS services and resources",
                  "A command-line tool for managing AWS services",
                  "A programming interface for building applications",
                  "A service for provisioning AWS resources",
                ],
                answer: "A web-based interface to manage AWS services and resources",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#3#INFOBIT#2",
              text: "The AWS Command Line Interface (CLI) is a unified tool that allows users to manage AWS services from the command line, providing a more efficient and scriptable way to interact with AWS resources.",
              keywords: [
                "command line",
                "manage services",
                "efficient",
                "scriptable",
                "interact with resources",
              ],
              example:
                "The AWS CLI can be used to automate tasks, such as launching EC2 instances or creating S3 buckets, through scripts or integration with other tools.",
              quiz: {
                text: "Which tool allows users to manage AWS services from the command line in an efficient and scriptable way?",
                type: "multiple-choice",
                options: [
                  "AWS Management Console",
                  "AWS SDKs and APIs",
                  "AWS CloudFormation",
                  "AWS Command Line Interface (CLI)",
                ],
                answer: "AWS Command Line Interface (CLI)",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#3#INFOBIT#3",
              text: "AWS SDKs and APIs provide programmatic access to AWS services, allowing developers to build applications that integrate with AWS services using various programming languages and platforms.",
              keywords: [
                "programmatic access",
                "integrate with services",
                "programming languages",
                "platforms",
                "application development",
              ],
              example: "",
              quiz: {
                text: "True or False: AWS SDKs and APIs are used for building applications that integrate with AWS services.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#3#INFOBIT#4",
              text: "AWS CloudFormation is a service that helps users model and set up their AWS resources in a consistent and repeatable way, using templates to define and provision resources in an orderly and predictable fashion.",
              keywords: [
                "resource provisioning",
                "templates",
                "consistent",
                "repeatable",
                "infrastructure as code",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of AWS CloudFormation?",
                type: "multiple-choice",
                options: [
                  "Monitoring and auditing AWS account activity",
                  "Programmatic access to AWS services",
                  "Modeling and setting up AWS resources in a consistent and repeatable way",
                  "Web-based interface for managing AWS services",
                ],
                answer: "Modeling and setting up AWS resources in a consistent and repeatable way",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#1#TOPIC#3#INFOBIT#5",
              text: "AWS CloudTrail is a service that enables governance, compliance, and operational auditing by recording AWS account activity, including actions taken through the AWS Management Console, AWS CLI, and AWS SDKs and APIs.",
              keywords: ["governance", "compliance", "auditing", "account activity", "logging"],
              example: "",
              quiz: {
                text: "Which AWS service enables governance, compliance, and operational auditing by recording AWS account activity?",
                type: "multiple-choice",
                options: [
                  "AWS CloudTrail",
                  "AWS CloudFormation",
                  "AWS Management Console",
                  "AWS Command Line Interface (CLI)",
                ],
                answer: "AWS CloudTrail",
              },
              userAnswer: "",
            },
          ],
        },
      ],
    },
    {
      phaseDescription: "AWS Architecture and Deployment",
      topicCount: 3.0,
      phaseNumber: 2.0,
      topics: [
        {
          topicName: "AWS Architecture Principles",
          searchResult: {
            webResult: {
              title: "AWS Well-Architected - Build secure, efficient cloud applications",
              description:
                "The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads ...",
              url: "https://aws.amazon.com/architecture/well-architected/",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS Well-Architected Framework by Digital Cloud Training 47,211 views 3 years ago 8 minutes, 33 seconds",
                duration: "8 minutes, 33 seconds",
              },
              channel: {
                name: "Digital Cloud Training",
                link: "https://www.youtube.com/channel/UCZGGwqjk5jfO4vN1SOCJ2ew",
                id: "UCZGGwqjk5jfO4vN1SOCJ2ew",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/ytc/AIdro_kKMeyBkS_2hZHpkochAarWD4mjNPCn_7RH0Vz_zdWTkiU=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=x6DIk0_2Goo",
              type: "video",
              title: "AWS Well-Architected Framework",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/x6DIk0_2Goo/mqdefault_6s.webp?du=3000&sqp=CM7e-7UG&rs=AOn4CLCGbgnl0y5sSvZXk8bXDMj_c71mgw",
                height: 180.0,
              },
              duration: "8:33",
              publishedTime: "3 years ago",
              id: "x6DIk0_2Goo",
              viewCount: {
                short: "47K views",
                text: "47,211 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/x6DIk0_2Goo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASfdZ_Z8Z4VI8zmlgX5g4JnarygA",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/x6DIk0_2Goo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD00yesTGxqQV-44Xrx4p2DY_QMmg",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "Students of the ",
                },
                {
                  text: "AWS",
                  bold: true,
                },
                {
                  text: " Certified Cloud Practitioner certification are expected to understand the core principles outline in the ",
                },
                {
                  text: "AWS",
                  bold: true,
                },
                {
                  text: " ...",
                },
              ],
            },
          },
          topicNumber: 4.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#1#INFOBIT#1",
              text: "The AWS Well-Architected Framework provides guidance on designing and deploying reliable, secure, efficient, and cost-effective systems on AWS.",
              keywords: [
                "Well-Architected Framework",
                "Reliability",
                "Security",
                "Efficiency",
                "Cost Optimization",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of the AWS Well-Architected Framework?",
                type: "multiple-choice",
                options: [
                  "To provide guidance on designing and deploying reliable, secure, efficient, and cost-effective systems on AWS",
                  "To enforce strict rules for AWS resource usage",
                  "To automatically optimize AWS resource configurations",
                  "To provide a certification program for AWS architects",
                ],
                answer:
                  "To provide guidance on designing and deploying reliable, secure, efficient, and cost-effective systems on AWS",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#1#INFOBIT#2",
              text: "Scalability and elasticity are key principles that allow AWS resources to scale up or down automatically based on demand, ensuring optimal performance and cost-effectiveness.",
              keywords: [
                "Scalability",
                "Elasticity",
                "Auto Scaling",
                "Performance",
                "Cost-Effectiveness",
              ],
              example: "",
              quiz: {
                text: "Which of the following is NOT a key principle of AWS architecture?",
                type: "multiple-choice",
                options: ["Scalability", "Elasticity", "Vendor Lock-in", "Cost Optimization"],
                answer: "Vendor Lock-in",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#1#INFOBIT#3",
              text: "High availability and fault tolerance ensure that applications and services remain accessible and operational, even in the event of failures or disruptions.",
              keywords: [
                "High Availability",
                "Fault Tolerance",
                "Redundancy",
                "Disaster Recovery",
                "Business Continuity",
              ],
              example:
                "Deploying applications across multiple Availability Zones (AZs) in a region can provide high availability and fault tolerance.",
              quiz: {
                text: "True or False: Deploying applications across multiple Availability Zones (AZs) in a region can provide high availability and fault tolerance.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#1#INFOBIT#4",
              text: "Security and compliance are critical aspects of AWS architecture, involving data protection, access control, and adherence to industry standards and regulations.",
              keywords: [
                "Security",
                "Compliance",
                "Data Protection",
                "Access Control",
                "Regulations",
              ],
              example: "",
              quiz: {
                text: "Which of the following is NOT a critical aspect of AWS architecture?",
                type: "multiple-choice",
                options: ["Security", "Compliance", "Vendor Preference", "Data Protection"],
                answer: "Vendor Preference",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#1#INFOBIT#5",
              text: "Cost optimization involves selecting the right AWS services and resources, monitoring usage, and implementing cost-saving strategies to optimize spending.",
              keywords: [
                "Cost Optimization",
                "Cost-Effective",
                "Resource Utilization",
                "Cost Monitoring",
                "Cost-Saving Strategies",
              ],
              example: "",
              quiz: {
                text: "What is the primary goal of cost optimization in AWS architecture?",
                type: "multiple-choice",
                options: [
                  "Selecting the right AWS services and resources, monitoring usage, and implementing cost-saving strategies to optimize spending",
                  "Minimizing AWS resource usage to reduce costs",
                  "Automatically scaling resources up and down based on demand",
                  "Implementing security measures to prevent unauthorized resource usage",
                ],
                answer:
                  "Selecting the right AWS services and resources, monitoring usage, and implementing cost-saving strategies to optimize spending",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Deployment Strategies",
          searchResult: {
            webResult: {
              title: "Best practices for developing and deploying cloud ...",
              description:
                "Jun 1, 2022 — With the AWS CDK, developers or administrators can define their cloud infrastructure by using a supported programming language.",
              url: "https://docs.aws.amazon.com/cdk/v2/guide/best-practices.html",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS re:Invent 2018: [REPEAT 1] Continuous Integration Best Practices (DEV319-R1) by Amazon Web Services 11,503 views 5 years ago 57 minutes",
                duration: "57 minutes, 3 seconds",
              },
              channel: {
                name: "Amazon Web Services",
                link: "https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg",
                id: "UCd6MoB9NC6uYN2grvUNT-Zg",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=77HvSGyBVdU",
              type: "video",
              title:
                "AWS re:Invent 2018: [REPEAT 1] Continuous Integration Best Practices (DEV319-R1)",
              shelfTitle: null,
              richThumbnail: null,
              duration: "57:03",
              publishedTime: "5 years ago",
              id: "77HvSGyBVdU",
              viewCount: {
                short: "11K views",
                text: "11,503 views",
              },
              thumbnails: [
                {
                  width: 480.0,
                  url: "https://i.ytimg.com/vi/77HvSGyBVdU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC56u3NY3axv9UnmZB5N6Z-NaET_w",
                  height: 270.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "Today, more teams are adopting continuous integration (CI) techniques to enable collaboration, increase agility, and deliver a ...",
                },
              ],
            },
          },
          topicNumber: 5.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#2#INFOBIT#1",
              text: "Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure resources through code, enabling consistent and repeatable deployments.",
              keywords: [
                "Infrastructure as Code",
                "IaC",
                "Automation",
                "Consistency",
                "Repeatability",
              ],
              example:
                "AWS CloudFormation and Terraform are popular IaC tools for provisioning AWS resources.",
              quiz: {
                text: "What is the primary benefit of Infrastructure as Code (IaC)?",
                type: "multiple-choice",
                options: [
                  "Enabling consistent and repeatable deployments",
                  "Reducing infrastructure costs",
                  "Automating security updates",
                  "Improving application performance",
                ],
                answer: "Enabling consistent and repeatable deployments",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#2#INFOBIT#2",
              text: "Continuous Integration and Continuous Deployment (CI/CD) are practices that automate the build, testing, and deployment processes, enabling faster and more reliable software delivery.",
              keywords: [
                "Continuous Integration",
                "Continuous Deployment",
                "CI/CD",
                "Automation",
                "Software Delivery",
              ],
              example: "",
              quiz: {
                text: "Which of the following is NOT a benefit of Continuous Integration and Continuous Deployment (CI/CD)?",
                type: "multiple-choice",
                options: [
                  "Reducing deployment risks",
                  "Enabling faster software delivery",
                  "Automating infrastructure provisioning",
                  "Improving software quality through automated testing",
                ],
                answer: "Automating infrastructure provisioning",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#2#INFOBIT#3",
              text: "Blue/Green Deployments involve running two identical production environments, allowing for seamless traffic switching between the environments during deployments.",
              keywords: [
                "Blue/Green Deployments",
                "Zero Downtime",
                "Traffic Switching",
                "Production Environments",
                "Seamless Deployments",
              ],
              example: "",
              quiz: {
                text: "True or False: Blue/Green Deployments involve running two identical production environments, allowing for seamless traffic switching between the environments during deployments.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#2#INFOBIT#4",
              text: "Canary Deployments involve gradually rolling out changes to a small subset of users or servers before deploying to the entire production environment, reducing risk and enabling rollbacks if necessary.",
              keywords: [
                "Canary Deployments",
                "Gradual Rollout",
                "Risk Mitigation",
                "Rollback",
                "Production Environment",
              ],
              example: "",
              quiz: {
                text: "What is the primary advantage of Canary Deployments?",
                type: "multiple-choice",
                options: [
                  "Reducing risk and enabling rollbacks if necessary",
                  "Improving application performance",
                  "Automating infrastructure provisioning",
                  "Reducing deployment costs",
                ],
                answer: "Reducing risk and enabling rollbacks if necessary",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#2#INFOBIT#5",
              text: "A/B Testing involves running experiments by exposing different versions of an application or feature to different user segments, enabling data-driven decision-making and optimizations.",
              keywords: [
                "A/B Testing",
                "Experimentation",
                "User Segmentation",
                "Data-Driven Decisions",
                "Optimization",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of A/B Testing in AWS deployments?",
                type: "multiple-choice",
                options: [
                  "Enabling data-driven decision-making and optimizations",
                  "Automating infrastructure provisioning",
                  "Reducing deployment costs",
                  "Improving application security",
                ],
                answer: "Enabling data-driven decision-making and optimizations",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Networking and Security",
          searchResult: {
            webResult: {
              title: "Security best practices for your VPC - AWS Documentation",
              description:
                "VPC security best practices: use multi-AZ, security groups, ACLs, IAM, Flow Logs, Network Access Analyzer, Firewall, and GuardDuty.",
              url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS re:Inforce 2019: The Fundamentals of AWS Cloud Security (FND209-R) by Amazon Web Services 156,120 views 5 years ago 48 minutes",
                duration: "48 minutes, 5 seconds",
              },
              channel: {
                name: "Amazon Web Services",
                link: "https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg",
                id: "UCd6MoB9NC6uYN2grvUNT-Zg",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=-ObImxw1PmI",
              type: "video",
              title: "AWS re:Inforce 2019: The Fundamentals of AWS Cloud Security (FND209-R)",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/-ObImxw1PmI/mqdefault_6s.webp?du=3000&sqp=CJCL_LUG&rs=AOn4CLDO30DaD_wka5JbwskKiiPA3rT9eA",
                height: 180.0,
              },
              duration: "48:05",
              publishedTime: "5 years ago",
              id: "-ObImxw1PmI",
              viewCount: {
                short: "156K views",
                text: "156,120 views",
              },
              thumbnails: [
                {
                  width: 480.0,
                  url: "https://i.ytimg.com/vi/-ObImxw1PmI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjrNJZUGMqI4XzIQhtiAw9-fQ1Lg",
                  height: 270.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "The services that make up ",
                },
                {
                  text: "AWS",
                  bold: true,
                },
                {
                  text: " are many and varied, but the set of concepts you need to ",
                },
                {
                  text: "secure",
                  bold: true,
                },
                {
                  text: " your data and infrastructure is ...",
                },
              ],
            },
          },
          topicNumber: 6.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#3#INFOBIT#1",
              text: "VPC Peering and Transit Gateways enable secure and scalable connectivity between multiple Virtual Private Clouds (VPCs) or on-premises networks.",
              keywords: [
                "VPC Peering",
                "Transit Gateways",
                "VPC Connectivity",
                "On-Premises Connectivity",
                "Scalability",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of VPC Peering and Transit Gateways in AWS?",
                type: "multiple-choice",
                options: [
                  "Enabling secure and scalable connectivity between multiple Virtual Private Clouds (VPCs) or on-premises networks",
                  "Providing dedicated network connections to AWS",
                  "Controlling inbound and outbound traffic to AWS resources",
                  "Protecting web applications from common web exploits and bots",
                ],
                answer:
                  "Enabling secure and scalable connectivity between multiple Virtual Private Clouds (VPCs) or on-premises networks",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#3#INFOBIT#2",
              text: "AWS Direct Connect provides a dedicated network connection from your premises to AWS, offering consistent network performance and reduced costs compared to internet-based connections.",
              keywords: [
                "AWS Direct Connect",
                "Dedicated Network Connection",
                "Consistent Performance",
                "Cost Reduction",
                "On-Premises Connectivity",
              ],
              example: "",
              quiz: {
                text: "Which of the following is NOT a benefit of AWS Direct Connect?",
                type: "multiple-choice",
                options: [
                  "Improved application performance",
                  "Consistent network performance",
                  "Reduced costs compared to internet-based connections",
                  "Dedicated network connection from your premises to AWS",
                ],
                answer: "Improved application performance",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#3#INFOBIT#3",
              text: "AWS Security Groups and Network ACLs are virtual firewalls that control inbound and outbound traffic to and from AWS resources, ensuring secure network communication.",
              keywords: [
                "Security Groups",
                "Network ACLs",
                "Virtual Firewalls",
                "Traffic Control",
                "Network Security",
              ],
              example: "",
              quiz: {
                text: "True or False: AWS Security Groups and Network ACLs are virtual firewalls that control inbound and outbound traffic to and from AWS resources, ensuring secure network communication.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#3#INFOBIT#4",
              text: "The AWS Web Application Firewall (WAF) protects web applications from common web exploits and bots, helping to maintain application availability and security.",
              keywords: [
                "AWS WAF",
                "Web Application Firewall",
                "Web Exploits",
                "Bot Protection",
                "Application Security",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of the AWS Web Application Firewall (WAF)?",
                type: "multiple-choice",
                options: [
                  "Protecting web applications from common web exploits and bots, helping to maintain application availability and security",
                  "Controlling inbound and outbound traffic to AWS resources",
                  "Providing dedicated network connections to AWS",
                  "Enabling secure and scalable connectivity between multiple Virtual Private Clouds (VPCs)",
                ],
                answer:
                  "Protecting web applications from common web exploits and bots, helping to maintain application availability and security",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#2#TOPIC#3#INFOBIT#5",
              text: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications against infrastructure-level DDoS attacks.",
              keywords: [
                "AWS Shield",
                "DDoS Protection",
                "Infrastructure Security",
                "Application Availability",
                "Managed Service",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of AWS Shield?",
                type: "multiple-choice",
                options: [
                  "Safeguarding applications against infrastructure-level DDoS attacks",
                  "Controlling inbound and outbound traffic to AWS resources",
                  "Providing dedicated network connections to AWS",
                  "Enabling secure and scalable connectivity between multiple Virtual Private Clouds (VPCs)",
                ],
                answer: "Safeguarding applications against infrastructure-level DDoS attacks",
              },
              userAnswer: "",
            },
          ],
        },
      ],
    },
    {
      phaseDescription: "AWS Advanced Services and Use Cases",
      topicCount: 3.0,
      phaseNumber: 3.0,
      topics: [
        {
          topicName: "AWS Serverless Computing",
          searchResult: {
            webResult: {
              title: "Sample architecture patterns - AWS Serverless Multi-Tier ...",
              description:
                "You can implement popular architecture patterns using API Gateway and AWS Lambda as your logic tier. This whitepaper includes the most popular architecture ...",
              url: "https://docs.aws.amazon.com/whitepapers/latest/serverless-multi-tier-architectures-api-gateway-lambda/sample-architecture-patterns.html",
            },
            videoResult: {
              accessibility: {
                title:
                  "Serverless was a big mistake... says Amazon by Fireship 1,635,074 views 1 year ago 3 minutes, 48 seconds",
                duration: "3 minutes, 48 seconds",
              },
              channel: {
                name: "Fireship",
                link: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA",
                id: "UCsBjURrPoezykLs9EqgamOA",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=qQk94CjRvIs",
              type: "video",
              title: "Serverless was a big mistake... says Amazon",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/qQk94CjRvIs/mqdefault_6s.webp?du=3000&sqp=CIqS_LUG&rs=AOn4CLAJWkDoZxNVDrjNYjTyLzKccvbqCA",
                height: 180.0,
              },
              duration: "3:48",
              publishedTime: "1 year ago",
              id: "qQk94CjRvIs",
              viewCount: {
                short: "1.6M views",
                text: "1,635,074 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/qQk94CjRvIs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpCxbphwIrxKaQP8_CK-vYDzS5vg",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/qQk94CjRvIs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcunpgPj7qwKsn2VOMEYs6eFb7Cw",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "Amazon",
                  bold: true,
                },
                {
                  text: " Prime Video released an article explaining how they saved 90% on cloud computing costs by switching from ...",
                },
              ],
            },
          },
          topicNumber: 7.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#1#INFOBIT#1",
              text: "AWS Lambda is a serverless computing service that allows you to run code without provisioning or managing servers. It automatically scales and charges you based on the compute time consumed.",
              keywords: ["serverless", "event-driven", "auto-scaling", "pay-per-use"],
              example:
                "A Lambda function can be triggered by an S3 upload event to process the uploaded file.",
              quiz: {
                text: "What is the primary benefit of using AWS Lambda?",
                type: "multiple-choice",
                options: [
                  "You don't have to provision or manage servers",
                  "It provides automatic scaling",
                  "You only pay for the compute time consumed",
                  "All of the above",
                ],
                answer: "All of the above",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#1#INFOBIT#2",
              text: "AWS API Gateway is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs at any scale. It acts as the front door for serverless applications, handling all API traffic.",
              keywords: ["API management", "serverless", "traffic handling", "security"],
              example: "",
              quiz: {
                text: "True or False: AWS API Gateway is used to handle all API traffic for serverless applications.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#1#INFOBIT#3",
              text: "AWS Step Functions is a serverless function orchestrator that allows you to coordinate multiple AWS services into serverless workflows. It can sequence AWS Lambda functions and integrate with other AWS services.",
              keywords: ["serverless workflows", "function orchestration", "service integration"],
              example:
                "A Step Function can orchestrate a workflow involving Lambda functions, SQS queues, and SNS topics.",
              quiz: {
                text: "Which AWS service is used to orchestrate multiple AWS services into serverless workflows?",
                type: "multiple-choice",
                options: ["AWS Lambda", "AWS Step Functions", "AWS API Gateway", "AWS SAM"],
                answer: "AWS Step Functions",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#1#INFOBIT#4",
              text: "The AWS Serverless Application Model (SAM) is an open-source framework that simplifies building serverless applications on AWS. It provides a way to define and package serverless resources using a simple syntax.",
              keywords: ["serverless applications", "resource packaging", "infrastructure as code"],
              example: "",
              quiz: {
                text: "What is the purpose of the AWS Serverless Application Model (SAM)?",
                type: "multiple-choice",
                options: [
                  "To simplify building serverless applications on AWS",
                  "To define and package serverless resources",
                  "To provide a syntax for infrastructure as code",
                  "All of the above",
                ],
                answer: "All of the above",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#1#INFOBIT#5",
              text: "Serverless patterns and best practices involve designing applications with event-driven architectures, stateless and ephemeral compute, and managed services to reduce operational overhead and costs.",
              keywords: ["event-driven", "stateless", "managed services", "cost optimization"],
              example: "",
              quiz: {
                text: "Which of the following is NOT a best practice for serverless applications?",
                type: "multiple-choice",
                options: [
                  "Event-driven architectures",
                  "Stateful compute",
                  "Managed services",
                  "Cost optimization",
                ],
                answer: "Stateful compute",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Data Services",
          searchResult: {
            webResult: {
              title: "Cloud Storage on AWS",
              description:
                "Millions of customers use AWS storage services to transform their business, increase agility, reduce costs, and accelerate innovation.",
              url: "https://aws.amazon.com/products/storage/",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS Storage Services by ListenToLearn 1,670 views 3 years ago 6 minutes, 37 seconds",
                duration: "6 minutes, 37 seconds",
              },
              channel: {
                name: "ListenToLearn",
                link: "https://www.youtube.com/channel/UCO7fsTdoeXMUvrW89J2xjHw",
                id: "UCO7fsTdoeXMUvrW89J2xjHw",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/04OFlk7u14fcHkM1QRI0Cokjy0o_oeZ3D9oL9TeNHQBvkF3NGV3Ldn6EWKCM1zlu-faC9IaBKg=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=SzRmjUGq_dQ",
              type: "video",
              title: "AWS Storage Services",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/SzRmjUGq_dQ/mqdefault_6s.webp?du=3000&sqp=CPCK_LUG&rs=AOn4CLDdzt5cEySDp6Bm7uYaH7tRmBVlYw",
                height: 180.0,
              },
              duration: "6:37",
              publishedTime: "3 years ago",
              id: "SzRmjUGq_dQ",
              viewCount: {
                short: "1.6K views",
                text: "1,670 views",
              },
              thumbnails: [
                {
                  width: 480.0,
                  url: "https://i.ytimg.com/vi/SzRmjUGq_dQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa1KuLylr42fQmCUkav1Yn5D8PfQ",
                  height: 270.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "Overview of ",
                },
                {
                  text: "AWS Storage Services",
                  bold: true,
                },
                {
                  text: " Cloud Storage: https://youtu.be/3hqlq67mDYw.",
                },
              ],
            },
          },
          topicNumber: 8.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#2#INFOBIT#1",
              text: "Amazon RDS (Relational Database Service) is a managed relational database service that supports various database engines like MySQL, PostgreSQL, Oracle, and SQL Server.",
              keywords: ["relational databases", "managed service", "database engines"],
              example: "",
              quiz: {
                text: "What type of database service is Amazon RDS?",
                type: "multiple-choice",
                options: ["NoSQL", "Relational", "Data Warehousing", "In-memory"],
                answer: "Relational",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#2#INFOBIT#2",
              text: "Amazon DynamoDB is a fully managed, serverless NoSQL database service that provides fast and predictable performance with seamless scalability.",
              keywords: ["NoSQL", "serverless", "scalability", "performance"],
              example:
                "DynamoDB is well-suited for applications with high traffic and unpredictable data models.",
              quiz: {
                text: "True or False: Amazon DynamoDB is a serverless NoSQL database service.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#2#INFOBIT#3",
              text: "Amazon Redshift is a fully managed, petabyte-scale data warehousing service that allows you to analyze large datasets using SQL and BI tools.",
              keywords: ["data warehousing", "big data", "SQL", "BI tools"],
              example: "",
              quiz: {
                text: "Which AWS service is designed for analyzing large datasets using SQL and BI tools?",
                type: "multiple-choice",
                options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Athena"],
                answer: "Amazon Redshift",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#2#INFOBIT#4",
              text: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. It's serverless, so there's no infrastructure to manage.",
              keywords: ["interactive querying", "serverless", "S3", "SQL"],
              example: "",
              quiz: {
                text: "What is the primary advantage of using Amazon Athena?",
                type: "multiple-choice",
                options: [
                  "It's a serverless service",
                  "It allows querying data in Amazon S3",
                  "It uses standard SQL",
                  "All of the above",
                ],
                answer: "All of the above",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#2#INFOBIT#5",
              text: "AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics. It can automatically discover data and data formats.",
              keywords: ["ETL", "data preparation", "data discovery", "analytics"],
              example: "",
              quiz: {
                text: "Which AWS service is designed for extract, transform, and load (ETL) operations?",
                type: "multiple-choice",
                options: ["AWS Glue", "Amazon Redshift", "Amazon Athena", "Amazon RDS"],
                answer: "AWS Glue",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Machine Learning and AI",
          searchResult: {
            webResult: {
              title: "Machine Learning (ML) on AWS - ML Models and Tools",
              description:
                "AWS helps you innovate with machine learning (ML) at scale with the most comprehensive set of ML services, infrastructure, and deployment resources. From the ...",
              url: "https://aws.amazon.com/ai/machine-learning/",
            },
            videoResult: {
              accessibility: {
                title:
                  "🤖AWS SageMaker in 10 Minutes! (Artificial Intelligence & Machine Learning with Amazon Web Services) by Prof. Ryan Ahmed 95,149 views 4 years ago 10 minutes, 47 seconds",
                duration: "10 minutes, 47 seconds",
              },
              channel: {
                name: "Prof. Ryan Ahmed",
                link: "https://www.youtube.com/channel/UC76VWNgXnU6z0RSPGwSkNIg",
                id: "UC76VWNgXnU6z0RSPGwSkNIg",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/W-nsDwR3dvvxnfuewxOf-mVABhccg7a_s32I-odjYbFo-Hrp0y_oEikiGi4RGVVhkH15oZyf6g=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=pfjhNe1M2t4",
              type: "video",
              title:
                "🤖AWS SageMaker in 10 Minutes! (Artificial Intelligence & Machine Learning with Amazon Web Services)",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/pfjhNe1M2t4/mqdefault_6s.webp?du=3000&sqp=CJ6X_LUG&rs=AOn4CLDfT2UjagPENMpXZlP5oc8TXfTpGg",
                height: 180.0,
              },
              duration: "10:47",
              publishedTime: "4 years ago",
              id: "pfjhNe1M2t4",
              viewCount: {
                short: "95K views",
                text: "95,149 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/pfjhNe1M2t4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoHMqzOA0-eqA_rGh0zyML9b0WbA",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/pfjhNe1M2t4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCqmYXZx2NjX1jlDLx3fjj4-Pgpg",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "In this video, I will provide an overview/walk through of ",
                },
                {
                  text: "AWS",
                  bold: true,
                },
                {
                  text: " SageMaker in 10 minutes! If you like this video, please check out the ...",
                },
              ],
            },
          },
          topicNumber: 9.0,
          infobitCount: 5.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#3#INFOBIT#1",
              text: "Amazon SageMaker is a fully managed machine learning service that enables developers and data scientists to build, train, and deploy machine learning models quickly.",
              keywords: [
                "machine learning",
                "model building",
                "model training",
                "model deployment",
              ],
              example: "",
              quiz: {
                text: "What is the primary purpose of Amazon SageMaker?",
                type: "multiple-choice",
                options: [
                  "To build, train, and deploy machine learning models",
                  "To analyze images and videos",
                  "To perform speech recognition",
                  "To perform natural language processing",
                ],
                answer: "To build, train, and deploy machine learning models",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#3#INFOBIT#2",
              text: "Amazon Rekognition is a deep learning-based image and video analysis service that can identify objects, people, text, scenes, and activities in images and videos.",
              keywords: [
                "image analysis",
                "video analysis",
                "object detection",
                "facial recognition",
              ],
              example:
                "Rekognition can be used to moderate user-uploaded images for inappropriate content.",
              quiz: {
                text: "True or False: Amazon Rekognition can identify objects, people, text, scenes, and activities in images and videos.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#3#INFOBIT#3",
              text: "Amazon Transcribe is an automatic speech recognition service that makes it easy to add speech-to-text capabilities to your applications.",
              keywords: ["speech recognition", "speech-to-text", "transcription", "audio analysis"],
              example: "",
              quiz: {
                text: "Which AWS service is used for automatic speech recognition and transcription?",
                type: "multiple-choice",
                options: [
                  "Amazon Polly",
                  "Amazon Transcribe",
                  "Amazon Comprehend",
                  "Amazon SageMaker",
                ],
                answer: "Amazon Transcribe",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#3#INFOBIT#4",
              text: "Amazon Polly is a text-to-speech service that uses advanced deep learning technologies to synthesize natural-sounding human speech from text.",
              keywords: ["text-to-speech", "speech synthesis", "natural language processing"],
              example:
                "Polly can be used to create audio books or voice interfaces for applications.",
              quiz: {
                text: "What is the primary use case for Amazon Polly?",
                type: "multiple-choice",
                options: [
                  "Text-to-speech and speech synthesis",
                  "Speech recognition and transcription",
                  "Natural language processing and text analysis",
                  "Image and video analysis",
                ],
                answer: "Text-to-speech and speech synthesis",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#3#TOPIC#3#INFOBIT#5",
              text: "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text.",
              keywords: [
                "natural language processing",
                "text analysis",
                "sentiment analysis",
                "entity recognition",
              ],
              example: "",
              quiz: {
                text: "Which AWS service is designed for natural language processing and text analysis?",
                type: "multiple-choice",
                options: [
                  "Amazon Rekognition",
                  "Amazon Polly",
                  "Amazon Transcribe",
                  "Amazon Comprehend",
                ],
                answer: "Amazon Comprehend",
              },
              userAnswer: "",
            },
          ],
        },
      ],
    },
    {
      phaseDescription: "AWS Certification and Career Advancement",
      topicCount: 3.0,
      phaseNumber: 4.0,
      topics: [
        {
          topicName: "AWS Certification Paths",
          searchResult: {
            webResult: {
              title: "AWS Certification - Validate AWS Cloud Skills",
              description:
                "Role-based certifications that validate advanced skills and knowledge required to design secure, optimized, and modernized applications and to automate ...",
              url: "https://aws.amazon.com/certification/",
            },
            videoResult: {
              accessibility: {
                title:
                  "The Best AWS Certification Learning Paths (Roadmap by AWS) by Tech With Lucy 117,386 views 9 months ago 7 minutes, 46 seconds",
                duration: "7 minutes, 46 seconds",
              },
              channel: {
                name: "Tech With Lucy",
                link: "https://www.youtube.com/channel/UCck1m7zZdzioiUzqhzpdNPw",
                id: "UCck1m7zZdzioiUzqhzpdNPw",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/kD6pQ3y43DmAb4kvphex5zNyrHWAWs4qyymK-7Nw-XhPDp74PwsfC2UKYDlrjCbgMDbTOjqaqw=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=FvCt7GxvRDA",
              type: "video",
              title: "The Best AWS Certification Learning Paths (Roadmap by AWS)",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/FvCt7GxvRDA/mqdefault_6s.webp?du=3000&sqp=CPCK_LUG&rs=AOn4CLBqu4aX_uuth3SF4AG-QgzMD0I4yQ",
                height: 180.0,
              },
              duration: "7:46",
              publishedTime: "9 months ago",
              id: "FvCt7GxvRDA",
              viewCount: {
                short: "117K views",
                text: "117,386 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/FvCt7GxvRDA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZHsvs1nStYZYT3EC1mdvBTm7HKQ",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/FvCt7GxvRDA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBioJjN_VUN0S1w2Ia5QSeg2Mmoug",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "Want to ",
                },
                {
                  text: "AWS Certified",
                  bold: true,
                },
                {
                  text: " but not sure where to start? In this video, I walk through the different Certification Learning ",
                },
                {
                  text: "Paths",
                  bold: true,
                },
                {
                  text: " ...",
                },
              ],
            },
          },
          topicNumber: 10.0,
          infobitCount: 4.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#1#INFOBIT#1",
              text: "AWS offers various certification paths to validate your cloud computing skills and knowledge. The AWS Certified Cloud Practitioner is an entry-level certification, while the Solutions Architect, Developer, and SysOps Administrator certifications are associate and professional-level certifications.",
              keywords: [
                "AWS",
                "Certification",
                "Cloud Practitioner",
                "Solutions Architect",
                "Developer",
              ],
              example:
                "For example, the AWS Certified Solutions Architect - Associate certification validates your ability to design and deploy scalable, fault-tolerant, and cost-effective applications on AWS.",
              quiz: {
                text: "Which of the following is an entry-level AWS certification?",
                type: "multiple-choice",
                options: [
                  "AWS Certified Solutions Architect - Associate",
                  "AWS Certified Developer - Associate",
                  "AWS Certified Cloud Practitioner",
                  "AWS Certified SysOps Administrator - Associate",
                ],
                answer: "AWS Certified Cloud Practitioner",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#1#INFOBIT#2",
              text: "AWS also offers specialty certifications in specific domains like Advanced Networking, Big Data, Security, and Machine Learning. These certifications demonstrate your expertise in a particular AWS service or skill set.",
              keywords: [
                "AWS",
                "Specialty Certifications",
                "Advanced Networking",
                "Big Data",
                "Security",
              ],
              example: "",
              quiz: {
                text: "True or False: AWS specialty certifications demonstrate expertise in specific domains like Advanced Networking, Big Data, Security, and Machine Learning.",
                type: "true-false",
                options: [],
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#1#INFOBIT#3",
              text: "The certification paths provide a structured way to develop and validate your AWS skills, enabling you to advance your career in cloud computing.",
              keywords: ["AWS", "Certification Paths", "Career Advancement", "Cloud Computing"],
              example: "",
              quiz: {
                text: "Which of the following statements best describes the purpose of AWS certification paths?",
                type: "multiple-choice",
                options: [
                  "To validate your cloud computing skills and knowledge",
                  "To provide a structured way to learn AWS services",
                  "To enable career advancement in cloud computing",
                  "All of the above",
                ],
                answer: "All of the above",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#1#INFOBIT#4",
              text: "Obtaining AWS certifications demonstrates your commitment to professional development and can increase your chances of landing AWS-related job roles.",
              keywords: ["AWS Certifications", "Professional Development", "Job Opportunities"],
              example: "",
              quiz: {
                text: "How can obtaining AWS certifications benefit your career?",
                type: "multiple-choice",
                options: [
                  "It demonstrates your commitment to professional development",
                  "It increases your chances of landing AWS-related job roles",
                  "It provides a competitive advantage in the job market",
                  "All of the above",
                ],
                answer: "All of the above",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Career Opportunities",
          searchResult: {
            webResult: {
              title: "Cloud computing jobs - Working at AWS | AWS Careers",
              description:
                "Working at AWS is different – because AWS is different. We hire talented people and give them the tools and support that lets them change how the world works.",
              url: "https://aws.amazon.com/careers/",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS In 5 Minutes | What Is AWS? | AWS Tutorial For Beginners | AWS Training | Simplilearn by Simplilearn 857,480 views 4 years ago 5 minutes, 30 seconds",
                duration: "5 minutes, 30 seconds",
              },
              channel: {
                name: "Simplilearn",
                link: "https://www.youtube.com/channel/UCsvqVGtbbyHaMoevxPAq9Fg",
                id: "UCsvqVGtbbyHaMoevxPAq9Fg",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=3XFODda6YXo",
              type: "video",
              title:
                "AWS In 5 Minutes | What Is AWS? | AWS Tutorial For Beginners | AWS Training | Simplilearn",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/3XFODda6YXo/mqdefault_6s.webp?du=3000&sqp=CICL_LUG&rs=AOn4CLABijexeyZzXZrR-7viv70_Rnat6Q",
                height: 180.0,
              },
              duration: "5:30",
              publishedTime: "4 years ago",
              id: "3XFODda6YXo",
              viewCount: {
                short: "857K views",
                text: "857,480 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/3XFODda6YXo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOAwmf3EGzgop3bC_y93-81Z0DCg",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/3XFODda6YXo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDiDRkrb2DoDEhCS3qWP-8bRA3Rw",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "Don't forget to take the quiz at 03:57! ✓Subscribe to our Channel to learn more about the top Technologies: https://bit.ly/2VT4WtH ...",
                },
              ],
            },
          },
          topicNumber: 11.0,
          infobitCount: 4.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#2#INFOBIT#1",
              text: "AWS offers a wide range of career opportunities for professionals with cloud computing skills. Some popular roles include AWS Solutions Architect, DevOps Engineer, Cloud Engineer, Data Engineer, and Machine Learning Engineer.",
              keywords: [
                "AWS",
                "Career Opportunities",
                "Solutions Architect",
                "DevOps Engineer",
                "Cloud Engineer",
              ],
              example: "",
              quiz: {
                text: "Which of the following is NOT a popular AWS career role?",
                type: "multiple-choice",
                options: [
                  "AWS Solutions Architect",
                  "DevOps Engineer",
                  "Cloud Engineer",
                  "Network Administrator",
                ],
                answer: "Network Administrator",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#2#INFOBIT#2",
              text: "AWS Solutions Architects design and implement scalable, secure, and cost-effective cloud solutions using AWS services. They work closely with clients to understand their requirements and provide architectural guidance.",
              keywords: ["AWS Solutions Architect", "Cloud Solutions", "Architectural Guidance"],
              example:
                "For example, a Solutions Architect might design a highly available and fault-tolerant web application architecture using AWS services like EC2, Auto Scaling, and Elastic Load Balancing.",
              quiz: {
                text: "What is the primary responsibility of an AWS Solutions Architect?",
                type: "multiple-choice",
                options: [
                  "Designing and implementing scalable, secure, and cost-effective cloud solutions",
                  "Automating software development and deployment processes",
                  "Building and maintaining cloud infrastructure",
                  "Developing applications using AWS services",
                ],
                answer:
                  "Designing and implementing scalable, secure, and cost-effective cloud solutions",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#2#INFOBIT#3",
              text: "AWS DevOps Engineers are responsible for automating and streamlining the software development and deployment processes on AWS. They use tools like AWS CodePipeline, CodeDeploy, and CloudFormation to implement continuous integration and continuous delivery (CI/CD) pipelines.",
              keywords: ["AWS DevOps Engineer", "CI/CD", "Automation", "AWS Tools"],
              example: "",
              quiz: {
                text: "Which AWS service(s) might a DevOps Engineer use to implement a CI/CD pipeline? (Select all that apply)",
                type: "multiple-choice",
                options: ["AWS CodePipeline", "AWS CodeDeploy", "AWS CloudFormation", "AWS Lambda"],
                answer: ["AWS CodePipeline", "AWS CodeDeploy", "AWS CloudFormation"],
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#2#INFOBIT#4",
              text: "AWS Cloud Engineers focus on designing, building, and maintaining cloud infrastructure on AWS. They have expertise in AWS services like VPC, EC2, EBS, and S3, and ensure the infrastructure is secure, scalable, and cost-effective.",
              keywords: [
                "AWS Cloud Engineer",
                "Cloud Infrastructure",
                "AWS Services",
                "Security",
                "Scalability",
              ],
              example: "",
              quiz: {
                text: "True or False: AWS Cloud Engineers focus on ensuring the cloud infrastructure is secure, scalable, and cost-effective.",
                type: "true-false",
                options: [],
                answer: "True",
              },
              userAnswer: "",
            },
          ],
        },
        {
          topicName: "AWS Best Practices and Case Studies",
          searchResult: {
            webResult: {
              title: "Customer Success Stories: Case Studies, Videos ...",
              description:
                "Discover how customers across industries increase agility, optimize costs, and accelerate innovation using AWS and generative AI.",
              url: "https://aws.amazon.com/solutions/case-studies/",
            },
            videoResult: {
              accessibility: {
                title:
                  "AWS re:Invent 2019: Best practices for building your business on AWS IQ (DOP212) by AWS Events 3,241 views 4 years ago 45 minutes",
                duration: "45 minutes, 23 seconds",
              },
              channel: {
                name: "AWS Events",
                link: "https://www.youtube.com/channel/UCdoadna9HFHsxXWhafhNvKw",
                id: "UCdoadna9HFHsxXWhafhNvKw",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/yYEgUBYFFIXdz_bvyNBEvOHfBeWAhhNjuiylZaRWUsVE2Mposv2nn2gukykNnBCb1tWWCFzM=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=DzQQVDVBiVQ",
              type: "video",
              title:
                "AWS re:Invent 2019: Best practices for building your business on AWS IQ (DOP212)",
              shelfTitle: null,
              richThumbnail: null,
              duration: "45:23",
              publishedTime: "4 years ago",
              id: "DzQQVDVBiVQ",
              viewCount: {
                short: "3.2K views",
                text: "3,241 views",
              },
              thumbnails: [
                {
                  width: 480.0,
                  url: "https://i.ytimg.com/vi/DzQQVDVBiVQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS6lPYiQRwQwimSH7UrFeAQTAUyw",
                  height: 270.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "In this session, we share ",
                },
                {
                  text: "best practices",
                  bold: true,
                },
                {
                  text: " for using ",
                },
                {
                  text: "AWS",
                  bold: true,
                },
                {
                  text: " IQ to complete on-demand project work and supplement your team's ...",
                },
              ],
            },
          },
          topicNumber: 12.0,
          infobitCount: 4.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#3#INFOBIT#1",
              text: "AWS provides various resources and tools to help organizations follow best practices and learn from real-world case studies. The AWS Well-Architected Framework Review helps evaluate workloads against AWS best practices across operational excellence, security, reliability, performance efficiency, and cost optimization pillars.",
              keywords: [
                "AWS Well-Architected Framework",
                "Best Practices",
                "Operational Excellence",
                "Security",
                "Reliability",
              ],
              example: "",
              quiz: {
                text: "What is the purpose of the AWS Well-Architected Framework Review?",
                type: "multiple-choice",
                options: [
                  "To evaluate workloads against AWS best practices across various pillars",
                  "To provide real-time guidance on cost optimization and security",
                  "To showcase successful AWS implementations by organizations",
                  "To connect AWS customers with certified partners",
                ],
                answer: "To evaluate workloads against AWS best practices across various pillars",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#3#INFOBIT#2",
              text: "AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision resources following AWS best practices, optimize costs, and improve security and fault tolerance.",
              keywords: ["AWS Trusted Advisor", "Cost Optimization", "Security", "Fault Tolerance"],
              example:
                "For example, Trusted Advisor might recommend resizing underutilized EC2 instances to save costs or enabling multi-factor authentication for root user accounts to enhance security.",
              quiz: {
                text: "Which of the following pillars is NOT part of the AWS Well-Architected Framework?",
                type: "multiple-choice",
                options: ["Operational Excellence", "Security", "Reliability", "Scalability"],
                answer: "Scalability",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#3#INFOBIT#3",
              text: "AWS Case Studies and Success Stories showcase how organizations across various industries have successfully implemented AWS solutions to address their business challenges and achieve their goals.",
              keywords: [
                "AWS Case Studies",
                "Success Stories",
                "Business Challenges",
                "AWS Solutions",
              ],
              example: "",
              quiz: {
                text: "What is the purpose of AWS Trusted Advisor?",
                type: "multiple-choice",
                options: [
                  "To provide real-time guidance on cost optimization, security, and fault tolerance",
                  "To evaluate workloads against AWS best practices",
                  "To showcase successful AWS implementations by organizations",
                  "To connect AWS customers with certified partners",
                ],
                answer:
                  "To provide real-time guidance on cost optimization, security, and fault tolerance",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#4#TOPIC#3#INFOBIT#4",
              text: "The AWS Partner Network (APN) connects AWS customers with certified partners who can provide professional services, consulting, and technology solutions on AWS. The APN also offers training and resources to help partners build expertise on AWS.",
              keywords: [
                "AWS Partner Network",
                "Professional Services",
                "Consulting",
                "Technology Solutions",
              ],
              example: "",
              quiz: {
                text: "True or False: The AWS Partner Network (APN) connects AWS customers with certified partners who can provide professional services, consulting, and technology solutions on AWS.",
                type: "true-false",
                options: [],
                answer: "True",
              },
              userAnswer: "",
            },
          ],
        },
      ],
    },
    {
      phaseDescription: "final",
      topicCount: 15.0,
      phaseNumber: 5.0,
      topics: [
        {
          topicName: "Final Comprehensive Quiz",
          searchResult: {
            webResult: {
              title: "The Python Tutorial — Python 3.12.5 documentation",
              description:
                "This tutorial introduces the reader informally to the basic concepts and features of the Python language and system. It helps to have a Python interpreter handy ...",
              url: "https://docs.python.org/3/tutorial/index.html",
            },
            videoResult: {
              accessibility: {
                title:
                  "👩‍💻 Python for Beginners Tutorial by Kevin Stratvert 3,205,835 views 3 years ago 1 hour, 3 minutes",
                duration: "1 hour, 3 minutes, 21 seconds",
              },
              channel: {
                name: "Kevin Stratvert",
                link: "https://www.youtube.com/channel/UCfJT_eYDTmDE-ovKaxVE1ig",
                id: "UCfJT_eYDTmDE-ovKaxVE1ig",
                thumbnails: [
                  {
                    width: 68.0,
                    url: "https://yt3.ggpht.com/ytc/AIdro_lr4ES_dIDpNgSSrKh-AibkIGYafS2IaX2D1aA_8j_-QeIG=s68-c-k-c0x00ffffff-no-rj",
                    height: 68.0,
                  },
                ],
              },
              link: "https://www.youtube.com/watch?v=b093aqAZiPU",
              type: "video",
              title: "👩‍💻 Python for Beginners Tutorial",
              shelfTitle: null,
              richThumbnail: {
                width: 320.0,
                url: "https://i.ytimg.com/an_webp/b093aqAZiPU/mqdefault_6s.webp?du=3000&sqp=CNaC_LUG&rs=AOn4CLAA968RDsAdJ7AwsY8Lb6MSdTb3lQ",
                height: 180.0,
              },
              duration: "1:03:21",
              publishedTime: "3 years ago",
              id: "b093aqAZiPU",
              viewCount: {
                short: "3.2M views",
                text: "3,205,835 views",
              },
              thumbnails: [
                {
                  width: 360.0,
                  url: "https://i.ytimg.com/vi/b093aqAZiPU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMc52n3VeviTzlhsRCemDDz8l1Ow",
                  height: 202.0,
                },
                {
                  width: 720.0,
                  url: "https://i.ytimg.com/vi/b093aqAZiPU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG6MYAXELGegdhLlZJPKwwLierDA",
                  height: 404.0,
                },
              ],
              descriptionSnippet: [
                {
                  text: "In this step-by-step ",
                },
                {
                  text: "Python",
                  bold: true,
                },
                {
                  text: " for beginner's ",
                },
                {
                  text: "tutorial",
                  bold: true,
                },
                {
                  text: ", learn how you can get started ",
                },
                {
                  text: "programming",
                  bold: true,
                },
                {
                  text: " in ",
                },
                {
                  text: "Python",
                  bold: true,
                },
                {
                  text: ". In this video, I assume ...",
                },
              ],
            },
          },
          topicNumber: 1.0,
          infobitCount: 15.0,
          infoBits: [
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#1",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "What is the primary purpose of the AWS Well-Architected Framework?",
                type: "multiple-choice",
                options: [
                  "To provide guidance on designing and deploying reliable, secure, efficient, and cost-effective systems on AWS",
                  "To enforce strict rules for AWS resource usage",
                  "To automatically optimize AWS resource configurations",
                  "To provide a certification program for AWS architects",
                ],
                answer:
                  "To provide guidance on designing and deploying reliable, secure, efficient, and cost-effective systems on AWS",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#2",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "Which of the following is NOT a key principle of AWS architecture?",
                type: "multiple-choice",
                options: ["Scalability", "Elasticity", "Vendor Lock-in", "Cost Optimization"],
                answer: "Vendor Lock-in",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#3",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "True or False: Deploying applications across multiple Availability Zones (AZs) in a region can provide high availability and fault tolerance.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#4",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "Which of the following is NOT a critical aspect of AWS architecture?",
                type: "multiple-choice",
                options: ["Security", "Compliance", "Vendor Preference", "Data Protection"],
                answer: "Vendor Preference",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#5",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "What is the primary goal of cost optimization in AWS architecture?",
                type: "multiple-choice",
                options: [
                  "Selecting the right AWS services and resources, monitoring usage, and implementing cost-saving strategies to optimize spending",
                  "Minimizing AWS resource usage to reduce costs",
                  "Automatically scaling resources up and down based on demand",
                  "Implementing security measures to prevent unauthorized resource usage",
                ],
                answer:
                  "Selecting the right AWS services and resources, monitoring usage, and implementing cost-saving strategies to optimize spending",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#6",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "Which of the following is NOT a benefit of Continuous Integration and Continuous Deployment (CI/CD)?",
                type: "multiple-choice",
                options: [
                  "Reducing deployment risks",
                  "Enabling faster software delivery",
                  "Automating infrastructure provisioning",
                  "Improving software quality through automated testing",
                ],
                answer: "Automating infrastructure provisioning",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#7",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "True or False: Blue/Green Deployments involve running two identical production environments, allowing for seamless traffic switching between the environments during deployments.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#8",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "What is the primary advantage of Canary Deployments?",
                type: "multiple-choice",
                options: [
                  "Reducing risk and enabling rollbacks if necessary",
                  "Improving application performance",
                  "Automating infrastructure provisioning",
                  "Reducing deployment costs",
                ],
                answer: "Reducing risk and enabling rollbacks if necessary",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#9",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "What is the primary purpose of A/B Testing in AWS deployments?",
                type: "multiple-choice",
                options: [
                  "Enabling data-driven decision-making and optimizations",
                  "Automating infrastructure provisioning",
                  "Reducing deployment costs",
                  "Improving application security",
                ],
                answer: "Enabling data-driven decision-making and optimizations",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#10",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "Which of the following is NOT a best practice for serverless applications?",
                type: "multiple-choice",
                options: [
                  "Event-driven architectures",
                  "Stateful compute",
                  "Managed services",
                  "Cost optimization",
                ],
                answer: "Stateful compute",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#11",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "What is the primary purpose of Amazon SageMaker?",
                type: "multiple-choice",
                options: [
                  "To build, train, and deploy machine learning models",
                  "To analyze images and videos",
                  "To perform speech recognition",
                  "To perform natural language processing",
                ],
                answer: "To build, train, and deploy machine learning models",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#12",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "True or False: Amazon Rekognition can identify objects, people, text, scenes, and activities in images and videos.",
                type: "true-false",
                options: "",
                answer: "True",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#13",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "Which AWS service is used for automatic speech recognition and transcription?",
                type: "multiple-choice",
                options: [
                  "Amazon Polly",
                  "Amazon Transcribe",
                  "Amazon Comprehend",
                  "Amazon SageMaker",
                ],
                answer: "Amazon Transcribe",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#14",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "What is the primary use case for Amazon Polly?",
                type: "multiple-choice",
                options: [
                  "Text-to-speech and speech synthesis",
                  "Speech recognition and transcription",
                  "Natural language processing and text analysis",
                  "Image and video analysis",
                ],
                answer: "Text-to-speech and speech synthesis",
              },
              userAnswer: "",
            },
            {
              infoBitId: "a4e4aec4-7401-4eb1-9489-ea9a7703b505#PHASE#5#TOPIC#1#INFOBIT#15",
              text: "infobit",
              keywords: ["keyword"],
              example: "example",
              quiz: {
                text: "Which AWS service is designed for natural language processing and text analysis?",
                type: "multiple-choice",
                options: [
                  "Amazon Rekognition",
                  "Amazon Polly",
                  "Amazon Transcribe",
                  "Amazon Comprehend",
                ],
                answer: "Amazon Comprehend",
              },
              userAnswer: "",
            },
          ],
        },
      ],
    },
  ],
  status: "ongoing",
};

const default_roadmap = {
  title: "AWS Cloud Computing Mastery Roadmap",
  status: "ongoing",
  description:
    "This roadmap covers the fundamentals of AWS cloud computing, progressing to advanced concepts and practical applications. By following this path, you will gain expertise in deploying, managing, and optimizing cloud infrastructure on AWS.",
  imageURL: "https://i.pinimg.com/736x/d4/74/7c/d4747cb7dcbecb5223b83355ea97a3be.jpg",
  estimatedLearningDuration: "TWO_WEEKS",
  goal: "Learn new skill and apply for new job",
  currentSkillLevel: "NO_EXPERIENCE",
  desiredSkillLevel: "ADVANCED",
  currentLesson: 1,
  currentPhase: 1,
  dailyTime: "ADVANCED",
  phases: [
    {
      phaseDescription: "Introduction to AWS Cloud Computing",
      topics: [
        {
          topicName: "AWS Overview",
          infoBits: [
            {
              text: "Cloud computing is the delivery of computing services over the internet, allowing users to access and use resources on-demand without the need for physical infrastructure. AWS (Amazon Web Services) is a comprehensive cloud computing platform that provides a wide range of services and global infrastructure.",
              keywords: [
                "cloud computing",
                "AWS",
                "on-demand",
                "global infrastructure",
                "services",
              ],
              example:
                "Instead of purchasing and maintaining physical servers, businesses can rent virtual servers from AWS and pay only for the resources they use.",
            },
            {
              text: "AWS offers various pricing models, including pay-as-you-go, reserved instances, and spot instances, allowing customers to optimize costs based on their usage patterns. AWS also prioritizes security and compliance, adhering to industry standards and regulations.",
              keywords: [
                "pricing models",
                "pay-as-you-go",
                "reserved instances",
                "spot instances",
                "security",
                "compliance",
              ],
            },
          ],
          topicNumber: 1,
          infobitCount: 2,
        },
        {
          topicName: "AWS Management Console",
          infoBits: [
            {
              text: "The AWS Management Console is a web-based interface that allows users to access and manage AWS services and resources. To use the console, you need to create an AWS account and set up AWS Identity and Access Management (IAM) for secure access and resource management.",
              keywords: [
                "AWS Management Console",
                "web-based interface",
                "AWS account",
                "IAM",
                "access management",
              ],
              example:
                "Through the AWS Management Console, you can launch and configure EC2 instances, create S3 buckets, and monitor your AWS resources.",
            },
            {
              text: "AWS Organizations is a service that helps you centrally manage and govern your AWS resources across multiple AWS accounts. It allows you to consolidate billing, apply service control policies, and manage access to AWS services and resources.",
              keywords: [
                "AWS Organizations",
                "centralized management",
                "multiple accounts",
                "billing consolidation",
                "service control policies",
              ],
            },
          ],
          topicNumber: 2,
          infobitCount: 2,
        },
        {
          topicName: "AWS Compute Services",
          infoBits: [
            {
              text: "Amazon Elastic Compute Cloud (EC2) is a web service that provides scalable computing capacity in the AWS cloud. It allows you to launch and manage virtual servers (instances) with various configurations, including CPU, memory, storage, and networking.",
              keywords: [
                "EC2",
                "virtual servers",
                "instances",
                "scalable computing",
                "configurations",
              ],
              example:
                "You can launch an EC2 instance with a specific operating system, configure security groups, and attach storage volumes to meet your application's requirements.",
            },
            {
              text: "AWS Lambda is a serverless computing service that allows you to run code without provisioning or managing servers. You can upload your code as functions, and AWS Lambda automatically runs and scales the functions based on incoming events or requests.",
              keywords: [
                "AWS Lambda",
                "serverless computing",
                "functions",
                "event-driven",
                "automatic scaling",
              ],
              example:
                "You can use AWS Lambda to process data from an S3 bucket or handle API requests without managing any underlying infrastructure.",
            },
          ],
          topicNumber: 3,
          infobitCount: 2,
        },
      ],
      quiz: {
        topicName: "Quiz",
        questions: [
          {
            text: "What is the primary role of HTML in web development?",
            type: "multiple-choice",
            options: [
              "Providing structure and content for web pages",
              "Controlling the presentation and styling of web pages",
              "Adding interactivity and dynamic behavior to web pages",
              "Enabling data communication between clients and servers",
            ],
            answer: "Providing structure and content for web pages",
          },
          {
            text: "True or False: CSS selectors are used to target specific HTML elements for styling.",
            type: "true-false",
            answer: "True",
          },
          {
            text: "What is the primary purpose of responsive design principles?",
            type: "multiple-choice",
            options: [
              "To ensure web pages adapt and display correctly across different devices and screen sizes",
              "To add interactivity and dynamic behavior to web pages",
              "To control the structure and content of web pages",
              "To enable data communication between clients and servers",
            ],
            answer:
              "To ensure web pages adapt and display correctly across different devices and screen sizes",
          },
        ],
        questionCount: 2,
      },
      phaseNumber: 1,
      topicCount: 3,
    },
    {
      phaseDescription: "AWS Storage and Databases",
      topics: [
        {
          topicName: "AWS Storage Services",
          infoBits: [
            {
              text: "Amazon Simple Storage Service (S3) is an object storage service that provides scalable, durable, and highly available data storage in the AWS Cloud.",
              keywords: ["object storage", "scalable", "durable", "highly available"],
              example:
                "S3 can be used to store and retrieve any amount of data, from websites and mobile applications to big data analytics and backup and archiving.",
            },
            {
              text: "Amazon Elastic Block Store (EBS) provides persistent block-level storage volumes for use with Amazon EC2 instances.",
              keywords: ["block storage", "persistent", "EC2 instances"],
              example:
                "EBS volumes can be used as primary storage for file systems, databases, or applications that require consistent and low-latency performance.",
            },
            {
              text: "Amazon Elastic File System (EFS) is a fully managed, scalable file system for use with AWS Cloud services and on-premises resources.",
              keywords: ["file system", "scalable", "managed service", "on-premises"],
            },
            {
              text: "AWS Storage Gateway is a hybrid cloud storage service that provides on-premises access to virtually unlimited cloud storage.",
              keywords: ["hybrid cloud", "on-premises", "cloud storage"],
            },
          ],
          topicNumber: 4,
          infobitCount: 4,
        },
        {
          topicName: "AWS Database Services",
          infoBits: [
            {
              text: "Amazon Relational Database Service (RDS) is a managed relational database service that supports various database engines, including MySQL, PostgreSQL, Oracle, and SQL Server.",
              keywords: [
                "relational database",
                "managed service",
                "MySQL",
                "PostgreSQL",
                "Oracle",
                "SQL Server",
              ],
            },
            {
              text: "Amazon DynamoDB is a fully managed, serverless NoSQL database service that provides fast and predictable performance with seamless scalability.",
              keywords: ["NoSQL", "serverless", "fast performance", "scalable"],
            },
            {
              text: "Amazon Redshift is a fully managed, petabyte-scale data warehousing service that uses columnar storage to deliver high-performance analytics.",
              keywords: ["data warehousing", "columnar storage", "high-performance analytics"],
            },
            {
              text: "Amazon ElastiCache is a fully managed, in-memory data store service that supports Redis and Memcached, providing low-latency access to data.",
              keywords: ["in-memory data store", "low-latency", "Redis", "Memcached"],
            },
          ],
          topicNumber: 5,
          infobitCount: 4,
        },
        {
          topicName: "Data Transfer and Migration",
          infoBits: [
            {
              text: "AWS DataSync is a data transfer service that simplifies moving large amounts of data to and from AWS storage services.",
              keywords: ["data transfer", "large data", "AWS storage services"],
            },
            {
              text: "AWS Transfer Family provides fully managed support for transferring files directly into and out of Amazon S3 or Amazon EFS using the SFTP, FTPS, and FTP protocols.",
              keywords: ["file transfer", "S3", "EFS", "SFTP", "FTPS", "FTP"],
            },
            {
              text: "AWS Snow Family is a collection of physical devices and services that help customers transfer large amounts of data into and out of the AWS Cloud.",
              keywords: ["physical devices", "large data transfer", "on-premises"],
            },
            {
              text: "AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS and partner services.",
              keywords: [
                "migration tracking",
                "application migrations",
                "AWS services",
                "partner services",
              ],
            },
          ],
          topicNumber: 6,
          infobitCount: 4,
        },
      ],
      phaseNumber: 2,
      topicCount: 3,
    },
    {
      phaseDescription: "AWS Networking and Content Delivery",
      topics: [
        {
          topicName: "AWS Networking Services",
          infoBits: [
            {
              text: "Amazon Virtual Private Cloud (VPC) is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
              keywords: ["Virtual", "Private", "Cloud", "Isolated", "Network"],
              example:
                "You can create a VPC with a public subnet for web servers and a private subnet for databases, ensuring secure communication between resources.",
            },
            {
              text: "AWS Direct Connect is a cloud service that establishes a dedicated network connection from your premises to AWS, providing a more consistent network experience.",
              keywords: ["Dedicated", "Network", "Connection", "Premises", "Consistent"],
            },
            {
              text: "AWS Transit Gateway is a service that acts as a hub for connecting multiple VPCs and on-premises networks, simplifying network management and reducing operational costs.",
              keywords: ["Hub", "Connect", "VPCs", "On-premises", "Simplify"],
            },
            {
              text: "AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications, securely traversing the AWS network without exposing traffic over the internet.",
              keywords: ["Private", "Connectivity", "VPCs", "AWS Services", "On-premises"],
            },
          ],
          topicNumber: 7,
          infobitCount: 4,
        },
        {
          topicName: "AWS Content Delivery Services",
          infoBits: [
            {
              text: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.",
              keywords: [
                "Content Delivery Network",
                "Low Latency",
                "High Speed",
                "Global",
                "Secure",
              ],
            },
            {
              text: "AWS Global Accelerator is a service that improves the availability and performance of applications with local or global users, providing static IP addresses that act as a global entry point to your applications.",
              keywords: ["Availability", "Performance", "Global", "Static IP", "Entry Point"],
            },
            {
              text: "AWS Outposts is a fully managed service that extends AWS infrastructure, services, APIs, and tools to virtually any data center, co-location space, or on-premises facility for a consistent hybrid experience.",
              keywords: ["Hybrid", "On-premises", "Consistent", "Infrastructure", "Services"],
            },
            {
              text: "AWS Wavelength enables developers to build applications that deliver ultra-low latencies to mobile devices and end-users by deploying their applications to AWS compute and storage services at the edge of the 5G network.",
              keywords: [
                "Ultra-low Latency",
                "Mobile Devices",
                "Edge Computing",
                "5G Network",
                "Applications",
              ],
              example:
                "A multiplayer gaming application can leverage AWS Wavelength to provide a seamless, real-time experience for users by processing game data closer to the players.",
            },
          ],
          topicNumber: 8,
          infobitCount: 4,
        },
        {
          topicName: "AWS Security and Compliance",
          infoBits: [
            {
              text: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources, allowing you to manage users, groups, and roles, and grant or revoke permissions as needed.",
              keywords: ["Access Control", "Users", "Groups", "Roles", "Permissions"],
            },
            {
              text: "AWS Security Hub provides a comprehensive view of your security alerts and security posture across your AWS accounts, helping you identify and prioritize security issues.",
              keywords: [
                "Security Alerts",
                "Security Posture",
                "Prioritize",
                "Multiple Accounts",
                "Compliance",
              ],
            },
            {
              text: "AWS GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data.",
              keywords: [
                "Threat Detection",
                "Malicious Activity",
                "Unauthorized Behavior",
                "Monitoring",
                "Protection",
              ],
            },
            {
              text: "AWS Artifact is a service that provides on-demand access to AWS' security and compliance reports and select online agreements, helping you understand the robust controls in place to maintain security and compliance within the AWS cloud.",
              keywords: [
                "Compliance Reports",
                "Security Controls",
                "On-demand Access",
                "Agreements",
                "AWS Cloud",
              ],
            },
          ],
          topicNumber: 9,
          infobitCount: 4,
        },
      ],
      phaseNumber: 3,
      topicCount: 3,
    },
    {
      phaseDescription: "AWS Monitoring, Management, and Deployment",
      topics: [
        {
          topicName: "AWS Monitoring and Logging",
          infoBits: [
            {
              text: "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources, applications, and services.",
              keywords: ["monitoring", "observability", "metrics", "logs", "alarms"],
              example:
                "CloudWatch can monitor CPU utilization of an EC2 instance and trigger an alarm when it exceeds a specified threshold.",
            },
            {
              text: "AWS CloudTrail is a service that enables governance, compliance, and auditing by recording account activity across AWS services.",
              keywords: ["auditing", "compliance", "event history", "trail", "logs"],
              example:
                "CloudTrail can log API calls made to AWS services, providing a detailed record of user and resource activity.",
            },
            {
              text: "AWS X-Ray helps developers analyze and debug distributed applications by providing end-to-end tracing and insights into application performance.",
              keywords: [
                "distributed tracing",
                "performance analysis",
                "debugging",
                "microservices",
                "visualization",
              ],
            },
            {
              text: "AWS Config is a service that enables auditing, evaluation, and remediation of AWS resource configurations against desired configurations.",
              keywords: [
                "configuration management",
                "compliance",
                "auditing",
                "remediation",
                "resource inventory",
              ],
              example:
                "AWS Config can evaluate EC2 instances for compliance with security best practices and automatically remediate non-compliant instances.",
            },
          ],
          topicNumber: 10,
          infobitCount: 4,
        },
        {
          topicName: "AWS Management and Governance",
          infoBits: [
            {
              text: "AWS Systems Manager is a service that helps manage and configure AWS resources at scale, including patching, automation, and compliance.",
              keywords: [
                "resource management",
                "automation",
                "patching",
                "compliance",
                "inventory",
              ],
              example:
                "Systems Manager can automate the deployment of software updates across a fleet of EC2 instances.",
            },
            {
              text: "AWS Control Tower is a service that simplifies the setup and governance of multi-account AWS environments, ensuring compliance with best practices.",
              keywords: [
                "multi-account management",
                "governance",
                "compliance",
                "best practices",
                "security",
              ],
            },
            {
              text: "AWS Service Catalog allows organizations to create, manage, and distribute approved IT service catalogs to end-users.",
              keywords: [
                "service catalog",
                "self-service",
                "governance",
                "compliance",
                "standardization",
              ],
              example:
                "Service Catalog can provide a self-service portal for developers to provision pre-approved AWS resources, ensuring compliance with organizational policies.",
            },
            {
              text: "AWS Trusted Advisor is a service that inspects AWS environments and provides recommendations for cost optimization, security, fault tolerance, and performance improvement.",
              keywords: [
                "best practices",
                "recommendations",
                "cost optimization",
                "security",
                "performance",
              ],
            },
          ],
          topicNumber: 11,
          infobitCount: 4,
        },
        {
          topicName: "AWS Deployment and Automation",
          infoBits: [
            {
              text: "AWS CloudFormation is a service that allows you to model, provision, and manage AWS resources using infrastructure as code (IaC) templates.",
              keywords: [
                "infrastructure as code",
                "provisioning",
                "resource management",
                "templates",
                "automation",
              ],
              example:
                "CloudFormation templates can be used to create and manage a complete AWS infrastructure, including EC2 instances, VPCs, and databases.",
            },
            {
              text: "AWS CodeDeploy is a service that automates application deployments to AWS compute services, such as EC2 instances and AWS Lambda functions.",
              keywords: [
                "application deployment",
                "automation",
                "EC2",
                "Lambda",
                "rolling updates",
              ],
              example:
                "CodeDeploy can be used to perform rolling updates of a web application running on EC2 instances, minimizing downtime.",
            },
            {
              text: "AWS CodePipeline is a continuous delivery service that automates the release pipeline for applications, integrating with other AWS services and third-party tools.",
              keywords: [
                "continuous delivery",
                "release pipeline",
                "automation",
                "integration",
                "DevOps",
              ],
            },
            {
              text: "AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces software packages ready for deployment.",
              keywords: [
                "build automation",
                "continuous integration",
                "testing",
                "packaging",
                "artifacts",
              ],
              example:
                "CodeBuild can be used to build and test a Java application, producing a deployable artifact for use in a CodePipeline.",
            },
          ],
          topicNumber: 12,
          infobitCount: 4,
        },
      ],
      phaseNumber: 4,
      topicCount: 3,
    },
  ],
  phaseCount: 4,
  totalLessons: 12,
};

const infoBits = [
  [
    {
      text: "AWS Bedrock is a fully managed service that provides easy access to foundation models (FMs) from leading AI companies through an API.",
      keywords: ["AWS Bedrock", "foundation models", "API"],
      video_resource: "https://www.youtube.com/watch?v=ab1mbj0acDU",
      text_resource: "https://aws.amazon.com/bedrock/",
      example:
        "For instance, you can access GPT-3.5 from OpenAI or Claude from Anthropic through a single AWS Bedrock API.",
    },
    {
      text: "Bedrock supports various FM providers, including AI21 Labs, Anthropic, Cohere, Meta, Stability AI, and Amazon.",
      keywords: [
        "FM providers",
        "AI21 Labs",
        "Anthropic",
        "Cohere",
        "Meta",
        "Stability AI",
        "Amazon",
      ],
      video_resource: "https://www.youtube.com/watch?v=_sVo_sCugE4",
      text_resource: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html",
    },
    {
      text: "Users can experiment with and evaluate different foundation models to find the best fit for their use case without managing any infrastructure.",
      keywords: ["experiment", "evaluate", "foundation models", "infrastructure"],
      video_resource: "https://www.youtube.com/watch?v=qX_HNXTSe-I",
      text_resource: "https://aws.amazon.com/bedrock/features/",
      example:
        "A developer could test Anthropic's Claude for text generation and Stability AI's model for image generation, all within the same Bedrock environment.",
    },
    {
      text: "AWS Bedrock offers customization options, allowing users to fine-tune models with their own data for improved performance on specific tasks.",
      keywords: ["customization", "fine-tune", "data"],
      video_resource: "https://www.youtube.com/watch?v=TCJtSZ7w-Iw",
      text_resource: "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html",
      example:
        "A company could fine-tune a language model with their product catalog to generate more accurate product descriptions.",
    },
    {
      text: "The service integrates seamlessly with other AWS services, enabling developers to build AI-powered applications within the AWS ecosystem.",
      keywords: ["integrates", "AWS services", "AI-powered applications"],
      video_resource: "https://www.youtube.com/watch?v=CkaKVqp6TLM",
      text_resource:
        "https://aws.amazon.com/blogs/aws/amazon-bedrock-is-now-generally-available-build-and-scale-generative-ai-applications-with-foundation-models/",
      example:
        "You could use Bedrock with Amazon S3 for data storage and Amazon SageMaker for machine learning workflows.",
    },
  ],
  [
    {
      text: "Content Generation: AWS Bedrock can be used to create high-quality, diverse content for marketing, social media, and product descriptions.",
      keywords: ["Content Generation", "marketing", "social media", "product descriptions"],
      video_resource: "https://www.youtube.com/watch?v=KgLTF3-tT9Q",
      text_resource: "https://aws.amazon.com/bedrock/use-cases/",
      example:
        "An e-commerce company could use Bedrock to automatically generate unique product descriptions for thousands of items in their catalog.",
    },
    {
      text: "Conversational AI: Bedrock enables the development of sophisticated chatbots and virtual assistants for customer service and support.",
      keywords: ["Conversational AI", "chatbots", "virtual assistants", "customer service"],
      video_resource: "https://www.youtube.com/watch?v=JSj1KcJ1-pE",
      text_resource:
        "https://aws.amazon.com/blogs/machine-learning/build-conversational-ai-applications-with-amazon-bedrock-and-langchain/",
      example:
        "A bank could create a virtual assistant that can answer customer queries about account balances, transactions, and banking products.",
    },
    {
      text: "Code Generation and Analysis: Developers can use Bedrock to assist in writing, reviewing, and optimizing code across various programming languages.",
      keywords: ["Code Generation", "Analysis", "reviewing", "optimizing"],
      video_resource: "https://www.youtube.com/watch?v=vyJKCJq7Dz8",
      text_resource: "https://docs.aws.amazon.com/bedrock/latest/userguide/code-generation.html",
      example:
        "A developer could use Bedrock to generate boilerplate code, suggest optimizations, or help debug complex functions.",
    },
    {
      text: "Data Analysis and Insights: AWS Bedrock can process and analyze large datasets to extract valuable insights and generate comprehensive reports.",
      keywords: ["Data Analysis", "Insights", "datasets", "reports"],
      video_resource: "https://www.youtube.com/watch?v=O5RI1T1XqRs",
      text_resource:
        "https://aws.amazon.com/blogs/machine-learning/use-foundation-models-in-amazon-bedrock-for-text-summarization-and-analysis/",
      example:
        "A market research firm could use Bedrock to analyze customer feedback data and generate insights about product satisfaction and areas for improvement.",
    },
    {
      text: "Language Translation and Localization: Bedrock's language models can be utilized for accurate and context-aware translations across multiple languages.",
      keywords: ["Language Translation", "Localization", "context-aware"],
      video_resource: "https://www.youtube.com/watch?v=9O-YX8TmVSc",
      text_resource:
        "https://aws.amazon.com/blogs/machine-learning/build-multilingual-chatbots-with-amazon-bedrock-and-langchain/",
      example:
        "A global e-commerce platform could use Bedrock to automatically translate product descriptions and customer reviews into multiple languages.",
    },
  ],
];

export default function SkillTimeline() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [currentPhase, setCurrentPhase] = useState(1);
  const [currentInfoBit, setCurrentInfoBit] = useState(null);
  const [currentLessonData, setCurrentLessonData] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [learningPathId, setLearningPathId] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const qlearningPathId = decodeURIComponent(router.query.learningPathId as string);

      setLearningPathId(qlearningPathId);
    }
  }, [router.isReady, router.query]);

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

  function extractAndAssignQuizzes(response): void {
    response.phases.forEach((phase) => {
      const questions = [];
      phase.topics.forEach((topic) => {
        topic.infoBits.forEach((infoBit) => {
          if (infoBit.quiz) {
            questions.push(infoBit.quiz);
            // Optionally remove the quiz object from the infoBit if needed
            delete infoBit.quiz;
          }
        });
      });
      phase.quiz = {
        questions: questions,
        questionsCount: questions.length,
      };
    });
    return response;
  }

  const handleOpenQuiz = (quiz) => {
    console.log("Opening quiz = ", quiz);
    setCurrentQuiz(quiz);
    setOpenQuiz(true);
  };

  const handleOpenInfoBit = (currentTopic) => {
    console.log("Opening currentTopic = ", currentTopic.infoBits);
    // setCurrentInfoBit(currentTopic.infoBits);
    setCurrentLessonData(currentTopic);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleCloseQuiz = () => setOpenQuiz(false);

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      setCurrentPhase(currentPhase + 1);
    }
    setOpenQuiz(false);
  };

  const handleComplete = () => {
    setCurrentLesson(currentLesson + 1);
    handleClose();
  };

  const goBack = () => {
    router.push("/learning-path");
  };

  const getCurrentPhaseLessonNum = (phaseNo) => {
    let result = 0;
    for (const phase of roadmap.phases) {
      if (phaseNo >= phase.phaseNumber) {
        result += phase.topicCount;
      } else {
        break;
      }
    }
    return result;
  };

  const quizzes = [
    {
      text: "What is the primary role of HTML in web development?",
      type: "multiple-choice",
      options: [
        "Providing structure and content for web pages",
        "Controlling the presentation and styling of web pages",
        "Adding interactivity and dynamic behavior to web pages",
        "Enabling data communication between clients and servers",
      ],
      answer: "Providing structure and content for web pages",
    },
    {
      text: "True or False: CSS selectors are used to target specific HTML elements for styling.",
      type: "true-false",
      answer: "True",
    },
    {
      text: "What is the primary purpose of responsive design principles?",
      type: "multiple-choice",
      options: [
        "To ensure web pages adapt and display correctly across different devices and screen sizes",
        "To add interactivity and dynamic behavior to web pages",
        "To control the structure and content of web pages",
        "To enable data communication between clients and servers",
      ],
      answer:
        "To ensure web pages adapt and display correctly across different devices and screen sizes",
    },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "auto", maring: "5" }}>
      {roadmap ? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              padding: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<ArrowBack sx={{ fill: "#fff" }} />}
              sx={{ marginRight: 2 }}
              onClick={goBack}
            >
              Back
            </Button>
            <Typography variant="h2" align="center" sx={{ flexGrow: 1 }}>
              {roadmap.title}
            </Typography>
          </Box>
          <Box sx={{ overflowY: "auto", mb: 2 }}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "transparent",
                border: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={3} mt={2}>
                  <CircularScore
                    label="Progress"
                    toolTipInfo="This score reflects your current progress in the learning roadmap."
                    progressScore={Math.floor((100 * currentLesson) / roadmap.totalLessons)}
                  />
                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", width: "70%", mt: 5 }}
                    >
                      {typeof currentLesson === "number" &&
                        typeof roadmap.totalLessons === "number" && (
                          <Typography variant="body2" color="text.secondary">
                            {`Lesson ${currentLesson}/${roadmap.totalLessons}`}
                          </Typography>
                        )}
                      {typeof roadmap.currentPhase === "number" &&
                        typeof roadmap.phaseCount === "number" && (
                          <Typography variant="body2" color="text.secondary">
                            {`Phase ${roadmap.currentPhase}/${roadmap.phaseCount}`}
                          </Typography>
                        )}
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ padding: 2 }}>
                    <Typography variant="h6">Roadmap Description</Typography>
                    <Typography>{roadmap.description}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Typography variant="h6" sx={{ mr: 1 }}>
                        Goal:
                      </Typography>
                      <Typography>{roadmap.goal}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Typography variant="h6" sx={{ mr: 1 }}>
                        Skill Level:
                      </Typography>
                      <Chip
                        label={roadmap.currentSkillLevel}
                        color="secondary"
                        sx={{ marginRight: 1 }}
                      />
                      <ArrowForward sx={{ mx: 1, fill: theme.palette.text.primary }} />
                      <Chip label={roadmap.desiredSkillLevel} color="secondary" />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Typography variant="h6" sx={{ mr: 1 }}>
                        Estimated Learning Duration:
                      </Typography>
                      <Typography>{roadmap.estimatedLearningDuration}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3} mt={1}>
                  <Avatar
                    src={roadmap.imageURL}
                    alt="Learning Path"
                    sx={{
                      width: "auto", // Use 100% width to fill the parent Grid item
                      height: "90%", // Set height to auto to maintain the aspect ratio
                      maxWidth: "100%", // Ensures the image does not exceed the grid area vertically
                      borderRadius: "6px", // Slightly curved edges
                      border: `2px solid ${theme.palette.primary.main}`, // Stylish border using theme color
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                mt: 1,
                borderRadius: 2,
                backgroundColor: "transparent",
                border: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Timeline position="alternate">
                {roadmap.phases.map(
                  (phase, index) =>
                    index !== roadmap.phases.length - 1 && (
                      <React.Fragment key={index}>
                        {index > 0 && <Divider />}
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot
                              color={index === roadmap.currentPhase - 1 ? "success" : "grey"}
                              // variant="outlined"
                              sx={{
                                width: "auto",
                                height: "auto",
                                m: "auto",
                                backgroundColor:
                                  index === currentPhase - 1
                                    ? theme.palette.primary.main //Current
                                    : index < currentPhase - 1
                                      ? theme.palette.success.main //Completed
                                      : "grey", // Future
                              }}
                            >
                              {index >= currentPhase - 1 ? (
                                <WorkspacePremiumOutlined
                                  sx={{
                                    fontSize: 45,
                                    fill: "#fff",
                                  }}
                                />
                              ) : (
                                <Check
                                  sx={{
                                    fontSize: 45,
                                    fill: "#fff",
                                  }}
                                />
                              )}
                            </TimelineDot>
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography
                              variant="h4"
                              component="span"
                              sx={{
                                color:
                                  index <= currentPhase - 1
                                    ? theme.palette.text.primary //Completed
                                    : "grey", // Future
                              }}
                            >
                              Phase {phase.phaseNumber}: {phase.phaseDescription}
                            </Typography>
                            <Typography
                              sx={{
                                color:
                                  index <= currentPhase - 1
                                    ? theme.palette.text.primary //Completed
                                    : "grey", // Future
                              }}
                            >
                              Lessons covered: {phase.topics.length}
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineConnector />
                            <Divider />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
                        </TimelineItem>
                        {phase.topics.map((topic, topicIndex) => (
                          <TimelineItem key={topicIndex} onClick={() => handleOpenInfoBit(topic)}>
                            <TimelineSeparator>
                              <TimelineConnector />
                              <TimelineDot
                                sx={{
                                  backgroundColor:
                                    topic.topicNumber === currentLesson &&
                                    currentPhase === phase.phaseNumber
                                      ? theme.palette.primary.main //Current
                                      : topic.topicNumber < currentLesson
                                        ? theme.palette.success.main //Completed
                                        : "grey", //Future
                                }}
                              >
                                {topic.topicName.toLowerCase().includes("quiz") ? (
                                  <PsychologyAlt
                                    sx={{
                                      fontSize: 32,
                                      fill: "#Fff",
                                    }}
                                  />
                                ) : (
                                  <SchoolOutlined
                                    sx={{
                                      fontSize: 32,
                                      fill: "#Fff",
                                    }}
                                  />
                                )}
                              </TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                              <Typography
                                variant="h6"
                                component="span"
                                sx={{
                                  color:
                                    topic.topicNumber === currentLesson &&
                                    currentPhase === phase.phaseNumber
                                      ? theme.palette.primary.main //Current
                                      : topic.topicNumber < currentLesson
                                        ? theme.palette.success.main //Completed
                                        : "grey", //Future
                                }}
                              >
                                Lesson {topic.topicNumber}: {topic.topicName}
                              </Typography>
                              {currentLesson === topic.topicNumber &&
                                currentPhase === phase.phaseNumber && (
                                  <Typography style={{ textDecoration: "underline" }}>
                                    Click to continue
                                  </Typography>
                                )}
                            </TimelineContent>
                          </TimelineItem>
                        ))}

                        {/* QUIZ BLOCK */}
                        <TimelineItem onClick={() => handleOpenQuiz(phase.quiz)}>
                          <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot
                              sx={{
                                backgroundColor:
                                  currentLesson > getCurrentPhaseLessonNum(phase.phaseNumber) &&
                                  currentPhase === phase.phaseNumber
                                    ? theme.palette.primary.main //Current
                                    : currentPhase > phase.phaseNumber
                                      ? theme.palette.success.main //Completed
                                      : "grey",
                              }}
                            >
                              <AssignmentOutlined
                                sx={{
                                  fontSize: 32,
                                  fill: "#Fff",
                                }}
                              />
                            </TimelineDot>
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography
                              variant="h6"
                              component="span"
                              sx={{
                                color:
                                  currentLesson > getCurrentPhaseLessonNum(phase.phaseNumber) &&
                                  currentPhase === phase.phaseNumber
                                    ? theme.palette.primary.main //Current
                                    : currentPhase > phase.phaseNumber
                                      ? theme.palette.success.main //Completed
                                      : "grey",
                              }}
                            >
                              Phase {phase.phaseNumber} Quiz
                            </Typography>
                            {currentLesson > getCurrentPhaseLessonNum(phase.phaseNumber) &&
                              currentPhase === phase.phaseNumber && (
                                <Typography style={{ textDecoration: "underline" }}>
                                  Click to continue
                                </Typography>
                              )}
                          </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineConnector />
                            <Divider flexItem orientation="horizontal" sx={{ my: 2 }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            {index < currentPhase - 1 ? (
                              <Typography variant="body2" color="text.primary">
                                Phase {phase.phaseNumber} Completed
                              </Typography>
                            ) : (
                              <Typography variant="body2" color="grey">
                                End of Phase {phase.phaseNumber}
                              </Typography>
                            )}
                          </TimelineContent>
                        </TimelineItem>
                      </React.Fragment>
                    )
                )}
                {/* End of Learning Path Block */}
                <Divider />
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot
                      sx={{
                        width: "auto",
                        height: "auto",
                        m: "auto",
                        backgroundColor:
                          roadmap.status == "Final Quiz"
                            ? theme.palette.text.primary //Completed
                            : "grey", // Future
                      }}
                    >
                      {roadmap.status != "Completed" ? (
                        <AssignmentLateOutlined
                          sx={{
                            fontSize: 45,
                            fill: "#fff",
                          }}
                        />
                      ) : (
                        <Check
                          sx={{
                            fontSize: 45,
                            fill: "#fff",
                          }}
                        />
                      )}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="h4"
                      component="span"
                      sx={{
                        color:
                          roadmap.status == "Final Quiz"
                            ? theme.palette.text.primary //Completed
                            : "grey", // Future
                      }}
                    >
                      Final Quiz
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                {/* Compelted Roadmap */}

                {roadmap.status != "completed" && (
                  <>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            width: "auto",
                            height: "auto",
                            mt: 4,
                            backgroundColor: theme.palette.success.main, //Completed
                          }}
                        >
                          <EmojiEvents
                            sx={{
                              fontSize: 45,
                              fill: "#fff",
                            }}
                          />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h4">
                          Congratulations! You have completed {roadmap.title}.
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<Share sx={{ fill: "#fff" }} />}
                          style={{ marginTop: 8, width: "auto" }}
                        >
                          Share with Friends
                        </Button>
                      </TimelineContent>
                    </TimelineItem>
                  </>
                )}
              </Timeline>
            </Paper>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // This takes the full height of the viewport
          }}
        >
          <CircularProgress
            size={115}
            thickness={2}
            sx={{
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
                stroke: theme.palette.primary.main,
              },
            }}
          />
        </Box>
      )}
      {currentLessonData && (
        <InfoBitFlashCard
          lessonTitle={
            "Lesson " + currentLessonData.topicNumber + ": " + currentLessonData.topicName
          }
          infoBits={currentLessonData.infoBits}
          open={open}
          handleClose={handleClose}
          handleComplete={handleComplete}
        />
      )}
      {currentQuiz && (
        <QuizFlashCards
          completeQuestions={currentQuiz.questions}
          open={openQuiz}
          handleClose={handleCloseQuiz}
          handleComplete={handleQuizComplete}
        />
      )}
    </Box>
  );
}
