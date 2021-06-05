import React, { useState, useEffect } from "react";
import { NoticeAlert, SVG } from "../common";
import usePage from "../../hooks/usePage";

import { BACK, NOTHING, SEARCH } from "../../constants/headerInfo";
import ENUM from "../../constants/Enum";
/*
 * type: string;
 */
const LeftBtn = ({ type = BACK }) => {
  const { goBack } = usePage();

  const onClickEvent = () => {
    switch (type) {
      case BACK:
        return goBack();
      case SEARCH:
        return NoticeAlert.open("곧 업데이트 예정이에요!");
      default:
        return null;
    }
  };

  if (type === NOTHING) return null;

  return (
    <>
      {type !== BACK && (
        <NoticeAlert icon={ENUM.WARNING} btns={[{ name: "닫기" }]} />
      )}
      <SVG
        type={type}
        onClick={onClickEvent}
        style={{ width: "24", height: "24" }}
      />
    </>
  );
};

export default LeftBtn;
