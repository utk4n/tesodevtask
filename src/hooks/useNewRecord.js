import { useState } from "react";
import useDate from "../hooks/useDate";
const useNewRecord = () => {
  const [newRecord, setNewRecord] = useState({});
  const getDate = useDate();
  const recordDate = getDate();
  const newRecordHandle = (e) => {
    setNewRecord({
      ...newRecord,
      Date: recordDate,
      Company: "TESODEV",
      [e.target.name]: e.target.value,
    });
  };

  return {newRecordHandle,newRecord};
};

export default useNewRecord;
