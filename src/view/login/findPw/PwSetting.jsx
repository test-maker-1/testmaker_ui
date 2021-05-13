import React, { useState, useCallback } from "react";
import LoginBtn from "../../../components/common/LoginBtn";
import { NEXT, PWERROR } from "../../../constants/Enum";
import { PageContainer } from "../Login";
import { Title, Input, Error } from "../Email";
import usePage from "../../../hooks/usePage";

const PwSetting = (props) => {
    const { replace } = usePage();
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [error, setError] = useState(false);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (password !== passwordCheck) {
                setError(true);
                return;
            }
            return replace("/login/find-pw/complete");
        },
        [password, passwordCheck, setError, replace]
    );

    return (
        <PageContainer>
            <Title>비밀번호 재설정</Title>
            <form onSubmit={onSubmit}>
                <Input
                    type="password"
                    placeholder="비밀번호는 6자 이상 적어주세요"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Input
                    type="password"
                    placeholder="비밀번호를 다시 적어주세요"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    required
                />
                {error && <Error>{PWERROR}</Error>}
                <LoginBtn btns={[NEXT]} handleOnClick={null} />
            </form>
        </PageContainer>
    );
};

export default PwSetting;
