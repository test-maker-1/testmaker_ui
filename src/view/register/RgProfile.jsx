import React, { useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ENUM from "../../constants/Enum";
import { SVG } from "../../components/common";

import { PageContainer } from "../login/Login";

const useStyles = makeStyles((theme, color) => ({
    profileBtn: {
        width: "88px",
        height: "88px",
        borderRadius: "50%",
        background: "#F1F2F4",
    },
    checkBtn: {
        margin: "6px 0",
        width: "89px",
        borderRadius: "0 10px 10px 0",
        fontSize: 15,
        fontWeight: "bold",
        background: "#DADEE6",
        color: "#8A929E",
        letterSpacing: " -0.5px",
    },
    leftBtn: {
        margin: "24px 0",
        flex: 1,
        height: "54px",
        borderRadius: "10px 0  0 10px",
        fontSize: 18,
        fontWeight: "bold",
        background: "#F1F2F4",
        color: "#8A929E",
        letterSpacing: "-0.5px",
        lineHeight: "27px",
    },
    rightBtn: {
        margin: "24px 0",
        flex: 1,
        height: "54px",
        borderRadius: "0 10px 10px 0",
        fontSize: 18,
        fontWeight: "bold",
        background: "#E5E8EC",
        color: "#8A929E",
        letterSpacing: "-0.5px",
        lineHeight: "27px",
    },
}));

const RgProfile = (props) => {
    const classes = useStyles();
    const fileInput = useRef();
    const history = useHistory();

    const [list, setList] = useState([]);
    const [imgURL, setImgURL] = useState("");
    const [isHover, setHover] = useState(false);
    const [nickname, setNickname] = useState("");

    const onClick = useCallback((e) => {
        fileInput.current.click();
    }, []);
    const handleOnUpload = (event) => {
        const files = event.target.files;
        const fileArr = Array.prototype.slice.call(files);
        const reader = new FileReader();

        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.log("onload", e);
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
            console.log(nickname);
        },
        [nickname]
    );
    const onSkip = useCallback(
        (e) => {
            return history.push("/");
        },
        [history]
    );

    const onComplete = useCallback(
        (e) => {
            if (!list || !imgURL || !nickname) {
                // console.log("다쓰기 전까지 넘어갈 수 없다!");
                return;
            }
            return history.push("/");
        },
        [list, imgURL, nickname]
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
                        style={{ width: "24", height: "24" }}
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
    width: 88px;
    height: 88px;
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
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #8a929e;
`;

const Input = styled.input`
    width: calc(100% - 89px);
    border: none;
    border-radius: 10px 0 0 10px;
    background: #fafafa;
    margin: 6px 0;
    font-size: 15px;
    color: #697382;
    line-height: 22.5px;
    padding: 12px;
    &::placeholder {
        color: #b7bdcb;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 1pt #697382;
    }
`;
