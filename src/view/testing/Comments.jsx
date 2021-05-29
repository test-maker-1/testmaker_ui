import React, { useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Mention, { EmptyMention } from "./SubComponents/Mention";
import { PageContainer } from "../../components/frame/BottomBtn";
import { ComInput } from "./SubComponents/Reply";
import { addReplyInfo } from "../../redux/reducer/replyReducer";
import InfinScroll from "../../components/common/InfinScorll";

const Comments = (props) => {
  const replies = useSelector((state) => state.reply.replies);
  const [isStop, setStop] = useState(false);
  const dispatch = useDispatch();
  const bool = replies.length < 30;

  const fetchMoreData = useCallback(() => {
    setTimeout(() => {
      console.log(bool, replies);
      if (bool) dispatch(addReplyInfo(replies));
      else setStop(true);
    }, 1500);
  }, [replies]);

  const handleScroll = undefined;
  // (a, b, c) => {
  //   console.log("handleScroll", a, b, c, ref);
  // };

  return (
    <PageContainer>
      <CommentBox>
        {replies?.length > 0 ? (
          <InfinScroll
            isStop={isStop}
            datas={replies}
            getMoreDatas={fetchMoreData}
            onScroll={handleScroll}
          >
            {replies.map((item, idx) => {
              return (
                <Mention
                  key={item.uid + idx}
                  idx={idx}
                  writer={item.writer}
                  content={item.content}
                  timestamp={item.writtenAt}
                />
              );
            })}
          </InfinScroll>
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

const CommentBox = styled.ul`
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
