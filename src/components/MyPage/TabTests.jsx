import React from "react";
import styled from "styled-components";
import useUser from "../../hooks/useUser";
import { PARTTEST, MADETEST, TEMPSTORAGE } from "../../constants/Enum";
import TempTest from "./TempTest";
import Card from "../Feed/Card";
import InfinScroll from "../common/InfinScroll";
import { StyledSpinner } from "../common/Loading";

const TabTests = (props) => {
  const tempTests = [
    // {
    //   type: "객관식 테스트",
    //   lastCreateAt: "202106091921",
    //   testUid: "q321d5a121g5-df51as5151w",
    // },
    // {
    //   type: "성향 테스트",
    //   lastCreateAt: "202106091921",
    //   testUid: "df5q198-df14d159q8",
    // },
    // {
    //   type: "유형 테스트",
    //   lastCreateAt: "202106091921",
    //   testUid: "sd534ga68g4-df1q132d1",
    // },
    // {
    //   type: "유형 테스트",
    //   lastCreateAt: "202106091921",
    //   testUid: "ds31v89-fq11hfd1j86",
    // },
  ];

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
  if (tabTests.lenght == 0) {
    return (
      <Notihing>
        {selectedTab === TEMPSTORAGE
          ? `${selectedTab}된 테스트가 아직 없어요!`
          : `${selectedTab}가 아직 없어요!`}
      </Notihing>
    );
  } else {
    if (selectedTab === TEMPSTORAGE) {
      return (
        <TempContainer>
          {tempTests.map((test) => (
            <TempTest key={`key${test.testUid}`} test={test} />
          ))}
        </TempContainer>
      );
    }
    return (
      <InfinScroll datas={tabTests} isStop={isStop} getMoreDatas={getMoreDatas}>
        {tabTests.map((test) => (
          <Card
            key={`test ${test.uid}`}
            title={test.title}
            coverImg={test.coverImg}
            makerName={test.maker.name}
            makerProfile={test.maker.profileImg}
            sharedCnt={13}
            participatedCnt={50}
            testLink={test.testLink}
          />
        ))}
      </InfinScroll>
    );
  }
};

export default TabTests;

const TempContainer = styled.div`
  margin-top: 12px;
`;

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
