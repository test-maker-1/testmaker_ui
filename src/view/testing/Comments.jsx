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
  btns: [],
};

//Alert 창
const returnALInfo = (type, callback) => {
  let result = {};

  if (type === "report") {
    result = {
      msg: "이 댓글을 신고할까요?",
      btns: [{ name: "돌아가기" }, { name: "신고하기", callback }],
    };
  } else if (type === "delete") {
    result = {
      msg: "이 댓글을 삭제할까요?",
      btns: [{ name: "돌아가기" }, { name: "삭제하기", callback }],
    };
  } else if (type === "share") {
    result = {
      msg: "공유할건가요?",
      btns: ["아니요", "예"],
    };
  } else if (type === "join") {
    result = {
      msg: [
        "오늘의 테스트 멤버가되면",
        <br key={`br${1}`} />,
        "공개 댓글을 달 수 있어요!",
      ],
      btns: [{ name: "다음에 할래요" }, { name: "회원가입", callback }],
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
  const [progress, setProgress] = useState(false);
  const [word, setWord] = useState("");

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

  const alertCallback = useCallback(
    (type, event) => {
      if (type === "report") {
        //댓글 신고
        dispatch(reportComment(comment_id));
      } else {
        //댓글 삭제
        dispatch(deleteComment(comment_id));
      }
    },
    [dispatch]
  );

  const moveToLogin = () => goPage(`/${login}`);

  const handlePopup = (id, uid, content) => {
    if (loggedIn && status === SUCCESS) {
      comment_id = uid; //for report

      switch (id) {
        case "report":
          openAlert(id, uid);
          break;
        case "update":
          setWord(content);
          break;
        case "delete":
          openAlert(id, uid); //dispatch(deleteComment(uid));
          break;
        default:
          break;
      }
    } else {
      openAlert("join", uid);
    }
  };

  const openAlert = (type, uid) => {
    let func = null;

    switch (type) {
      case "join":
        func = moveToLogin;
        break;
      case "delete":
      case "report":
        func = alertCallback.bind(this, type);
        break;
      default:
        break;
    }

    const alert_info = Object.assign({}, def_alert, returnALInfo(type, func));

    NoticeAlert.open({
      icon: alert_info.icon,
      text: alert_info.msg,
      btns: alert_info.btns,
    });
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
      if (word) {
        dispatch(updateComment({ comment_id, value }));
      } else {
        dispatch(submitOneComment(value));

        const current_scroll = document.documentElement.scrollTop;

        if (current_scroll > 0) {
          //최상단 스크롤로 이동
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
    if (word) setWord("");
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
              word={word}
              ref={comInput}
              onSubmit={handleOnSubmit}
              onFocus={checkLogin}
            />
          </FootArea>
        </BtnContainer>
      </CommentBox>
      {progress && <Loading loading={progress} />}
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
