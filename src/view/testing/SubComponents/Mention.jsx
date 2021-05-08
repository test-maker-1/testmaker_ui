import React from "react";
import styled from "styled-components";
import SVG from "../../../components/common/SVG";
import Enum from "../../../constants/Enum";

const Mention = () => {
  return (
    <MenContainer>
      <TEMP>
        <Avatar />
        <UserName>USERNAME</UserName>
        <Timer>20분전</Timer>
        <SVG type={Enum.MORE} style={{float: "right"}}/>
      </TEMP>
      <Speech>너무 너무 너무나게 재밌게 하구 가요~ 테스트 잘 만드신거 같아요!!!</Speech>
    </MenContainer>
  );
};

const TEMP = styled.div`
  height: 21px;
  margin-bottom: 8px;
`;

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
  float: left;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #DADEE6;
`;

const UserName = styled.p`
  display: inline-block;
  float: left;
  margin: 0px 10px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #697382;
`;

const Timer = styled.p`
  display: inline-block;
  float: left;
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