import React from "react";
import styled from "styled-components";

import { TitleBox, UploadImg } from "../common";
import { SubTitle } from ".";
import { InputTitle, TextArea } from "../../styles";

import useMaking from "../../hooks/useMaking";
import ENUM, { md } from "../../constants/Enum";

const Result = ({ resultIdx, result, deleteResult, openAlert }) => {
  const {
    title,
    description,
    img,
    openImg,
    pointBound: { start, end },
  } = result;

  const { updateResult } = useMaking();

  const onUpdate = (e) => {
    const { name, value } = e.target;
    updateResult(name, value, resultIdx);
  };

  return (
    <li>
      <Container>
        {/* pointBound */}
        <SubTitle
          title={`${start !== null ? start : ""}점 이상
                  ${end !== null ? end : ""}점 이하`}
          onUpload={() => updateResult("openImg", !openImg, resultIdx)}
          onDelete={() => deleteResult(resultIdx)}
        ></SubTitle>
        <TitleBox noline>
          {/* title */}
          <InputTitle
            name="title"
            placeholder="결과명을 적어주세요"
            size={md}
            defaultValue={title}
            onBlur={onUpdate}
          />
          {/* img */}
          {openImg && (
            <UploadImg
              type={ENUM.RESULT}
              img={img}
              parentIdx={resultIdx}
              openAlert={openAlert}
            />
          )}
          {/* description */}
          <DescText
            name="description"
            placeholder="결과를 설명해주세요"
            rows={1}
            defaultValue={description}
            onBlur={onUpdate}
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
