import React from "react";
import styled from "styled-components";

import { TitleBox } from "../common";
import { SubTitle } from ".";
import { InputTitle, TextArea } from "../../styles";

import { md } from "../../constants/Enum";

const Result = () => {
  return (
    <li>
      <Container>
        <SubTitle title="1점 이상 1점 이하"></SubTitle>
        <TitleBox noline>
          <InputTitle
            name="title"
            placeholder="결과명을 적어주세요"
            size={md}
          />
          <DescText
            name="description"
            placeholder="결과를 설명해주세요"
            rows={1}
          />
        </TitleBox>
      </Container>
    </li>
  );
};

const DescText = styled(TextArea)`
  padding: 12px;
  height: unset;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
  line-height: 24px;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.gray};
  }
`; // padding css 변경하기

const Container = styled.div`
  .title-box {
    padding-top: 0;
  }
`;

export default Result;
