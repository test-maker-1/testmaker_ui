import React, { memo } from "react";
import styled from "styled-components";

import { InfoText, Loading, NoticeAlert } from "../common";
import { SubTitle, BtnIcon, Options, BtnPoint, UploadImg } from ".";
import { InputTitle, Section } from "../../styles";

import MakingAPI from "../../api/makingAPI";
import useQuestion from "../../hooks/making/useQuestion";
import useMiniReducer from "../../hooks/useMiniReducer";

import ENUM, { md } from "../../constants/Enum";
import { LOADING, SUCCESS } from "../../utils/asyncUtils";
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
    target,
    updateQuestion,
    updateImg,
    deleteQuestionData,
    handleUpdate,
    setPreset,
  } = useQuestion();

  const onDelete = () => {
    if (!deleteQuestionData(questionIdx)) {
      NoticeAlert.open(errorMaking.invaliedQuestionsCnt);
    }
  };

  const onSetPreset = (preset) => setPreset(questionIdx, preset);

  return (
    <li>
      <div>
        <SubTitle
          title={`${questionIdx + 1}번 질문`}
          onUpload={() => updateQuestion("openImg", !openImg, questionIdx)}
          onDelete={onDelete}
        >
          <BtnPreset target={target} setPreset={onSetPreset} />
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

const BtnPreset = ({ target, setPreset }) => {
  const { state, request, requestSuccess, requestError } = useMiniReducer();

  const onGetPreset = async () => {
    request();
    const { data, status } = await MakingAPI.getQuestionPreset(target);

    if (status === SUCCESS) {
      setPreset(data.questions[0]);
      requestSuccess();
    } else {
      requestError(data);
      NoticeAlert.open(errorPage[500]);
    }
  };

  return (
    <>
      {state.status === LOADING && <Loading />}
      <BtnIcon type={ENUM.CASINO} onClick={onGetPreset} />
    </>
  );
};

const Wrapper = styled(Section)`
  margin-bottom: 24px;
`;

export default memo(Questions);
