import React from "react";
import styled from "styled-components";

import { inputStyles } from "../../styles/index";
import arrow from "../../resources/arrow.svg";

/*
 * name: string;
 * value: string || number;
 * onChange: function;
 */
const Select = ({ name, value, onChange, children }) => {
  return (
    <Wrapper>
      <select name={name} value={value} onChange={onChange}>
        {children}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${inputStyles}

  display: flex;
  align-items: center;
  background: url(${arrow}) no-repeat right 8px center;

  select {
    width: 100%;
    padding: 12px 35px 12px 12px;
    font-size: 15px;
    letter-spacing: -0.5px;
    line-height: 22px;
    color: #697382;
  }

  option {
    font-size: 15px;
  }
`;

export default Select;
