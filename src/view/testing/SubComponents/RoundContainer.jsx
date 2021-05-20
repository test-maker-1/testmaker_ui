import React from "react";
import styled from "styled-components";

const RoundContiner = ({ noPadding, children }) => {
  return <RoundBox noPadding={noPadding}>{children}</RoundBox>;
};

const RoundBox = styled.div`
  /*width: calc(100% - 2em);*/
  background: ${({ theme: { colors } }) => colors.snow};
  border-radius: 25px 25px 0px 0px;
  width: 100%;
  /*24px 20px*/
  padding: ${({ noPadding, theme: { paddings } }) =>
    noPadding ? "0px" : "24px " + paddings.main + "rem 0px;"};
`;

export default RoundContiner;
