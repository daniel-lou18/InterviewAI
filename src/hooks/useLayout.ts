import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setView, ViewOptions } from "@/slices/layoutSlice";

export function useLayout() {
  const { view } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  const updateView = (view: ViewOptions) => dispatch(setView(view));

  return { view, updateView };
}
