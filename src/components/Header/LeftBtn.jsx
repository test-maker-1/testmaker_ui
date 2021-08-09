import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import usePage from "../../hooks/usePage";

import { BACK, MAKING_BACK, NOTHING, SEARCH } from "../../constants/headerInfo";
import { seqTest } from "../../constants/urlInfo";

import { ReactComponent as Search } from "../../resources/svg/search.svg";
import { ReactComponent as Back } from "../../resources/svg/back.svg";

const svgList = {
  [BACK]: <Back />,
  [SEARCH]: <Search />,
  [NOTHING]: null,
};

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

        if (prevIDX < 0) goPage("/test/pick-test");
        else goPage(`/test/${module}/${sequence[prevIDX]}`);
        return;

      case SEARCH:
        goPage("/search");
        return;

      default:
        return null;
    }
  };

  return (
    <Wrapper onClick={onClickEvent}>
      {svgList[type === MAKING_BACK ? BACK : type]}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;

export default LeftBtn;
