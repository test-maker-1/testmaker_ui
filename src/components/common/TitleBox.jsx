import React from "react";
import styled from "styled-components";

/* title: string;
 * noline: boolean;
 */
export const TitleBox = ({ title = null, noline = false, children }) => {
  return (
    <Box className="title-box" noline={noline}>
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

export const Box = styled.div`
  padding: 24px ${({ theme: { paddings } }) => paddings.main}rem;
  border-bottom: ${({ noline }) => (noline ? "0px" : "1px solid #EBEDF1")};
`;

export const Title = styled.h1`
  padding-bottom: 24px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem;
  font-weight: bold;
  color: #697382;
`;
