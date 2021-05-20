import React, { memo } from 'react';
import styled from "styled-components";
import {ImageView, BtnExam} from "../../components/common";

const Exam = memo((props) => {
  const handleonClick = (id, e) => {
    console.log(id, e)
  }
  return (
    <div style={{padding: "10px 1.25em"}}>
      <Question>내가 좋아하는 여행시는 어디일까요? <br/> 2주일 때는 아래로 내려주세요.</Question>
      <Box><ImageView imageUrl={null}/></Box>
      <div>
        {
          ["보라카이","제주도","스페인"].map((item)=>{
            return <BtnExam name={item} onClick={handleonClick} />
          })
        }
      </div>
    </div>
  );
});

const Question = styled.h1`
  font-size: 1.5em; /*24px*/
  line-height: 36px;
  font-weight: bold;
  text-align: center;
  letter-spacing: -1px;
  color: #697382;
  margin: 30px 0px 32px;
`;

/*374px * 212px : 1.7*/
const Box = styled.div`
  margin: 16px 0px;
`;

export default Exam;