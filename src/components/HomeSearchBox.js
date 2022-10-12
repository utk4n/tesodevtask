import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Location from "../assets/loc.svg";
const HomeSearchBox = () => {
  const searchResult = useSelector((state) => state.record.search.searchResult);
const navigate = useNavigate()
  const dispatch = useDispatch();

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
    
    {searchResultDisplay.length > 1 &&  <div className="search_box">
            {searchResultDisplay}
            {searchResultDisplay.length >= 3 && (
              <div className="show_more">
                <p onClick={() => navigate("/results")}>Show more...</p>
              </div>
            )}
          </div>}
    
    </>
  );
};

export default HomeSearchBox;
