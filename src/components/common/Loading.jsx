import React from "react";
import styled from "styled-components";
import Spinner from "@material-ui/core/CircularProgress";
import { modalStyles } from "../../styles";

const [SHOW, HIDDEN] = ["flex", "none"];

export const Loading = ({ loading = true }) => {
  const boolLoading = JSON.parse(loading);

  return (
    <Container display={boolLoading ? SHOW : HIDDEN}>
      <StyledSpinner />
    </Container>
  );
};

const Container = styled.div`
  ${modalStyles}
  background: transparent;
  z-index: ${({ theme: { zIndex } }) => zIndex.loading};
  display: ${({ display }) => display};
`;

export const StyledSpinner = styled(Spinner)`
  color: ${({ theme: { colors } }) => colors.blue} !important;
`;
