import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetAllData from "../hooks/useGetAllData";
import { searchResult, searchWord } from "../redux/newRecordSlice";

import DATA from "../datas/mockData.json";

const useSearch = () => {
  const dispatch = useDispatch();
  const { latestSearchWord } = useSelector((state) => state.record.search);
  const record = useGetAllData();

  const keys = DATA.cols;

  const [text, setText] = useState("");

  const searchMyData = () => {
    dispatch(
      searchResult(
        record.filter((item) =>
          keys.some((key) =>
            item[key]
              .toLowerCase()
              .includes(latestSearchWord.toLowerCase())
          )
        )
      )
    );
    dispatch(searchWord(latestSearchWord));
  };

  return { searchMyData, setText, searchResult, text };
};

export default useSearch;
