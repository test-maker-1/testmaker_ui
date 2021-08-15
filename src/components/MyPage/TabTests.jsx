import React from "react";
import styled from "styled-components";
import useUser from "../../hooks/useUser";
import { PARTTEST, MADETEST, TEMPSTORAGE } from "../../constants/Enum";
import Card from "../Feed/Card";
import InfinScroll from "../common/InfinScroll";
import { StyledSpinner } from "../common/Loading";
import TempTests from "./TempTest";

const TabTests = (props) => {
  const {
    selectedTab,
    tabTests,
    isStop,
    tabTestsLast,
    tabTestsLoading,
    morePartTests,
    moreMadeTests,
  } = useUser();

  const getMoreDatas = () => {
    if (isStop === false) {
      switch (selectedTab) {
        case PARTTEST:
          return morePartTests({ num_elements: 10, uid: tabTestsLast });
        case MADETEST:
          return moreMadeTests({
            num_elements: 10,
            millis_timestamp: tabTestsLast,
          });
        case TEMPSTORAGE:
        default:
          return;
      }
    }
  };

  if (tabTestsLoading)
    return (
      <SpinnerContainer>
        <StyledSpinner />
      </SpinnerContainer>
    );
  if (tabTests.lenght === 0) {
    return (
      <Notihing>
        {selectedTab === TEMPSTORAGE
          ? `${selectedTab}된 테스트가 아직 없어요!`
          : `${selectedTab}가 아직 없어요!`}
      </Notihing>
    );
  } else {
    if (selectedTab === TEMPSTORAGE) {
      return <TempTests tests={tabTests} />;
    }
    return (
      <InfinScroll datas={tabTests} isStop={isStop} getMoreDatas={getMoreDatas}>
        {tabTests.map((test) => (
          <Card key={`test ${test.uid}`} test={test} maker={test.maker} />
        ))}
      </InfinScroll>
    );
  }
};

export default TabTests;

const Notihing = styled.div`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.6px;
  color: ${({ theme: { colors } }) => colors.deepGray};
`;

const SpinnerContainer = styled.div`
  text-align: center;
  padding-top: 4rem;
`;
