import React from "react";
import styled from "styled-components";

import { inputStyles } from "../../styles/index";
import arrow from "../../resources/arrow.svg";

const Select = ({ defaultValue, children }) => {
  return (
    <Wrapper>
      <select defaultValue={defaultValue}>{children}</select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${inputStyles}

  display: flex;
  align-items: center;
  background: url(${arrow}) no-repeat right 8px center;

  select {
    cursor: pointer;
    color: #697382;

    width: 100%;
    padding: 12px 35px 12px 12px;
    border: 0;

    letter-spacing: -0.5px;
    font-size: 15px;
    line-height: 22px;
  }

  option {
    font-size: 15px;
  }
`;

export default Select;
