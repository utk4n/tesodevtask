import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { modalIsOpen } from "../redux/newRecordSlice";
import { useSelector, useDispatch } from "react-redux";
import CloseModal from "../assets/closeModal.svg";
import style from "../errorModal.module.scss";
const ErrorModal = ({ nameValidation, countryValidation, cityValidation }) => {
  let nameError =
    (nameValidation?.length <= 2 &&
      "Name and surname should contain at least 2 words") ||
    (countryValidation?.length <= 2 &&
      "Country name should contain at least 2 words") ||
    (cityValidation?.length <= 2 &&
      "City name should contain at least 2 words");
  const dispatch = useDispatch();
  const { modalStatus } = useSelector((state) => state.record);

  if (modalStatus) {
    return createPortal(
      <div className={style.error_modal}>
        <div
          className={style.close_icon}
          onClick={() => dispatch(modalIsOpen())}
        >
          <img src={CloseModal} alt="closeIcon" />
        </div>
        <div className={style.modal_wrapper}>
          <div className={style.modal_info}>
            <div>
              <p>Error while adding link element</p>
            </div>
            <div>
              <p>{nameError}</p>
            </div>
          </div>
          <h1>Error</h1>
        </div>
      </div>,
      document.getElementById("portal")
    );
  } else {
    return;
  }
};

export default ErrorModal;
