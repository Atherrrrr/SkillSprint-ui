# SkillSprint

SkillSprint is a personalized learning platform designed to help users acquire new skills efficiently. Users specify the skills they want to learn, and the platform generates a customized learning roadmap. The roadmap includes daily quizzes and small knowledge segments to maintain engagement. SkillSprint uses web scraping to gather high-quality resources from reputable websites, which are integrated into quizzes, supporting an active learning methodology.

The platform incorporates gamification, allowing users to compete with friends, and provides daily notifications to help develop consistent learning habits.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Connecting to AWS Amplify Backend](#connecting-to-aws-amplify-backend)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- AWS CLI installed and configured
- Amplify CLI installed and configured
- Git

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/Atherrrrr/SkillSprint-ui.git
cd SkillSprint
```

2. **Install dependencies:**

```bash
npm install
```

## Connecting to AWS Amplify Backend

For this step you need to deploy the amplify backend and connect the amplify backend with the frontend repo

1. **Deploy Backend**

Follow instruction of backend repo to deploy backend

2. **Pull the deployed backend from root directory**

```bash
amplify pull --appId your-app-id --envName your-env-name
```

## Running the Application

1. **Start the development server:**

```bash
npm run dev
```

2. **Access the application:**
   Open your web browser and navigate to http://localhost:3000. The application should be up and running.

## Building the Application

1. **Run the build command:**

```bash
npm run build
```
