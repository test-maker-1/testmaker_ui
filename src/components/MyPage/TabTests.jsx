import React from "react";
import styled from "styled-components";
import useUser from "../../hooks/useUser";
import { PARTTEST, MADETEST, TEMPSTORAGE } from "../../constants/Enum";
import TempTest from "./TempTest";
import Card from "../Feed/Card";

const TabTests = (props) => {
  const tests = [
    {
      uid: "fadf8dasf",
      title: "우정 테스트",
      coverImg:
        "https://image.aladin.co.kr/product/6579/32/cover500/k442433954_1.jpg",
      maker: {
        name: "정현정",
        makerProfile:
          "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMzFfMTYz/MDAxNTgwNDU0MDExMTYw.EVkduy_2Wnn67MTqmuwxjO0YMQsci6pTsG1-0mq0iGUg.4hOLGC2htcZ9elJkT6NnQ1Q59Hmf05j0mn0AP_Q136Ig.JPEG.lha6440/%EC%9D%B4%EC%94%A8.._%EA%B7%80%EC%97%AC%EC%9B%8C...jpg?type=w800",
      },

      sharedCnt: 24,
      participatedCnt: 580,
      testLink: "/testing/welcome?testId=sdjkfhng-sdjkfankjhl",
    },
    {
      uid: "sdagwtgsdaf",
      title: "디프만 테스트",
      coverImg: "https://miro.medium.com/max/4000/1*aM7EB4eIMsw-6Yoqec1Udg.png",
      maker: {
        name: "디프만",
        makerProfile:
          "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMzFfMTYz/MDAxNTgwNDU0MDExMTYw.EVkduy_2Wnn67MTqmuwxjO0YMQsci6pTsG1-0mq0iGUg.4hOLGC2htcZ9elJkT6NnQ1Q59Hmf05j0mn0AP_Q136Ig.JPEG.lha6440/%EC%9D%B4%EC%94%A8.._%EA%B7%80%EC%97%AC%EC%9B%8C...jpg?type=w800",
      },
      sharedCnt: 50,
      participatedCnt: 98,
      testLink: "/testing/welcome?testId=sdjkfhng-sdjkfankjhl",
    },
    {
      uid: "h1fgh856",
      title: "연애 검사",
      coverImg:
        "https://t1.daumcdn.net/liveboard/textat/1ab08b47ac354700ad7de78b0908d44b.png",
      maker: {
        name: "모태솔로",
        makerProfile:
          "http://img.segye.com/content/image/2018/01/17/20180117519186.jpg",
      },

      sharedCnt: 5135,
      participatedCnt: 125,
      testLink: "/testing/welcome?testId=sdjkfhng-sdjkfankjhl",
    },
    {
      uid: "qd1asd12g5686",
      title: "이 새끼 뭐야. 인성 문제 있어?",
      coverImg:
        "http://flexible.img.hani.co.kr/flexible/normal/640/359/imgdb/original/2020/0731/9315961732870235.jpg",
      maker: {
        name: "이근대위",
        makerProfile:
          "https://image.news1.kr/system/photos/2020/9/28/4404922/article.jpg/dims/optimize",
      },
      sharedCnt: 855,
      participatedCnt: 160,
      testLink: "/testing/welcome?testId=sdjkfhng-sdjkfankjhl",
    },
  ];

  const tempTests = [
    {
      type: "객관식 테스트",
      lastCreateAt: "202106091921",
      testUid: "q321d5a121g5-df51as5151w",
    },
    {
      type: "성향 테스트",
      lastCreateAt: "202106091921",
      testUid: "df5q198-df14d159q8",
    },
    {
      type: "유형 테스트",
      lastCreateAt: "202106091921",
      testUid: "sd534ga68g4-df1q132d1",
    },
    {
      type: "유형 테스트",
      lastCreateAt: "202106091921",
      testUid: "ds31v89-fq11hfd1j86",
    },
  ];

  const { selectedTab } = useUser();

  if (selectedTab === TEMPSTORAGE) {
    return (
      <TempContainer>
        {tempTests.map((test) => (
          <TempTest key={`key${test.testUid}`} test={test} />
        ))}
      </TempContainer>
    );
  }
  return tests.map((test) => (
    <Card
      key={`test ${test.uid}`}
      title={test.title}
      coverImg={test.coverImg}
      makerName={test.maker.name}
      makerProfile={test.maker.profileImg}
      sharedCnt={123}
      participatedCnt={1555}
      // testLink={test.testLink}
    />
  ));
};

export default TabTests;

const TempContainer = styled.div`
  margin-top: 12px;
`;
