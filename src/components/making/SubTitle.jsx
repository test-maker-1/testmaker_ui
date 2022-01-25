import React, { memo } from "react";
import styled from "styled-components";

import ENUM from "../../constants/Enum";
import { ReactComponent as Picture } from "../../resources/svg/picture.svg";
import { ReactComponent as Delete } from "../../resources/svg/delete.svg";

const { PICTURE, DELETE } = ENUM;

// title: string;
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

// type: string;
export const BtnIcon = ({ type, onClick }) => {
  return (
    <li>
      {type === PICTURE ? (
        <Picture className="icon-svg" onClick={onClick} />
      ) : (
        <Delete className="icon-svg" onClick={onClick} />
      )}
    </li>
  );
};

const Container = styled.div`
  margin-bottom: 16px;
  padding: 10px ${({ theme: { paddings } }) => paddings.main}rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.ivory};

  .title {
    color: ${({ theme: { colors } }) => colors.BodyGray};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
`;

const Btns = styled.ul`
  display: flex;
  align-items: center;
  .icon-svg {
    margin-left: 8px;
  }
`;

export default memo(SubTitle);
