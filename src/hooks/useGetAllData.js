import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { getAllData } from "../redux/newRecordSlice";
import DATA from "../datas/mockData.json";
import useAppSelector from "./useAppSelector";
const useGetAllData = () => {

  const dispatch = useAppDispatch();
  const record = useAppSelector();

  useEffect(() => {
    const results = DATA.data.reduce((prev, val) => {
      let item = {};
      DATA.cols.forEach((_, colIndex) => {
        item[DATA.cols[colIndex]] = val[colIndex];
      });
      prev.push(item);
      return prev;
    }, []);
    dispatch(getAllData(results));
  }, [dispatch]);
  
  return record;
};

export default useGetAllData;
