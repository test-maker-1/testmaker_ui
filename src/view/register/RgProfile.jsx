import React, { useState, useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ENUM from "../../constants/Enum";
import { SVG } from "../../components/common";

import { PageContainer } from "../login/Login";
import usePage from "../../hooks/usePage";
import theme from "../../styles/theme";

const { blue, skyBlue } = theme.colors;

const btnSizes = {
  margin: "24px 0",
  flex: 1,
  height: "4.8rem",
  borderRadius: "10px",
  fontSize: `${theme.fontSizes.lg}rem`,
  fontWeight: "bold",
  lineHeight: "28px",
};

const useStyles = makeStyles((theme, color) => ({
  profileBtn: {
    width: "8.8rem",
    height: "8.8rem",
    borderRadius: "50%",
    background: skyBlue,
  },
  checkBtn: {
    margin: "6px 0",
    padding: "1.35rem",
    width: "8.9rem",
    borderRadius: "0 10px 10px 0",
    fontSize: 15,
    fontWeight: "bold",
    background: skyBlue,
    color: blue,
    letterSpacing: " -0.5px",
  },
  leftBtn: {
    margin: btnSizes.margin,
    flex: btnSizes.flex,
    height: btnSizes.height,
    borderRadius: btnSizes.borderRadius,
    fontSize: btnSizes.fontSize,
    fontWeight: btnSizes.fontWeight,
    background: skyBlue,
    color: blue,
    letterSpacing: "-0.5px",
    lineHeight: btnSizes.lineHeight,
    marginRight: "4px",
  },
  rightBtn: {
    margin: btnSizes.margin,
    flex: btnSizes.flex,
    height: btnSizes.height,
    borderRadius: btnSizes.borderRadius,
    fontSize: btnSizes.fontSize,
    fontWeight: btnSizes.fontWeight,
    background: blue,
    color: skyBlue,
    letterSpacing: "-0.5px",
    lineHeight: btnSizes.lineHeight,
    marginLeft: "4px",
  },
}));

const RgProfile = (props) => {
  const classes = useStyles();
  const fileInput = useRef();
  const { replace } = usePage();

  const [list, setList] = useState([]);
  const [imgURL, setImgURL] = useState("");
  const [isHover, setHover] = useState(false);
  const [nickname, setNickname] = useState("");
  // const [error, setError] = useState("");

  const onClick = useCallback((e) => {
    fileInput.current.click();
  }, []);
  const handleOnUpload = (event) => {
    const files = event.target.files;
    const fileArr = Array.prototype.slice.call(files);
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      //console.log("onload", e);
      setList(fileArr);
      setImgURL(e.target.result);
    };
    setHover(false);
    document.getElementById("uploadImage").value = null; //init
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!nickname) return;
      //console.log(nickname);
    },
    [nickname]
  );
  const onSkip = useCallback(
    (e) => {
      return replace("/register/complete");
    },
    [replace]
  );

  const onComplete = useCallback(
    (e) => {
      if (!list || !imgURL || !nickname) {
        // console.log("다쓰기 전까지 넘어갈 수 없다!");
        return;
      }
      return replace("/register/complete");
    },
    [list, imgURL, nickname, replace]
  );
  return (
    <PageContainer>
      <ProfileWrapper>
        {list.length === 0 ? (
          <Button className={classes.profileBtn} onClick={onClick} />
        ) : (
          <Profile isHover={isHover}>
            <img
              src={imgURL}
              alt={"이미지"}
              style={imgStyle}
              onClick={onClick}
            />
          </Profile>
        )}
        <Div>
          <SVG
            type={ENUM.ADDPROFILE}
            style={{ width: "24", height: "24", fill: blue }}
            onClick={onClick}
          />
        </Div>
        <Title>프로필 사진</Title>
      </ProfileWrapper>
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <Input
          type="text"
          placeholder="닉네임을 정해주세요"
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <Button type="submit" className={classes.checkBtn}>
          중복 체크
        </Button>
      </form>
      {/* {error && (
        <InfoText text="이미 등록된 닉네임이 있습니다!" color="alert" />
      )} */}

      <div style={{ display: "flex" }}>
        <Button className={classes.leftBtn} onClick={onSkip}>
          건너 뛰기
        </Button>
        <Button className={classes.rightBtn} onClick={onComplete}>
          가입 완료
        </Button>
      </div>

      <input
        type="file"
        id="uploadImage"
        ref={fileInput}
        accept="img/*"
        onChange={handleOnUpload}
        style={{ width: 0, display: "none" }}
      />
    </PageContainer>
  );
};

export default RgProfile;

const ProfileWrapper = styled.div`
  margin-top: 82px;
`;

const Div = styled.div`
  position: relative;
  left: 33px;
  top: -30px;
`;

const Profile = styled.div`
  width: 8.8rem;
  height: 8.8rem;
  margin: 0px auto;
  img:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const imgStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  margin: "0px auto",
};

const Title = styled.div`
  position: relative;
  margin: -15px 0 18px 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.bodyGray};
`;

const Input = styled.input`
  width: calc(100% - 8.9rem);
  border: none;
  border-radius: 10px 0 0 10px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: 6px 0;
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.darkGray};
  line-height: 22.5px;
  padding: 1.35rem;
  &::placeholder {
    color: #b7bdcb;
  }
  &:focus {
    outline: none;
    ${({ error }) => {
      if (error)
        return css`
          box-shadow: 0 0 0 1px #ff5146;
        `;
      else
        return css`
          box-shadow: 0 0 0 1px #697382;
        `;
    }}
  }
`;
