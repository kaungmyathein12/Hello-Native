import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";

const AngularIcon = (props) => (
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
      <Path fill="#fff" d="M0 0h36v36H0z" />
      <Rect
        width={36}
        height={36}
        transform="rotate(-141 21.615 13.906)"
        fill="#D7022F"
        rx={6}
      />
      <G transform="rotate(-9 1.19 -12.089)">
        <Path d="M15 19c2 1 4 1 6 0" stroke="#FFF" strokeLinecap="round" />
        <Rect x={10} y={14} width={1.5} height={2} rx={1} fill="#FFF" />
        <Rect x={24} y={14} width={1.5} height={2} rx={1} fill="#FFF" />
      </G>
    </G>
  </Svg>
);

export default AngularIcon;
