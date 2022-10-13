import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nameDesc, nameAsc, dateAsc, dateDesc } from "../redux/newRecordSlice";
const SortOrder = ({ isOpen }) => {
  const dispatch = useDispatch();
  if (!isOpen) return false;
  return (
    <ul className="sort_order_list">
      <li onClick={() => dispatch(nameAsc())}>Name ascending</li>
      <li onClick={() => dispatch(nameDesc())}>Name descending</li>
      <li onClick={() => dispatch(dateAsc())}>Year ascending</li>
      <li onClick={() => dispatch(dateDesc())}>Year descending</li>
    </ul>
  );
};

export default SortOrder;

// {[
//   "Name ascending",
//   "Name descending",
//   "Year ascending",
//   "Year descending",
// ].map((item, index) => (
//   <li onClick={func} key={index}>{item}</li>
// ))}
