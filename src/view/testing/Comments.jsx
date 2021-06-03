import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { NoticeAlert } from "../../components/common";
import { PageContainer } from "../../components/frame/BottomBtn";
import InfinScroll from "../../components/common/InfinScroll";
import Mention, { EmptyMention } from "./SubComponents/Mention";
import { ComInput } from "./SubComponents/Reply";
import {
  submitOneComment,
  reportComment,
  moreReplyInfo,
} from "../../redux/reducer/replyReducer";

let comment_id = null;

const def_alert = {
  icon: null,
  msg: "",
  btn: [],
};

//Alert 창
const returnALInfo = (type, callback) => {
  let result = {};

  if (type === "report") {
    result = {
      btn: [{ name: "돌아가기" }, { name: "신고하기", callback }],
    };
  } else if (type === "share") {
    result = {
      msg: "공유할건가요?",
      btn: ["아니요", "예"],
    };
  }

  return result;
};

const Comments = (props) => {
  const { replies, isStop } = useSelector((state) => state.reply);
  const dispatch = useDispatch();
  const [alertInfo, setALInfo] = useState(def_alert);

  const handleOnAlertClick = useCallback(
    (event) => {
      //댓글 신고
      dispatch(reportComment(comment_id));
    },
    [dispatch]
  );

  const openAlert = (type, uid) => {
    comment_id = uid;

    const alert_info = Object.assign(
      {},
      def_alert,
      returnALInfo(type, handleOnAlertClick)
    );
    if (type === "report") {
      setALInfo(alert_info);
      NoticeAlert.open("이 댓글을 신고할까요?");
    }
  };

  const handleOnSubmit = (value) => {
    //댓글 작성
    dispatch(submitOneComment(value));

    const current_scroll = document.documentElement.scrollTop;

    if (current_scroll > 0) {
      //최상단 스크롤로 이동
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const fetchMoreData = useCallback(() => {
    setTimeout(() => {
      console.log(replies, "!!!!");
      dispatch(moreReplyInfo({ timestamp: replies[replies.length - 1].uid }));
      // else setStop(true);
    }, 1500);
  }, [dispatch, replies]);

  const handleScroll = undefined;
  // (a, b, c) => {
  //   console.log("handleScroll", a, b, c, ref);
  // };
  console.log(">>>>replies", replies);
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
                  uid={item.uid}
                  writer={item.writer}
                  content={item.content}
                  timestamp={item.writtenAt}
                  popupClick={openAlert}
                />
              );
            })}
          </InfinScroll>
        ) : (
          <EmptyMention />
        )}
        <BtnContainer>
          <FootArea>
            <ComInput onSubmit={handleOnSubmit} />
          </FootArea>
        </BtnContainer>
      </CommentBox>
      <NoticeAlert icon={alertInfo.icon} btns={alertInfo.btn} />
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
