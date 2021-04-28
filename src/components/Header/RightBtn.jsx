import React from "react";
import styled from "styled-components";

import { MENU, SEARCH, NOTHING } from "../../constants/headerInfo";

/*
 * type: string;
 * onToggleMenu: function;
 */
const RightBtn = ({ type = MENU, onToggleMenu }) => {
  if (type === NOTHING) return null;

  const onClickEvent = () => {
    if (type === MENU) onToggleMenu();
  };

  return <Button onClick={onClickEvent}>{rightBtn[type]}</Button>;
};

const rightBtn = {
  [MENU]: "메뉴",
  [SEARCH]: "검색"
};

const Button = styled.button``;

export default RightBtn;
