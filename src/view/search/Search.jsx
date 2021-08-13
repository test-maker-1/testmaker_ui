import React, { useEffect } from "react";
import qs from "query-string";
import { useDispatch } from "react-redux";

import SearchMenu from "./SearchMenu/SearchMenu";
import { setQuery } from "../../redux/reducer/commonReducer";

const MIN_QUERY = 1;

function Search({ location }) {
  const { search } = location;
  const query = search.length < MIN_QUERY ? "" : qs.parse(search).query;
  const dispatch = useDispatch();

  useEffect(() => dispatch(setQuery(query)), []);

  return (
    <>{query === "" ? <SearchMenu query={query} /> : <div>검색 결과</div>}</>
  );
}

export default Search;
