import React, { useState } from "react";
import styled from "styled-components";

import { TitleBox, Tag, NoticeAlert } from "../../components/common";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import { UploadImg } from "../../components/making";
import { Input, InputTitle, TextArea } from "../../styles";

import useCommon from "../../hooks/making/useCommon";
import usePage from "../../hooks/usePage";
import { checkMakingData } from "../../utils/asyncMakingUtils";
import { saveTest, SUCCESS } from "../../utils/asyncUtils";

import ENUM, { lg } from "../../constants/Enum";
import msg from "../../constants/msg";

const { PREVIEW, ENTER, WARNING } = ENUM;

const TestDetail = () => {
  const {
    data,
    btns,
    updateCommonByInput,
    onEnterPress,
    uploadImg,
    handleSubmit,
  } = useDetail();
  const { title, description, coverImg, optionalURL } = data;

  return (
    <PageContainer>
      {/* alert */}
      <NoticeAlert icon={WARNING} btns={btns} />
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
        <UploadImg
          img={coverImg}
          uploadImg={uploadImg}
          openAlert={NoticeAlert.open}
        />
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
            customClick: handleSubmit,
          },
        ]}
      />
    </PageContainer>
  );
};

const useDetail = () => {
  const { data, updateCommon, updateCommonByInput, addNewTag } = useCommon();
  const [btns, setBtns] = useState();
  const { goPage } = usePage();

  const { testId, onFeed, title, description, coverImg } = data;

  const onEnterPress = (e) => {
    const { value } = e.target;

    if (e.key === ENTER) {
      addNewTag(value);
      e.target.value = "";
    }
  };

  const uploadImg = (img) => updateCommon("coverImg", img);

  const handleSubmit = () => {
    const { releasable, msg = "" } = checkMakingData(data);

    if (releasable) {
      setBtns([
        { name: "다시보기" },
        {
          name: "테스트 만들기",
          callback: saveFinalTest,
        },
      ]);
    } else setBtns([{ name: "다시보기" }]);

    NoticeAlert.open(msg);
  };

  const saveFinalTest = async () => {
    const status = await saveTest(data);

    if (status === SUCCESS) {
      sessionStorage.setItem(
        "savedTest",
        JSON.stringify({
          testId,
          onFeed,
          title,
          description,
          coverImg,
          link: `testing/welcome?testid=${data.testId}`,
        })
      );
      goPage("/test/release");
    } else NoticeAlert.open(msg.errorPage[500]);
  };

  return {
    data,
    btns,
    updateCommonByInput,
    onEnterPress,
    uploadImg,
    handleSubmit,
  };
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
