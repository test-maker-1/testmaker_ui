import React from 'react'
import styled from "styled-components";

const Drawer = ({setOpen}) => {
  return (
    <>
      <Dimmed onClick={()=> setOpen(false)}/>
      <DrawContainer>TEST</DrawContainer>
    </>
  )
}

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #000;
  opacity: 0.3;
`;

const DrawContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: 274px;
  height: 100%;
  right: 0px;
  border: 1px solid black;
  background: white;
`;

export default Drawer
