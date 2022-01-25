import { memo, useMemo } from "react";
import { NoticeAlert } from "../common";
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
import msg from "../../constants/msg";

import { ReactComponent as Check } from "../../resources/svg/check.svg";
import { ReactComponent as Cancel } from "../../resources/svg/cancel.svg";

const { errorMaking } = msg;
const { lightGray } = theme.colors;

const Options = ({ questionIdx, answer, options }) => {
  const isExist = (value) => {
    const optionList = options.map((option) => option.name);

    if (optionList.includes(value)) return true;
    return false;
  };

  return (
    <>
      <ul>
        {options.map(({ optionId, name }, idx) => (
          <Option
            key={optionId}
            option={name}
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

const Option = memo(({ option, answer, idxs, optionsCnt, isExist }) => {
  const { questionIdx, optionIdx } = idxs;
  const { onUpdate, checkAnswer, deleteOption } = useOption();

  const isAnswer = useMemo(() => answer && option === answer, [answer, option]);
  const [bgColor, stroke] = isAnswer ? ["blue", "white"] : ["white", lightGray];

  const handleUpdate = (e) => {
    const value = e.target.value;

    if (value === option) return; // same
    if (value.length > 0 && isExist(value)) {
      // duplicate
      NoticeAlert.open({
        text: errorMaking.duplicateOption,
        btns: [{ name: "다시보기" }],
      });
      e.target.value = "";
      return;
    }
    onUpdate(value, questionIdx, optionIdx, value);
  };

  const onCheck = () => {
    if (answer === option || option.length < 1) return;
    checkAnswer(questionIdx, option);
  };

  const onDelete = () => {
    if (!deleteOption(questionIdx, optionIdx, optionsCnt)) {
      NoticeAlert.open({
        text: errorMaking.invaliedOptionsCnt,
        btns: [{ name: "다시보기" }],
      });
    }
  };

  return (
    <Container bgColor={bgColor} stroke={stroke}>
      <InputContainer>
        <CheckWrap>
          <Check className="icon-svg" onClick={onCheck} />
        </CheckWrap>
        <InputWrap>
          <OptionText
            placeholder="선택지를 입력해주세요"
            defaultValue={option}
            rows={1}
            color={isAnswer ? "white" : "darkGray"}
            onBlur={handleUpdate}
          />
        </InputWrap>
      </InputContainer>
      <CancelWrap>
        <Cancel className="icon-svg" onClick={onDelete} />
      </CancelWrap>
    </Container>
  );
});

export default memo(Options);
