import React, { memo, useRef } from "react";
import styled from "styled-components";

import { InfoText, Loading, NoticeAlert } from "../common";
import { SubTitle, Options, BtnPoint, UploadImg } from ".";
import { InputFile, InputTitle, Section } from "../../styles";

import MakingAPI from "../../api/makingAPI";
import useQuestion from "../../hooks/making/useQuestion";
import useMiniReducer from "../../hooks/useMiniReducer";

import { md } from "../../constants/Enum";
import { LOADING, SUCCESS } from "../../utils/asyncUtils";
import msg from "../../constants/msg";
import useImage from "../../hooks/making/useImage";

import { ReactComponent as Casino } from "../../resources/svg/casino.svg";

const { errorPage, errorMaking } = msg;

const showAlert = (msg) =>
  NoticeAlert.open({
    text: msg,
    btns: [{ name: "다시보기" }],
  });

const Questions = () => {
  const { questions } = useQuestion();
  return (
    <>
      {questions.map((question, idx) => (
        <Question key={question.questionId} questionIdx={idx} data={question} />
      ))}
    </>
  );
};

const Question = memo(({ questionIdx, data }) => {
  const { question, img, answer, point, options } = data;
  const {
    target,
    updateQuestion,
    updateImg,
    deleteQuestionData,
    handleUpdate,
    setPreset,
  } = useQuestion();

  const { state, onUpload, deleteImg } = useImage(
    (img) => updateImg(img, questionIdx),
    () => {
      showAlert(errorPage[500]);
    }
  );

  const fileInput = useRef();
  const handleOnCick = () => fileInput.current.click();

  const onDelete = () => {
    if (!deleteQuestionData(questionIdx)) {
      showAlert(errorMaking.invaliedQuestionsCnt);
    }
  };

  const onSetPreset = (preset) => setPreset(questionIdx, preset);

  return (
    <li>
      {state.status === LOADING && <Loading />}
      <div>
        <SubTitle
          title={`${questionIdx + 1}번 질문`}
          onUpload={handleOnCick}
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
          {img && (
            <UploadImg
              img={img}
              handleUpload={handleOnCick}
              deleteImg={deleteImg}
            />
          )}
          <InputFile
            type="file"
            accept=".jpg, .jpeg, .png;capture=camera"
            ref={fileInput}
            onChange={onUpload}
          />
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
      showAlert(errorPage[500]);
    }
  };

  return (
    <>
      {state.status === LOADING && <Loading />}
      <Casino
        className="icon-svg"
        width="28"
        height="28"
        onClick={onGetPreset}
      />
    </>
  );
};

const Wrapper = styled(Section)`
  margin-bottom: 24px;
`;

export default memo(Questions);
