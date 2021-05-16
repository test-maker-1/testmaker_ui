import React, { memo } from "react";
import styled from "styled-components";

import { InfoText, UploadImg } from "../common";
import { SubTitle, BtnIcon, Option, BtnAddOption, BtnPoint } from ".";
import { InputTitle, Section } from "../../styles";

import useMaking from "../../hooks/useMaking";
import useOpen from "../../hooks/useOpen";

import ENUM, { md } from "../../constants/Enum";

const Question = ({ data, questionIdx }) => {
  const { question, img, answer, point, options } = data;

  const { dispatch, deleteQuestion, updateQuestion } = useMaking();
  const { open, onToggle } = useOpen();

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    if (name === "question") updateQuestion(name, value, questionIdx);
  };

  return (
    <li>
      <div>
        <SubTitle
          title={`${questionIdx + 1}번 질문`}
          onUpload={onToggle}
          onDelete={() => dispatch(deleteQuestion(questionIdx))}
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
          {open && <UploadImg />}
          {/* options */}
          <ul>
            {options.map((option, idx) => (
              <Option
                key={`${idx}-${option.name}`}
                value={option.name}
                answer={answer}
                questionIdx={questionIdx}
                optionIdx={idx}
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
