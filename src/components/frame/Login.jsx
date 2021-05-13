import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { loginComponents } from "../../constants/loginModuleComponents";

const LoginFrame = ({
  match: {
    params: { module, step },
  },
}) => {
  const history = useHistory();
  let components = module && loginComponents;

  if (!components.hasOwnProperty(module)) {
    history.push("/error");
    return null;
  }

  if (module === "find-pw") {
    let findPwComponent = components[module];
    console.log(findPwComponent);
    if (step == undefined || !findPwComponent.hasOwnProperty(step)) {
      history.push("/error");
      return null;
    }

    return findPwComponent[step];
  } else return components[module];
};

export default withRouter(LoginFrame);
