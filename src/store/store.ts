import { configureStore } from "@reduxjs/toolkit";
import transcriptionReducer from "../slices/transcriptionSlice";
import evaluationReducer from "../slices/evaluationSlice";

export const store = configureStore({
  reducer: {
    transcription: transcriptionReducer,
    evaluation: evaluationReducer,
  },
});

// RTK Docs: Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// RTK Docs: Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
