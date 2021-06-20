import React, { useCallback } from "react";
import styled from "styled-components";
import SVG from "../common/SVG";
import ENUM, {
  mbti,
  multiple,
  weight,
  MULTIPLE,
  MBTI,
  WEIGHT,
} from "../../constants/Enum";
import { getDateInfo } from "../../utils/handler";
import { NoticeAlert } from "../common";

const TempTest = ({ test }) => {
  let name = "";
  if (test) {
    switch (test.type) {
      case mbti:
        name = MBTI;
        break;
      case multiple:
        name = MULTIPLE;
        break;
      case weight:
        name = WEIGHT;
        break;

      default:
        break;
    }
  }
  const onClick = useCallback(() => {
    return NoticeAlert.open("곧 업데이트 예정이에요!");
  }, []);
  return (
    <TempBox>
      <TempInfo>
        <NoticeAlert icon={ENUM.WARNING} btns={[{ name: "닫기" }]} />
        <Type>{name !== "" && name}</Type>
        <CreateAt>{getDateInfo(test.createdAt, "temp")}</CreateAt>
      </TempInfo>
      <SvgBox>
        <SVG
          type={ENUM.NEXT}
          style={{
            width: "20",
            height: "20",
          }}
          onClick={onClick}
        />
      </SvgBox>
    </TempBox>
  );
};

export default TempTest;

const TempBox = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.ivory};
  padding: 1.2rem 2rem 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const TempInfo = styled.div``;

const Type = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  line-height: 27px;
  letter-spacing: -0.6px;
  color: #515966;
`;

const CreateAt = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #8a929e;
`;

const SvgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
