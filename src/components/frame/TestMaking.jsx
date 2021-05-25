import { withRouter } from "react-router-dom";
import Error from "../../view/Error";
import useUser from "../../hooks/useUser";
import components from "../../constants/testStepComponents";

const TestMaking = ({
  match: {
    params: { module, step },
  },
}) => {
  const { loggedIn } = useUser();

  // require logIn
  if (!loggedIn) return <Error code={403} />;

  // undefined module
  if (!components.hasOwnProperty(module)) {
    return <Error />;
  }

  const makingComponent = components[module];

  // undefined step
  if (!makingComponent.hasOwnProperty(step)) {
    return <Error />;
  }

  return makingComponent[step];
};

export default withRouter(TestMaking);
