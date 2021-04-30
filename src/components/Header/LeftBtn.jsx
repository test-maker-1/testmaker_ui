import React from "react";
import styled from "styled-components";

import { BACK, SEARCH, LOGO, NOTHING } from "../../constants/headerInfo";

/*
 * type: string;
 */
const LeftBtn = ({ type = BACK }) => {
  return <>{leftBtn[type]}</>;
};

const BackBtn = () => {
  return <Button>뒤로</Button>;
};

const SearchBtn = () => {
  return <Button>검색</Button>;
};

const LogoBtn = () => {
  return <Button>로고</Button>;
};

const leftBtn = {
  [BACK]: <BackBtn />,
  [SEARCH]: <SearchBtn />,
  [LOGO]: <LogoBtn />,
  [NOTHING]: null
};

const Button = styled.button``;

export default LeftBtn;
