import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = []

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectionAdded(state, action) {
      state.push(action.payload);
    },
  },
});
console.log(selectionSlice);

export const { selectionAdded, decreaseSelection } = selectionSlice.actions;

export default selectionSlice.reducer;
