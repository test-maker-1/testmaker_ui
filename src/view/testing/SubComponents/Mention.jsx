import React, { useState } from "react";
import styled from "styled-components";
import { SVG } from "../../../components/common";
import useOpen from "../../../hooks/useOpen";
import Enum from "../../../constants/Enum";

const Mention = ({ idx, writer, content, timestamp }) => {
  const { open: openPop, onToggle: setOpen, onClose } = useOpen();
  console.log("Mention", writer);
  const handleOnClick = (event) => {
    console.log("handleON", event, writer);
    setOpen(!openPop);
  };
  return (
    <MenContainer>
      <TEMP>
        <Avatar />
        <UserName>USERNAME</UserName>
        <Timer>{timestamp}분전</Timer>
        {/* isMe : 1.본인, 0.아님 */}
        {writer?.isMe === 0 && (
          <RightSide>
            <SVG type={Enum.MORE} onClick={handleOnClick} />
            {openPop && (
              <>
                <Dimmed onClick={() => onClose()} />
                <Popup>
                  <TEMP3>
                    <TEMP2>닫기</TEMP2>
                  </TEMP3>
                </Popup>
              </>
            )}
          </RightSide>
        )}
      </TEMP>
      <Speech>{content}</Speech>
    </MenContainer>
  );
};

//댓글이 없을 경우
export const EmptyMention = ({ height }) => {
  return (
    <EmptyReply height={height}>
      <FirstReply>첫번째 댓글의 주인공이 되어주세요</FirstReply>
    </EmptyReply>
  );
};

const EmptyReply = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || "245px"};
`;

const FirstReply = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  line-height: 36px;
  text-align: center;
  letter-spacing: -1px;
  color: #e5e8ec;
`;

const Dimmed = styled.div`
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
  background: #fafafa;
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
  /*height: 120px;*/
  right: 0px;
  top: 25px;
  background: #ffffff;
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
  background: #dadee6;
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
  color: #cfd3db;
`;

const Speech = styled.p`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: #8a929e;
`;

export default Mention;
