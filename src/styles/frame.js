import styled from "styled-components";

export const Section = styled.section`
  padding: 0 ${({ theme: { paddings } }) => paddings.main}px;
`;

export const TextBox = styled.div`
  padding: 15px 0;
  display: flex;
  border-radius: 5px;
  background: ${({ theme: { colors } }) => colors.skyBlue};

  div {
    flex: 1;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.5px;
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
