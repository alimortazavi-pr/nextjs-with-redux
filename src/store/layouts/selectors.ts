import { RootState } from "@/store/index";

export function isLoading(state: RootState): boolean {
  return state.layouts.isLoading;
}
