import React, { memo } from "react";
import styled from "styled-components";

import { ImageView } from "../common";
import useOpen from "../../hooks/useOpen";

import theme from "../../styles/theme";
import { ReactComponent as Change } from "../../resources/svg/change.svg";
import { ReactComponent as Delete } from "../../resources/svg/delete.svg";
import { ReactComponent as Cancel } from "../../resources/svg/cancel.svg";

const [width, height, fill] = ["40", "40", theme.colors.blue];

const UploadImg = memo(({ img, handleUpload, deleteImg }) => {
  const { open: edit, onOpen: onEdit, onClose: offEdit } = useOpen();
  const { open: showGuide, onClose: hideGuide } = useOpen(true);

  return (
    <Wrapper>
      <OpenDiv onClick={onEdit} />
      <ImageView imageUrl={img} />
      {showGuide && (
        <Guide>
          사진을 한 번 더 누르면 바꾸거나 지울 수 있어요!
          <StyledCancel
            className="icon-svg"
            stroke={"white"}
            onClick={hideGuide}
          />
        </Guide>
      )}

      {edit && (
        <Dimmed>
          <div className="btns-edit">
            <EditIcon>
              <Change
                className="icon-svg"
                width={width}
                height={height}
                fill={fill}
                onClick={handleUpload}
              />
            </EditIcon>
            <EditIcon>
              <StyledDelete
                className="icon-svg"
                width={width}
                height={height}
                onClick={() => deleteImg(img)}
              />
            </EditIcon>
            <EditIcon>
              <StyledCancel
                className="icon-svg"
                width={width}
                height={height}
                stroke={fill}
                onClick={offEdit}
              />
            </EditIcon>
          </div>
        </Dimmed>
      )}
    </Wrapper>
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
  position: absolute;
  top: 0;
  margin-bottom: 16px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme: { zIndex } }) => zIndex.upImg};

  .btns-edit {
    display: flex;
  }
`;

const Guide = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 8px 13px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;

  border-radius: 10px 10px 0 0;
  background: ${({ theme: { colors } }) => colors.blue};
  color: white;
`;

const EditIcon = styled.div`
  margin: 0 4px;
  padding: 20px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.ghostGray};
  opacity: 0.8;
`;

const StyledDelete = styled(Delete)`
  path {
    fill: ${fill};
  }
  rect {
    fill: white;
  }
`;

const StyledCancel = styled(Cancel)`
  path {
    stroke: ${({ stroke }) => stroke};
  }
`;

export default UploadImg;
