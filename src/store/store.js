import { configureStore } from "@reduxjs/toolkit";
import newRecordSlice from "../redux/newRecordSlice";
export const store = configureStore({
  reducer: {
    record: newRecordSlice,
  },
});
