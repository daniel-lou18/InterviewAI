import { Evaluation, Transcription } from "@/types/interview";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InterviewState = {
  currentQuestionIndex: number;
  score: number;
  transcriptions: Record<number, Transcription>;
  evaluations: Record<number, Evaluation>;
};

const initialState: InterviewState = {
  currentQuestionIndex: 0,
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
  },
});

export const { saveTranscription, saveEvaluation } = interviewSlice.actions;
export default interviewSlice.reducer;
