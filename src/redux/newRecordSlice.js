import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  search: {
    latestSearchWord: "",
    searchResult: [],
  },
};

const newRecordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    getAllData: (state, action) => {
      state.allData = action.payload;
      return state;
    },
    addNewRecord: (state, action) => {
      state.allData = [...state.allData, action.payload];
      return state;
    },
    searchResult: (state, action) => {
      state.search.searchResult = action.payload;
      return state;
    },
    searchWord: (state, action) => {
      state.search.latestSearchWord = action.payload;
      return state;
    },
  },
});

export const { getAllData, addNewRecord, searchResult, searchWord } =
  newRecordSlice.actions;
export default newRecordSlice.reducer;
