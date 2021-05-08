import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoginBtn from "../../components/common/LoginBtn";
import styled from "styled-components";
import { EMAIL, NAVER, GOOGLE } from "../../constants/Enum";

import { PageContainer, Logo, Name, Summary } from "./Login";

const Other = ({}) => {
    const history = useHistory();
    const handleOnClick = useCallback(
        (btnName, e) => {
            switch (btnName) {
                case EMAIL:
                    return history.push("/login/email");
                case NAVER:
                    return history.push("/login/naver");
                case GOOGLE:
                    return history.push("/login/google");
            }
        },
        [history]
    );

    return (
        <PageContainer>
            <Logo />
            <Name>TEST MAKER</Name>
            <LoginBtn btns={[EMAIL]} handleOnClick={handleOnClick} />
            <Or>or</Or>
            <LoginBtn btns={[NAVER, GOOGLE]} handleOnClick={handleOnClick} />
            <Summary>
                테스트메이커 계정이 없으신가요? <b>회원가입</b>
            </Summary>
        </PageContainer>
    );
};

export default Other;

const Or = styled.div`
    margin: 2px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.5px;
    color: #697382;
`;
