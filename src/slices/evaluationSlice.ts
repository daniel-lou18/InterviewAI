import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EvaluationState = { text: string };

const initialState: EvaluationState = { text: "" };

const evaluationSlice = createSlice({
  name: "evaluation",
  initialState,
  reducers: {
    setEvaluation(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setEvaluation } = evaluationSlice.actions;
export default evaluationSlice.reducer;
