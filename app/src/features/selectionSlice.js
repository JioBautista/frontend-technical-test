import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json"

const initialState = data;
console.log(data);
const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
  },
});

export default selectionSlice.reducer
