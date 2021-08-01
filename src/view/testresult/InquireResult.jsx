import React from "react";
import styled from "styled-components";
import { SVG } from "../../components/common";
import RoundContiner from "../testing/SubComponents/RoundContainer";
import ENUM from "../../constants/Enum";
import ToggleSwitch from "../../components/Result/ToggleSwitch";

const InquireResult = () => {
  return (
    <Continer>
      <TopContiner>
        <PartNumber>참여인원 3,258명</PartNumber>
        <Info>
          <TestName>디프만 우정 테스트</TestName>
          <ShareBox>
            <SVG
              type={ENUM.CONFIRM}
              style={{
                width: "22",
                height: "22",
              }}
            />
            <div className="share-number">4,473</div>
          </ShareBox>
        </Info>
        <ToggleArea>
          <ToggleBox>
            <div className="setting">이 테스트를 피드에 공개하기</div>
            <div className="toggle">
              <ToggleSwitch />
            </div>
          </ToggleBox>
          <ToggleBox>
            <div className="setting">테스트 링크 비활성화하기</div>
            <div className="toggle">
              <ToggleSwitch />
            </div>
          </ToggleBox>
        </ToggleArea>
      </TopContiner>

      <RoundContiner></RoundContiner>
    </Continer>
  );
};

export default InquireResult;

const Continer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopContiner = styled.div`
  padding: 0 2rem 1.5rem 2rem;
`;
const PartNumber = styled.div`
  padding-bottom: 0.3rem;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #b7bdcb;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
`;
const TestName = styled.div`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl}rem;
  line-height: 35px;
  letter-spacing: -1px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;
const ShareBox = styled.div`
  font-weight: normal;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors } }) => colors.body};
  align-items: center;
  display: flex;
  .share-number {
    margin-left: 5px;
  }
`;
const ToggleArea = styled.div`
  flex-direction: column;
`;
const ToggleBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.darker};
  .toggle {
    align-items: center;
    display: flex;
  }
`;
