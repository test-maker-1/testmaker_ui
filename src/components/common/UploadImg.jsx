import React, { useState, useRef, memo } from "react";
import styled from "styled-components";

import { SVG } from "../common/index";
import ImageView from "./ImageView";
import theme from "../../styles/theme";

import useOpen from "../../hooks/useOpen";
import ENUM from "../../constants/Enum";

const { CHANGE, DELETE, CANCEL } = ENUM;

const svgStyles = {
  width: 40,
  height: 40,
  fill: theme.colors.deepGray,
};

const cancelStyles = {
  ...svgStyles,
  stroke: theme.colors.deepGray,
};

export const UploadImg = memo(({ parentIdx, img, updateParent }) => {
  const fileInput = useRef();
  const [imgURL, setImgURL] = useState(img);
  const { open: edit, onOpen: onEdit, onClose: offEdit } = useOpen();

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
      <Wrapper>
        <OpenDiv onClick={onEdit} />
        <ImageView imageUrl={imgURL} />
        {/* edit */}
        {edit && (
          <Dimmed>
            <EditIcon>
              <SVG type={CHANGE} style={svgStyles} onClick={handleOnCick} />
            </EditIcon>
            <EditIcon>
              <SVG type={DELETE} style={svgStyles} onClick={handleDelClick} />
            </EditIcon>
            <EditIcon>
              <SVG type={CANCEL} style={cancelStyles} onClick={offEdit} />
            </EditIcon>
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
});

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const OpenDiv = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: transparent;
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

const EditIcon = styled.div`
  margin: 0 4px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.ghostGray};
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;
`;
