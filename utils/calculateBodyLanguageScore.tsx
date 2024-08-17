interface Emotions {
  Anger: string;
  Disgust: string;
  Fear: string;
  Happiness: string;
  Neutral: string;
  Sadness: string;
  Surprise: string;
}

interface EmotionData {
  emotions: Emotions;
}

export function calculateBodyLanguageScore(): number {
  const { emotions } = data;
  const { Anger, Disgust, Fear, Happiness, Neutral, Sadness, Surprise } = emotions;

  // Convert emotion values to numbers
  const anger = parseInt(Anger);
  const disgust = parseInt(Disgust);
  const fear = parseInt(Fear);
  const happiness = parseInt(Happiness);
  const neutral = parseInt(Neutral);
  const sadness = parseInt(Sadness);
  const surprise = parseInt(Surprise);

  // Calculate total count of emotions
  const total = anger + disgust + fear + happiness + neutral + sadness + surprise;

  // Weighted calculation for Emotional Positivity score
  let weightedSum =
    (100 *
      (happiness * 2 +
        surprise * 0.75 +
        neutral * 0.5 -
        disgust * 1 -
        sadness * 2 -
        anger * 2 -
        fear * 3)) /
    total;

  // Ensure the score is between 0 and 100
  weightedSum = Math.max(0, Math.min(100, weightedSum));

  // Round the score to an integer
  weightedSum = Math.round(weightedSum);

  return weightedSum;
}

const data: EmotionData = {
  emotions: {
    Anger: "35",
    Disgust: "0",
    Fear: "1",
    Happiness: "49",
    Neutral: "134",
    Sadness: "0",
    Surprise: "290",
  },
};
