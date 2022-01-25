import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ImageView, TitleBox } from "../../components/common";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import ENUM from "../../constants/Enum";
import { SubTitle, Title } from "./Result";
import { returnTextDom } from "../../utils/handler";

const { HOME } = ENUM;

const TestInform = ({ rank, title, percent, img, description }) => {
  return (
    <TitleBox>
      <Title>TOP {rank}</Title>
      <SubTitle>
        {title} ({percent}%)
      </SubTitle>
      <div style={{ padding: "2.4em 0px" }}>
        <ImageView imageUrl={img} />
      </div>
      <Description>{returnTextDom(description)}</Description>
    </TitleBox>
  );
};

const OtherType = ({ otherType }) => {
  const { testResults = [] } = useSelector((state) => state.result);

  useEffect(() => {
    const current_scroll = document.documentElement.scrollTop;

    if (current_scroll > 0) {
      //최상단 스크롤로 이동
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <PageContainer>
      <div>
        {testResults?.map(({ title, percent, img, description }, idx) => {
          return (
            <TestInform
              key={`OtherType_${idx}`}
              rank={idx + 1}
              title={title}
              percent={Math.round(percent)}
              img={img}
              description={description}
            />
          );
        })}
      </div>
      <BottomBtn btnArr={[{ name: "홈으로", type: HOME }]} />
    </PageContainer>
  );
};
export default OtherType;

const Description = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  color: ${({ theme: { colors } }) => colors.darkGray};
  line-height: 24px;
  letter-spacing: -0.5px;
`;
