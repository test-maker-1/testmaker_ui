import React from "react";
import qs from "query-string";

// code: number;
const Error = ({ location, code = 404 }) => {
  const queryJson =
    location.hasOwnProperty("search") && location.search.length > 0
      ? qs.parse(location.search)
      : null;

  const errorCode = queryJson ? Number(queryJson.code) : code;

  return (
    <div>
      <h1>{`에러 페이지 - 에러 코드: ${errorCode}`}</h1>
    </div>
  );
};

export default Error;
