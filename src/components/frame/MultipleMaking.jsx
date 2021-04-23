import { withRouter, useHistory } from "react-router-dom";
import { multipleComponents } from "../../constants/testStepComponents";

const MultipleMaking = ({
  match: {
    params: { step }
  }
}) => {
  const history = useHistory();

  // undefined step
  if (!multipleComponents.hasOwnProperty(step)) {
    history.push("/error");
    return null;
  }

  return multipleComponents[step];
};

export default withRouter(MultipleMaking);
