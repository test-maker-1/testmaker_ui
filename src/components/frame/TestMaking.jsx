import { useEffect, useReducer } from "react";
import { withRouter } from "react-router-dom";

import Error from "../../view/Error";
import { updateCommonData } from "../../redux/reducer/makingReducer";
import components from "../../constants/testStepComponents";
import initState from "../../constants/makingInitState";

const TestMaking = ({
  match: {
    params: { module, step },
  },
}) => {
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
    return <Error />;
  }

  let makingComponent = components[module];

  // undefined step
  if (!makingComponent.hasOwnProperty(step)) {
    return <Error />;
  }

  return makingComponent[step];
};

export default withRouter(TestMaking);
