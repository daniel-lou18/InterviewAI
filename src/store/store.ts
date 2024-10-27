import { configureStore } from "@reduxjs/toolkit";
import interviewReducer from "../slices/interviewSlice";
import layoutReducer from "../slices/layoutSlice";
import timerReducer from "../slices/timerSlice";

export const store = configureStore({
  reducer: {
    interview: interviewReducer,
    layout: layoutReducer,
    timer: timerReducer,
  },
});

// RTK Docs: Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// RTK Docs: Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
