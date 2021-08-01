import React from "react";
import queryString from "query-string";
import Error from "../../view/Error";
import InquireResult from "../../view/testresult/InquireResult";

const Result = ({ location }) => {
  const { testid } = queryString.parse(location.search);

  if (testid) {
    return <InquireResult testid={testid} />;
  }
  return <Error />;
};

export default Result;
