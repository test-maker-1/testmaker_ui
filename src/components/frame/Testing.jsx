import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import Welcome from "../../view/testing/Welcome";
import Comments from "../../view/testing/Comments";
import Exam from "../../view/testing/Exam";
import {welcome, comments, exam, result} from "../../constants/urlInfo";

const Testing = ({
  match: {
    params: { module, step }
  }
}) => {
  const history = useHistory();
  console.log(module)

  switch(module){
    case welcome: //웰컴
      return <Welcome />
    case comments: //댓글
      return <Comments />
    case exam:    //테스트
      return <Exam />
    case result:  //테스트결과 (module)
      break;
    default:
      // history.push("/error");
      break;
  }
  return (<h1>???</h1>);
};

export default withRouter(Testing);