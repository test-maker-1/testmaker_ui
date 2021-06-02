import React, { memo } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { TitleBox } from "../../components/common/TitleBox";
import { ImageView, BtnField } from "../../components/common";
import RoundContiner from "./SubComponents/RoundContainer";
import Reply, { ComInput } from "./SubComponents/Reply";
import theme from "../../styles/theme";
import ENUM from "../../constants/Enum";
import usePage from "../../hooks/usePage";
import TestSwiper from "../../components/common/TestSwiper";

const { fontSizes } = theme;
const { PREVIEW, MOVENEXT } = ENUM;

const Result = memo((props) => {
  const { goPage } = usePage();
  const handleonClick = (id, e) => {
    console.log(id, e);
  };
  const {
    isRankMode,
    responseUid,
    userTestResult,
    repliesCnt,
    recent3Replies,
  } = useSelector((state) => state.result);
  return (
    <PageContainer>
      <div style={{ padding: "2.4rem 2rem 3rem" }}>
        <div style={{ paddingBottom: "2.4rem" }}>
          <Title>{userTestResult}</Title>
          <SubTitle># 27%의 참여자와 같은 유형이에요!</SubTitle>
        </div>
        <ImageView imageUrl={null} />
        <Inform>
          # 총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않더라도
          정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.
        </Inform>
        {/* font-size: 19px, line-height: 28px, text-align: center; */}
        <BtnField onClick={handleonClick}>테스트 다시하기</BtnField>
      </div>
      <RoundContiner noPadding>
        <TitleBox>
          <Title>가장 많은 유형 TOP 1</Title>
          <SubTitle>당신은 센스로 무장했어요 (58%)</SubTitle>
          <div style={{ padding: "2.4em 0px" }}>
            <ImageView imageUrl={null} />
          </div>
          <BtnField
            color="skyBlue"
            onClick={() => goPage("/testing/otherType")}
          >
            다른 유형 전체보기
          </BtnField>
        </TitleBox>
        <TitleBox title="테스트 메이커에게 한마디">
          <ComInput hintText={"익명으로 메이커만 볼 수 있어요"} />
        </TitleBox>
        <TitleBox>
          <Reply repliesCnt={repliesCnt} recent3replies={recent3Replies} />
        </TitleBox>
        <TitleBox title="더 많은 테스트가 있어요!" noline>
          <TestSwiper />
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
  background: #f1f2f4;
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
  color: #8a929e;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  font-weight: bold;
  line-height: 2.4rem; /*2.25em:36px*/
  letter-spacing: -1px;
  color: #515966;
`;

export const SubTitle = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  text-align: center;
  letter-spacing: -0.5px;
  color: #697382;
`;

const Inform = styled.div`
  padding: 3rem 0px; /*30px*/
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: 2.4rem; /*24px*/
  letter-spacing: -0.5px;
  color: #697382;
`;

export default Result;
