import React from "react";
import styled from "styled-components";
import { SVG } from "../common";
import usePage from "../../hooks/usePage";

import { BACK, NOTHING } from "../../constants/headerInfo";

/*
 * type: string;
 */
const LeftBtn = ({ type = BACK }) => {
  const { goBack } = usePage();
  const onClickEvent = () => {
    switch (type) {
      case BACK:
        return goBack();
      default:
        return null;
    }
  };

  if (type === NOTHING) return null;

  return (
    <SVG
      type={type}
      onClick={onClickEvent}
      style={{ width: "24", height: "24" }}
    />
  );
};

export default LeftBtn;
