import React, { useCallback } from "react";
import styled from "styled-components";
import SVG from "../common/SVG";
import ENUM from "../../constants/Enum";

const TempTest = ({ test }) => {
  const onClick = useCallback(() => {
    // console.log("임시 저장 이동");
  }, []);
  return (
    <TempBox>
      <TempInfo>
        <Type>{test.type}</Type>
        <CreateAt>{test.lastCreateAt}</CreateAt>
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
