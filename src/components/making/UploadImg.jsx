import React, { memo } from "react";
import styled from "styled-components";

import { SVG, ImageView } from "../common/index";
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

const UploadImg = memo(({ img, handleUpload, deleteImg }) => {
  const { open: edit, onOpen: onEdit, onClose: offEdit } = useOpen();
  return (
    <>
      <Wrapper>
        <OpenDiv onClick={onEdit} />
        <ImageView imageUrl={img} />
        {/* edit */}
        {edit && (
          <Dimmed>
            <EditIcon>
              <SVG type={CHANGE} style={svgStyles} onClick={handleUpload} />
            </EditIcon>
            <EditIcon>
              <SVG
                type={DELETE}
                style={svgStyles}
                onClick={() => deleteImg(img)}
              />
            </EditIcon>
            <EditIcon>
              <SVG type={CANCEL} style={cancelStyles} onClick={offEdit} />
            </EditIcon>
          </Dimmed>
        )}
      </Wrapper>
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

export default UploadImg;
