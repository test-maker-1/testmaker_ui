import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import { Loading } from "../common";
import { setLoading, setError } from "../../redux/reducer/commonReducer";
import { getTestInfo, getTestExam } from "../../redux/reducer/testingReducer";
import { getReplyInfo } from "../../redux/reducer/replyReducer";
import { getTestResultInfo } from "../../redux/reducer/resultReducer";

const Testing = ({
  match: {
    params: { module },
  },
  location,
}) => {
  const { testid, resultid } = queryString.parse(location.search);
  const { loading, isError } = useSelector((state) => state.common);
  const { responseUid } = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const checkModule =
    (testid && [welcome, comments, exam].includes(module)) ||
    (resultid && [result, otherType].includes(module));

  useEffect(() => {
    if (checkModule) {
      //call api at didmount
      switch (module) {
        case welcome: // 웰컴
          dispatch(setLoading(true));
          dispatch(getTestInfo(testid));
          break;
        case comments: // 댓글
          dispatch(setLoading(true));
          dispatch(getReplyInfo({ testid, timestamp: 0 }));
          break;
        case exam: // 테스트
          dispatch(setLoading(true));
          dispatch(getTestExam(testid));
          break;
        case result: // (module)
        case otherType: // (module)
          if (resultid !== responseUid) {
            if (module !== otherType) dispatch(setLoading(true));
            dispatch(getTestResultInfo(resultid));
          }

          break;
        default:
          break;
      }
    }
  }, [dispatch, module, testid, resultid]);

  if (loading) return <Loading loading={loading} />;

  if (!isError && checkModule) {
    switch (module) {
      case welcome: // 웰컴
        return <Welcome />;
      case comments: // 댓글
        return <Comments />;
      case exam: // 테스트
        return <Exam />;
      case result: // 테스트결과 (module)
        return <Result />;
      case otherType: // 다른유형 전체보기
        return <OtherType />;
      default:
        console.warn("where are you?", module);
        break;
    }
  }

  return <Error />;
};

export default withRouter(Testing);
