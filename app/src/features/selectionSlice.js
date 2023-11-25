import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = [];

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectionAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { selectionAdded } = selectionSlice.actions;

export default selectionSlice.reducer;
