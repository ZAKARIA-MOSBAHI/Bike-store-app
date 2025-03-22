import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function AboutIcon({style, width = 32, height = 32}) {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-5.0 -10.0 100 110">
      <Path
        d="m50 5c24.852 0 45 20.148 45 45s-20.148 45-45 45-45-20.148-45-45 20.148-45 45-45zm-0.4375 28.492h0.875c3.9492 0 3.9492-6 0-6h-0.875c-3.9492 0-3.9492 6 0 6zm-2.5625 8.1562v27.859c0 3.9492 6 3.9492 6 0v-27.859c0-3.9492-6-3.9492-6 0zm30.578-19.227c-15.23-15.23-39.926-15.23-55.156 0s-15.23 39.926 0 55.152c15.23 15.23 39.926 15.23 55.156 0 15.23-15.227 15.23-39.922 0-55.152z"
        fill-rule="evenodd"
        fill={'#fff'}
      />
    </Svg>
  );
}
