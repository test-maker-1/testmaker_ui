import React, { memo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { ImageView, BtnExam } from "../../components/common";
import theme from "../../styles/theme";
import { setHeadTitle } from "../../redux/reducer/commonReducer";

const Page = ({ questions: { img, question, options }, onClick }) => {
  return (
    <>
      <Question>{question}</Question>
      <Box>
        <ImageView imageUrl={img} />
      </Box>
      <div style={{ marginBottom: "50px" }}>
        {options.map(({ name }) => {
          return <BtnExam name={name} onClick={onClick} style={BtnStyle} />;
        })}
      </div>
    </>
  );
};

const Exam = memo((props) => {
  const [page, movePage] = useState(0);
  const dispatch = useDispatch();
  const { questsCnt, questions } = useSelector((state) => state.testing);

  useEffect(() => {
    //헤더 타이틀 변경
    dispatch(setHeadTitle(`${page + 1}/${questsCnt}`));
  }, [page]);

  const onClickAnswer = (id, e) => {
    if (page + 1 < questsCnt) {
      //next page
      movePage(page + 1);
    } else {
      //post answer & go to result page
    }
  };

  const onCustomClick = (id, e) => {
    if (id === "뒤로가기" && page > 0) {
      movePage(page - 1);
    }
  };
  return (
    <div style={{ padding: "10px 2rem" }}>
      {page > 0 ? (
        <PageContainer>
          <Page questions={questions[page]} onClick={onClickAnswer} />
          <BottomBtn
            btnArr={[{ name: "뒤로가기", customClick: onCustomClick }]}
          />
        </PageContainer>
      ) : (
        <Page questions={questions[page]} onClick={onClickAnswer} />
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
  color: #697382;
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
