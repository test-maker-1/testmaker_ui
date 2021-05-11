import { memo } from "react";
import { SVG } from "../common";
import {
  Container,
  InputContainer,
  CheckWrap,
  InputWrap,
  OptionText,
  CancelWrap,
} from "../../styles/Options";

import ENUM from "../../constants/Enum";

/*
 * value: string;
 * answer: string;
 * onCheck, onCancel: function;
 */
const Option = ({ value, answer = null, onCheck, onCancel }) => {
  const isAnswer = answer && answer === value;

  return (
    <Container bgColor={isAnswer ? "blue" : "white"}>
      <InputContainer>
        <CheckWrap>
          <SVG type={ENUM.CHECK} onClick={onCheck} />
        </CheckWrap>
        <InputWrap>
          <OptionText
            placeholder="선택지를 입력해주세요"
            defaultValue={value}
            rows={1}
            color={isAnswer ? "white" : "darkGray"}
          />
        </InputWrap>
      </InputContainer>
      <CancelWrap>
        <SVG type={ENUM.CANCEL} onClick={onCancel} />
      </CancelWrap>
    </Container>
  );
};

export default memo(Option);
