import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {home, picktest, preview} from "../../constants/urlInfo";
import ENUM from "../../constants/Enum";
import {getNextPageURL} from "../../utils/handler"

const { HOME, PICKTEST, PREVIEW, MOVENEXT, SHARE } = ENUM;

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
  ${({ background}) => background ? `background: ${background};`: ""}
`;

export default withRouter(BottomBtn);
