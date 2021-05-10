import React, { useState, useCallback } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginBtn from "../../components/common/LoginBtn";
import { NEXT } from "../../constants/Enum";
import { PageContainer, Summary } from "../login/Login";
import { Title, Input, Error } from "../login/Email";
import { EmailForm, EmailInput } from "../login/findPw/PwEmailAuth";
import usePage from "../../hooks/usePage";

const useStyles = makeStyles((theme, color) => ({
    useBtn: {
        margin: "6px 0",
        width: "calc(100% - 116px)",
        borderRadius: "0 10px 10px 0",
        fontSize: 16,
        fontWeight: "bold",
        background: "#DADEE6",
        color: "#8A929E",
        letterSpacing: " -0.5px",
    },
}));

const RgEmailAuth = (props) => {
    const classes = useStyles();
    const { replace } = usePage();
    const [email, setEmail] = useState("");
    const [authNumber, setAuthNumber] = useState("");

    const getAuthNumber = useCallback(
        (e) => {
            e.preventDefault();
            // console.log("인증번호 받기");
        },
        [email]
    );

    const onComplete = useCallback(
        (e) => {
            e.preventDefault();
            return replace("/register/pw-setting");
        },
        [email, authNumber, replace]
    );

    return (
        <PageContainer>
            <Title>환영합니다!</Title>
            <EmailForm onSubmit={getAuthNumber}>
                <EmailInput
                    type="email"
                    placeholder="이메일을 적어주세요"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit" className={classes.useBtn}>
                    인증번호 받기
                </Button>
            </EmailForm>

            <form onSubmit={onComplete}>
                <Input
                    type="text"
                    placeholder="인증번호를 적어주세요"
                    onChange={(e) => setAuthNumber(e.target.value)}
                    required
                />
                <LoginBtn btns={[NEXT]} handleOnClick={null} />
            </form>
        </PageContainer>
    );
};

export default RgEmailAuth;
