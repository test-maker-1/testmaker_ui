import React from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { SVG } from "../common";
import ENUM from "../../constants/Enum";
import usePage from "../../hooks/usePage";

import { LOGO, NOTHING, TITLE, CUSTOM } from "../../constants/headerInfo";

/*
 * type: string;
 */
const TitleBtn = ({ type = LOGO, title = null }) => {
  const { goPage } = usePage();
  const headTitle = useSelector((state) => ({
    headTitle : state.common.headTitle,
  }))

  if (type === NOTHING) return null;
  if (type === TITLE) return title;
  if (type === CUSTOM) return headTitle;

  const onClickEvent = () => {
    if (type === LOGO) return goPage("/");
  };

  return <Button onClick={onClickEvent}>{titleBtn[type]}</Button>;
};
const titleBtn = {
  [LOGO]: <SVG type={ENUM.HEADERLOGO} style={{ width: "85", height: "24" }} />,
};

const Button = styled.button``;

export default TitleBtn;
