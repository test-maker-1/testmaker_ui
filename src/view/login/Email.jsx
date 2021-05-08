import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import LoginBtn from "../../components/common/LoginBtn";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { REGISTER } from "../../constants/Enum";
import { PageContainer, Summary } from "./Login";

const useStyles = makeStyles((theme, color) => ({
    useBtn: {
        marginTop: "15px",
        marginBottom: "6px",
        width: "100%",
        height: "54px",
        padding: "12px",
        borderRadius: "8px",
        fontSize: 18,
        fontWeight: "bold",
        background: "#DADEE6",
        color: "#8A929E",
        letterSpacing: "-0.5px",
        lineHeight: "27px",
    },
}));

const Email = ({}) => {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            // 이메일 검증
            const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (email.match(regExp) == null) {
                setErrors({
                    ...errors,
                    email: "올바르지 않는 이메일이에요! 다시 확인해주세요",
                });
                return;
            }
            console.log("맞음");
            // return history.push("/");
        },
        [email, password, errors]
    );

    const handleOnClick = useCallback(
        (btnName, e) => {
            if (btnName == REGISTER)
                return history.push("/register/email-auth");
            return;
        },
        [history]
    );

    return (
        <PageContainer>
            <Title>로그인</Title>
            <Form onSubmit={onSubmit}>
                <Input
                    type="search"
                    placeholder="이메일을 적어주세요"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <Error>{errors.email}</Error>}
                <Input
                    type="search"
                    placeholder="비밀번호는 6자 이상이에요"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {/* {errors.password && <Error>{errors.password}</Error>} */}
                <Button type="submit" className={classes.useBtn}>
                    로그인
                </Button>
            </Form>
            <LoginBtn btns={[REGISTER]} handleOnClick={handleOnClick} />
            <SummaryLink>
                <Link to="/login/find-pw/email-auth">비밀번호 찾기</Link>
            </SummaryLink>
        </PageContainer>
    );
};

export default Email;

export const Title = styled.div`
    margin: 70px 0 18px 0;
    text-align: start;
    font-size: 30px;
    font-weight: 700;
    color: #515966;
`;

const Form = styled.form`
    input::-ms-clear,
    input::-ms-reveal {
        width: 0;
        height: 0;
    }

    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
        position: relative;
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 17.5L17.5 6.5' stroke='%23CFD3DB' stroke-width='2.5'/%3E%3Cpath d='M17.5 17.5L6.5 6.5' stroke='%23CFD3DB' stroke-width='2.5'/%3E%3C/svg%3E");
    }
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 10px;
    background: #fafafa;
    margin: 6px 0;
    font-size: 15px;
    color: #697382;
    line-height: 22px;
    padding: 12px;
    &::placeholder {
        color: #b7bdcb;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 1pt #697382;
    }
`;

export const Error = styled.div`
    font-size: 14px;
    text-align: start;
    margin: 2px 0 6px 0;
    color: red;
`;

const SummaryLink = styled(Summary)`
    a {
        color: #b7bdcb;
        text-decoration-line: none;
    }
`;
