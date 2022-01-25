import { useHistory } from "react-router";

const usePage = () => {
  const history = useHistory();
  const { location } = history;

  const replace = (pathname, search = null, state = null) => {
    history.replace({
      pathname,
      search,
      state,
    });
  };

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

  return { location, goPage, go, goBack, replace };
};

export default usePage;
