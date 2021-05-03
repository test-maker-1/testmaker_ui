import { useEffect, useReducer } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { updateCommonData } from "../../redux/reducer/makingReducer";
import components from "../../constants/testStepComponents";
import initState from "../../constants/makingInitState";

const TestMaking = ({
  match: {
    params: { module, step },
  },
}) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(updateCommonData, initState.common);

  const handleBreak = (event) => {
    if (state.editFlag) {
      //수정 중일 경우 브라우저 제어
      const confirmationMessage = "stop!";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBreak); //add event
    return () => {
      window.removeEventListener("beforeunload", handleBreak); //remove event
    };
  }, []);

  // undefined module
  if (!components.hasOwnProperty(module)) {
    history.push("/error");
    return null;
  }

  let makingComponent = components[module];

  // undefined step
  if (!makingComponent.hasOwnProperty(step)) {
    history.push("/error");
    return null;
  }

  return makingComponent[step];
};

export default withRouter(TestMaking);
