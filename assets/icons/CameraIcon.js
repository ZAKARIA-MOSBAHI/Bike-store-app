import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export default function CameraIcon({width = 24, height = 24}) {
  return (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 105">
      <G transform="translate(0,-952.36218)">
        <Path
          style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;"
          d="m 18.000002,1037.3622 c -5.4881,0 -10,-4.5119 -10,-10 l 0,-40.00001 c 0,-5.4881 4.5119,-10 10,-10 l 11.9688,0 3.25,-8.0938 a 3.0003,3.0003 0 0 1 2.7812,-1.9062 l 28,0 a 3.0003,3.0003 0 0 1 2.7812,1.9062 l 3.25,8.0938 11.968796,0 c 5.4881,0 10,4.5119 10,10 l 0,40.00001 c 0,5.4881 -4.5119,10 -10,10 l -63.999996,0 z m 0,-6 63.999996,0 c 2.2679,0 4,-1.7321 4,-4 l 0,-40.00001 c 0,-2.2679 -1.7321,-4 -4,-4 l -13.999996,0 a 3.0003,3.0003 0 0 1 -2.7812,-1.875 l -3.25,-8.125 -23.9376,0 -3.25,8.125 a 3.0003,3.0003 0 0 1 -2.7812,1.875 l -14,0 c -2.2679,0 -4,1.7321 -4,4 l 0,40.00001 c 0,2.2679 1.7321,4 4,4 z m 32,-5 c -10.4578,0 -19,-8.5421 -19,-19 0,-10.45791 8.5422,-19.00001 19,-19.00001 10.4579,0 19,8.5422 19,19.00001 0,10.4578 -8.5421,19 -19,19 z m 0,-6 c 7.2153,0 13,-5.7848 13,-13 0,-7.2152 -5.7847,-13.00001 -13,-13.00001 -7.215,0 -13,5.78481 -13,13.00001 0,7.2151 5.785,13 13,13 z"
          fill="#000000"
          fill-opacity="1"
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </G>
    </Svg>
  );
}
