import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import Error from "../../view/Error";
import Mypage from "../../view/mypage/MypageMain";
import Comments from "../../view/testing/Comments";
import { main, reply, manage } from "../../constants/urlInfo";
import AccountManage from "../../view/mypage/AccountManage";

const MyPage = memo(
  ({
    match: {
      params: { module, step },
    },
  }) => {
    switch (module) {
      case main: // 마이페이지
        return <Mypage />;
      case reply: // 댓글
        return <Comments />;
      case manage: // 계정관리
        return <AccountManage />;
      default:
        console.warn("where are you?", module, step);
        break;
    }
    return <Error />;
  }
);

export default withRouter(MyPage);
