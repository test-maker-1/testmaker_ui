import React, { memo } from "react";
import styled from "styled-components";

import { Loading, SVG } from "../common";

import useMiniReducer from "../../hooks/useMiniReducer";
import MakingAPI from "../../api/makingAPI";

import { getDateInfo } from "../../utils/handler";
import { LOADING, SUCCESS } from "../../utils/asyncUtils";
// import usePage from "../../hooks/usePage";
// import useCommon from "../../hooks/making/useCommon";
import { formattingTempTest } from "../../utils/asyncMakingUtils";

import ENUM from "../../constants/Enum";
import testInfo from "../../constants/testInfo";

const TempTests = ({ tests }) => {
  const { state, request, requestSuccess, requestError } = useMiniReducer();
  // const { goPage } = usePage();
  // const { initTemp } = useCommon();

  const onClick = async (uid) => {
    request();

    const { data, status } = await MakingAPI.getTest(uid);
    if (status === SUCCESS) {
      // initTemp(data);
      console.log(formattingTempTest(data));
      requestSuccess();
    } else {
      requestError();
    }
  };

  return (
    <>
      {state.status === LOADING && <Loading />}
      <Container>
        {tests.map((test) => (
          <TempTest
            key={`temp-test-${test.uid}`}
            test={test}
            onClick={onClick}
          />
        ))}
      </Container>
    </>
  );
};

const TempTest = memo(({ test, onClick }) => {
  if (!test.type) return null;

  return (
    <TempBox onClick={() => onClick(test.uid)}>
      <div>
        <Type>{`${testInfo[test.type].name} 테스트`}</Type>
        <CreateAt>{getDateInfo(test.createdAt, "temp")}</CreateAt>
      </div>
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
});

const Container = styled.ul`
  margin-top: 12px;
`;

const TempBox = styled.li`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.ivory};
  padding: 1.2rem 2rem 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  line-height: 27px;
  letter-spacing: -0.6px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

const CreateAt = styled.div`
  font-size: 1.5rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.deepGray};
`;

const SvgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TempTests;
