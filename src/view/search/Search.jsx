import React from "react";
import qs from "query-string";

import SearchMenu from "./SearchMenu/SearchMenu";

const MIN_QUERY = 1;

function Search({ location }) {
  const { search } = location;
  const query = search.length < MIN_QUERY ? "" : qs.parse(search).query;

  return <div>{query === "" ? <SearchMenu /> : <div>검색 결과</div>}</div>;
}

export default Search;
