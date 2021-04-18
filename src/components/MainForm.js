import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import BottomBtn from "./BottomBtn";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  min-width: 430px;
  background: #e6e6e6;
`;
const MainBox = styled.div`
  width: 414px;
  height: 100%;
  margin: 0px auto;
  background: white;
  position: relative;
`;

const MainForm = (props) => {
  const {noHead, noBtn, children} = props;

  return (
    <BackGround>
      <MainBox>
        {!noHead &&
          <Header />
        }
        {children}
        {!noBtn &&
          <BottomBtn />
        }
      </MainBox>
    </BackGround>
  );
};

export default MainForm;