import React, { memo } from 'react';
import styled from "styled-components";
import {BtnField} from "../../components/common";
import SVG from "../../components/common/SVG";

const Exam = memo((props) => {
  const handleonClick = (id, e) => {
    console.log(id, e)
  }
  return (
    <div style={{padding: "10px 1.25em"}}>
      <Question>내가 좋아하는 여행시는 어디일까요? <br/> 2주일 때는 아래로 내려주세요.</Question>
      <Box/>
      <div>
        {
          ["보라카이","제주도","스페인"].map((item)=>{
            return <BtnField name={item} onClick={handleonClick} style={{width: "100%", margin: "8px 0px"}}/>
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
  width: 100%;
  margin: 16px 0px;
  padding-top: calc(100% / 1.7);
  background: #FAFAFA;
  border: 1px solid #E5E8EC;
  box-sizing: border-box;
  border-radius: 5px;
`;

export default Exam;