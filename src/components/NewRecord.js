import useNewRecord from "../hooks/useNewRecord";
import { useAppDispatch } from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import { addNewRecord } from "../redux/newRecordSlice";
import { useRef } from "react";

const NewRecord = () => {
  const record = useAppSelector();
  console.log(record);

  const { newRecordHandle, newRecord } = useNewRecord();
  const dispatch = useAppDispatch();
  const nameRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);
  const emailRef = useRef(null);
  const nameValidation = nameRef.current?.value;
  const countryValidation = countryRef.current?.value;
  const cityValidation = cityRef.current?.value;
  const emailValidation = emailRef.current?.value;

  const cityNumberValidate = !/[^a-zA-Z]/.test(cityValidation);
  const nameNumberValidate = !/[^a-zA-Z]/.test(nameValidation);
  const countryNumberValidate = !/[^a-zA-Z]/.test(countryValidation);
  console.log("city", cityNumberValidate);
  console.log("name", nameNumberValidate);
  console.log("country", countryNumberValidate);
  const inputValidations =
    nameValidation?.length <= 2 ||
    nameValidation?.length >= 60 ||
    countryValidation?.length <= 2 ||
    countryValidation?.length >= 60 ||
    cityValidation?.length <= 2 ||
    cityValidation?.length >= 60 ||
    emailValidation === "";

  //   console.log(numberValidate);
  const formHandle = (e) => {
    e.preventDefault();
    if (
      !inputValidations &&
      cityNumberValidate &&
      nameNumberValidate &&
      countryNumberValidate
    ) {
      dispatch(addNewRecord(newRecord));
    }
  };

  return (
    <form className="form_element" onSubmit={formHandle}>
      <div>
        <label>Name Surname</label>
        <input
          ref={nameRef}
          type="text"
          name="Name Surname"
          placeholder="Enter name and surname"
          onChange={newRecordHandle}
        />
      </div>
      <div>
        <label>Country</label>
        <input
          ref={countryRef}
          type="text"
          name="Country"
          placeholder="Enter a country"
          onChange={newRecordHandle}
        />
      </div>
      <div>
        <label>City</label>
        <input
          ref={cityRef}
          type="text"
          name="City"
          placeholder="Enter a city"
          onChange={newRecordHandle}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          ref={emailRef}
          type="email"
          name="Email"
          placeholder="Enter a e-mail (abc@xyz.com)"
          onChange={newRecordHandle}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default NewRecord;
