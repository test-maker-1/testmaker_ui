import React, {useState, useCallback} from "react";
import styled from "styled-components";
import {NoticeAlert} from "../../components/common";
import BottomBtn, { PageContainer } from "../../components/frame/BottomBtn";
import TestIntro from "./SubComponents/TestIntro";
import Mention from "./SubComponents/Mention";
import RoundContiner from "./SubComponents/RoundContainer";
import usePage from "../../hooks/usePage";
import ENUM from "../../constants/Enum";
import {testing, comments} from "../../constants/urlInfo";

const { PREVIEW, MOVENEXT } = ENUM;
const def_alert = {
  icon: null,
  msg: '',
  btn: []
};

const returnALInfo = (type) => {
  let result = {};
  
  if(type === "report"){
    result = {
      msg: "이 댓글을 신고할까요?",
      btn: ["돌아가기", "신고하기"]
    };
  }

  return result;
};

const Welcome = () => {
  const { goPage } = usePage();
  const [alertInfo, setALInfo] = useState(def_alert);
  const openAlert = (type ) => {    
    const alert_info = Object.assign({}, def_alert, returnALInfo(type));
    setALInfo(alert_info);
    NoticeAlert.open();
  };
  const handleOnAlertClick = useCallback((id, event) => {
    // 선택한 버튼명 반환
    console.log(id,"클릭되었습니다!");
  }, []);

  return (
    <PageContainer background={"#F1F2F4"}>
      {/* 테스트 상세 정보 */}
      <TestIntro openAlert={openAlert}/>
      {/* 댓글 영역 */}
      <RoundContiner>
        <CommentTitle>
          <Title>댓글</Title>
          <Entire onClick={()=> goPage(`/${testing}/${comments}`)}>10개 전체보기</Entire>
        </CommentTitle>
        {[1, 2, 3].map((item, idx)=>{
          return <Mention key={`c_${idx}`} idx={idx}/>;
        })}
      </RoundContiner>
      <BottomBtn
        btnArr={[
          { name: "공유하기", type: PREVIEW },
          { name: "시작하기", type: MOVENEXT },
        ]}
      />
      <NoticeAlert
	      icon={alertInfo.icon}
	      content={alertInfo.msg}
	      btns={alertInfo.btn}
	      handleOnClick={handleOnAlertClick}
	    />
    </PageContainer>
  );
};

const CommentTitle = styled.div`
  height: 2.25em; /*36px;*/
  line-height: 2.25em; /*36px;*/
`;

const Title = styled.h1`
  display: inline-block;
  float: left;
  font-size: 1.5em; /*24px*/
  font-weight: bold;
  letter-spacing: -1px;
  color: #697382;
`;

const Entire = styled.p`
  display: inline-block;
  float: right;
  font-size: 1em; /*16px*/
  text-align: right;
  letter-spacing: -0.5px;
  color: #8A929E;
  cursor: pointer;
`;

const Avatar = styled.div`
  /* Ellipse 187 */
  position: static;
  width: 32px;
  height: 32px;
  left: 0px;
  top: 0px;

  /* 300 */

  background: #DADEE6;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;

export default Welcome;