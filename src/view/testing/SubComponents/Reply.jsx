import React, { memo } from 'react';
import styled from "styled-components";
import Mention from "./Mention";
import usePage from "../../../hooks/usePage";
import {testing, comments} from "../../../constants/urlInfo";

export const ComInput = ({hintText}) => {
  return (
    <form style={{margin: "16px 0px 24px"}}>
      <InputContainer>
      <TEMP><InputCom placeholder={ hintText || "입력해주세요"}/></TEMP>
      <TEMP2><input type={"submit"} /></TEMP2>
      </InputContainer>
    </form>
  )
};

const Reply = memo(() => {
  const { goPage } = usePage();

  return (
    <>
      <CommentTitle>
          <Title>댓글</Title>
          <Entire onClick={()=> goPage(`/${testing}/${comments}`)}>10개 전체보기</Entire>
        </CommentTitle>
        <ComInput hintText={"공개 댓글로 의견을 남겨주세요"}/>
        {[1, 2, 3].map((item, idx)=>{
          return <Mention key={`c_${idx}`} idx={idx}/>;
        })}
    </>
  );
});


const TEMP = styled.div`
  display: inline-block;
  width: 85%;
`;
const TEMP2 = styled.div`
  display: inline-block;
  text-align: center;
  width: 15%;
`;

/* 374 * 48 */
const InputContainer = styled.div`
  position: relative;
  width: 374px;
  height: 48px;
  line-height: 48px;
  background: #FAFAFA;
  border-radius: 8px;
`;

const InputCom = styled.input`
  background: transparent;
  width: 100%;
  border: 0px;
  padding: 0px 5px 0px 12px;
  line-height: 36px;
  outline: none;
  ::placeholder {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #B7BDCB;
  }
`;

const CommentTitle = styled.div`
  height: 2.25em; /*36px;*/
  line-height: 2.25em; /*36px;*/
`;

const Title = styled.h1`
  display: inline-block;
  float: left;
  font-size: 1.5em; /*24px*/
  font-weight: bold;
  letter-spacing: -1px;
  color: #697382;
`;

const Entire = styled.p`
  display: inline-block;
  float: right;
  font-size: 1em; /*16px*/
  text-align: right;
  letter-spacing: -0.5px;
  color: #8A929E;
  cursor: pointer;
`;

export default Reply;