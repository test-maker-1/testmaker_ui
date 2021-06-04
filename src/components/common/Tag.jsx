import React, { memo } from "react";
import styled, { css } from "styled-components";

import { SVG } from "../common";
import theme from "../../styles/theme";

import { changeTests } from "../../redux/reducer/feedReducer";
import { setSelecteTag } from "../../redux/reducer/feedReducer";

import useCommon from "../../hooks/making/useCommon";
import ENUM, { ALL } from "../../constants/Enum";

const { blue, white, bodyGray } = theme.colors;
const svgStyles = {
  width: 16,
  height: 16,
};

// tag: string;
const Tag = ({ tag, selected, selectable, deletable }) => {
  const { dispatch, deleteTagData } = useCommon();

  const onClickDelete = () => {
    if (deletable) dispatch(deleteTagData(tag));
  };

  const onSelectTag = () => {
    if (!selectable || selected) return;

    dispatch(setSelecteTag(tag));
    dispatch(changeTests({ tagName: tag, lastTestUid: 0 }));
  };

  return (
    <TagBox onClick={onSelectTag} selected={selected} deletable={deletable}>
      <span>{tag === ALL ? tag : `#${tag}`}</span>
      {/* delete btn */}
      {deletable && (
        <SVG type={ENUM.CANCEL} style={svgStyles} onClick={onClickDelete} />
      )}
    </TagBox>
  );
};

Tag.defaultProps = {
  deletable: false,
  selected: false,
  selectable: false,
};

const TagBox = styled.span`
  margin-right: 10px;
  padding: 0.6rem 1rem;
  height: 3.2rem;

  display: inline-flex;
  align-items: center;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: -0.3px;
  border-radius: 8px;

  svg {
    margin-left: 5px;
  }

  ${({ selected, deletable }) => {
    if (selected) {
      return css`
        background: ${blue};
        color: white;
      `;
    } else {
      return css`
        margin-top: ${deletable ? 16 : 0}px;
        border: ${deletable ? 0 : "1px solid #e5e8ec"};
        background: ${white};
        color: ${bodyGray};
      `;
    }
  }}
`;

export default memo(Tag);
