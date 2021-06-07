import React, { memo, useState } from "react";
import styled from "styled-components";
import star from "../../../resources/images/star.png";
import usePage from "../../../hooks/usePage";
import { testing, comments } from "../../../constants/urlInfo";
import Mention, { EmptyMention } from "./Mention";

export const ComInput = ({ hintText, onFocus, onSubmit }) => {
  const [words, setWords] = useState("");
  const handleOnFocus = (event) => {
    if (onFocus) onFocus(event);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (onFocus) onFocus(event);
    if (onSubmit) onSubmit(words);
    if (words) setWords("");
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleOnSubmit}>
      <InputContainer>
        <WrapInput>
          <InputCom
            value={words}
            placeholder={hintText || "입력해주세요"}
            onFocus={handleOnFocus}
            onChange={(event) => setWords(event.target.value)}
          />
        </WrapInput>
        <WrapBtn>
          <SubmitBtn src={star} type={"image"} />
        </WrapBtn>
      </InputContainer>
    </form>
  );
};

const Reply = memo(({ repliesCnt, recent3replies, testid }) => {
  const { goPage } = usePage();
  const onMoveComments = () =>
    goPage(`/${testing}/${comments}`, `?testid=${testid}`);

  return (
    <>
      <CommentTitle>
        <Title>댓글</Title>
        <Entire onClick={onMoveComments}>{repliesCnt}개 전체보기</Entire>
      </CommentTitle>
      <InputItem>
        <ComInput
          hintText={"공개 댓글로 의견을 남겨주세요"}
          onFocus={onMoveComments}
        />
      </InputItem>
      {recent3replies.length > 0 ? (
        recent3replies.map((item, idx) => {
          return (
            <Mention
              key={item.uid + idx}
              idx={idx}
              writer={item.writer}
              content={item.content}
              timestamp={item.writtenAt}
            />
          );
        })
      ) : (
        <EmptyMention />
      )}
    </>
  );
});

const InputItem = styled.div`
  margin: 16px 0px 24px;
`;

const WrapInput = styled.div`
  display: inline-block;
  float: left;
  width: 85%;
`;
const WrapBtn = styled.div`
  display: inline-block;
  text-align: center;
  width: 15%;
`;

/* 374 * 48 */
const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #fafafa;
  border-radius: 8px;
`;

const InputCom = styled.input`
  background: transparent;
  width: 100%;
  border: 0px;
  padding: 0px 5px 0px 12px;
  line-height: 3.6rem;
  outline: none;
  ::placeholder {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem; /*15px*/
    line-height: 2.4rem;
    letter-spacing: -0.5px;
    color: #b7bdcb;
  }
`;

const CommentTitle = styled.div`
  height: 3.6rem; /*36px;*/
  line-height: 3.6rem; /*36px;*/
`;

const Title = styled.h1`
  display: inline-block;
  float: left;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  font-weight: bold;
  letter-spacing: -1px;
  color: ${({ theme: { colors } }) => colors.darker};
`;

const Entire = styled.p`
  display: inline-block;
  float: right;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  text-align: right;
  letter-spacing: -0.5px;
  color: #8a929e;
  cursor: pointer;
`;

const SubmitBtn = styled.input`
  margin-top: 13px;
`;

export default Reply;
