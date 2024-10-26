import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ViewOptions = "vertical" | "horizontal" | "stacked";

type LayoutState = {
  view: ViewOptions;
};

const initialState: LayoutState = {
  view: "vertical",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setView(state, action: PayloadAction<ViewOptions>) {
      state.view = action.payload;
    },
  },
});

export const { setView } = layoutSlice.actions;
export default layoutSlice.reducer;
