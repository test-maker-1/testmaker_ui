import React, { useState, useCallback } from "react";
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

const Welcome = () => {
  const { testInfo, recent3replies } = useSelector((state) => state.testing);
  const [alertInfo, setALInfo] = useState(def_alert);
  const openAlert = (type) => {
    const alert_info = Object.assign(
      {},
      def_alert,
      returnALInfo(type, handleOnAlertClick)
    );
    setALInfo(alert_info);
    NoticeAlert.open("이 댓글을 신고할까요?");
  };
  const handleOnAlertClick = useCallback((id, event) => {
    // 선택한 버튼명 반환
    console.log(id, "클릭되었습니다!");
  }, []);

  return (
    <PageContainer>
      {/* 테스트 상세 정보 */}
      <TestIntro openAlert={openAlert} />
      {/* 댓글 영역 */}
      <RoundContiner>
        <Reply
          repliesCnt={testInfo.repliesCnt}
          recent3replies={recent3replies}
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
      <NoticeAlert icon={alertInfo.icon} btns={alertInfo.btn} />
    </PageContainer>
  );
};

export default Welcome;
