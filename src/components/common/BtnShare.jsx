import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { styled as mstyled } from "@material-ui/core/styles";
import ENUM from "../../constants/Enum";
import kakao from "../../resources/images/kakao.png";
import insta from "../../resources/images/face_temp.png";
import twitter from "../../resources/images/twitter_temp.png";
import url from "../../resources/images/link.png";

import { copyLinkToClipBoard, shareKakao } from "../../utils/handler";

const _url = "url";
const { KAKAO, INSTA, TWITTER } = ENUM;
const platforms = [
  {
    name: KAKAO,
    img: kakao,
  },
  // {
  //   name: INSTA,
  //   img: insta,
  // },
  {
    name: INSTA,
    img: insta,
  },
  { name: TWITTER, img: twitter },
  {
    name: _url,
    img: url,
  },
];

const BtnShare = ({ shareInfo, onClick }) => {
  const { link, title, description, imageUrl } = shareInfo;

  const handleOnClick = (id, event) => {
    if (id === _url) copyLinkToClipBoard();
    if (id === KAKAO) shareKakao(link, title, description, imageUrl);

    if (onClick) onClick(event, id);
  };

  return (
    <Container>
      {platforms.map(({ name, img }, idx) => {
        return (
          <StyledBtn
            key={idx}
            id={name}
            disabled={![_url, KAKAO].includes(name)}
            onClick={handleOnClick.bind(this, name)}
          >
            <img src={img} alt={name} />
          </StyledBtn>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
`;

const StyledBtn = mstyled(Button)({
  padding: 0,
  margin: "1px 4px",
});

export default BtnShare;
