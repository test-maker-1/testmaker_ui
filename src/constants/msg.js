const errorPage = {
  404: "주소를 잘못 입력하셨거나, 주소가 변경 또는 삭제 됐을 수 있어요. 주소를 다시 확인해주세요!",
  403: "접근 권한이 없는 페이지예요. 로그인 또는 로그아웃이 필요해요!",
  406: "잘못된 접근입니다. 다른 방법으로 시도해주세요!",
  500: "서버에 오류가 발생했어요. 관리자에게 문의해주세요!",
};

const errorMaking = {
  empty: "비어있는 항목이 있어요!",
  invalied: "잘못된 항목이 있어요!",
  question: "비어있거나 잘못된 항목이 있는 질문이 있어요!",
  result: "비어있거나 잘못된 항목이 있는 결과가 있어요!",
  invaliedPoints: "테스트 총 점수가 너무 적어요!",
};

const msg = {
  errorPage,
  errorMaking,
};

export default msg;
