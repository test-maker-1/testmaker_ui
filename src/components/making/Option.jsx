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
 */
const Option = ({ value, isAnswer, deleteOption, idxs }) => {
  const { updateQuestion, updateOption } = useMaking();
  const { questionIdx, optionIdx } = idxs;

  const onUpdate = (e) => {
    const { value: newOption } = e.target;
    updateOption(questionIdx, optionIdx, value, newOption);
  };

  const onDelete = () => deleteOption(questionIdx, optionIdx);

  const onCheckAnswer = () => {
    if (value.length < 1) return;
    updateQuestion("answer", value, questionIdx);
  };

  return (
    <Container bgColor={isAnswer ? "blue" : "white"}>
      <InputContainer>
        <CheckWrap>
          <SVG type={ENUM.CHECK} onClick={onCheckAnswer} />
        </CheckWrap>
        <InputWrap>
          <OptionText
            placeholder="선택지를 입력해주세요"
            defaultValue={value}
            rows={1}
            color={isAnswer ? "white" : "darkGray"}
            onBlur={onUpdate}
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
