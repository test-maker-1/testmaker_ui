import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { NoticeAlert } from "../../components/common";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import TestIntro from "./SubComponents/TestIntro";
import RoundContiner from "./SubComponents/RoundContainer";
import Reply from "./SubComponents/Reply";
import ENUM from "../../constants/Enum";

const { SHARE, MOVENEXT } = ENUM;

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
      msg: "이 테스트를 신고할까요?",
      btn: [{ name: "돌아가기" }, { name: "신고하기", callback }],
    };
  } else if (type === SHARE) {
    result = {
      msg: "친구한테 공유할래요!",
      showInfo: {
        link: "",
        title: "",
        description: "TEST",
        imageUrl: "",
      },
      btn: [{ name: SHARE, callback }],
    };
  }

  return result;
};

const Welcome = () => {
  const { testInfo, recent3replies } = useSelector((state) => state.testing);
  const [alertInfo, setALInfo] = useState(def_alert);

  useEffect(() => {
    const current_scroll = document.documentElement.scrollTop;

    if (current_scroll > 0) {
      //최상단 스크롤로 이동
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  const openAlert = (type) => {
    const alert_info = Object.assign(
      {},
      def_alert,
      returnALInfo(type, handleOnAlertClick)
    );
    setALInfo(alert_info); //얼럿에 띄울 정보
    NoticeAlert.open(alert_info.msg, SHARE);
  };

  const handleOnAlertClick = useCallback((id, event) => {
    // 선택한 버튼명 반환
    console.log(id, "클릭되었습니다!");
  }, []);

  const handleShareClick = (id, event) => {
    // 선택한 버튼명 반환
    if (id === "kakao") console.log(id, "클릭되었습니다!");
  };

  return (
    <PageContainer>
      {/* 테스트 상세 정보 */}
      <TestIntro openAlert={openAlert} />
      {/* 댓글 영역 */}
      <RoundContiner>
        <Reply
          repliesCnt={testInfo.repliesCnt}
          recent3replies={recent3replies}
          testid={testInfo.uid}
        />
      </RoundContiner>
      <BottomBtn
        btnArr={[
          {
            name: "공유하기",
            type: SHARE,
            customClick: openAlert.bind(this, "share"),
          },
          { name: "시작하기", type: MOVENEXT },
        ]}
      />
      <NoticeAlert
        icon={alertInfo.icon}
        btns={alertInfo.btn}
        onShareClick={handleShareClick}
      />
    </PageContainer>
  );
};

export default Welcome;
