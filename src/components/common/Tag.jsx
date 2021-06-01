import React, { memo } from "react";
import styled, { css } from "styled-components";

import { SVG } from "../common";
import theme from "../../styles/theme";

import useMaking from "../../hooks/useMaking";
import { changeTests } from "../../redux/reducer/feedReducer";
import { setSelecteTag } from "../../redux/reducer/feedReducer";

import ENUM, { ALL } from "../../constants/Enum";

const { blue, white, bodyGray } = theme.colors;
const svgStyles = {
  width: 16,
  height: 16,
};

// tag: string;
const Tag = ({ tag, deletable, selected, selectable }) => {
  const { dispatch, deleteTag } = useMaking();

  const onClickDelete = () => {
    if (deletable) dispatch(deleteTag(tag));
  };

  const onSelectTag = () => {
    if (!selectable) return;

    dispatch(setSelecteTag(tag));
    dispatch(changeTests({ tagName: tag, lastTestUid: 0 }));
  };

  return (
    <TagBox onClick={onSelectTag} selected={selected}>
      <span>{tag === ALL ? tag : `#${tag}`}</span>
      {/* delete btn */}
      {deletable && (
        <button onClick={onClickDelete}>
          <SVG type={ENUM.CANCEL} style={svgStyles} />
        </button>
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

  ${({ selected }) => {
    if (selected) {
      return css`
        background: ${blue};
        color: white;
      `;
    } else {
      return css`
        border: 1px solid #e5e8ec;
        background: ${white};
        color: ${bodyGray};
      `;
    }
  }}
`;

export default memo(Tag);
