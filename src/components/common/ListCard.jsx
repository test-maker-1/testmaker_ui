import React from "react";
import styled from "styled-components";
import tempImg from "../../resources/temp-img.png";

const breakWidth = 350;
const [pt, pl] = [20, 25];

/*
 * title: string;
 * thumbnail: img file;
 */
const ListCard = ({ title, thumbnail = tempImg, children }) => {
  return (
    <Wrapper className="list-card">
      <Thumbnail>
        <img src={thumbnail} alt={title} />
      </Thumbnail>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 16px;
  padding: ${pt}px ${pl}px;
  display: flex;

  border: 1px solid #e5e8ec;
  border-radius: 5px;
  background: #fafafa;
  cursor: pointer;

  @media (max-width: ${breakWidth}px) {
    flex-direction: column;
  }
`;

const Thumbnail = styled.div`
  padding-right: ${pl}px;
  display: flex;
  align-items: center;

  @media (max-width: ${breakWidth}px) {
    padding-bottom: ${pt}px;
  }
`;

const Title = styled.h2`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #697382;
`;

export default ListCard;
