import React from 'react';
import styled from "styled-components";
import Mention from "./SubComponents/Mention";

const Comments = props => {
  return (
    <TEMP>
      <ul>
        {[1, 2, 3].map((item)=>{
          return <li><Mention /></li>;
        })}
      </ul>
    </TEMP>
  )
};

const TEMP = styled.div`
  padding: 0px 1em;
`;


export default Comments;