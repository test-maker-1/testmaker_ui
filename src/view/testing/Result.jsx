import React, { memo } from 'react';
import styled from "styled-components";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import {TitleBox} from "../../components/common/TitleBox";
import {ImageView, BtnField} from "../../components/common";
import RoundContiner from "./SubComponents/RoundContainer";
import Mention from "./SubComponents/Mention";
import Reply, {ComInput} from "./SubComponents/Reply";
import ENUM from "../../constants/Enum";

const { PREVIEW, MOVENEXT } = ENUM;

const Result = memo((props) => {
  console.log(props)
  const handleonClick = (id, e) => {
    console.log(id, e)
  }
  return (
    <PageContainer background={"#F1F2F4"}>
      <div style={{padding: "1.5em 1.25em 1.875em"}}>
        <div style={{paddingBottom: "1.5em"}}>
          <Title>당신은 나의 찐친입니다.</Title>
          <SubTitle>27%의 참여자와 같은 유형이에요!</SubTitle>
        </div>
        <ImageView imageUrl={null}/>
        <Inform>총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.</Inform>
        {/* font-size: 19px, line-height: 28px, text-align: center; */}
        <BtnField name={"테스트 다시하기"} onClick={handleonClick} style={{width: "100%", height: "3.6em", fontSize: "1em", background: "#DADEE6"}}/>
      </div>
      <RoundContiner noPadding>
        <TitleBox>
        <Title>가장 많은 유형 TOP 1</Title>
        <SubTitle>당신은 센스로 무장했어요 (58%)</SubTitle>
        <div style={{padding: "1.5em 0px"}}><ImageView imageUrl={null}/></div>
        <BtnField name={"다른 유형 전체보기"} onClick={handleonClick} style={{width: "100%", height: "3.6em", fontSize: "1em", background: "#DADEE6"}}/>
        </TitleBox>
        <TitleBox title="테스트 메이커에게 한마디">
          <ComInput hintText={"익명으로 메이커만 볼 수 있어요"}/>
        </TitleBox>
        <TitleBox>
          <Reply />
        </TitleBox>
        <TitleBox title="더 많은 테스트가 있어요!" noline>
          <h1>WOW UNBELIEVE!</h1>
        </TitleBox>
      </RoundContiner>
      <BottomBtn
        btnArr={[
          { name: "공유하기", type: PREVIEW },
          { name: "시작하기", type: MOVENEXT },
        ]}
      />
    </PageContainer>
  );
});

const TEMP = styled.div`
  background: #F1F2F4;
`;

const CoHead = styled.div`
  height: 30px;
  margin-bottom: 16px;
`;

const Entire = styled.p`
  display: inline-block;
  float: right;
  text-align: right;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: #8A929E;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em; /*24px*/
  font-weight: bold;
  line-height: 1.5em; /*2.25em:36px*/
  letter-spacing: -1px;
  color: #515966;
`;

const SubTitle = styled.p`
  font-size: 1em; /*16px*/
  line-height: 1.5em; /*24px*/
  text-align: center;
  letter-spacing: -0.5px;
  color: #697382;
`;

const Inform = styled.div`
  padding: 1.875em 0px; /*30px*/
  font-size: 1em; /*16px*/
  line-height: 1.24em; /*24px*/
  letter-spacing: -0.5px;
  color: #697382;
`;

export default Result;