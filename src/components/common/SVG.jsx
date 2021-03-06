import React, { useMemo, useCallback, memo } from "react";
import styled from "styled-components";
import { svgInfo } from "../../resources/svgInfo";

const SVG = ({ type, onClick, style = {} }) => {
  const {
    width,
    height,
    viewBox,
    inContext,
    fill,
    infill = null,
    stroke,
  } = useMemo(() => svgInfo[type], [type]);
  const _width = useMemo(() => style.width || width, [style.width, width]);
  const _height = useMemo(() => style.height || height, [height, style.height]);
  const _fill = useMemo(() => style.fill || fill, [fill, style.fill]);
  const _stroke = useMemo(() => style.stroke || stroke, [stroke, style.stroke]);
  const handleOnClick = useCallback(
    (event) => {
      if (onClick) onClick(type, event);
    },
    [type, onClick]
  );

  return (
    <SvgItem
      width={_width}
      height={_height}
      fill={_fill}
      infill={infill}
      stroke={_stroke}
      x={0}
      y={0}
      viewBox={viewBox}
      onClick={onClick ? handleOnClick : null}
      preserveAspectRatio={"xMaxYMin meet"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {inContext.map((context, idx) => {
        return Object.assign({}, context, { key: `${type}_${idx}` }); //key값을 주기 위해
      })}
    </SvgItem>
  );
};

const SvgItem = styled.svg`
  display: inline-block;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  path {
    fill: ${({ fill, infill }) => infill || fill};
    ${({ stroke }) => stroke && `stroke: ${stroke}`};
  }
`;

export default memo(SVG);
