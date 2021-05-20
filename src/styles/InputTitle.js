import styled from "styled-components";
import { md, lg } from "../constants/Enum";

const style = {
  [md]: {
    fontSize: 20,
    lineHeight: 30,
  },
  [lg]: {
    fontSize: 24,
    lineHeight: 36,
  },
};

// size: string; ex) "md" || "lg"
const InputTitle = styled.input`
  margin-bottom: 16px;
  width: 100%;

  font-size: ${({ size }) => style[size].fontSize}px;
  font-weight: bold;
  line-height: ${({ size }) => style[size].lineHeight}px;
  letter-spacing: -1px;

  border: none;
  outline: none;
  color: ${({ theme: { colors } }) => colors.darkGray};

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.lightGray};
  }
`;

InputTitle.defaultProps = {
  size: md,
};

export default InputTitle;
