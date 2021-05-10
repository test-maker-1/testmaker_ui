import React from "react";
import styled from "styled-components";
import { SVG } from "../common";
import ENUM from "../../constants/Enum";

const { PICTURE, DELETE } = ENUM;

/*
 * title: string;
 * onUpload, onDelete: function;
 */
const SubTitle = ({ title, onUpload, onDelete, children }) => {
  return (
    <Container>
      <h3 className="title">{title}</h3>
      <Btns>
        {children}
        <BtnIcon type={PICTURE} onClick={onUpload} />
        <BtnIcon type={DELETE} onClick={onDelete} />
      </Btns>
    </Container>
  );
};

/*
 * type: string;
 * onClick: function;
 */
export const BtnIcon = ({ type, onClick }) => {
  const svgStyles =
    type !== PICTURE ? { width: 24, height: 24 } : { width: 18, height: 18 };

  return (
    <li className="item-btn">
      <button onClick={onClick}>
        <SVG type={type} style={svgStyles} />
      </button>
    </li>
  );
};

const Container = styled.div`
  padding: 12px ${({ theme: { paddings } }) => paddings.main}px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.white};

  .title {
    color: ${({ theme: { colors } }) => colors.BodyGray};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
`;

const Btns = styled.ul`
  display: flex;
  align-items: center;

  .item-btn {
    margin-left: 8px;
  }

  path {
    fill: ${({ theme: { colors } }) => colors.gray};
    cursor: pointer;
  }
`;

export default SubTitle;
