import { currentUserAtom } from "@/store/store";
import { useTheme } from "@mui/material";
import { useAtom } from "jotai";
import router from "next/router";
import React from "react";

type RoadmapProps = {
  currentLesson: string;
  currentPhase: string;
  currentSkillLevel: string;
  dailyTime: string;
  description: string;
  desiredSkillLevel: string;
  estimatedLearningDuration: string;
  goal: string;
  id: string;
  imageURL: string;
  phaseCount: number;
  status: string;
  title: string;
  totalLessons: number;
};

const CompletionBadge: React.FC<RoadmapProps> = ({
  currentLesson,
  currentPhase,
  currentSkillLevel,
  dailyTime,
  description,
  desiredSkillLevel,
  estimatedLearningDuration,
  goal,
  id,
  imageURL,
  phaseCount,
  status,
  title,
  totalLessons,
}) => {
  const [currentUser] = useAtom(currentUserAtom);
  const theme = useTheme();
  const handleCardClick = () => {
    router.push({
      pathname: "learning-path/continue",
      query: {
        learningPathId: id,
      },
    });
  };
  return (
    <div className="badge-container" onClick={handleCardClick}>
      <div className="badge">
        <img
          id="img-learning-path-badge"
          src="/app-logo-light.png"
          alt="Logo"
          className="badge-logo"
          crossOrigin="anonymous"
        />
        <img src={imageURL} alt="Roadmap" className="badge-image" />
        <div className="badge-content">
          <h3>{title}</h3>
          {status === "Completed" && (
            <p className="completion-message">
              {`${currentUser.given_name} ${currentUser.family_name}`} has Successfully Completed!
            </p>
          )}
          <p className="details">
            Skill Level: <strong>{desiredSkillLevel}</strong>
          </p>
          <p className="details">
            Total Lessons: <strong>{totalLessons}</strong>
          </p>
        </div>
      </div>
      <style jsx>{`
        .badge-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }
        .badge {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f0f0f0;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          width: 250px;
          text-align: center;
          border: 2px solid ${theme.palette.primary.main};
        }
        .badge-logo {
          position: absolute;
          top: 10px;
          right: 10px;
          max-width: 70px; /* Adjust this value to make the logo smaller */
          max-height: 50px; /* Adjust this value to make the logo smaller */
        }

        .badge-image {
          width: 110px;
          height: 110px;
          object-fit: cover;
          border-radius: 70%;
          margin-bottom: 15px;
        }
        .badge-content h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
        }
        .completion-message {
          font-size: 16px;
          color: #28a745;
          font-weight: bold;
        }
        .details {
          font-size: 14px;
          color: #555;
          margin-top: 5px;
        }
        .details strong {
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default CompletionBadge;
