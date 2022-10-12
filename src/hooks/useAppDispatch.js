import { useDispatch } from "react-redux";

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return dispatch;
};
