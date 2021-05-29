import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import Welcome from "../../view/testing/Welcome";
import Comments from "../../view/testing/Comments";
import Exam from "../../view/testing/Exam";
import Result from "../../view/testing/Result";
import Error from "../../view/Error";
import {
  welcome,
  comments,
  exam,
  result,
  otherType,
} from "../../constants/urlInfo";
import OtherType from "../../view/testing/OtherType";

const Testing = (props) => {
  console.log(props);

  const {
    match: {
      params: { module, step },
    },
  } = props;

  switch (module) {
    case welcome: // 웰컴
      return <Welcome />;
    case comments: // 댓글
      return <Comments />;
    case exam: // 테스트
      return <Exam />;
    case result: // 테스트결과 (module)
      return <Result type={step} />;
    case otherType: // 다른유형 전체보기
      return <OtherType />;
    default:
      console.warn("where are you?", module, step);
      break;
  }
  return <Error />;
};

export default withRouter(Testing);
