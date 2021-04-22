import React, { useMemo, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

import Header from "./Header";
import Drawer from "./Drawer";
import BottomBtn from "./BottomBtn";

import { handleScroll } from "../../utils/styleHandler";

//js 모듈 분리도 가능
const getConfiguration = (plocation) => {
  let title = "";
  let buttons = [];

  if (plocation.pathname === "/") {
    title = "TEST MAKER";
    buttons = ["테스트 만들기 도전"];
  }

  return { title, buttons };
};

const MainForm = ({ children, history, location, match }) => {
  const { title, buttons } = useMemo(() => getConfiguration(location), [location]);
  const [showTitle, showBtns] = [title.length > 0, buttons.length > 0];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleScroll(!open);
    return () => handleScroll(false);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <BackGround>
      {open && <Drawer setOpen={setOpen} />}
      <MainBox>
        {showTitle && <Header title={title} open={open} setOpen={setOpen} />}
        <Main showTitle={showTitle} showBtns={showBtns}>
          {children}
        </Main>
        {showBtns && <BottomBtn buttons={buttons} />}
      </MainBox>
    </BackGround>
  );
};

const BackGround = styled.div`
  min-height: 100%;
  background: #e6e6e6;
`;

const MainBox = styled.div`
  position: relative;
  margin: 0px auto;
  width: min(${({ theme: { widths } }) => widths.main}px, 100%);
  height: 100%;
  background: #ffffff;
`;

const Main = styled.main`
  display: flex;

  ${({ theme, showTitle, showBtns }) => {
    const { paddings, heights } = theme;
    let HeightToSubtrat = 0;

    HeightToSubtrat += showTitle && heights.header;
    HeightToSubtrat += showBtns && heights.bottomBtn;

    return css`
      padding: 0 ${paddings.main}px;
      padding-bottom: ${showBtns ? heights.bottomBtn : 0}px;
      min-height: calc(100vh - ${HeightToSubtrat}px);
    `;
  }}

  /* view component */
  & > div {
    flex: 1;
  }
`;

export default withRouter(MainForm);
