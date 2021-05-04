import { useHistory } from "react-router";

const usePage = () => {
  const history = useHistory();

  // pathname: string;
  const goPage = (pathname, search = null, state = null) => {
    history.push({
      pathname,
      search,
      state,
    });
  };

  const go = () => history.go(); // go front
  const goBack = () => history.goBack(); // go back

  return { goPage, go, goBack };
};

export default usePage;
