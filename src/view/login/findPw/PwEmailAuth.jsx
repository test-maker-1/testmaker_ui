import React, { useState, useCallback } from "react";
import styled from "styled-components";
import LoginBtn from "../../../components/common/LoginBtn";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NEXT } from "../../../constants/Enum";
import { PageContainer } from "../Login";
import { Title, Input, Error } from "../Email";
import usePage from "../../../hooks/usePage";

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

const PwEmailAuth = (props) => {
    const classes = useStyles();
    const { replace } = usePage();
    const [email, setEmail] = useState("");
    const [authNumber, setAuthNumber] = useState("");

    const getAuthNumber = useCallback(
        (e) => {
            e.preventDefault();
            // email 백엔드에 넘겨줘
        },
        [email]
    );

    const onComplete = useCallback(
        (e) => {
            e.preventDefault();
            // email,authNumber
            return replace("/login/find-pw/pw-setting");
        },
        [email, authNumber, replace]
    );

    return (
        <PageContainer>
            <Title>인증번호를 보내드려요</Title>
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

export default PwEmailAuth;

export const EmailForm = styled.form`
    display: flex;
`;

export const EmailInput = styled.input`
    width: 100%;
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

// const Input = styled.input`
//     width: -webkit-fill-available;
//     border: none;
//     border-radius: 10px;
//     background: #fafafa;
//     margin: 6px 0;
//     font-size: 15px;
//     color: #697382;
//     line-height: 22.5px;
//     padding: 12px;
//     &::placeholder {
//         color: #b7bdcb;
//     }
//     &:focus {
//         outline: none;
//         box-shadow: 0 0 0 1pt #697382;
//     }
// `;
