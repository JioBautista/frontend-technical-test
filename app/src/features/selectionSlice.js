import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  data: data,
  amount: [],
};

const selectionSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectionAdded(state, action) {
      state.amount.push({
        id: action.payload.id,
        value: action.payload.value,
        name: action.payload.name,
      });
    },
    selectionRemoved(state, action) {
      const selectionID = action.payload;
      state.amount = state.amount.filter((item) => item.id !== selectionID);
    },
  },
});

export const { selectionAdded, selectionRemoved, changeBetAmount } =
  selectionSlice.actions;

export default selectionSlice.reducer;
