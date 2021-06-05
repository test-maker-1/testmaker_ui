import React, { memo, useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { styled as mstyled } from "@material-ui/core/styles";
import { TitleBox, ImageView } from "../../components/common";

const MypageMain = memo((props) => {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      <InfoContainer>
        <InfoUser>
          <InfoAva>
            <AvatarIcon alt="user" src="/static/images/avatar/1.jpg" />
          </InfoAva>
          <Partition>메이커짱짱</Partition>
        </InfoUser>
        <InfoBox>
          <InfoArea>
            <InfoSubBox>
              <InfoInBox>
                <InfoTitle>북마크</InfoTitle>
                <InfoCnt>15개</InfoCnt>
              </InfoInBox>
            </InfoSubBox>
            <InfoSubBox>
              <InfoInBox>
                <InfoTitle>내가 쓴 댓글</InfoTitle>
                <InfoCnt>10</InfoCnt>
              </InfoInBox>
            </InfoSubBox>
            <InfoSubBox>
              <InfoInBox>
                <InfoTitle>참여 테스트</InfoTitle>
                <InfoCnt>100</InfoCnt>
              </InfoInBox>
            </InfoSubBox>
          </InfoArea>
        </InfoBox>
        <BtnArea>
          <BtnTab>내가 했던 테스트</BtnTab>
          <BtnTab>내가 만든 테스트</BtnTab>
          <BtnTab>임시저장</BtnTab>
        </BtnArea>
      </InfoContainer>
      {tab === 0 && (
        <TitleBox title={"민지 우정테스트"}>
          <ImageView />
        </TitleBox>
      )}
    </div>
  );
});

const InfoContainer = styled.div`
  padding: 16px 1.25em 0px; /*20px*/
`;

const InfoUser = styled.div`
  margin-top: 7px;
`;

const InfoAva = styled.div`
  display: inline-block;
  margin-right: 8px;
`;

const AvatarIcon = mstyled(Avatar)({
  width: "40px",
  height: "40px",
  background: "#E5E8EC",
  borderRadius: "20px",
});

const Partition = styled.p`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem; /*14px*/
  line-height: 21px;
  letter-spacing: -0.3px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #515966;

  &: last-child {
    margin-left: 8px;
  }
`;

const BtnArea = styled.div`
  display: block;
`;

const BtnTab = mstyled(Button)({
  border: "1px solid #E5E8EC",
  boxSizing: "border-box",
  borderRadius: "8px",
  marginRight: "10px",
});

const InfoBox = styled.div`
  width: 100%; /*374px*/
  height: 83px;
  background: #fafafa;
  border-radius: 13px;
  margin: 1em 0px 1.25em;
`;

const InfoArea = styled.div`
display: flex;
width: 100%;
height: 100%;
}
`;

const InfoSubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

const InfoInBox = styled.div`
  text-align: center;
`;

const InfoTitle = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: #363d4a;
`;

const InfoCnt = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.8px;
  color: #363d4a;
`;

export default MypageMain;
