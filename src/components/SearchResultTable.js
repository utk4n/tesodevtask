import { useState } from "react";
import { useSelector } from "react-redux";
import Location from "../assets/loc.svg";
import Pagination from "./Pagination";
const SearchResultTable = () => {
  const { searchResult } = useSelector((state) => state.record.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const indexOfLastItem = currentPage * recordsPerPage;
  const indexOfFirstItem = indexOfLastItem - recordsPerPage;
  const currentItems = searchResult.slice(indexOfFirstItem, indexOfLastItem);
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <div className="results_table">
      <div></div>
      <div className="results_row">
        {currentItems.map((rec) => (
          <div className="record_row">
            <div className="loc_address_info">
              <img src={Location} alt="locationImg" />
              <div>
                <p className="company">{rec.Company}</p>
                <p className="country_city">
                  {rec.Country},{rec.City}
                </p>
              </div>
            </div>
            <div className="name_date_info">
              <p className="fullname">{rec["Name Surname"]}</p>
              <p className="date">{rec.Date}</p>
            </div>
          </div>
        ))}
      </div>
      {searchResult?.length > 3 && <Pagination
        currentItems={currentItems}
        searchResult={searchResult}
        currentPage={currentPage}
        handleClick={handleClick}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
      />}
    </div>
  );
};

export default SearchResultTable;
