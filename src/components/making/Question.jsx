import React, { memo } from "react";
import styled from "styled-components";

import { InfoText, NoticeAlert, UploadImg } from "../common";
import { SubTitle, BtnIcon, Options, BtnPoint } from ".";
import { InputTitle, Section } from "../../styles";

import useQuestion from "../../hooks/making/useQuestion";
import ENUM, { md } from "../../constants/Enum";
import msg from "../../constants/msg";

const { errorPage, errorMaking } = msg;

const Questions = () => {
  const { questions } = useQuestion();
  return (
    <>
      <NoticeAlert btns={[{ name: "다시보기" }]} />
      {questions.map((question, idx) => (
        <Question key={question.questionId} questionIdx={idx} data={question} />
      ))}
    </>
  );
};

const Question = memo(({ questionIdx, data }) => {
  const { question, img, openImg, answer, point, options } = data;
  const {
    updateQuestion,
    updateImg,
    deleteQuestionData,
    handleUpdate,
    getPreset,
  } = useQuestion();

  const onDelete = () => {
    if (!deleteQuestionData(questionIdx)) {
      NoticeAlert.open(errorMaking.invaliedQuestionsCnt);
    }
  };

  const onGetPreset = () => {
    if (!getPreset(questionIdx)) NoticeAlert.open(errorPage[500]);
  };

  return (
    <li>
      <div>
        <SubTitle
          title={`${questionIdx + 1}번 질문`}
          onUpload={() => updateQuestion("openImg", !openImg, questionIdx)}
          onDelete={onDelete}
        >
          <BtnIcon type={ENUM.CASINO} onClick={onGetPreset} />
        </SubTitle>
        <Wrapper>
          {/* question */}
          <InputTitle
            name="question"
            defaultValue={question}
            size={md}
            placeholder="질문을 입력해주세요"
            onBlur={(e) => handleUpdate(e, questionIdx)}
          />
          {/* coverImg */}
          {openImg && (
            <UploadImg
              img={img}
              uploadImg={(img) => updateImg(img, questionIdx)}
              openAlert={() => NoticeAlert.open(errorPage[500])}
            />
          )}
          {/* options */}
          <Options
            questionIdx={questionIdx}
            options={options}
            answer={answer}
          />
          {/* point */}
          <BtnPoint
            questionIdx={questionIdx}
            point={point}
            updateQuestion={updateQuestion}
          />
          <InfoText text="정답 항목을 체크해주세요" color="blue" />
        </Wrapper>
      </div>
    </li>
  );
});

const Wrapper = styled(Section)`
  margin-bottom: 24px;
`;

export default memo(Questions);
