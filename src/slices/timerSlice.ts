import { createSlice } from "@reduxjs/toolkit";

type TimerState = {
  time: number;
};

const initialState: TimerState = {
  time: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    resetTime(state) {
      state.time = 0;
    },
    tick(state) {
      state.time += 1;
    },
  },
});

export const { resetTime, tick } = timerSlice.actions;
export default timerSlice.reducer;
