import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import useUser from "../../hooks/useUser";
import { SVG } from "../common";
import theme from "../../styles/theme";

import ENUM from "../../constants/Enum";

const { white, deepGray, darkGray } = theme.colors;

const logoSvgStyle = {
  width: 115,
  height: 35,
};

const Drawer = ({ onClose }) => {
  const { loggedIn, logOut } = useUser();
  const { pathname, search } = window.location;

  return (
    <Dimmed>
      <DrawCloser onClick={onClose}></DrawCloser>

      <DrawContainer>
        <SVG
          type={ENUM.CANCEL}
          style={{ stroke: deepGray }}
          onClick={onClose}
        />
        <ul className="menus">
          {loggedIn && (
            <Item>
              <Link to="/" className="menu">
                마이페이지
              </Link>
            </Item>
          )}
          <Item>
            <Link to="/" className="menu">
              피드로 이동
            </Link>
          </Item>
          {loggedIn ? (
            <Item>
              <button className="menu" onClick={logOut}>
                로그아웃
              </button>
            </Item>
          ) : (
            <Item>
              <Link
                to={{ pathname: "/login", state: { from: pathname, search } }}
                className="menu"
              >
                로그인
              </Link>
            </Item>
          )}
        </ul>

        <Logo>
          <SVG type={ENUM.HEADERLOGO} style={logoSvgStyle} />
          <h1>오늘의 테스트</h1>
        </Logo>
      </DrawContainer>
    </Dimmed>
  );
};

const Logo = styled.div`
  text-align: center;

  h1 {
    font-family: "yg-jalnan";
    font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
    line-height: 35px;
    color: ${({ theme: { colors } }) => colors.black};
  }
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translateX(-50%);

  max-width: ${({ theme: { widths } }) => widths.main}px;
  width: 100%;

  z-index: ${({ theme: { zIndex } }) => zIndex.drawer};
  background: rgba(138, 146, 158, 0.6);
`;

const DrawCloser = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DrawContainer = styled.nav`
  position: absolute;
  right: 0;
  width: min(66%, 100%); /* 274px */
  height: 100%;
  padding: 28px;

  display: flex;
  flex-direction: column;
  background: ${white};

  svg {
    margin: 0 0 11px auto;
  }

  .menus {
    flex: 1;
  }
`;

const Item = styled.li`
  margin-bottom: 21px;
  line-height: 30px;

  .menu {
    text-decoration: none;
    letter-spacing: -0.8px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}rem;
    font-weight: bold;
    color: ${darkGray};
  }
`;

export default Drawer;
