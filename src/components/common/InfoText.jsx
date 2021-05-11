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
    <Wrappr>
      <SVG type={ENUM.INFO} style={svgStyle} />
      <Text color={color}>{text}</Text>
    </Wrappr>
  );
};

const Wrappr = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const Text = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}px;
  line-height: 21px;
  letter-spacing: -0.3px;
  color: ${({ theme: { colors }, color }) => colors[color]};
`;

export default InfoText;
