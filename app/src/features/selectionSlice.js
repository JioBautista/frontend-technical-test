import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = data;

const selectionSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectionAdded(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      });
    },
  },
});

export const { selectionAdded } = selectionSlice.actions;

export default selectionSlice.reducer;
