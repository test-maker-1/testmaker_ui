import React from "react";

import { TitleBox, Tag } from "../../components/common/index";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { Input, InputTitle, TextArea } from "../../styles/index";

import useMaking from "../../hooks/useMaking";
import ENUM, { lg } from "../../constants/Enum";

const { PREVIEW, MOVENEXT, ENTER } = ENUM;

const TestDetail = () => {
  const { data, updateCommonByInput, addNewTag } = useMaking();
  const { testName, testDesc, optionalURL } = data;

  const onEnterPress = (e) => {
    const {
      key,
      target: { value: newTag },
    } = e;

    if (key === ENTER) {
      addNewTag(newTag);
      e.target.value = "";
    }
  };

  return (
    <PageContainer>
      <TitleBox>
        {/* testName */}
        <InputTitle
          size={lg}
          name="testName"
          placeholder="테스트 제목을 적어주세요"
          defaultValue={testName}
          onBlur={updateCommonByInput}
        />
        {/* testDesc */}
        <TextArea
          name="testDesc"
          defaultValue={testDesc}
          placeholder="테스트를 설명해주세요"
          onBlur={updateCommonByInput}
        />
      </TitleBox>

      <TitleBox>
        {/* tags */}
        <Input
          name="tag"
          defaultValue=""
          placeholder="테스트에 태그를 달아보세요"
          onKeyPress={onEnterPress}
        />
        {data.tags.map((tag) => (
          <Tag key={tag} tag={tag} deletable />
        ))}
      </TitleBox>

      <TitleBox title="나를 더 홍보할래요!" noline>
        {/* optionalURL */}
        <Input
          type="url"
          name="optionalURL"
          placeholder="url 주소를 적어주세요"
          defaultValue={optionalURL}
          onBlur={updateCommonByInput}
        />
      </TitleBox>

      <BottomBtn
        btnArr={[
          { name: "미리보기", type: PREVIEW },
          { name: "테스트 만들기", type: MOVENEXT },
        ]}
      />
    </PageContainer>
  );
};

export default TestDetail;
