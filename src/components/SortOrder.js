import React from "react";

const SortOrder = ({ isOpen }) => {
  if (!isOpen) return false;

  return (
    <ul className="sort_order_list">
      {[
        "Name ascending",
        "Name descending",
        "Year ascending",
        "Year descending",
      ].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default SortOrder;
