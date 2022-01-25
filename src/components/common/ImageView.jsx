import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVG from "./SVG";
import Enum from "../../constants/Enum";

const EmptyImg = ({ isNull, border }) => {
  return isNull ? null : (
    <EmptyBox border={border}>
      <SVG type={Enum.PICTURE} />
    </EmptyBox>
  );
};

const ImageView = memo(({ isNull, imageUrl, height, border = true }) => {
  return (
    <ContainerImg height={height} className="flex-box">
      {imageUrl ? (
        <ImgArea src={imageUrl} alt={"ImgArea"} border={border} />
      ) : (
        <EmptyImg isNull={isNull} border={border} />
      )}
    </ContainerImg>
  );
});

ImageView.propTypes = {
  isNull: PropTypes.bool,
  imageUrl: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.bool,
};

const ContainerImg = styled.div`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: 0;
  padding-bottom: ${(props) => props.height || "calc(100% / 1.7)"};
`;

/*374px * 212px : 1.7*/
const EmptyBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border: 1px solid #e5e8ec;
  box-sizing: border-box;
  border-radius: ${({ border }) => (border ? "10px" : "0px")};
  text-align: center;
`;

const ImgArea = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ border }) => (border ? "10px" : "0px")};
  background-repeat: no-repeat; /*background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.*/
  background-size: cover; /*사이즈가 container에 맞지 않아도 꽉 차도록 채운다.*/
  background-position: center; /*background-image가 컨테이너에 가운데로 오도록 한다. */
`;

export default ImageView;
