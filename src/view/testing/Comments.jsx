import React, { useCallback, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { NoticeAlert, Loading } from "../../components/common";
import { PageContainer } from "../../components/frame/BottomBtn";
import InfinScroll from "../../components/common/InfinScroll";
import Mention, { EmptyMention } from "./SubComponents/Mention";
import { ComInput } from "./SubComponents/Reply";
import {
  submitOneComment,
  reportComment,
  moreReplyInfo,
  updateComment,
  deleteComment,
} from "../../redux/reducer/replyReducer";
import useUser from "../../hooks/useUser";
import usePage from "../../hooks/usePage";
import { login } from "../../constants/urlInfo";
import { SUCCESS, LOADING } from "../../utils/asyncUtils";

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
      msg: "이 댓글을 신고할까요?",
      btn: [{ name: "돌아가기" }, { name: "신고하기", callback }],
    };
  } else if (type === "share") {
    result = {
      msg: "공유할건가요?",
      btn: ["아니요", "예"],
    };
  } else if (type === "join") {
    result = {
      msg: [
        "오늘의 테스트 멤버가되면",
        <br key={`br${1}`} />,
        "공개 댓글을 달 수 있어요!",
      ],
      btn: [{ name: "다음에 할래요" }, { name: "회원가입", callback }],
    };
  }

  return result;
};

const Comments = (props) => {
  const { replies, isStop } = useSelector((state) => state.reply);
  const comInput = useRef();
  const dispatch = useDispatch();
  const { loggedIn, status } = useUser();
  const { goPage } = usePage();
  const [alertInfo, setALInfo] = useState(def_alert);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    if (comInput.current) {
      comInput.current.focus();
    }
  }, []);

  useEffect(() => {
    if (progress) {
      setProgress(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replies]);

  const onReportClick = useCallback(
    (event) => {
      //댓글 신고
      dispatch(reportComment(comment_id));
    },
    [dispatch]
  );

  const moveToLogin = () => goPage(`/${login}`);

  const handlePopup = (id, uid) => {
    // if (loggedIn && status === SUCCESS) {
    switch (id) {
      case "report":
        openAlert(id, uid);
        break;
      case "update":
        dispatch(updateComment(uid));
        break;
      case "delete":
        dispatch(deleteComment(uid));
        break;
    }
    // } else {
    // openAlert("join", uid);
    // }
  };

  const openAlert = (type, uid) => {
    comment_id = uid; //for report

    const func = type === "join" ? moveToLogin : onReportClick;

    const alert_info = Object.assign({}, def_alert, returnALInfo(type, func));

    setALInfo(alert_info);
    NoticeAlert.open(alert_info.msg);
  };

  const checkLogin = () => {
    //로그인 여부
    if (!loggedIn) {
      if (status !== LOADING) openAlert("join");
      return false;
    } else {
      return true;
    }
  };

  const handleOnSubmit = (value) => {
    if (checkLogin() && value) {
      setProgress(true);
      //댓글 작성
      dispatch(submitOneComment(value));

      const current_scroll = document.documentElement.scrollTop;

      if (current_scroll > 0) {
        //최상단 스크롤로 이동
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const fetchMoreData = useCallback(() => {
    setTimeout(() => {
      dispatch(moreReplyInfo({ timestamp: replies[replies.length - 1].uid }));
      // else setStop(true);
    }, 1500);
  }, [dispatch, replies]);

  const handleScroll = undefined;

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
                  popupClick={handlePopup}
                />
              );
            })}
          </InfinScroll>
        ) : (
          <EmptyMention />
        )}
        <BtnContainer>
          <FootArea>
            <ComInput
              ref={comInput}
              onSubmit={handleOnSubmit}
              onFocus={checkLogin}
            />
          </FootArea>
        </BtnContainer>
      </CommentBox>
      {progress && <Loading loading={progress} />}
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
