import React from "react";
import styled from "styled-components";

const RoundContiner = ({noPadding, children}) => {
  return (
    <RoundBox noPadding={noPadding}>
      {children}
    </RoundBox>
  );
}

const RoundBox = styled.div`
  /*width: calc(100% - 2em);*/
  background: #FFFFFF;
  border-radius: 25px 25px 0px 0px;
  /*24px 20px*/
  padding: ${({noPadding}) => noPadding ? "0px" : "1.1em 1em 0px"};
`;

export default RoundContiner;