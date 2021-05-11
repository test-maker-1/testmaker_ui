import React from "react";
import BottomBtn, { PageContainer } from "../../../components/frame/BottomBtn";
import { TitleBox, Select } from "../../../components/common";
import useMaking from "../../../hooks/useMaking";
import ENUM from "../../../constants/Enum";

const [FRITEND, FAMILY] = ["friend", "family"];

const MultiplePreset = () => {
  const {
    data: { data },
    updateTypeDataByInput,
  } = useMaking();

  const value =
    data.hasOwnProperty("target") && data.target ? data.target : FRITEND;

  return (
    <PageContainer>
      <TitleBox title="누구에게 공유하실건가요?">
        {/* select target */}
        <Select name="target" value={value} onChange={updateTypeDataByInput}>
          <option value={FRITEND}>친구에게 보낼거예요</option>
          <option value={FAMILY}>가족한테 보낼거예요</option>
        </Select>
      </TitleBox>
      <BottomBtn btnArr={[{ name: "정했어요", type: ENUM.MOVENEXT }]} />
    </PageContainer>
  );
};

export default MultiplePreset;
