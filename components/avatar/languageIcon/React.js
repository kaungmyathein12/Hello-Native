import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ReactIcon = (props) => (
  <Svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    {...props}
  >
    <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={36} height={36}>
      <Rect width={36} height={36} rx={72} fill="#FFF" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#141414" d="M0 0h36v36H0z" />
      <Rect
        width={36}
        height={36}
        transform="rotate(-8 63.902 -21.902) scale(1.1)"
        fill="#4ED0F3"
        rx={6}
      />
      <G transform="rotate(2 -10.645 18.5)" fill="#000">
        <Path d="M13 20a1 .75 0 0 0 10 0" />
        <Rect x={12} y={14} width={1.5} height={2} rx={1} />
        <Rect x={22} y={14} width={1.5} height={2} rx={1} />
      </G>
    </G>
  </Svg>
);

export default ReactIcon;
