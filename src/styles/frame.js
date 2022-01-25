import styled from "styled-components";
import theme from "./theme";

export const modalStyles = `
  padding: 0 ${theme.paddings.main}rem;
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  display: flex;
  place-content: center center;
  flex-wrap: wrap;

  max-width: ${theme.widths.main}px;
  width: 100%;
`;

export const Section = styled.section`
  padding: 0 ${({ theme: { paddings } }) => paddings.main}rem;
`;

export const TextBox = styled.div`
  padding: 15px 0;
  display: flex;
  border-radius: 5px;
  background: ${({ theme: { colors } }) => colors.skyBlue};

  div {
    flex: 1;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.lg}rem;
    line-height: 27px;
    letter-spacing: -0.5px;
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
