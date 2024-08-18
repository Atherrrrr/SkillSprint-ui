import React, { useEffect } from "react";
import Confetti from "react-confetti";

interface CongratsProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Congrats: React.FC<CongratsProps> = ({ open, message, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Hide the animation after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="congrats-container">
      <Confetti />
      <div className="congrats-message">{message}</div>

      <style jsx>{`
        .congrats-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .congrats-message {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          padding: 20px;
          background: gold;
          border-radius: 8px;
          font-size: 24px;
          color: white;
          text-align: center;
          animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translate(-50%, -100%);
          }
          to {
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Congrats;
