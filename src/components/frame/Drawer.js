import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useUser from "../../hooks/useUser";

const Drawer = ({ onClose }) => {
  const { loggedIn, logOut } = useUser();

  return (
    <Dimmed>
      <DrawCloser onClick={onClose}></DrawCloser>
      <DrawContainer>
        <ul>
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
              <Link to="/login" className="menu">
                로그인
              </Link>
            </Item>
          )}
        </ul>
      </DrawContainer>
    </Dimmed>
  );
};

const Dimmed = styled.div`
  position: fixed;
  top: ${({ theme: { heights } }) => heights.header}px;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translateX(-50%);

  max-width: ${({ theme: { widths } }) => widths.main}px;
  width: 100%;

  z-index: 1;
  background: rgba(138, 146, 158, 0.6);
`;

const DrawCloser = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DrawContainer = styled.nav`
  position: absolute;
  width: min(66%, 100%); /*274px*/
  height: 100%;
  right: 0;
  background: #fafafa;
`;

const Item = styled.li`
  padding: 14px 0;
  border-bottom: 1px solid #ebedf1;
  text-align: center;
  line-height: 22px;

  .menu {
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    color: #8a929e;
  }
`;

export default Drawer;
