import React, { memo } from "react";
import styled from "styled-components";

import { SVG } from "../common/index";
import useMaking from "../../hooks/useMaking";
import ENUM from "../../constants/Enum";

const svgStyles = {
  width: 16,
  height: 16,
};

/*
 * tag: string;
 * onDelete: function;
 */
const Tag = ({ tag, deletable = false }) => {
  const { dispatch, deleteTag } = useMaking();

  const onClick = (e) => {
    if (deletable) dispatch(deleteTag(tag));
  };

  return (
    <TagBox>
      <span>{tag}</span>
      {/* delete btn */}
      {deletable && (
        <button onClick={onClick}>
          <SVG type={ENUM.CANCEL} style={svgStyles} />
        </button>
      )}
    </TagBox>
  );
};

const TagBox = styled.span`
  margin-right: 10px;
  padding: 6px 10px;

  display: inline-flex;
  align-items: center;

  border-radius: 5px;
  background: #fafafa;
  color: #8a929e;

  font-size: 13px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: -0.3px;

  button {
    margin-left: 4px;
    display: flex;
  }
`;

export default memo(Tag);
