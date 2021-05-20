import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Mention, { EmptyMention } from "./SubComponents/Mention";
import { PageContainer } from "../../components/frame/BottomBtn";
import { ComInput } from "./SubComponents/Reply";

const Comments = (props) => {
  const replies = useSelector((state) => state.reply);

  return (
    <PageContainer>
      <TEMP>
        {replies?.length > 0 ? (
          replies.map((item, idx) => {
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
        <BtnContainer>
          <TEMP2>
            <ComInput />
          </TEMP2>
        </BtnContainer>
      </TEMP>
    </PageContainer>
  );
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
