import React from "react";
import usePage from "../hooks/usePage";

// code: number;
const Error = ({ code = 404 }) => {
  const { goBack } = usePage();
  return (
    <div>
      <h1>{`에러 페이지 - 에러 코드: ${code}`}</h1>
      <button onClick={goBack}>뒤로가기 버튼 (click)</button>
    </div>
  );
};

export default Error;
