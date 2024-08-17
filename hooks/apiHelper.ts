export const AWS_COMMON_PATH = "https://1w3ubs6o56.execute-api.eu-central-1.amazonaws.com/";
export const DEV_STAGE_PATH = AWS_COMMON_PATH + "dev/";
export const USER_PATH = DEV_STAGE_PATH + "user";

export const CREATE_ROADMAP = (userId: string) =>
  "https://iho1tomujg.execute-api.eu-central-1.amazonaws.com/frontend/quizFlow/" + userId;

export const SESSIONS_LIST = (userId: string) =>
  "https://1w3ubs6o56.execute-api.eu-central-1.amazonaws.com/dev/user/mock-interview/" + userId;
export const USER_AVG_SCORES = (userId: string) =>
  "https://54y7pz0m42.execute-api.eu-central-1.amazonaws.com/dev/user/" +
  userId +
  "/practice-data-scores";
export const GET_VIDEO_SPEECH_ANALYSIS = (userId: string, videoId: string) =>
  "https://3zry4cv5m0.execute-api.eu-central-1.amazonaws.com/dev/" +
  userId +
  "/speech/analysis/" +
  videoId;

export const SUBMIT_PRACTICE_SESSION_MODEL = (userId: string) =>
  "https://1w3ubs6o56.execute-api.eu-central-1.amazonaws.com/dev/user/mock-interview/" +
  userId +
  "/upload";

export const GET_INTERVIEW_QUESTIONS = (userId: string, interviewId: string, videoId: string) =>
  "https://t5e9pk9o2e.execute-api.eu-central-1.amazonaws.com/dev/" +
  userId +
  "/video/" +
  interviewId +
  "/" +
  videoId;
export const UPLOAD_AUDIO_FOR_PRACTICE_SESSION = (
  userId: string,
  interviewId: string,
  videoId: string
) =>
  "https://ukagvq8qp7.execute-api.eu-central-1.amazonaws.com/dev/raw-audio/" +
  userId +
  "/upload/" +
  interviewId +
  "?resume-id=0939a887-36c2-4452-9620-24904d8d75ec&video-id=" +
  videoId;

export const EC2_AUDIO_EMOTION_REQUEST = "http://18.157.175.186:80/predict_emotion";

export const UPLOAD_META_DATA_INTERVIEW = (userId: string, interviewId: string) =>
  "https://ukagvq8qp7.execute-api.eu-central-1.amazonaws.com/dev/raw-audio/metadata/" +
  userId +
  "/upload/" +
  interviewId;
