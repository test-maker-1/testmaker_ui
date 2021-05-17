import React, { useState, useCallback } from 'react'
import { NoticeAlert } from '../../components/common'
import BottomBtn, { PageContainer } from '../../components/frame/BottomBtn'
import TestIntro from './SubComponents/TestIntro'
import RoundContiner from './SubComponents/RoundContainer'
import Reply from './SubComponents/Reply'
import ENUM from '../../constants/Enum'

const { PREVIEW, MOVENEXT } = ENUM

const def_alert = {
  icon: null,
  msg: '',
  btn: []
}

// Alert 창
const returnALInfo = type => {
  let result = {}

  if (type === 'report') {
    result = {
      msg: '이 댓글을 신고할까요?',
      btn: ['돌아가기', '신고하기']
    }
  }

  return result
}

const Welcome = () => {
  const [alertInfo, setALInfo] = useState(def_alert)
  const openAlert = type => {
    const alert_info = Object.assign({}, def_alert, returnALInfo(type))
    setALInfo(alert_info)
    NoticeAlert.open()
  }
  const handleOnAlertClick = useCallback((id, event) => {
    // 선택한 버튼명 반환
    console.log(id, '클릭되었습니다!')
  }, [])

  return (
    <PageContainer>
      {/* 테스트 상세 정보 */}
      <TestIntro openAlert={openAlert} />
      {/* 댓글 영역 */}
      <RoundContiner>
        <Reply />
      </RoundContiner>
      <BottomBtn
        btnArr={[
          { name: '공유하기', type: PREVIEW },
          { name: '시작하기', type: MOVENEXT }
        ]}
      />
      <NoticeAlert
        icon={alertInfo.icon}
        content={alertInfo.msg}
        btns={alertInfo.btn}
        handleOnClick={handleOnAlertClick}
      />
    </PageContainer>
  )
}

export default Welcome
