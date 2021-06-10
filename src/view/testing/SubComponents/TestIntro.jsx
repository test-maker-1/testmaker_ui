import React, { memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { styled as mstyled } from "@material-ui/core/styles";
import { SVG, ImageView } from "../../../components/common";
import Enum from "../../../constants/Enum";
import TagSwiper from "../../../components/common/TagSwiper";

const TestIntro = memo((props) => {
  const {
    title,
    maker: { name },
    participantsCnt,
    coverImg,
    tags,
    description,
  } = useSelector((state) => state.testing.testInfo);

  // const handleOnClick = useCallback((e) => {
  //   props.openAlert("report");
  // }, []);

  return (
    <InfoContainer>
      <InfoTitle>
        <Title title={title}>{title || "테스트 제목이 없어요"}</Title>
        {/* TODO: 2차개발사항 */}
        {/* <More>
          <SVG type={Enum.MORE} onClick={handleOnClick} />
        </More> */}
      </InfoTitle>
      <InfoUser>
        <AvatarIcon alt="user" src="/static/images/avatar/1.jpg" />

        <Partition>{name}</Partition>
        <SVG type={Enum.SPLIT} style={{ width: "12px", height: "12px" }} />
        <Partition isBody={true}>참여인원 {participantsCnt}명</Partition>
      </InfoUser>
      <InfoImg>
        <ImageView imageUrl={coverImg} />
      </InfoImg>
      {tags?.length > 0 && (
        <TagContainer>
          <TagSwiper tags={tags} allSelected noPadding />
        </TagContainer>
      )}
      <Inform>
        <p>{description}</p>
      </Inform>
    </InfoContainer>
  );
});

const TagContainer = styled.div`
  position: relative;
  height: 40px;
`;

const InfoContainer = styled.div`
  padding: 12px 2rem 24px; /*20px*/
`;

const InfoTitle = styled.div`
  height: 3.6rem; /*36px*/
  line-height: 3.6rem;
`;

const Title = styled.p`
  display: inline-block;
  float: left;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  font-weight: bold;
  letter-spacing: -1px;
  color: ${({ title, theme: { colors } }) =>
    title ? colors.darker : colors.lightGray};
`;

const InfoAva = styled.div`
  display: inline-block;
`;

const AvatarIcon = mstyled(Avatar)({
  float: "left",
  width: "32px",
  height: "32px",
  marginRight: "8px",
});

const InfoUser = styled.div`
  margin-top: 7px;
  line-height: 32px;
`;

const InfoImg = styled.div`
  margin: 24px 0px;
`;

// const More = styled.p`
//   display: inline;
//   float: right;
// `;

const Partition = styled.p`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem; /*14px*/
  line-height: 2.1rem; /*21px*/
  letter-spacing: -0.3px;
  color: ${({ theme: { colors } }) => colors.darker};
  &: last-child {
    margin-left: 8px;
    color: ${({ theme: { colors } }) => colors.body};
  }
`;

const Inform = styled.div`
  /*max-height: 150px;*/
  /*min-height: 150px;*/
  padding: 15px 0px 0px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: 2.5rem; /*25px*/
  letter-spacing: -0.5px;
  color: #697382;
`;

export default TestIntro;
