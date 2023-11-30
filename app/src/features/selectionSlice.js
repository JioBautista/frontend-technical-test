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
      const stateIndex = state.amount.findIndex(
        (item) => item.id === selectionID
      );
      state.amount.splice(stateIndex, 1);
    },
    addValue(state, action) {
      const selectionID = action.payload;
      const stateIndex = state.amount.findIndex(
        (item) => item.id === selectionID
      );
      state.amount[stateIndex].value =
        state.amount[stateIndex].value + state.amount[stateIndex].value;
      console.log(stateIndex);
    },
  },
});

export const { selectionAdded, selectionRemoved, addValue } =
  selectionSlice.actions;

export default selectionSlice.reducer;
