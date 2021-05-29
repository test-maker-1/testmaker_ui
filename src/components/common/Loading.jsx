import React from "react";
import styled from "styled-components";
import Spinner from "@material-ui/core/CircularProgress";
import { modalStyles } from "../../styles";

const [VISIBLE, HIDDEN] = ["visible", "hidden"];

export const Loading = ({ loading = true }) => {
  const boolLoading = JSON.parse(loading);
  return (
    <Container opacity={boolLoading ? 1 : 0}>
      <StyledSpinner visibility={boolLoading ? VISIBLE : HIDDEN} />
    </Container>
  );
};

const Container = styled.div`
  ${modalStyles}
  background: transparent;
  transition: all 0.2s ease-in-out;

  z-index: ${({ opacity, theme: { zIndex } }) =>
    opacity > 0 ? zIndex.loading : -1};
  opacity: ${({ opacity }) => opacity};
`;

const StyledSpinner = styled(Spinner)`
  color: ${({ theme: { colors } }) => colors.blue} !important;
  visibility: ${({ visibility }) => visibility} !important;
  transition-delay: 0.2s;
`;
