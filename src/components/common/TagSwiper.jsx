import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Tag } from ".";

const TagSwiper = ({ tags, selectedTag, setSelected, noPadding }) => {
  return (
    <Container noPadding={noPadding}>
      {selectedTag && setSelected ? (
        <Swiper slidesPerView={"auto"} spaceBetween={0} className="mySwiper">
          {tags.map((tag) => {
            if (selectedTag === tag) {
              return (
                <SwiperSlide>
                  <Tag
                    key={`tag${tag}`}
                    tag={tag}
                    selected={true}
                    setSelected={setSelected}
                  />
                </SwiperSlide>
              );
            } else
              return (
                <SwiperSlide>
                  <Tag key={`tag${tag}`} tag={tag} setSelected={setSelected} />
                </SwiperSlide>
              );
          })}
        </Swiper>
      ) : (
        <Swiper slidesPerView={"auto"} spaceBetween={0} className="mySwiper">
          {tags.map((tag) => (
            <SwiperSlide>
              <Tag key={`tag${tag}`} tag={tag} selected={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default TagSwiper;

const Container = styled.div`
  padding: 0
    ${({ noPadding, theme: { paddings } }) =>
      noPadding ? 0 : paddings.main}rem;
  margin: 4px 0 12px 0;
  width: 100%;
  position: absolute;
  .swiper-container {
    width: ${(props) => props.width || "100%"};
  }
  .swiper-slide {
    width: auto !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
  }
`;
