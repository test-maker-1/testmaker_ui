import React from "react";
import { useLocation } from "react-router-dom";

import { NoticeAlert, SVG } from "../common";
import usePage from "../../hooks/usePage";

import { BACK, MAKING_BACK, NOTHING, SEARCH } from "../../constants/headerInfo";
import ENUM from "../../constants/Enum";
import { seqTest } from "../../constants/urlInfo";

// type: string;
const LeftBtn = ({ type = BACK }) => {
  const { goBack, goPage } = usePage();
  const { pathname } = useLocation();

  if (type === NOTHING) return null;

  const onClickEvent = () => {
    switch (type) {
      case BACK:
        return goBack();

      case MAKING_BACK:
        const [module, step] = [pathname.split("/")[2], pathname.split("/")[3]];
        if (!module || !seqTest.hasOwnProperty(module)) return;

        const sequence = seqTest[module];
        if (!step || sequence.indexOf(step) < 0) return;

        const prevIDX = sequence.indexOf(step) - 1;

        if (prevIDX < 0) goBack();
        else goPage(`/test/${module}/${sequence[prevIDX]}`);
        return;

      case SEARCH:
        return NoticeAlert.open({
          icon: ENUM.WARNING,
          text: "곧 업데이트 예정이에요!",
          btns: [{ name: "닫기" }],
        });

      default:
        return null;
    }
  };

  return (
    <SVG
      type={type === MAKING_BACK ? BACK : type}
      onClick={onClickEvent}
      style={{ width: "24", height: "24" }}
    />
  );
};

export default LeftBtn;
