import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tag } from ".";

const TagSwiper = ({ tags, selectedTag, selectable = false, noPadding }) => {
  const resultTag = selectedTag === "" ? "전체" : selectedTag;
  return (
    <Container noPadding={noPadding}>
      <Swiper slidesPerView={"auto"} spaceBetween={0} className="tag-swiper">
        <SwiperSlide>
          {tags.map((tag, idx) => (
            <Tag
              key={`${tag}-${idx}`}
              tag={tag}
              selected={resultTag === tag}
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
  margin: 4px 0 12px 0;
  padding: 0
    ${({ noPadding, theme: { paddings } }) =>
      noPadding ? 0 : paddings.main}rem;
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
