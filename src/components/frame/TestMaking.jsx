import { withRouter, useHistory } from "react-router-dom";
import { multipleComponents } from "../../constants/testStepComponents";

const TestMaking = ({
  match: {
    params: { module, step }
  }
}) => {
  const history = useHistory();
  let components = module === "weight" ? {} : multipleComponents;

  // undefined step
  if (!components.hasOwnProperty(step)) {
    history.push("/error");
    return null;
  }

  return components[step];
};

export default withRouter(TestMaking);
