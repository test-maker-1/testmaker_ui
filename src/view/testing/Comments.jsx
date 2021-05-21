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
      <CommentBox>
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
          <FootArea>
            <ComInput />
          </FootArea>
        </BtnContainer>
      </CommentBox>
    </PageContainer>
  );
};

const CommentBox = styled.div`
  padding: 0px 1.25em;
`;

const FootArea = styled.div`
  width: 100%;
  margin: 0px 1.25em;
`;

export const BtnContainer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 0px;
  width: min(${({ theme: { widths } }) => widths.main}px, 100%);
  height: ${({ theme: { heights } }) => heights.bottomReply}px;
  transform: translateX(-50%);
  background: ${({ theme: { colors } }) => colors.snow};
`;

export default Comments;
