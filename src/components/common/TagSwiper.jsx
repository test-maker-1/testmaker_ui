import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tag } from ".";

const TagSwiper = ({
  tags,
  selectedTag,
  selectable = false,
  allSelected = false,
  noPadding,
  useable = false,
}) => {
  const resultTag = selectedTag === "" ? "전체" : selectedTag;
  return (
    <Container noPadding={noPadding} useable={useable}>
      <Swiper slidesPerView={"auto"} spaceBetween={0} className="tag-swiper">
        <SwiperSlide>
          {tags.map((tag, idx) => (
            <Tag
              key={`${tag}-${idx}`}
              tag={tag}
              selected={allSelected || resultTag === tag}
              selectable={selectable}
            />
          ))}
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  margin: 0 0 12px 0;
  padding: ${(props) => (props.useable ? "0 2rem 0.8rem 2rem" : "0")};
  background: ${(props) => (props.useable ? "white" : "none")};
  width: 100%;

  .swiper-container {
    width: ${(props) => props.width || "100%"};
  }
  .swiper-slide {
    width: auto !important;
    display: flex;
    cursor: pointer;
  }
`;

export default TagSwiper;
