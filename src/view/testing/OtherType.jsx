import React from "react";
import styled from "styled-components";
import { ImageView, TitleBox } from "../../components/common";
import { SubTitle, Title } from "./Result";

const OtherType = ({ otherType }) => {
  return (
    <div>
      {/* props로 혹은 redux의 state로 다른 유형의 정보를 가져와 map으로 뿌려줘야함 */}
      {/* {otherType && otherType.map((type)=>(
            <TitleBox>
            <Title>TOP 1</Title>
            <SubTitle>당신은 센스로 무장했어요 (58%)</SubTitle>
            <div style={{ padding: "2.4em 0px" }}>
              <ImageView imageUrl={null} />
            </div>
            <Description>
              총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않 더라도
              정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.
            </Description>
          </TitleBox>
        ))} */}

      <TitleBox>
        <Title>TOP 1</Title>
        <SubTitle>당신은 센스로 무장했어요 (58%)</SubTitle>
        <div style={{ padding: "2.4em 0px" }}>
          <ImageView imageUrl={null} />
        </div>
        <Description>
          총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않 더라도
          정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.
        </Description>
      </TitleBox>

      <TitleBox>
        <Title>TOP 2</Title>
        <SubTitle>당신은 센스로 무장했어요 (58%)</SubTitle>
        <div style={{ padding: "2.4em 0px" }}>
          <ImageView imageUrl={null} />
        </div>
        <Description>
          총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않 더라도
          정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지 마십시오.
        </Description>
      </TitleBox>
    </div>
  );
};
export default OtherType;

const Description = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  color: ${({ theme: { colors } }) => colors.darkGray};
  line-height: 24px;
  letter-spacing: -0.5px;
`;
