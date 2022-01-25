import React from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { LottieImg } from "../common";
import { InputSearch } from "../../styles";

import { setQuery } from "../../redux/reducer/commonReducer";
import usePage from "../../hooks/usePage";

import {
  LOGO,
  NOTHING,
  TITLE,
  CUSTOM,
  SEARCH,
} from "../../constants/headerInfo";
import logo from "../../resources/lotties/logo-lottie.json";

// type: string;
const TitleBtn = ({ type = LOGO, title = null, location }) => {
  const { query } = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const { headTitle } = useSelector((state) => ({
    headTitle: state.common.headTitle,
  }));
  const { goPage } = usePage();

  if (type === NOTHING) return null;
  if (type === TITLE) return <TitleText>{title}</TitleText>;
  if (type === CUSTOM) return <Step>{headTitle}</Step>;
  if (type === SEARCH) {
    return (
      <InputSearch
        placeholder="테스트 이름, 태그명, 닉네임으로 검색"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    );
  }

  const onClick = () => {
    if (type === LOGO) return goPage("/");
  };

  return titleBtn[type](onClick);
};

const titleBtn = {
  [LOGO]: (onClick = null) => (
    <LogoLottie onClick={onClick}>
      <LottieImg lottieFile={logo} />
    </LogoLottie>
  ),
};

const LogoLottie = styled.div`
  margin: auto;
  width: 73px;
`;

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

export default withRouter(TitleBtn);
