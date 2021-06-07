import React, { useCallback } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { styled as mstyled } from "@material-ui/core/styles";
import { SVG } from "../../../components/common";
import useOpen from "../../../hooks/useOpen";
import Enum from "../../../constants/Enum";
import { getDateInfo, diffByTime } from "../../../utils/handler";

const Mention = ({ uid, writer, content, timestamp, popupClick }) => {
  const { open: openPop, onToggle: setOpen, onClose } = useOpen();

  const formatTime = useCallback((ptimestamp) => {
    let result = "";
    const current = new Date().getTime();
    const { mode, diff } = diffByTime(ptimestamp, current);

    switch (mode) {
      case "day":
        result = getDateInfo(ptimestamp, "년월일"); //yyyy년mm월dd일
        break;
      case "hour":
        result = `${diff}시간전`;
        break;
      case "min":
        result = `${diff}분전`;
        break;
      case "sec":
        result = `${diff}초전`;
        break;
      default:
        break;
    }

    return result;
  }, []);

  const handleOnClick = (id, event) => {
    setOpen(false);
    if (id === "report" && popupClick) {
      popupClick(id, uid);
    }
  };

  return (
    <MenContainer>
      <TEMP>
        <AvatarIcon src={writer.profileImg} />
        <UserName>{writer.nickname}</UserName>
        <Timer>{formatTime(timestamp)}</Timer>
        {/* isMe : -1.로그인안한상태 0.로그인 했지만, 당사자가 아닌 유저, 1.로그인한 당사자 유저  */}
        <RightSide>
          <SVG type={Enum.MORE} onClick={() => setOpen(!openPop)} />
          {writer?.isMe === 0 && openPop && (
            <>
              <Dimmed onClick={() => onClose()} onScroll={() => onClose()} />
              <Popup>
                <PopContainer>
                  <PopWrap>
                    <PopItem onClick={handleOnClick.bind(this, "report")}>
                      댓글신고
                    </PopItem>
                  </PopWrap>
                  <PopWrap>
                    <PopItem close onClick={handleOnClick.bind(this, "close")}>
                      닫기
                    </PopItem>
                  </PopWrap>
                </PopContainer>
              </Popup>
            </>
          )}
        </RightSide>
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

const Popup = styled.div`
  position: absolute;
  width: 104px;
  /*height: 120px;*/
  right: 0px;
  top: 25px;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgb(0 0 0 / 10%);
  border-radius: 5px;
  z-index: ${({ theme: { zIndex } }) => zIndex.mention};

  text-align: center;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #515966;
`;

const PopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PopWrap = styled.div`
  display: block;
  width: 100%;
  &::after {
    content: "";
    display: block;
    width:100%;
    border-bottom: 0.5px solid #F1F2F4;
  }
  &: last-child::after {
    border-bottom: 0px;
  }
`;
const PopItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  bottom: 0;
  background: ${({ close, theme: { colors } }) =>
    close ? colors.white : colors.snow};
  cursor: pointer;
  border-radius: ${({ close }) =>
    close ? "0px 0px 5px 5px" : "5px 5px 0px 0px"};
`;

const RightSide = styled.div`
  position: relative;
  float: right;
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

const AvatarIcon = mstyled(Avatar)({
  display: "inline-block",
  float: "left",
  width: "24px",
  height: "24px",
});

const UserName = styled.p`
  display: inline-block;
  font-weight: bold;
  float: left;
  margin: 0px 10px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors } }) => colors.titleGray};
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
