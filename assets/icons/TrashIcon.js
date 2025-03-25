import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function TrashIcon({width = 32, height = 32}) {
  return (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 110"
      fill="none"
      x="0px"
      y="0px">
      <Path
        stroke={'#000'}
        strokeWidth={2}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43 16C41.8954 16 41 16.8954 41 18V20H55V18C55 16.8954 54.1046 16 53 16H43ZM37 18V20H18V24H78V20H59V18C59 14.6863 56.3137 12 53 12H43C39.6863 12 37 14.6863 37 18ZM24.7994 78.2547L22.3134 32H26.3192L28.7937 78.04C28.8507 79.1014 29.7279 79.9327 30.7908 79.9327H65.2092C66.2721 79.9327 67.1493 79.1014 67.2063 78.04L69.6808 32H73.6866L71.2006 78.2547C71.0294 81.4387 68.3978 83.9327 65.2092 83.9327H30.7908C27.6022 83.9327 24.9706 81.4387 24.7994 78.2547ZM39.0021 70.091L37.2661 32H41.2703L42.9979 69.9089L39.0021 70.091ZM53.0021 69.9089L54.7297 32H58.7339L56.9979 70.091L53.0021 69.9089Z"
        fill="black"
      />
    </Svg>
  );
}
