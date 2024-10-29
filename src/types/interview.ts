export type Question = {
  id: string;
  question: string;
  correctAnswer: string;
};

export type Evaluation = { id: string; questionId: string; text: string };

export type Transcription = { id: string; questionId: string; text: string };
