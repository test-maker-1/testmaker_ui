import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import Welcome from "../../view/testing/Welcome";
import Comments from "../../view/testing/Comments";
import Exam from "../../view/testing/Exam";
import Result from "../../view/testing/Result";
import OtherType from "../../view/testing/OtherType";
import Error from "../../view/Error";
import {
  welcome,
  comments,
  exam,
  result,
  otherType,
} from "../../constants/urlInfo";
import { setTestID, getTestExam } from "../../redux/reducer/testingReducer";
import { getReplyInfo } from "../../redux/reducer/replyReducer";

const Testing = ({
  match: {
    params: { module, step },
  },
  location,
}) => {
  const { testid } = queryString.parse(location.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //call api at didmount
    if (testid) {
      switch (module) {
        case welcome: // 웰컴
          dispatch(setTestID(testid));
        case comments: // 댓글
          dispatch(getReplyInfo({ testid, timestamp: 0 }));
        case exam: // 테스트
          dispatch(getTestExam({ testID: testid }));
        // getTesting;
        case result: // 테스트결과 (module)
          break;
        default:
          break;
      }
    }
  }, []);

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
