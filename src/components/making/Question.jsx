import React, { memo } from "react";
import styled from "styled-components";

import { InfoText, UploadImg } from "../common";
import { SubTitle, BtnIcon, Option, BtnAddOption, BtnPoint } from ".";
import { InputTitle, Section } from "../../styles";

import useMaking from "../../hooks/useMaking";
import ENUM, { md } from "../../constants/Enum";

const Question = ({ data, questionIdx, questionsCnt, openAlert }) => {
  const { question, img, openImg, answer, point, options } = data;
  const {
    dispatch,
    deleteQuestion,
    updateQuestion,
    deleteOption,
  } = useMaking();

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    updateQuestion(name, value, questionIdx);
  };

  const onDeleteQuestion = () => {
    if (questionsCnt - 1 < 1) {
      openAlert("질문은 1개 이상 필요해요!");
      return;
    }
    dispatch(deleteQuestion(questionIdx));
  };

  const onDeleteOption = (qIdx, oIdx) => {
    if (options.length - 1 < 2) {
      openAlert("선택지는 2개 이상 필요해요!");
      return;
    }
    deleteOption(qIdx, oIdx);
  };

  return (
    <li>
      <div>
        <SubTitle
          title={`${questionIdx + 1}번 질문`}
          onUpload={() => updateQuestion("openImg", !openImg, questionIdx)}
          onDelete={onDeleteQuestion}
        >
          <BtnIcon type={ENUM.CASINO} />
        </SubTitle>
        <Wrapper>
          {/* question */}
          <InputTitle
            name="question"
            defaultValue={question}
            size={md}
            placeholder="질문을 입력해주세요"
            onBlur={handleUpdate}
          />
          {/* coverImg */}
          {openImg && (
            <UploadImg
              type={ENUM.QUESTION}
              img={img}
              parentIdx={questionIdx}
              openAlert={openAlert}
            />
          )}
          {/* options */}
          <ul>
            {options.map((option, idx) => (
              <Option
                key={option.optionId}
                value={option.name}
                isAnswer={answer && option.name === answer}
                idxs={{ questionIdx, optionIdx: idx }}
                deleteOption={onDeleteOption}
              />
            ))}
          </ul>
          <BtnAddOption questionIdx={questionIdx} />
          {/* point */}
          <BtnPoint questionIdx={questionIdx} point={point} />
          <InfoText text="정답 항목을 체크해주세요" color="blue" />
        </Wrapper>
      </div>
    </li>
  );
};

const Wrapper = styled(Section)`
  margin-bottom: 24px;
`;

export default memo(Question);
