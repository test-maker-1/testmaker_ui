import {useEffect, useReducer} from "react";
import { withRouter, useHistory } from "react-router-dom";
import { multipleComponents } from "../../constants/testStepComponents";
import {
  updateCommonData,
} from "../../redux/reducer/makingReducer";
import initState from "../../constants/makingInitState";

const TestMaking = ({
  match: {
    params: { module, step }
  }
}) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(updateCommonData, initState.common);
  let components = module === "weight" ? {} : multipleComponents;

  useEffect (()=>{
    window.addEventListener("beforeunload", handleBreak); //add event
  return () => {
    window.removeEventListener("beforeunload", handleBreak); //remove event
  };
}, [])

const handleBreak = (event) => {
  if(state.editFlag){
    //수정 중일 경우 브라우저 제어
    const confirmationMessage = "stop!";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
  }
}

  // undefined step
  if (!components.hasOwnProperty(step)) {
    history.push("/error");
    return null;
  }

  return components[step];
};

export default withRouter(TestMaking);
