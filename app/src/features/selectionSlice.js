import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = data;

const selectionSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectionAdded(state, action) {
      state.push(action.payload);
    },
  },
});

console.log(initialState);
export const { selectionAdded } = selectionSlice.actions;

export default selectionSlice.reducer;
