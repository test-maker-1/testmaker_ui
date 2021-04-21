import React from "react";
import styled from "styled-components";

export const TitleBox = ({title, noline, children}) =>{
  console.log(noline)
  return (
    <Box noline={noline}>
      <h1>{title}</h1>
      {children}
    </Box>
  );
}

const Box = styled.div`
  padding: 20px 10px;
  border-bottom: ${({noline}) => noline ? "0px" : "1px solid #EBEDF1"};
`;