import styled from "styled-components";

const TextArea = styled.textarea`
  padding: 16px;
  width: 100%;
  height: 138px;

  border-radius: 5px;
  background-color: #fafafa;
  color: #697382;

  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.5px;

  &::placeholder {
    color: #b7bdcb;
  }
`;

export default TextArea;
