import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CarouselComponent from "../components/Feed/Carousel";
import BottomBtn, { PageContainer } from "../components/frame/BottomBtn";
import ENUM, { ALL } from "../constants/Enum";
import TestsAtOneTag from "../components/Feed/TestsAtOneTag";
import { initFeed, changeTests } from "../redux/reducer/feedReducer";
import TagSwiper from "../components/common/TagSwiper";
import Card from "../components/Feed/Card";
import axios from "axios";

const { PICKTEST } = ENUM;
const Feed = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initFeed());
  }, []);
  const initArr = [ALL];
  const [selected, setSelected] = useState(ALL);
  const {
    feedLoading,
    feedError,
    top10Tags,
    testsByTagLoading,
    testsByTagError,
    testsByTag,
  } = useSelector((state) => state.feed);
  const tags = initArr.concat(top10Tags);
  console.log(tags);
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

            {testsByTag && (
              <CardContainer>
                {testsByTag.map((test) => (
                  <Card
                    key={`test ${test.uid}`}
                    title={test.title}
                    coverImg={null}
                    makerName={test.maker.name}
                    makerImg={null}
                    sharedCnt={test.sharedCnt}
                    participatedCnt={test.participantsCnt}
                  />
                ))}
              </CardContainer>
            )}
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
  z-index: 0;
`;

const TagContainer = styled.div`
  position: sticky;
  top: 5.6rem;
  z-index: 100;
`;

const CardContainer = styled.div`
  margin-top: 2.8rem;
`;
