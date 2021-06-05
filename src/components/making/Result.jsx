import React from "react";
import styled from "styled-components";

import { TitleBox, UploadImg } from "../common";
import { SubTitle } from ".";
import { InputTitle, TextArea } from "../../styles";

import useResult from "../../hooks/making/useResult";
import { md } from "../../constants/Enum";

const Result = ({ result, resultIdx, deleteResult, openAlert }) => {
  const {
    title,
    description,
    img,
    openImg,
    pointBound: { start, end },
  } = result;

  const { updateResult, updateResultByInput, updateImg } = useResult();

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
            onBlur={(e) => updateResultByInput(e, resultIdx)}
          />
          {/* img */}
          {openImg && (
            <UploadImg
              img={img}
              uploadImg={(img) => updateImg(img, resultIdx)}
              openAlert={openAlert}
            />
          )}
          {/* description */}
          <DescText
            name="description"
            placeholder="결과를 설명해주세요"
            rows={1}
            defaultValue={description}
            onBlur={(e) => updateResultByInput(e, resultIdx)}
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
