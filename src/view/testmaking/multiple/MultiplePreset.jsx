import React, { useMemo } from "react";
import styled from "styled-components";

import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { TitleBox, Select, InfoText } from "../../../components/common";

import useCommon from "../../../hooks/making/useCommon";
import ENUM from "../../../constants/Enum";

const [FRITEND, FAMILY] = ["friends", "family", "preset"];

const MultiplePreset = () => {
  const { value, updateTypeDataByInput } = useTestInfo();

  return (
    <Container>
      <TitleBox title="누구에게 공유하실건가요?">
        {/* select target */}
        <Select
          name="target"
          defaultValue={value}
          onChange={updateTypeDataByInput}
        >
          <option value={FRITEND}>친구에게 보낼거예요</option>
          <option value={FAMILY}>가족한테 보낼거예요</option>
        </Select>
        <InfoText
          text="공유 대상에 따라 다른 질문을 제공해드려요"
          color="blue"
        />
      </TitleBox>
      <BottomBtn btnArr={[{ name: "정했어요", type: ENUM.MOVENEXT }]} />
    </Container>
  );
};

const useTestInfo = () => {
  const { data, updateTypeDataByInput } = useCommon();

  const value = useMemo(
    () => (data.hasOwnProperty("target") ? data.target : FRITEND),
    [data]
  );

  return { updateTypeDataByInput, value };
};

const Container = styled(PageContainer)`
  .select {
    margin-bottom: 8px;
  }

  .info-text {
    margin-bottom: 0;
  }
`;

export default MultiplePreset;
