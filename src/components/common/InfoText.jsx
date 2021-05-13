import styled from "styled-components";
import { SVG } from ".";
import theme from "../../styles/theme";
import ENUM from "../../constants/Enum";

/*
 * text: string;
 * color: string; ex) theme.colors
 */
const InfoText = ({ text, color = "deepGray" }) => {
  const svgStyle = { fill: theme.colors[color] };
  return (
    <Wrapper className="info-text">
      <SVG type={ENUM.INFO} style={svgStyle} />
      <Text color={color}>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const Text = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors }, color }) => colors[color]};
`;

export default InfoText;
