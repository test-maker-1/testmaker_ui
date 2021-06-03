import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import ENUM from "../../constants/Enum";
import kakao from "../../resources/images/kakao.png";
import insta from "../../resources/images/insta.png";
import twitter from "../../resources/images/twitter.png";
import url from "../../resources/images/url.png";

import { copyLinkToClipBoard, shareKakao } from "../../utils/handler";

const { KAKAO, INSTA, TWITTER } = ENUM;
const platforms = [
  {
    name: KAKAO,
    img: kakao,
  },
  {
    name: INSTA,
    img: insta,
  },
  { name: TWITTER, img: twitter },
  {
    name: "url",
    img: url,
  },
];

const BtnShare = ({ shareInfo, onClick }) => {
  const { link, title, description, imageUrl } = shareInfo;

  const handleOnClick = (id, event) => {
    if (id === "url") copyLinkToClipBoard();
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

const StyledBtn = styled(Button)`
  padding: 0;
  margin-right: 3px;
  border-radius: 25;
`;

export default BtnShare;
