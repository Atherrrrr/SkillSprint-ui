export const CREATE_ROADMAP = (userId: string) =>
  "https://3b08ldvcci.execute-api.eu-central-1.amazonaws.com/frontend/roadmapFlow/" + userId;

export const GET_ALL_ROADMAP =
  "https://3b08ldvcci.execute-api.eu-central-1.amazonaws.com/frontend/allRoadmap";

export const GET_USER_ROADMAP = (userId: string) =>
  "https://3b08ldvcci.execute-api.eu-central-1.amazonaws.com/frontend/allUserRoadmaps/" + userId;

export const GET_USER_ROADMAP_BY_ID = (userId: string, roadmapId: string) =>
  "https://3b08ldvcci.execute-api.eu-central-1.amazonaws.com/frontend/userRoadmap/" +
  userId +
  "/" +
  roadmapId;
