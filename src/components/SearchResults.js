import Logo from "../assets/logo.png";
import SortIcon from "../assets/sortIcon.svg";
import SortOrder from "./SortOrder";
import useDropDownState from "../hooks/useDropDownState";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import { searchWord } from "../redux/newRecordSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import SearchResultTable from "./SearchResultTable";
const SearchResults = () => {
  const { isOpen, dropDownHandler } = useDropDownState();
  const { latestSearchWord } = useSelector((state) => state.record.search);

  const navigate = useNavigate();
  const { searchMyData } = useSearch();
  const dispatch = useAppDispatch();

  return (
    <div className="results">
      <header>
        <div className="header_left_side">
          <img src={Logo} alt="" onClick={() => navigate("/")} />
          <input
            type="text"
            value={latestSearchWord}
            onChange={(e) => dispatch(searchWord(e.target.value))}
          />
          <button onClick={searchMyData}>Search</button>
        </div>
        <div className="header_right_add_new_btn">
          <button onClick={() => navigate("/addnewrecord")}>
            Add new record
          </button>
        </div>
      </header>

      <div className="search_section">
        <div className="order_section">
          <button onClick={dropDownHandler}>
            <img src={SortIcon} alt="orderBtnArrowImg" /> Order By
          </button>
          <SortOrder isOpen={isOpen} />
        </div>
      </div>
      <SearchResultTable />
    </div>
  );
};

export default SearchResults;
