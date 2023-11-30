import { createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  data: data,
  amount: [],
  quantity: 0,
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
    addValue(state, action) {
      const selectionID = action.payload;
      state.amount.find(function (item) {
        return item.id === selectionID;
      });
      console.log(selectionID);
    },
  },
});

export const { selectionAdded, selectionRemoved, addValue } =
  selectionSlice.actions;

export default selectionSlice.reducer;
