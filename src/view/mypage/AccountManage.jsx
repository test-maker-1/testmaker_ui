import React, { useState, useRef, useCallback, useEffect } from "react";
import * as loadImage from "blueimp-load-image";
import { getFormData } from "../../utils/asyncMakingUtils";
import styled from "styled-components";
import ENUM from "../../constants/Enum";
import { Loading, SVG } from "../../components/common";
import theme from "../../styles/theme";
import useUser from "../../hooks/useUser";
import AutosizeInput from "react-input-autosize";
import Error from "../Error";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import ManageList from "../../components/MyPage/ManageList";

const { deepGray } = theme.colors;
const { lg } = theme.fontSizes;

const AccountManage = () => {
  const {
    data,
    loggedIn,
    updateUserLoading,
    logInLoading,
    profileUrl,
    putProfile,
    putNickname,
    uploadImg,
    logOut,
  } = useUser();

  const fileInput = useRef();
  const [isHover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onClick = useCallback((e) => {
    fileInput.current.click();
  }, []);

  useEffect(() => {
    profileUrl && putProfile({ profileUrl: profileUrl });
  }, [profileUrl]);

  const onChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  const onSubmitNick = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputValue || data.nickname === inputValue) return;
      putNickname({ nickname: inputValue });
    },
    [inputValue]
  );

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmitNick();
    }
  };

  const onUpload = async (e) => {
    const file = e.target.files[0];
    const fileType = file.type;

    loadImage(
      file,
      (img) => {
        img.toBlob(async (blob) => {
          const rotateFile = new File([blob], file.name, { type: fileType });
          const form = getFormData(rotateFile, "profile");
          uploadImg(form);
        }, fileType);
      },
      {
        meta: true,
        orientation: true,
        canvas: true,
        maxWidth: 500,
      }
    );
  };

  if (!loggedIn) return <Error code={403} />;
  return logInLoading ? (
    <Loading loading={updateUserLoading} />
  ) : (
    <PageContainer>
      <ProfileBox>
        <div>
          <Profile isHover={isHover}>
            {data.profileImg ? (
              <img
                src={data.profileImg}
                alt={"이미지"}
                style={imgStyle}
                onClick={onClick}
              />
            ) : (
              profileUrl && (
                <img
                  src={profileUrl}
                  alt={"이미지"}
                  style={imgStyle}
                  onClick={onClick}
                />
              )
            )}
          </Profile>
          <SvgBox>
            <SVG
              type={ENUM.CONFIRM}
              style={{ width: "24", height: "24" }}
              onClick={onClick}
              onKeyPress={onKeyPress}
            />
          </SvgBox>
        </div>
        <Form onSubmit={onSubmitNick}>
          <AutosizeInput
            name="form-field-name"
            placeholder={data.nickname}
            value={inputValue}
            onChange={onChange}
            inputStyle={inputStyle}
          />
          <Button type="submit">
            <SVG
              type={ENUM.CONFIRM}
              style={{ width: "24", height: "24" }}
              onClick={() => {
                return;
              }}
            />
          </Button>
        </Form>
      </ProfileBox>

      <ManageList />

      <input
        type="file"
        accept=".jpg, .jpeg, .png;capture=camera"
        ref={fileInput}
        onChange={onUpload}
        style={{ width: 0, display: "none" }}
      />
      <BottomBtn
        btnArr={[{ name: "로그아웃", type: ENUM.LOGOUT, customClick: logOut }]}
      />
    </PageContainer>
  );
};

export default AccountManage;

const ProfileBox = styled.div`
  position: relative;
  margin-top: 2.3rem;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.ghostGray};
  padding-bottom: ${({ theme: { fontSizes } }) => fontSizes.xl}rem;
`;

const Profile = styled.div`
  position: relative;
  margin: 0px auto;
  width: 7.6rem;
  height: 7.6rem;
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

const inputStyle = {
  border: "none",
  outline: "none",
  fontWeight: "bold",
  fontSize: `${lg}rem`,
  lineHeight: "26px",
  textAlign: "center",
  color: deepGray,
};

const SvgBox = styled.div`
  position: absolute;
  left: 53%;
  top: 39%;
`;

const Form = styled.form`
  padding-top: 20px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  padding: 0 2rem 0 2rem;
`;

const Item = styled.li`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.deepGray};
`;
