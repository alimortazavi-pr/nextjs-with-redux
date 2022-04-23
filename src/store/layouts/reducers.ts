import { PayloadAction } from "@reduxjs/toolkit";

//Interfaces
import LayoutStateInterface from "@/interfaces/layoutInterface";

const reducers = {
  setIsLoading: (
    state: LayoutStateInterface,
    action: PayloadAction<boolean>
  ) => {
    state.isLoading = action.payload;
  },
};

export default reducers;
