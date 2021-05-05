import React, { useState, useRef } from "react";
import styled from "styled-components";

import { SVG } from "../common/index";
import useOpen from "../../hooks/useOpen";
import ENUM from "../../constants/Enum";

import defaultPhoto from "../../resources/temp-img.png"; // default photo

const { CANCEL, CHANGE } = ENUM;

const svgStyles = {
  width: 40,
  height: 40,
};

export const UploadImg = () => {
  const fileInput = useRef();
  const [imgURL, setImgURL] = useState(defaultPhoto);
  const { open: edit, onToggle } = useOpen();

  // upload and delete image
  const handleOnCick = () => fileInput.current.click();
  const handleDelClick = () => setImgURL(defaultPhoto);

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
        <DimmImg>
          <img src={imgURL} alt={"test cover img"} />
        </DimmImg>
        {/* edit */}
        {edit && (
          <Dimmed>
            <EditBtn onClick={handleOnCick}>
              <SVG type={CHANGE} style={svgStyles} />
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
  height: 155px;
  margin-bottom: 16px;
`;

const DimmImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 5px;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
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
