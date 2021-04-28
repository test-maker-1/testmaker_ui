import React, { useMemo, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

import Header from "./Header";
import Drawer from "./Drawer";

import useOpen from "../../hooks/useOpen";
import { handleScroll } from "../../utils/styleHandler";
import { getConfiguration } from "../../utils/handler";

const MainForm = ({ children, history, location, match }) => {
  const { header } = useMemo(() => getConfiguration(location), [location]);
  const { open: openDrawer, onClose, onToggle } = useOpen();

  useEffect(() => {
    handleScroll(!openDrawer);
    return () => handleScroll(false);
  }, [openDrawer]);

  useEffect(() => {
    onClose();
  }, [location]);

  return (
    <BackGround>
      {openDrawer && <Drawer onClose={onClose} />}
      <MainBox>
        <Header header={header} onToggle={onToggle} />
        <Main>{children}</Main>
        {/* <BottomBtn>{bottomBtns}</BottomBtn> */}
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

  ${({ theme, showBtns }) => {
    // 아래 주석 처리된 부분 -> bottomBtn 여부에 따라 padding 추가(주석 해제)하는 로직 필요
    const { paddings, heights } = theme;
    let HeightToSubtrat = heights.header;
    // HeightToSubtrat += showBtns && heights.bottomBtn;

    return css`
      padding: 0 ${paddings.main}px;
      /* padding-bottom: ${showBtns ? heights.bottomBtn : 0}px; */
      min-height: calc(100vh - ${HeightToSubtrat}px);
    `;
  }}

  /* view component */
  & > div {
    flex: 1;
  }
`;

export default withRouter(MainForm);
