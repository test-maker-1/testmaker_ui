import React from "react";
import styled from "styled-components";

const RoundContiner = ({children}) => {
  return (
    <RoundBox>
      {children}
    </RoundBox>
  );
}

const RoundBox = styled.div`
  /*width: calc(100% - 2em);*/
  background: #FFFFFF;
  border-radius: 25px 25px 0px 0px;
  padding: 1.1em 1em 80px; //24px 20px;
`;

export default RoundContiner;