import React from "react";
import styled from "styled-components";
import CarouselComponent from "../components/Feed/Carousel";
import BottomBtn, { PageContainer } from "../components/frame/BottomBtn";
import ENUM from "../constants/Enum";
import TestsAtOneTag from "../components/Feed/TestsAtOneTag";
const { PICKTEST } = ENUM;
const Feed = (props) => {
  return (
    <Container>
      <CarouselComponent />
      <TestsAtOneTag />
      <BottomBtn btnArr={[{ name: "테스트 만들기 도전!", type: PICKTEST }]} />
    </Container>
  );
};

Feed.propTypes = {};

export default Feed;

const Container = styled(PageContainer)`
  z-index: 0;
`;
