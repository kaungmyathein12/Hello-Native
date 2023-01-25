import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Profile = (props) => (
  <Svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    name="Kaung Myat Hein"
    {...props}
  >
    <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={36} height={36}>
      <Rect width={36} height={36} rx={72} fill="#FFF" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#ff68b3" d="M0 0h36v36H0z" />
      <Rect
        width={36}
        height={36}
        transform="rotate(-64 19.4 12.199) scale(1.2)"
        fill="#edd75a"
        rx={6}
      />
      <G transform="rotate(6 56.162 16)">
        <Path d="M15 21c2 1 4 1 6 0" stroke="#000" strokeLinecap="round" />
        <Rect x={13} y={14} width={1.5} height={2} rx={1} fill="#000" />
        <Rect x={21} y={14} width={1.5} height={2} rx={1} fill="#000" />
      </G>
    </G>
  </Svg>
);

export default Profile;
