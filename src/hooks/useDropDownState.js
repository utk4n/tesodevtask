import { useState } from "react";

const useDropDownState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, dropDownHandler };
};

export default useDropDownState;
