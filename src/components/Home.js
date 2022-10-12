import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";
import Location from "../assets/loc.svg";
import RightArrow from "../assets/rightArrow.svg";
import LeftArrow from "../assets/leftArrow.svg";
import NewsImg from "../assets/newsImg.png";
import FooterImg from "../assets/footerImg.png";
import DATA from "../datas/mockData.json";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import useAppSelector from "../hooks/useAppSelector";
import { useDispatch, useSelector } from "react-redux";
import { searchWord } from "../redux/newRecordSlice";
import HomeSearchBox from "./HomeSearchBox";
const Home = () => {
  const navigate = useNavigate();
  const searchResult = useSelector((state) => state.record.search.searchResult);
  const {latestSearchWord} = useSelector((state) => state.record.search);

  const { searchMyData, setText } = useSearch();
  const dispatch = useDispatch();
  console.log(searchResult);
  const searchResultDisplay =
    searchResult.length >= 3
      ? searchResult.slice(0, 3).map((item) => (
          <div className="search_result">
            <img src={Location} alt="locationImg" />
            <div>
              <p>{item.Company}</p>
              <p>
                {item.Country},{item.City}
              </p>
            </div>
          </div>
        ))
      : searchResult.map((item) => (
          <div className="search_result">
            <img src={Location} alt="locationImg" />
            <div>
              <p>{item.Company}</p>
              <p>
                {item.Country},{item.City}
              </p>
            </div>
          </div>
        ));
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
            onChange={(e) => dispatch(searchWord(e.target.value))}
          />
          <img src={Search} alt="" className="search" />
          <button onClick={searchMyData}>Search</button>
          <HomeSearchBox />
        </div>
      </div>

      <div className="top_news_container">
        <h1>Top News</h1>
        <div className="news_slider">
          <div className="arrow">
            <img src={LeftArrow} alt="left_arrow" />
          </div>
          <div className="top_news">
            <img src={NewsImg} alt="news" />
            <p>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
            <p>1h ago · by Troy Corlson</p>
          </div>
          <div className="top_news">
            <img src={NewsImg} alt="news" />
            <p>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
            <p>1h ago · by Troy Corlson</p>
          </div>
          <div className="top_news">
            <img src={NewsImg} alt="news" />
            <p>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
            <p>1h ago · by Troy Corlson</p>
          </div>
          <div className="arrow">
            <img src={RightArrow} alt="right_arrow" />
          </div>
        </div>
      </div>
      <footer>
        <img src={FooterImg} alt="img" />
        <div>
          <p>
            İletişim <br />
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
            <span className="span_email">Email: bilgi@tesodev.com</span>
          </p>
        </div>
        <div className="footer_map">
          <iframe
            title="provider_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2719779991953!2d28.89039019849549!3d41.01930526996761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1665246893644!5m2!1str!2str"
            width="467.49"
            height="222.49"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </footer>
    </>
  );
};

export default Home;
