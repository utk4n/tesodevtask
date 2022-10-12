import { useSelector } from "react-redux";
import Location from "../assets/loc.svg";
const SearchResultTable = () => {
  const { searchResult } = useSelector((state) => state.record.search);
  return (
    <div className="results_table">
        <div></div>
      <div className="results_row">
      {searchResult.map((rec) => (
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

    </div>
  );
};

export default SearchResultTable;
