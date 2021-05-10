import React, { useCallback } from "react";
import LoginBtn from "../../components/common/LoginBtn";
import { Title } from "../login/Email";
import { PageContainer } from "../login/Login";
import { HOME, MAKINGTEST } from "../../constants/Enum";
import usePage from "../../hooks/usePage";

const RgComplete = (props) => {
    const { replace } = usePage();
    const handleOnClick = useCallback(
        (btnName, e) => {
            if (btnName === HOME) return replace("/");
            if (btnName === MAKINGTEST) return replace("/");
        },
        [replace]
    );
    return (
        <PageContainer>
            <Title>회원가입을 축하해요!</Title>
            <LoginBtn btns={[HOME, MAKINGTEST]} handleOnClick={handleOnClick} />
        </PageContainer>
    );
};

export default RgComplete;
