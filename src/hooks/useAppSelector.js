import { useSelector } from "react-redux";
const useAppSelector = () => {
  const record = useSelector((state) => state.record.allData);
  return record;
};

export default useAppSelector;
