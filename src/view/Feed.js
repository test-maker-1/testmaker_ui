import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Loading } from "../components/common";
import { StyledSpinner } from "../components/common/Loading";
import TagSwiper from "../components/common/TagSwiper";
import InfinScroll from "../components/common/InfinScroll";
import CarouselComponent from "../components/Feed/Carousel";
import Card from "../components/Feed/Card";
import BottomBtn, { PageContainer } from "../components/frame/BottomBtn";

import { updateTests } from "../redux/reducer/feedReducer";
import ENUM, { ALL } from "../constants/Enum";

const initArr = [ALL];

const Feed = () => {
  const {
    feedLoading,
    top10Tags,
    testsByTag,
    lastTestUid,
    selectedTag,
    changeTestsLoading,
    isStop,
  } = useSelector((state) => state.feed);

  const tags = initArr.concat(top10Tags);
  const dispatch = useDispatch();

  const getMoreDatas = () => {
    if (isStop === false)
      dispatch(updateTests({ tagName: selectedTag, lastTestUid: lastTestUid }));
  };

  useEffect(() => {
    // 태그 바뀔 때 스크롤 상단으로
    window.scrollTo(0, 0);
  }, [selectedTag]);

  if (feedLoading) return <Loading loading={feedLoading} />;

  return (
    <Container>
      <CarouselComponent />
      <TagContainer>
        <TagSwiper tags={tags} selectedTag={selectedTag} selectable />
      </TagContainer>

      <CardContainer>
        {/* <Nothing /> */}
        {changeTestsLoading ? (
          <SpinnerContainer>
            <StyledSpinner />
          </SpinnerContainer>
        ) : (
          <InfinScroll
            datas={testsByTag}
            isStop={isStop}
            getMoreDatas={getMoreDatas}
          >
            {testsByTag.map((test) => (
              <Card
                key={`test ${test.uid}`}
                title={test.title}
                coverImg={test.coverImg}
                makerName={test.maker.name}
                makerProfile={test.maker.profileImg}
                sharedCnt={test.sharedCnt}
                participatedCnt={test.participantsCnt}
                testLink={test.testLink}
              />
            ))}
          </InfinScroll>
        )}
      </CardContainer>
      <BottomBtn
        btnArr={[{ name: "테스트 만들기 도전!", type: ENUM.PICKTEST }]}
      />
    </Container>
  );
};

const Container = styled(PageContainer)`
  z-index: ${({ theme: { zIndex } }) => zIndex.feed};
  .scroll-to-top {
    opacity: 1;
  }
`;

const TagContainer = styled.div`
  position: sticky;
  top: 5.6rem;
  z-index: ${({ theme: { zIndex } }) => zIndex.header};
`;

const CardContainer = styled.div`
  margin-top: 2.8rem;
`;

const SpinnerContainer = styled.div`
  text-align: center;
  padding-top: 4rem;
`;

export default Feed;
