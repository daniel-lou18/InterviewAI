import { Evaluation, Transcription } from "@/types/interview";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InterviewState = {
  currentQuestionId: string;
  questionOrder: string[];
  statusById: Record<
    string,
    { answered: boolean; transcribed: boolean; evaluated: boolean }
  >;
  score: number;
  transcriptions: Record<number, Transcription>;
  evaluations: Record<number, Evaluation>;
};

const initialState: InterviewState = {
  currentQuestionId: "",
  questionOrder: [],
  statusById: {
    questionId: { answered: false, transcribed: false, evaluated: false },
  },
  score: 0,
  transcriptions: {},
  evaluations: {},
};

const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {
    saveTranscription(state, action: PayloadAction<Transcription>) {
      state.transcriptions[action.payload.questionId] = action.payload;
    },
    saveEvaluation(state, action: PayloadAction<Evaluation>) {
      state.evaluations[action.payload.questionId] = action.payload;
    },
    setCurrentQuestion(state, action: PayloadAction<string>) {
      state.currentQuestionId = action.payload;
    },
    updateScore(state, action: PayloadAction<number>) {
      state.score += action.payload;
    },
    updateQuestions(state, action: PayloadAction<string[]>) {
      const newStatusById: typeof state.statusById = {};

      action.payload.forEach((questionId) => {
        newStatusById[questionId] = state.statusById[questionId] || {
          answered: false,
          transcribed: false,
          evaluated: false,
        };
      });

      state.statusById = newStatusById;
    },
    setQuestionOrder(state, action: PayloadAction<string[]>) {
      state.questionOrder = action.payload;
    },
  },
});

export const {
  saveTranscription,
  saveEvaluation,
  updateScore,
  setCurrentQuestion,
  setQuestionOrder,
  updateQuestions,
} = interviewSlice.actions;
export default interviewSlice.reducer;
