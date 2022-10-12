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
import AddNewRecord from "./pages/AddNewRecord";
import useGetAllData from "./hooks/useGetAllData";
function App() {
  // const record = useGetAllData();
  // console.log("redcccc", record);
  // const keys = DATA.cols;

  // const searchMyData = (e) =>
  //   record.filter((item) =>
  //     keys.some((key) =>
  //       item[key].toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // console.log(searchMyData);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/addnewrecord" element={<AddNewRecord />} />
      </Routes>
    </div>
  );
}

export default App;
