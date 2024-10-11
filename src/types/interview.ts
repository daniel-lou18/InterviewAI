export type Question = {
  id: number;
  question: string;
  correctAnswer: string;
};

export type Evaluation = { id: number; questionId: number; text: string };

export type Transcription = { id: number; questionId: number; text: string };
