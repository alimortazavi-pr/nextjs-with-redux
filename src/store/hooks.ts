import type { AppDispatch, RootState } from "@/store";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

//useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
//useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
