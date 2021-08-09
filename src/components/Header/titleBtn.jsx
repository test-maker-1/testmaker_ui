import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { SVG } from "../common";
import { InputSearch } from "../../styles";

import usePage from "../../hooks/usePage";

import ENUM from "../../constants/Enum";
import {
  LOGO,
  NOTHING,
  TITLE,
  CUSTOM,
  SEARCH,
} from "../../constants/headerInfo";

// type: string;
const TitleBtn = ({ type = LOGO, title = null }) => {
  const { goPage } = usePage();
  const { headTitle } = useSelector((state) => ({
    headTitle: state.common.headTitle,
  }));

  if (type === NOTHING) return null;
  if (type === TITLE) return <TitleText>{title}</TitleText>;
  if (type === CUSTOM) return <Step>{headTitle}</Step>;
  if (type === SEARCH)
    return <InputSearch placeholder="테스트 이름, 태그명, 닉네임으로 검색" />;

  const onClick = () => {
    if (type === LOGO) return goPage("/");
  };

  return titleBtn[type](onClick);
};

const titleBtn = {
  [LOGO]: (onClick = null) => (
    <SVG
      type={ENUM.HEADERLOGO}
      style={{ width: 85, height: 24 }}
      onClick={onClick}
    />
  ),
};

const TitleText = styled.p`
  text-align: center;
  user-select: none;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

const Step = styled.p`
  text-align: center;
  user-select: none;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}rem;
  line-height: 30px;
  letter-spacing: -0.8px;
  color: ${({ theme: { colors } }) => colors.blue};
`;

export default TitleBtn;
