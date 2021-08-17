import React, { useEffect } from "react";
import qs from "query-string";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Loading } from "../../components/common";
import Card from "../../components/Feed/Card";
import SearchMenu from "./SearchMenu/SearchMenu";

import { setQuery } from "../../redux/reducer/commonReducer";

const MIN_QUERY = 1;

function Search({ location }) {
  const { search } = location;
  const query = search.length < MIN_QUERY ? "" : qs.parse(search).query;

  const { feedLoading, testsByTag } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  useEffect(() => dispatch(setQuery(query)), []);

  return (
    <>
      {query === "" ? (
        <SearchMenu query={query} />
      ) : feedLoading ? (
        <Loading />
      ) : (
        <Container>
          {testsByTag.map((test) => (
            <Card key={`test ${test.uid}`} test={test} maker={test.maker} />
          ))}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Search;
