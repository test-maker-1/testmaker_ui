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
import useMaking from "../../hooks/useMaking";

import ENUM from "../../constants/Enum";

/*
 * value: string;
 * answer: string;
 * onCheck: function;
 */
const Option = ({ value, answer = null, questionIdx, optionIdx }) => {
  const isAnswer = answer && answer === value;
  const { updateOption, deleteOption } = useMaking();

  const handleUpdate = (e) => {
    const { value } = e.target;
    updateOption(questionIdx, optionIdx, value);
  };

  const onDelete = () => deleteOption(questionIdx, optionIdx);

  return (
    <Container bgColor={isAnswer ? "blue" : "white"}>
      <InputContainer>
        <CheckWrap>
          <SVG type={ENUM.CHECK} />
        </CheckWrap>
        <InputWrap>
          <OptionText
            placeholder="선택지를 입력해주세요"
            defaultValue={value}
            rows={1}
            color={isAnswer ? "white" : "darkGray"}
            onBlur={handleUpdate}
          />
        </InputWrap>
      </InputContainer>
      <CancelWrap>
        <SVG type={ENUM.CANCEL} onClick={onDelete} />
      </CancelWrap>
    </Container>
  );
};

export default memo(Option);
