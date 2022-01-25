import React, { useCallback } from "react";

import { LOGIN } from "../../../constants/Enum";
import { PageContainer } from "../Login";
import { Title } from "../Email";
import { BtnField } from "../../../components/common";
import usePage from "../../../hooks/usePage";

const PwComplete = (props) => {
  const { replace } = usePage();
  const onClickLogin = useCallback(
    (e) => {
      return replace("/login/email");
    },
    [replace]
  );

  return (
    <PageContainer>
      <Title>
        비밀번호 재설정을 <br /> 완료했어요!
      </Title>
      <BtnField name={LOGIN} onClick={onClickLogin} />
    </PageContainer>
  );
};

export default PwComplete;
