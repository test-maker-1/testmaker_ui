import React, { memo } from 'react'
import styled from "styled-components";

// 414 * 80
const BtnBox = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0px;
  line-height: 28.96px;
  border: 1px solid black;
`;



const BottomBtn = memo(props => {
  return <BtnBox>BUTTON</BtnBox>
})

BottomBtn.propTypes = {}

export default BottomBtn
