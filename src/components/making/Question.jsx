import React, { memo } from "react";
import styled from "styled-components";

import { InfoText } from "../common";
import { SubTitle, BtnIcon, Option, BtnAddOption } from ".";
import { InputTitle, Section } from "../../styles";

import ENUM, { md } from "../../constants/Enum";

const Question = ({ subTitle, data }) => {
  const {
    question = "",
    img = null,
    answer = null,
    point = 1,
    options = [],
  } = data;

  return (
    <li>
      <div>
        <SubTitle title={subTitle}>
          <BtnIcon type={ENUM.CASINO} />
        </SubTitle>
        <Wrapper>
          {/* question */}
          <InputTitle size={md} defaultValue={question} name="question" />
          {/* options */}
          <ul>
            {options.map((option) => (
              <Option key={option} value={option} answer={answer} />
            ))}
          </ul>
          <BtnAddOption />
          {/* point */}
          <InfoText text="정답 항목을 체크해주세요" color="blue" />
        </Wrapper>
      </div>
    </li>
  );
};

const Wrapper = styled(Section)`
  margin-bottom: 24px;
`;

export default memo(Question);
