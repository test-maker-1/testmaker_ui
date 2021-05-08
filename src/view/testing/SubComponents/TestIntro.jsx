import React, { memo } from 'react';
import styled from "styled-components";

const TestIntro = memo((props) => {
  return (
    <>
      <div style={{height: "2.5em"}}>
        <Title>우정 테스트</Title>
        <More>:</More>
      </div>
      <TBox><Partition>메이커짱짱 | 참여인원 1,000명</Partition></TBox>
      <div><Box/></div>
      <Inform>총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.</Inform>
    </>
  );
});

const TBox = styled.div`
  margin: 7px 0px 24px;
`;

const Title = styled.p`
  display: inline-block;
  float: left;
  font-size: 1.5em; /*24px*/
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -1px;
  color: #697382;
`;

const More = styled.p`
  display: inline;
  float: right;
  font-weight: bold;
  line-height: 36px;
  color: #697382;
  margin-right: 5px;
`;

const Partition = styled.p`
  font-size: 0.8em; /*14px*/
  line-height: 21px;
  letter-spacing: -0.3px;
`;

/*374px * 212px : 1.7*/
const Box = styled.div`
  width: 100%;
  padding-top: calc(100% / 1.7);
  background: #FAFAFA;
  border: 1px solid #E5E8EC;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Inform = styled.div`
  padding: 15px 0px;
  font-size: 0.8em; /*16px*/
  line-height: 25px; /*29px*/
  letter-spacing: -0.5px;
  color: #697382;
`;


export default TestIntro;