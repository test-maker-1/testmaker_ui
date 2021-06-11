import styled from "styled-components";

export const inputStyles = `
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #fafafa !important;
  color: #697382;

  &::placeholder {
    color: #b7bdcb;
  }
`;

export const Input = styled.input`
  ${inputStyles}
  margin-bottom: 16px;
  padding: 12px;
  font-size: 15px;
  line-height: 22px;
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  padding: 16px;
  height: 138px;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.5px;
`;

export const InputNumber = styled.input`
  all: inherit;
  text-align: center;
  &::placeholder {
    all: inherit;
  }
`;

export const InputFile = styled.input`
  width: 0;
  display: none;
`;

export default Input;
