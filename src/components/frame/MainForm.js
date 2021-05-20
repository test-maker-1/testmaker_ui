import React, { useMemo, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

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
      <MainBox header={header}>
        <Header header={header} onToggle={onToggle} />
        <Main>{children}</Main>
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
  background: ${({ header: {background = null }, theme: { colors } }) => background || colors.snow};
  /*min-width: ${({ theme: { widths } }) => widths.main}px;*/
`

const Main = styled.main`
  display: flex;
  min-height: ${({ theme: { heights } }) =>
    `calc(100vh - ${heights.header}px)`};

  /* view component */
  & > div {
    flex: 1;
  }
`;

export default withRouter(MainForm);
