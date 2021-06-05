import { memo, useMemo } from "react";
import { NoticeAlert, SVG } from "../common";
import { BtnAddOption } from ".";

import {
  Container,
  InputContainer,
  CheckWrap,
  InputWrap,
  OptionText,
  CancelWrap,
} from "../../styles/Options";
import theme from "../../styles/theme";

import useOption from "../../hooks/making/useOption";
import ENUM from "../../constants/Enum";
import msg from "../../constants/msg";

const { lightGray } = theme.colors;

const Options = ({ questionIdx, answer, options }) => {
  const isExist = (e) => {
    const values = options.map((option) => option.name);

    if (values.includes(e.target.value)) {
      e.target.value = "";
      return true;
    }
    return false;
  };

  return (
    <>
      <NoticeAlert btns={[{ name: "다시보기" }]} />
      <ul>
        {options.map(({ optionId, name }, idx) => (
          <Option
            key={optionId}
            value={name}
            answer={answer}
            optionsCnt={options.length}
            idxs={{ questionIdx, optionIdx: idx }}
            isExist={isExist}
          />
        ))}
      </ul>
      <BtnAddOption questionIdx={questionIdx} />
    </>
  );
};

const Option = memo(({ value, answer, idxs, optionsCnt, isExist }) => {
  const { questionIdx, optionIdx } = idxs;
  const { onUpdate, checkAnswer, deleteOption } = useOption();

  const isAnswer = useMemo(() => answer && value === answer, [answer, value]);
  const svgStyle = { stroke: isAnswer ? "white" : lightGray };

  const handleUpdate = (e) => {
    if (isExist(e)) {
      NoticeAlert.open("이미 존재하는 답변이에요!");
      return;
    }
    onUpdate(e, questionIdx, optionIdx, value);
  };

  const onCheck = () => {
    if (answer === value || value.length < 1) return;
    checkAnswer(questionIdx, value);
  };

  const onDelete = () => {
    if (!deleteOption(questionIdx, optionIdx, optionsCnt)) {
      NoticeAlert.open(msg.errorMaking.invaliedOptionsCnt);
    }
  };

  return (
    <Container bgColor={isAnswer ? "blue" : "white"}>
      <InputContainer>
        <CheckWrap>
          <SVG type={ENUM.CHECK} style={svgStyle} onClick={onCheck} />
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
        <SVG type={ENUM.CANCEL} style={svgStyle} onClick={onDelete} />
      </CancelWrap>
    </Container>
  );
});

export default memo(Options);
