import { useState } from "react";
import regex from "../../constants/regex";

const useNumber = (initValue) => {
  const [value, setValue] = useState(initValue);

  const handleOnChange = (e) => {
    const { value } = e.target;

    if (!regex.point.test(value)) return; // prevent string
    if (value < 1 || value > 10) {
      setValue("");
      return;
    } // prevent value

    setValue(value);
  };

  return { value, handleOnChange };
};

export default useNumber;
