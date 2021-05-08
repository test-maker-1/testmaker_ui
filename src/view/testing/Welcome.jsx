import React from "react";
import styled from "styled-components";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import TestIntro from "./SubComponents/TestIntro";
import Mention from "./SubComponents/Mention";
import RoundContiner from "./SubComponents/RoundContainer";
import ENUM from "../../constants/Enum";


const { PREVIEW, MOVENEXT } = ENUM;

const Welcome = () => {
  return (
    <TEMP>
      <div style={{padding: "10px 1.25em"}}>
      <TestIntro />      
      </div>
      <RoundContiner>
        <CoHead><Title>댓글</Title><Entire>10개 전체보기</Entire></CoHead>
        {[1, 2, 3].map((item)=>{
          return <Mention />;
        })}
      </RoundContiner>
      <BottomBtn
        btnArr={[
          { name: "공유하기", type: PREVIEW },
          { name: "시작하기", type: MOVENEXT },
        ]}
      />
    </TEMP>
  );
};

const TEMP = styled.div`
  background: #F1F2F4;
`;

const CoHead = styled.div`
  height: 30px;
  margin-bottom: 16px;
`;

const Entire = styled.p`
  display: inline-block;
  float: right;
  text-align: right;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: #8A929E;
`;

const Title = styled.p`
  display: inline-block;
  float: left;
  font-size: 1.5em; /*24px*/
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -1px;
  color: #697382;
`;

const Avatar = styled.div`
  /* Ellipse 187 */
  position: static;
  width: 32px;
  height: 32px;
  left: 0px;
  top: 0px;

  /* 300 */

  background: #DADEE6;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;

export default Welcome;