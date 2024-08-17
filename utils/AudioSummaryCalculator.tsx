interface Emotions {
  Angry: number;
  Disgust: number;
  Fear: number;
  Happiness: number;
  Neutral: number;
  Sadness: number;
  Surprise: number;
  Calm: number;
}

export function calculateAudioEmotionalPositivity(emotions: Emotions): number {
  // console.log(emotions);
  const { Angry, Disgust, Fear, Happiness, Neutral, Sadness, Surprise, Calm } = emotions;

  const angry = Angry;
  const disgust = Disgust;
  const fear = Fear;
  const happiness = Happiness;
  const neutral = Neutral;
  const sadness = Sadness;
  const surprise = Surprise;
  const calm = Calm;

  const total = angry + disgust + fear + happiness + neutral + sadness + surprise + calm;

  let weightedSum =
    (100 *
      (happiness * 4 +
        surprise * 2 +
        calm * 2 +
        neutral * 0.7 -
        disgust * 1 -
        sadness * 2 -
        angry * 2 -
        fear * 3)) /
    total;

  weightedSum = Math.max(0, Math.min(100, weightedSum));

  return Math.round(weightedSum);
}

export function AudioSummaryCalculator(data: Record<string, any>): Emotions {
  const counts: Record<string, number> = {};
  const result: Emotions = {
    Angry: 0,
    Disgust: 0,
    Fear: 0,
    Happiness: 0,
    Neutral: 0,
    Sadness: 0,
    Surprise: 0,
    Calm: 0,
  };

  // Initialize counts
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      for (const emotion in data[key]) {
        if (!counts.hasOwnProperty(emotion)) {
          counts[emotion] = 0;
        }
      }
    }
  }

  // Count highest emotions
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      let maxEmotion = "";
      let maxValue = 0;
      for (const emotion in data[key]) {
        if (data[key][emotion] > maxValue) {
          maxEmotion = emotion;
          maxValue = data[key][emotion];
        }
      }
      if (maxEmotion) {
        counts[maxEmotion]++;
      }
    }
  }

  // Populate result with counts
  for (const emotion in counts) {
    if (counts.hasOwnProperty(emotion)) {
      result[emotion as keyof Emotions] = counts[emotion];
    }
  }

  return result;
}
