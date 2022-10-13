import { useState } from "react";
import { useSelector } from "react-redux";
const Pagination = ({
  currentItems,
  searchResult,
  currentPage,
  handleClick,
  recordsPerPage,
  setCurrentPage,
}) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const pages = [];
  for (let i = 0; i < Math.ceil(searchResult?.length / recordsPerPage); i++) {
    pages.push(i);
  }
 

  const pageNumbersRender = pages.map((page) => {
    if (page < maxPageNumberLimit + 1 && page >= minPageNumberLimit) {
      return (
        <li
          key={page}
          id={page}
          className={currentPage === page ? "active" : null}
          onClick={handleClick}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  const nextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={nextBtn}>&hellip;</li>;
  }

  console.log(pageNumbersRender);
  return (
    <div className="pagination">
      <li onClick={prevBtn} className="prev_btn">
        Prev
      </li>

      {/* {pages.map((page) => (
        <li
          key={page}
          id={page}
          className={currentPage === page ? "active" : ""}
          onClick={handleClick}
        >
          {page}
        </li>
      ))} */}
      {pageNumbersRender}
      {pageIncrementBtn}
      <li onClick={nextBtn} className="next_btn">
        Next
      </li>
    </div>
  );
};

export default Pagination;
