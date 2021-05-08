import React from "react";
import styled from "styled-components";

const Mention = () => {
  return (
    <MenContainer>
      <Avatar />
      <UserName>USERNAME</UserName>
      <Timer>20분전</Timer>
      <Speech>너무 너무 너무나게 재밌게 하구 가요~ 테스트 잘 만드신거 같아요!!!</Speech>
    </MenContainer>
  );
};

const MenContainer = styled.div`
  padding: 15px 0px 0px;  
  &::after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #EBEDF1;
  }
  &: last-child::after {
    border-bottom: 0px;
  }
`;

const Avatar = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #DADEE6;
`;

const UserName = styled.p`
  display: inline-block;
  margin: 0px 10px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #697382;
`;

const Timer = styled.p`
  display: inline-block;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #CFD3DB;
`;

const Speech = styled.p`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: #8A929E;
`;

export default Mention;