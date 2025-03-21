import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale, verticalScale} from 'react-native-size-matters';

export default function RoadIcon({fillColor}) {
  return (
    <Svg
      width={scale(30)}
      height={verticalScale(30)}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM4.96778 21.5869L9.77337 13.0028H19.8867L24.7491 21.9983C26.1657 20.0284 27 17.6116 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 17.4325 3.7238 19.696 4.96778 21.5869Z"
        fill={fillColor}
        fill-opacity="0.6"
      />
    </Svg>
  );
}
