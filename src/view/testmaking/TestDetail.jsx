import React, { useEffect } from "react";
import styled from "styled-components";

import { TitleBox, Tag, UploadImg, NoticeAlert } from "../../components/common";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { Input, InputTitle, TextArea } from "../../styles";

import usePage from "../../hooks/usePage";
import useMaking from "../../hooks/useMaking";
import ENUM, { lg } from "../../constants/Enum";

const { PREVIEW, ENTER } = ENUM;
const currentStep = "detail";

const TestDetail = () => {
  const { data, updateCommonByInput, onEnterPress } = useDetail();
  const { type, title, description, optionalURL } = data;
  const { goPage } = usePage();

  return (
    <PageContainer>
      {/* alert */}
      <NoticeAlert
        icon={ENUM.WARNING}
        btns={[
          { name: "다시보기" },
          {
            name: "테스트 만들기",
            callback: () => goPage(`/test/${type}/release`),
          },
        ]}
      />
      <TitleBox>
        {/* title */}
        <InputTitle
          size={lg}
          name="title"
          placeholder="테스트 제목을 적어주세요"
          defaultValue={title}
          onBlur={updateCommonByInput}
        />
        {/* coverImg */}
        <UploadImg />
        {/* description */}
        <TextArea
          name="description"
          defaultValue={description}
          placeholder="테스트를 설명해주세요"
          onBlur={updateCommonByInput}
        />
      </TitleBox>

      <TitleBox>
        {/* tags */}
        <TagInput
          name="tag"
          defaultValue=""
          placeholder="테스트에 태그를 달아보세요"
          onKeyPress={onEnterPress}
        />
        <Tags>
          {data.tags.map((tag) => (
            <Tag key={tag} tag={tag} deletable />
          ))}
        </Tags>
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
          {
            name: "테스트 만들기",
            customClick: () =>
              NoticeAlert.open("만들고 나면 수정할 수 없어요!"),
          },
        ]}
      />
    </PageContainer>
  );
};

const useDetail = () => {
  const { data, updateStep, updateCommonByInput, addNewTag } = useMaking();

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

  useEffect(() => {
    if (data.step !== currentStep) updateStep(currentStep);
  }, [data.step, updateStep]);

  return { data, updateCommonByInput, onEnterPress };
};

const TagInput = styled(Input)`
  margin-bottom: 0;
`;

const Tags = styled.div`
  .tag {
    margin-top: 16px;
  }
`;

export default TestDetail;
