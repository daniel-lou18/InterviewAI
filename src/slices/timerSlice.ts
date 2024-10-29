import { createSlice } from "@reduxjs/toolkit";

type TimerState = {
  time: number;
  isActive: boolean;
};

const initialState: TimerState = {
  time: 0,
  isActive: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    resetTime(state) {
      state.time = 0;
      state.isActive = false;
    },
    startTime(state) {
      state.isActive = true;
    },
    stopTime(state) {
      state.isActive = false;
    },
    tick(state) {
      state.time += 1;
    },
  },
});

export const { resetTime, startTime, stopTime, tick } = timerSlice.actions;
export default timerSlice.reducer;
