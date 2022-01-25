import React, { useRef } from "react";
import styled from "styled-components";

import { Loading, TitleBox } from "../common";
import { SubTitle, UploadImg } from ".";
import { InputFile, InputTitle, TextArea } from "../../styles";

import useImage from "../../hooks/making/useImage";
import useResult from "../../hooks/making/useResult";

import { LOADING } from "../../utils/asyncUtils";
import msg from "../../constants/msg";
import { md } from "../../constants/Enum";

const Result = ({ result, resultIdx, deleteResult, openAlert }) => {
  const {
    title,
    description,
    img,
    pointBound: { start, end },
  } = result;

  const { updateResultByInput, updateImg } = useResult();
  const { state, onUpload, deleteImg } = useImage(
    (img) => updateImg(img, resultIdx),
    () => openAlert(msg.errorPage[500])
  );

  const fileInput = useRef();
  const handleOnCick = () => fileInput.current.click();

  return (
    <li>
      {state.status === LOADING && <Loading />}
      <Container>
        {/* pointBound */}
        <SubTitle
          title={`${start !== null ? start : ""}점 이상
                  ${end !== null ? end : ""}점 이하`}
          onUpload={handleOnCick}
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
          {img && (
            <UploadImg
              img={img}
              handleUpload={handleOnCick}
              deleteImg={deleteImg}
            />
          )}
          <InputFile
            type="file"
            accept=".jpg, .jpeg, .png;capture=camera"
            ref={fileInput}
            onChange={onUpload}
          />
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
