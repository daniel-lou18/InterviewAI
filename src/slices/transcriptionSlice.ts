import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TranscriptionState = { text: string };

const initialState: TranscriptionState = { text: "" };

const transcriptionSlice = createSlice({
  name: "transcription",
  initialState,
  reducers: {
    setTranscription(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setTranscription } = transcriptionSlice.actions;
export default transcriptionSlice.reducer;
