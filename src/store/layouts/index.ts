import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import LayoutStateInterface from "@/interfaces/layoutInterface";

//Reducers
import reducers from "@/store/layouts/reducers";

const initialState: LayoutStateInterface = {
  isLoading: false,
};

export const layoutsReducer = createSlice({
  name: "layouts",
  initialState,
  reducers,
});

export default layoutsReducer.reducer;
