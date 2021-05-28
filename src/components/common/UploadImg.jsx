import React, { useState, useRef } from "react";
import styled from "styled-components";

import { SVG } from "../common/index";
import ImageView from "./ImageView";
import theme from "../../styles/theme";

import useOpen from "../../hooks/useOpen";
import ENUM from "../../constants/Enum";

const { CANCEL, CHANGE } = ENUM;

const svgStyles = {
  width: 40,
  height: 40,
};

const changeStyle = {
  ...svgStyles,
  fill: theme.colors.deepGray,
};

export const UploadImg = () => {
  const fileInput = useRef();
  const [imgURL, setImgURL] = useState(null);
  const { open: edit, onToggle } = useOpen();

  // upload and delete image
  const handleOnCick = () => fileInput.current.click();
  const handleDelClick = () => setImgURL(null);

  const handleOnUpload = (event) => {
    const files = event.target.files;
    const reader = new FileReader();

    // 추후 사진 업로드, redux 처리
    reader.readAsDataURL(files[0]);
    reader.onload = async (e) => {
      setImgURL(e.target.result);
    };

    // init
    fileInput.current.value = null;
  };

  return (
    <>
      <Wrapper onClick={onToggle}>
        <ImageView imageUrl={imgURL} />
        {/* edit */}
        {edit && (
          <Dimmed>
            <EditBtn onClick={handleOnCick}>
              <SVG type={CHANGE} style={changeStyle} />
            </EditBtn>
            <EditBtn onClick={handleDelClick}>
              <SVG type={CANCEL} style={svgStyles} />
            </EditBtn>
          </Dimmed>
        )}
      </Wrapper>
      {/* required multiple */}
      <input
        type="file"
        id="uploadImage"
        ref={fileInput}
        accept="img/*"
        onChange={handleOnUpload}
        style={{ width: 0, display: "none" }}
      />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const Dimmed = styled.div`
  margin-bottom: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: ${({ theme: { zIndex } }) => zIndex.upImg};
  transition: all 0.2s ease-in-out;
`;

const EditBtn = styled.button`
  margin: 0 4px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebedf1;
  opacity: 0.8;
`;
