import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";
import { searchWord } from "../redux/newRecordSlice";
import HomeSearchBox from "../components/HomeSearchBox";
import TopNews from "../components/TopNews";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import useSearch from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { searchMyData } = useSearch();
  const dispatch = useDispatch();

  const { latestSearchWord } = useSelector((state) => state.record.search);

  const trimmedWord = latestSearchWord.trim();
  const inpValidate = (e) => {
    if (trimmedWord.length >= 2) {
      searchMyData();
    }
  };

  return (
    <>
      <header>
        <button
          onClick={() => navigate("/addnewrecord")}
          className="add_new_btn"
        >
          Add new record
        </button>
      </header>

      <div className="logo_searchApp">
        <img src={Logo} alt="" />
        <p>Search app</p>
      </div>

      <div className="find_records">
        <h2>Find in records</h2>
        <div className="input_btn">
          <input
            value={latestSearchWord}
            type="text"
            onKeyDown={inpValidate}
            onChange={(e) => {
              dispatch(searchWord(e.target.value));
            }}
          />
          <img src={Search} alt="" className="search" />
          <button onClick={searchMyData}>Search</button>
          <HomeSearchBox />
        </div>
      </div>

      <TopNews />
      <Footer />
    </>
  );
};

export default Home;
