import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { seqTest } from "../../constants/urlInfo";
import {
  home,
  login,
  test,
  testing,
  picktest,
  preview
} from "../../constants/urlInfo";
import ENUM from "../../constants/Enum";

const { HOME, PICKTEST, PREVIEW, MOVENEXT, SHARE } = ENUM;

// 다음 페이지 URL 반환
const getNextPageURL = (pmatch) => {
  const {
    params: { module, step },
    path,
    url
  } = pmatch;
  const reg = new RegExp("/([A-Za-z]*)", "gi");
  const where = (reg.exec(path) || "")[1];
  let nextUrl = "";

  switch (where) {
    case login: // 로그인
      break;

    case test: // 테스트메이킹
      const sequence = seqTest[module];
      const nextIDX = sequence.indexOf(step) + 1;
      // ex) test/multiple/preset
      nextUrl = `${where}/${module}/${sequence[nextIDX]}`;
      break;

    case testing: // 테스트
      break;

    default:
      break;
  }

  return nextUrl;
};

const BottomBtn = memo(({ btnArr = [], history, location, match }) => {
  const handleOnClick = async (idx, event) => {
    const target = btnArr[idx];
    const type = target.type;

    // 메뉴 내 정의한 함수 실행
    if (target.customClick !== undefined) {
      await target.customClick(target.name, event);
    }

    // type을 정의할 경우 공통 로직 실행 (페이지 이동)
    if (type) {
      switch (type) {
        case HOME: // 홈(메인)
        case PICKTEST: // 난이도선택
          const page = type === PICKTEST ? picktest : home;
          history.push(`/${page}`);
          break;

        case PREVIEW: // 테스트메이킹 미리보기
          history.push(`/test/${match.params.module}/${type}`);
          break;

        case MOVENEXT: // 다음 페이지 이동
          const next_url = getNextPageURL(match);
          history.push(`/${next_url}`);
          break;

        default:
          break;
      }
    }
  };

  if (btnArr.length < 1) return null;

  return (
    <BtnContainer>
      {btnArr.map((item, idx) => (
        <Button key={`btn${idx}`} onClick={handleOnClick.bind(this, idx)}>
          {item.name}
        </Button>
      ))}
    </BtnContainer>
  );
});

const BtnContainer = styled.footer`
  position: fixed;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);

  width: min(${({ theme: { widths } }) => widths.main}px, 100%);
  height: 80px;
  display: flex;
  /* border: 1px solid black; */
`;

const Button = styled.button`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

// bottomBtn이 있는 page일 경우 최상위 div로 사용
export const PageContainer = styled.div`
  padding-bottom: ${({ theme: { heights } }) => heights.bottomBtn}px;
`;

export default withRouter(BottomBtn);
