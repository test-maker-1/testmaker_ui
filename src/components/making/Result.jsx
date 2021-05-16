import React from "react";
import styled from "styled-components";

import { TitleBox, UploadImg } from "../common";
import { SubTitle } from ".";
import { InputTitle, TextArea } from "../../styles";

import useMaking from "../../hooks/useMaking";
import useOpen from "../../hooks/useOpen";

import { md } from "../../constants/Enum";

const Result = ({ resultIdx, result }) => {
  const { dispatch, deleteResult } = useMaking();
  const { open, onToggle } = useOpen();

  const onDelete = () => dispatch(deleteResult(resultIdx));

  return (
    <li>
      <Container>
        {/* pointBound */}
        <SubTitle
          title="1점 이상 1점 이하"
          onUpload={onToggle}
          onDelete={onDelete}
        ></SubTitle>
        <TitleBox noline>
          {/* title */}
          <InputTitle
            name="title"
            placeholder="결과명을 적어주세요"
            size={md}
          />
          {/* img */}
          {open && <UploadImg />}
          {/* description */}
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
