import React, { useRef, memo } from "react";
import styled from "styled-components";

import { SVG, ImageView, Loading } from "../common/index";
import theme from "../../styles/theme";

import useOpen from "../../hooks/useOpen";
import useImage from "../../hooks/useImage";

import ENUM from "../../constants/Enum";
import msg from "../../constants/msg";

const { CHANGE, DELETE, CANCEL, QUESTION } = ENUM;

const svgStyles = {
  width: 40,
  height: 40,
  fill: theme.colors.deepGray,
};

const cancelStyles = {
  ...svgStyles,
  stroke: theme.colors.deepGray,
};

export const UploadImg = memo(({ img, parentIdx, openAlert }) => {
  const { uploadImg, deleteImg } = useImage(QUESTION, parentIdx, () =>
    openAlert(msg.errorPage[500])
  );

  const { open: loading, onOpen, onClose } = useOpen();
  const { open: edit, onOpen: onEdit, onClose: offEdit } = useOpen();

  const fileInput = useRef();

  // upload and delete image
  const handleOnCick = () => fileInput.current.click();

  const onUpload = async (e) => {
    const files = e.target.files;

    onOpen();
    await uploadImg(files[0]);
    // init
    fileInput.current.value = null;
    onClose();
  };

  const onDelete = async (e) => {
    onOpen();
    await deleteImg(img);
    onClose();
  };

  return (
    <>
      {loading && <Loading />}
      <Wrapper>
        <OpenDiv onClick={onEdit} />
        <ImageView imageUrl={img} />
        {/* edit */}
        {edit && (
          <Dimmed>
            <EditIcon>
              <SVG type={CHANGE} style={svgStyles} onClick={handleOnCick} />
            </EditIcon>
            <EditIcon>
              <SVG type={DELETE} style={svgStyles} onClick={onDelete} />
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
        onChange={onUpload}
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
