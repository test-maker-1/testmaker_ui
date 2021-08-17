import React, { memo } from "react";
import styled from "styled-components";
import { TitleBox } from ".";

/*
 * ranking: {
   name: string;
   point: number;  
 }
 * idx: number;
 */
export const RankingRow = ({
  ranking = {
    name: "",
    point: null,
  },
  rank,
}) => {
  const { name, point } = ranking;

  return (
    <Wrapper>
      <Ranking>
        <span>{rank}</span>
      </Ranking>
      <Name className="name">{name}</Name>
      <div className="point">{point && <span>{point}점</span>}</div>
    </Wrapper>
  );
};

/*
 * top: number;
 * userRanking: ranking[];
 */
export const RankingList = memo(({ top, userRanking, noline = false }) => {
  return (
    <Container>
      <TitleBox title={`점수 TOP ${top}`} noline={noline}>
        <ul>
          {userRanking.map((ranking, idx) => (
            <RankingRow key={idx} rank={idx + 1} ranking={ranking} />
          ))}
        </ul>
      </TitleBox>
    </Container>
  );
});

const Container = styled.div`
  li:last-child {
    margin-bottom: 12.5px !important;
  }
`;

const Wrapper = styled.li`
  margin-bottom: 26px;
  display: flex;
  align-items: center;

  .name,
  .point {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #697382;
  }
`;

const Name = styled.p`
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
`;

const Ranking = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.skyBlue};

  span {
    margin: auto;
    font-weight: bold;
    font-size: ${({ theme: { colors } }) => colors.xxs}rem;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
