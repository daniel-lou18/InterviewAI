import { Evaluation, Transcription } from "@/types/interview";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Audio = {
  questionId: string;
  audioUrl: string;
};

type InterviewState = {
  currentQuestionId: string;
  questionOrder: string[];
  statusById: Record<
    string,
    {
      answered: boolean;
      transcribed: boolean;
      evaluated: boolean;
      answerTime: number;
    }
  >;
  score: number;
  audio: Record<string, Audio>;
  transcriptions: Record<string, Transcription>;
  evaluations: Record<string, Evaluation>;
  direction: 1 | -1;
};

const initialState: InterviewState = {
  currentQuestionId: "",
  questionOrder: [],
  statusById: {
    questionId: {
      answered: false,
      transcribed: false,
      evaluated: false,
      answerTime: 0,
    },
  },
  score: 0,
  audio: {},
  transcriptions: {},
  evaluations: {},
  direction: 1,
};

const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {
    saveAudio(state, action: PayloadAction<string>) {
      state.statusById[state.currentQuestionId].answered = true;
      state.audio[state.currentQuestionId] = {
        questionId: state.currentQuestionId,
        audioUrl: action.payload,
      };
    },
    saveTranscription(state, action: PayloadAction<Transcription>) {
      const { questionId } = action.payload;
      state.transcriptions[questionId] = action.payload;
      state.statusById[questionId].transcribed = true;
    },
    saveEvaluation(state, action: PayloadAction<Evaluation>) {
      const { questionId } = action.payload;
      state.evaluations[questionId] = action.payload;
      state.statusById[questionId].evaluated = true;
    },
    setCurrentQuestionId(state, action: PayloadAction<string>) {
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
    setDirection(state, action: PayloadAction<1 | -1>) {
      state.direction = action.payload;
    },
    setAnswerTime(state, action: PayloadAction<number>) {
      state.statusById[state.currentQuestionId].answerTime = action.payload;
    },
  },
});

export const {
  saveAudio,
  saveTranscription,
  saveEvaluation,
  updateScore,
  setCurrentQuestionId,
  setQuestionOrder,
  updateQuestions,
  setDirection,
  setAnswerTime,
} = interviewSlice.actions;
export default interviewSlice.reducer;
