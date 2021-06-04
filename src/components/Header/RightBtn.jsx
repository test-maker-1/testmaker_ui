import React from "react";
import { SVG } from "../common";
import { MENU, NOTHING } from "../../constants/headerInfo";

/*
 * type: string;
 * onToggleMenu: function;
 */
const RightBtn = ({ type = MENU, onToggleMenu }) => {
  if (type === NOTHING) return null;

  const onClickEvent = () => {
    if (type === MENU) onToggleMenu();
  };

  return (
    <SVG
      type={type}
      onClick={onClickEvent}
      style={{ width: "24", height: "24" }}
    />
  );
};

export default RightBtn;
