import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoginBtn from "../../../components/common/LoginBtn";
import { LOGIN } from "../../../constants/Enum";
import { PageContainer } from "../Login";
import { Title } from "../Email";

const PwComplete = (props) => {
    const history = useHistory();
    const handleOnClick = useCallback((btnName, e) => {
        if (btnName === LOGIN) return history.push("/login/email");
    }, []);

    return (
        <PageContainer>
            <Title>
                비밀번호 재설정을 <br /> 완료했어요!
            </Title>
            <LoginBtn btns={[LOGIN]} handleOnClick={handleOnClick} />
        </PageContainer>
    );
};

export default PwComplete;
