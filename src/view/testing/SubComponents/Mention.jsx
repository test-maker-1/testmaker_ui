import React, {useState} from "react";
import styled from "styled-components";
import {SVG} from "../../../components/common";
import useOpen from "../../../hooks/useOpen";
import Enum from "../../../constants/Enum";

const Mention = ({key, idx}) => {
  const { open: openPop, onToggle:setOpen, onClose } = useOpen();

  const handleOnClick = (event) => {
    console.log("handleON",event)
    setOpen(!openPop)
  }

  console.log(key, idx)
  return (
    <MenContainer>
      <TEMP>
        <Avatar />
        <UserName>USERNAME</UserName>
        <Timer>20분전</Timer>
        <RightSide>
          <SVG type={Enum.MORE} onClick={handleOnClick}/>
          {openPop &&
            <>
              <TEMP4 onClick={() => onClose()}/>
              <Popup>
                <TEMP3>
                <TEMP2>닫기</TEMP2>
                </TEMP3>
              </Popup>
            </>
          }          
        </RightSide>
      </TEMP>
      <Speech>너무 너무 너무나게 재밌게 하구 가요~ 테스트 잘 만드신거 같아요!!!</Speech>
    </MenContainer>
  );
};

const TEMP4 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TEMP2 = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
  background: #FAFAFA;
`;
const TEMP3 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const RightSide = styled.div`
  position: relative;
  float: right;
`;

const Popup = styled.div`
  position: absolute;
  width: 104px;
  height: 120px;
  right: 0px;
  top: 25px;
  background: #FFFFFF;
  box-shadow: 4px 4px 10px rgb(0 0 0 / 10%);
  border-radius: 5px;
  z-index: 1;

  text-align: center;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #515966;
`;

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