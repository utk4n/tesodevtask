import { useEffect, useState, useRef } from "react";
import Logo from "./assets/logo.png";
import Search from "./assets/search.svg";
import Location from "./assets/loc.svg";
import RightArrow from "./assets/rightArrow.svg";
import LeftArrow from "./assets/leftArrow.svg";
import NewsImg from "./assets/newsImg.png";
import FooterImg from "./assets/footerImg.png";
import DATA from "./datas/mockData.json";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, addNewRecord } from "./redux/newRecordSlice";
function App() {
  const [search, setSearch] = useState("");
  // const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  const record = useSelector((state) => state.record);
  console.log(record);
  useEffect(() => {
    const results = DATA.data.reduce((prev, val) => {
      var item = {};
      DATA.cols.forEach((_, colIndex) => {
        item[DATA.cols[colIndex]] = val[colIndex];
      });
      prev.push(item);
      return prev;
    }, []);

    // setAllData(results);
    dispatch(getAllData(results));
  }, []);

  const addNewRec = () => {
    dispatch(
      addNewRecord()
    );
    console.log(record);
  };

  return (
    <div className="App">
      <button onClick={addNewRec}>ADD</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>

      {allData.map((val) => {
        return <span>{val.Company}</span>;
      })}
    </div>
  );
}

export default App;
