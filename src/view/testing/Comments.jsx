import React from 'react';
import styled from "styled-components";
import Mention from "./SubComponents/Mention";
import {PageContainer} from "../../components/frame/BottomBtn";
import {ComInput} from "./SubComponents/Reply";

const Comments = props => {
  return (
    <PageContainer>
    <TEMP>
      <ul>
        {[1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3].map((item, idx)=>{
          return <li key={idx}><Mention /></li>;
        })}
      </ul>
      {[1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3].map((item, idx)=>{
          return <Mention />
        })}
      <BtnContainer>
        <TEMP2>
          <ComInput />
        </TEMP2>
      </BtnContainer>
    </TEMP>
    </PageContainer>
  )
};

const TEMP = styled.div`
  padding: 0px 1.25em;
`;

const TEMP2 = styled.div`
  margin: 0px 1.25em;
`;

export const BtnContainer = styled.footer`
  position: fixed;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  width: min(${({ theme: { widths } }) => widths.main}px, 100%);
  height: 68px;
  display: flex;
`;


export default Comments;