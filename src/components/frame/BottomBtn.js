import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { getNextPageURL } from "../../utils/handler";
import { home, picktest, preview } from "../../constants/urlInfo";
import ENUM from "../../constants/Enum";

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
          const page = type === PICKTEST ? `test/${picktest}` : home;
          history.push(`/${page}`);
          break;

        case PREVIEW: // 테스트메이킹 미리보기
          history.push(`/test/${match.params.module}/${type}`);
          break;

        case MOVENEXT: // 다음 페이지 이동
          const next_url = getNextPageURL(match, location);
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
        <Button
          key={`btn${idx}`}
          type={item.type}
          onClick={handleOnClick.bind(this, idx)}
        >
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
  height: ${({ theme: { heights } }) => heights.bottomBtn}px;
  display: flex;
`;

const Button = styled.button`
  flex: 1;

  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.8px;

  color: white;
  /*자식이 1개일 경우*/
  &:first-child:nth-last-child(1) {
    background-color: ${({ theme: { colors } }) => colors.black};
  }
  /*자식이 2개 이상일 경우 홀짝 구분*/
  &:nth-child(2n-1) {
    background-color: ${({ theme: { colors } }) => colors.bodyGray};
  }
  &:nth-child(2n) {
    background-color: ${({ theme: { colors } }) => colors.black};
  }
`;

// bottomBtn이 있는 page일 경우 최상위 div로 사용
export const PageContainer = styled.div`
  padding-bottom: ${({ theme: { heights } }) => heights.bottomBtn}px;
`;

export default withRouter(BottomBtn);
