import React from "react";
import styled from "styled-components";

import { TitleBox } from "../../components/common/index";
import BottomBtn from "../../components/frame/BottomBtn";

import useMaking from "../../hooks/useMaking";
import ENUM from "../../constants/Enum";

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
