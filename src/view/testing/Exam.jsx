import React, { memo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { ImageView, BtnExam } from "../../components/common";
import theme from "../../styles/theme";
import { setHeadTitle } from "../../redux/reducer/commonReducer";
import {
  saveAnwerByStep,
  setInitExam,
} from "../../redux/reducer/testingReducer";
import usePage from "../../hooks/usePage";

/**
 * anwser: "옵션1"
 * img: "img 패스"
 * options: [{cnt: 0, name: "옵션1"}, {cnt: 0, name: "옵션2"}]
 * point: 5
 * question: "질문 1"
 */

const Page = ({
  page,
  answers: { values },
  questions: { img, question, options },
  onClick,
}) => {
  return (
    <>
      <Question>{question}</Question>
      <Box>{img && <ImageView imageUrl={img} />}</Box>
      <div style={{ marginBottom: "50px" }}>
        {options.map(({ name }, idx) => {
          return (
            <BtnExam
              key={`btnExam_${idx}`}
              name={name}
              clicked={values[page] === name}
              onClick={onClick.bind(this, idx, name)}
              style={BtnStyle}
            />
          );
        })}
      </div>
    </>
  );
};

const Exam = memo((props) => {
  const [page, movePage] = useState(0);
  const dispatch = useDispatch();
  const { questsCnt, questions, answers, finish } = useSelector(
    (state) => state.testing
  );
  const { responseUid } = useSelector((state) => state.result);
  const { replace } = usePage();

  useEffect(() => {
    return () => {
      if (questsCnt > 0) dispatch(setInitExam());
    };
  }, []);

  useEffect(() => {
    if (responseUid && finish) {
      replace("/testing/result", `?resultid=${responseUid}`);
    }
  }, [replace, responseUid, finish]);

  useEffect(() => {
    //헤더 타이틀 변경
    const title = questsCnt > 0 ? `${page + 1}/${questsCnt}` : "";
    dispatch(setHeadTitle(title));
  }, [dispatch, page, questsCnt]);

  const onClickAnswer = (idx, value, event) => {
    event.stopPropagation();

    movePage(page + 1);

    const isIng = page + 1 < questsCnt;

    // post answer & go to result page
    dispatch(saveAnwerByStep({ page, isIng, value }));
  };

  const onCustomClick = (id, e) => {
    if (id === "뒤로가기" && page > 0) {
      movePage(page - 1);
    }
  };

  const PageComponent = () => {
    if (questions?.length > 0) {
      return (
        <Page
          page={page}
          answers={answers}
          questions={questions[page]}
          onClick={onClickAnswer}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div style={{ padding: "10px 2rem" }}>
      {page > 0 ? (
        <PageContainer>
          {PageComponent()}
          <BottomBtn
            btnArr={[{ name: "뒤로가기", customClick: onCustomClick }]}
          />
        </PageContainer>
      ) : (
        PageComponent()
      )}
    </div>
  );
});

const Question = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  line-height: 3.6rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: -1px;
  color: ${({ theme: { colors } }) => colors.darker};
  margin: 30px 0px 32px;
`;

/* 374px * 212px : 1.7 */
const Box = styled.div`
  margin: 16px 0px;
`;

const BtnStyle = {
  width: "100%",
  margin: "8px 0px",
  height: "3.6em",
  fontSize: `${theme.fontSizes.md}rem`,
};

export default Exam;
