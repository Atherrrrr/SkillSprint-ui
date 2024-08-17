export enum SessionType {
  QuickStart = "Quick Start",
  MockInterview = "Mock Interview",
  PresentationPractice = "Presentation Practice",
  SalesPitch = "Sales Pitch",
  UploadVideo = "Upload Video",
}

export type BaseSessionData = {
  id: string;
  title: string;
  description: string;
  sessionType: SessionType;
  status: "Analyzed" | "Processing";
  score: number;
  creationDate: string;
  creationTime: string;
  duration: string;
  thumbnailUrl: string;
};

export type MockInterviewSessionData = BaseSessionData & {
  sessionType: SessionType.MockInterview;
  interviewType: string;
  interviewDuration: string;
  questionMode: string;
  interviewTone: string;
  resumeId: string;
};

export type PresentationPracticeSessionData = BaseSessionData & {
  sessionType: SessionType.PresentationPractice | SessionType.SalesPitch | SessionType.UploadVideo;
  desiredTone: string;
};

export type QuickStartSessionData = BaseSessionData & {
  sessionType: SessionType.QuickStart;
};

// PracticeSessionData type is a union of the specific types
export type PracticeSessionData =
  | MockInterviewSessionData
  | PresentationPracticeSessionData
  | QuickStartSessionData;
