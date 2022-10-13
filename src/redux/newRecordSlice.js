import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  search: {
    latestSearchWord: "",
    searchResult: [],
  },
  modalStatus : false
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
    nameDesc: (state) => {
      state.search.searchResult.sort((a, b) =>
        a["Name Surname"] < b["Name Surname"] ? 1 : -1
      );
    },
    nameAsc: (state) => {
      state.search.searchResult.sort((a, b) =>
        a["Name Surname"] > b["Name Surname"] ? 1 : -1
      );
    },
    dateDesc : (state) => {
      state.search.searchResult.sort((a, b) => (a.Date < b.Date ? 1 : -1));
    },
    dateAsc : (state) => {
      state.search.searchResult.sort((a, b) => (a.Date > b.Date ? 1 : -1));
    },
    modalIsOpen: (state) => {
      state.modalStatus = !state.modalStatus
    }
  },
});

export const {
  getAllData,
  addNewRecord,
  searchResult,
  searchWord,
  nameDesc,
  nameAsc,
  dateDesc,
  dateAsc,
  modalIsOpen
} = newRecordSlice.actions;
export default newRecordSlice.reducer;
