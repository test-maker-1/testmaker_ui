import React, { memo, useState } from "react";
import styled, { css } from "styled-components";

import { SVG } from "../common/index";
import useMaking from "../../hooks/useMaking";
import ENUM from "../../constants/Enum";
import theme from "../../styles/theme";

const { blue, white, bodyGray } = theme.colors;
const svgStyles = {
  width: 16,
  height: 16,
};

/*
 * tag: string;
 * onDelete: function;
 */
const Tag = ({ tag, deletable = false, selected = false, setSelected }) => {
  const { dispatch, deleteTag } = useMaking();

  const onClickDelete = (e) => {
    if (deletable) dispatch(deleteTag(tag));
  };
  const onSelectTag = (e) => {
    if (!setSelected) return;
    setSelected(tag);
  };

  return (
    <TagBox onClick={onSelectTag} selected={selected}>
      <span>{tag}</span>
      {/* delete btn */}
      {deletable && (
        <button onClick={onClickDelete}>
          <SVG type={ENUM.CANCEL} style={svgStyles} />
        </button>
      )}
    </TagBox>
  );
};

const TagBox = styled.span`
  margin-right: 10px;
  padding: 6px 10px;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;

  border-radius: 8px;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: -0.3px;
  background: ${(props) => (props.selected ? blue : white)};

  border: ${(props) =>
    props.selected ? `1px solid ${blue}` : "1px solid #e5e8ec"};

  color: ${(props) => (props.selected ? white : bodyGray)};
`;

export default memo(Tag);
