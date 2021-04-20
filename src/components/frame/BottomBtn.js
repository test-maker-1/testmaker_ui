import React, { memo } from "react";
import styled from "styled-components";

const BottomBtn = memo((props) => {
  console.log(props)
  return <BtnBox>BUTTON</BtnBox>;
});

BottomBtn.propTypes = {};

// 414 * 80
const BtnBox = styled.footer`
  position: fixed;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);

  width: min(414px, 100%);
  height: 80px;

  border: 1px solid black;
  line-height: 28.96px;
`;

export default BottomBtn;
