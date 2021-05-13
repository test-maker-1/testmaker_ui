import styled from "styled-components";

export const Section = styled.section`
  padding: 0 ${({ theme: { paddings } }) => paddings.main}px;
`;
