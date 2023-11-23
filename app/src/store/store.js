import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "../features/selectionSlice";

export default configureStore({
  reducer: {
    selection: selectionReducer,
  },
});
