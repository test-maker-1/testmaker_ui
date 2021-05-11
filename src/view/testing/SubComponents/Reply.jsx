import React, { memo } from 'react';
import styled from "styled-components";

export const ComInput = () => {
  return (
    <form style={{margin: "16px 0px 24px"}}>
      <InputContainer>
      <TEMP><InputCom placeholder={"공개 댓글로 의견을 남겨주세요."}/></TEMP>
      <TEMP2><input type={"submit"} /></TEMP2>
      </InputContainer>
    </form>
  )
};

const Reply = memo(() => {
  return (
    <div>
      
    </div>
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

export default Reply;