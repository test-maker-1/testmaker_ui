import React from "react";
import styled from "styled-components";

import { TitleBox, Title } from "../../components/common/index";
import BottomBtn from "../../components/frame/BottomBtn";

import useMaking from "../../hooks/useMaking";
import ENUM from "../../constants/Enum";

import tempImg from "../../resources/temp-img.png";

const { TRUE, HOME } = ENUM;

const [SELECTED, UNSELECTED] = ["#e5e8ec", "#f1f2f4"];

const TestRelease = () => {
  const {
    data: { onFeed },
    updateCommon,
  } = useMaking();

  const onBoolClick = (e) => {
    const { name, value } = e.target;
    if (value === TRUE) updateCommon(name, true);
    else updateCommon(name, false);
  };

  return (
    <>
      <div>
        <TitleBox noline>
          <ImgWrap>
            <img src={tempImg} alt="success thumbnail" />
          </ImgWrap>
          <SuccessTitle>테스트 만들기 성공!</SuccessTitle>
          <Guide>테스트 관리는 마이페이지에서 할 수 있어요!</Guide>
        </TitleBox>
        <TitleBox title="홈 피드에 공개할까요?">
          <Buttons>
            <Item bgColor={onFeed ? UNSELECTED : SELECTED}>
              <Button name="onFeed" value={false} onClick={onBoolClick}>
                안 할래요
              </Button>
            </Item>
            <Item bgColor={onFeed ? SELECTED : UNSELECTED}>
              <Button name="onFeed" value={true} onClick={onBoolClick}>
                공개할래요
              </Button>
            </Item>
          </Buttons>
        </TitleBox>
      </div>
      <BottomBtn btnArr={[{ name: "홈으로 가기", type: HOME }]} />
    </>
  );
};

const ImgWrap = styled.div`
  margin: 73px auto;
  text-align: center;

  img {
    width: 160px;
    height: 155px;
  }
`;

const SuccessTitle = styled(Title)`
  padding-bottom: 8px;
  text-align: center;
  color: #363d4a;
`;

const Guide = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.5px;
  color: #8a929e;
`;

const Buttons = styled.ul`
  display: flex;
  border-radius: 5px;
`;

const Item = styled.li`
  flex: 1;
  text-align: center;
  background-color: ${({ bgColor }) => bgColor};
`;

const Button = styled.button`
  width: 100%;
  padding: 13px 0;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 27px;
  color: #8a929e;
`;

export default TestRelease;
