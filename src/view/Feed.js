import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CarouselComponent from "../components/Feed/Carousel";
import BottomBtn, { PageContainer } from "../components/frame/BottomBtn";
import ENUM, { ALL } from "../constants/Enum";
import { initFeed, updateTests } from "../redux/reducer/feedReducer";
import TagSwiper from "../components/common/TagSwiper";
import Card from "../components/Feed/Card";
import InfinScroll from "../components/common/InfinScroll";

const { PICKTEST } = ENUM;
const Feed = (props) => {
  const dispatch = useDispatch();
  const {
    feedLoading,
    feedError,
    top10Tags,
    testsByTagLoading,
    testsByTagError,
    testsByTag,
    lastTestUid,
  } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(initFeed());
  }, [dispatch]);

  const initArr = [ALL];
  const [selected, setSelected] = useState(ALL);
  const [isStop, setStop] = useState(false);
  const tags = initArr.concat(top10Tags);

  const getMoreDatas = () => {
    dispatch(updateTests({ tagName: selected, lastTestUid: lastTestUid }));
  };

  useEffect(() => {
    // 태그 바뀔 때 스크롤 상단으로
    window.scrollTo(0, 0);
  }, [selected]);

  return (
    <Container>
      {feedLoading ? null : (
        <>
          <CarouselComponent />
          <>
            <TagContainer>
              <TagSwiper
                tags={tags}
                selectedTag={selected}
                setSelected={setSelected}
              />
            </TagContainer>

            <CardContainer>
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
                    makerImg={test.makerImg}
                    sharedCnt={test.sharedCnt}
                    participatedCnt={test.participantsCnt}
                    testLink={test.testLink}
                  />
                ))}
              </InfinScroll>
            </CardContainer>
          </>
          <BottomBtn
            btnArr={[{ name: "테스트 만들기 도전!", type: PICKTEST }]}
          />
        </>
      )}
    </Container>
  );
};

Feed.propTypes = {};

export default Feed;

const Container = styled(PageContainer)`
  z-index: ${({ theme: { zIndex } }) => zIndex.feed};
`;

const TagContainer = styled.div`
  position: sticky;
  top: 5.6rem;
  z-index: 100;
`;

const CardContainer = styled.div`
  margin-top: 2.8rem;
`;
