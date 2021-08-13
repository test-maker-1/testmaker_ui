import React from "react";
import { useSelector } from "react-redux";

import { SVG } from "../common";
import usePage from "../../hooks/usePage";

import { MENU, NOTHING, SEARCH } from "../../constants/headerInfo";

/*
 * type: string;
 * onToggleMenu: function;
 */
const RightBtn = ({ type = MENU, onToggleMenu }) => {
  const { query } = useSelector((state) => state.common);
  const { goPage } = usePage();

  if (type === NOTHING) return null;

  const onClickEvent = () => {
    if (type === SEARCH) {
      goPage("/search", `?query=${query}`);
      return;
    }
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
