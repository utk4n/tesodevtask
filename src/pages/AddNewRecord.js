import React from "react";
import NewRecord from "../components/NewRecord";
import Logo from "../assets/logo.png";
import BackToList from "../assets/backToList.svg";
import { useNavigate } from "react-router-dom";
const AddNewRecord = () => {

const navigate = useNavigate()


  return (
    <div className="add_new_record">
      <div className="navigate_back_list">
        <img src={Logo} alt="logo" />
        <p onClick={() => navigate('/results')}>
          <img src={BackToList} alt="" /> Return to List Page
        </p>
      </div>
      <NewRecord />
    </div>
  );
};

export default AddNewRecord;
