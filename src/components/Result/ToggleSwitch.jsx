import React, { useState } from "react";
import Switch from "react-switch";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked) => {
    setChecked(checked);
  };
  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      width={36}
      height={21}
    />
  );
};

export default ToggleSwitch;
