import {useEffect, useReducer} from "react";
import { withRouter, useHistory } from "react-router-dom";
import { multipleComponents } from "../../constants/testStepComponents";
import {
  updateCommonData,
} from "../../redux/reducer/makingReducer";
import initState from "../../constants/makingInitState";

const MultipleMaking = ({
  match: {
    params: { step }
  }
}) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(updateCommonData, initState.common);

  useEffect (()=>{
    console.log('컴포넌트가 화면에서 들어옴', state);
    window.addEventListener("beforeunload", handleBreak);
  return () => {
    console.log('컴포넌트가 화면에서 사라짐');
    window.removeEventListener("beforeunload", handleBreak);
  };
}, [])

const handleBreak = (event) => {
  console.log(state, "handleBreak", event)
  if(state.editFlag){
    const confirmationMessage = "나가지마!!! 제발";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
  }
}

  // undefined step
  if (!multipleComponents.hasOwnProperty(step)) {
    history.push("/error");
    return null;
  }

  return multipleComponents[step];
};

export default withRouter(MultipleMaking);
