import React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';

export default function HelpIcon({style, width = 36, height = 36}) {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 90">
      <G>
        <G>
          <G>
            <Path
              fill={'#fff'}
              d="M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35s35,15.7,35,35C85,69.3,69.3,85,50,85z M50,21C33.9,21,20.9,34,20.9,50     s13,29.1,29.1,29.1s29.1-13,29.1-29.1C79,34,66,21,50,21z"
            />
            <Path
              fill={'#fff'}
              d="M49.1,59.7c-1.6,0-3-1.3-3-3c0-4.6,3-8.6,7.3-9.9c1.9-0.6,3.2-2.3,3.1-4.3c0-3.6-3-6.6-6.6-6.6c-3.6,0-6.6,3-6.6,6.6     c0,1.6-1.3,3-3,3c-1.6,0-3-1.3-3-3C37.5,35.6,43.1,30,50,30s12.5,5.6,12.5,12.5c0,4.6-3,8.6-7.3,9.9c-1.9,0.6-3.2,2.3-3.1,4.3     C52.1,58.3,50.7,59.7,49.1,59.7C49.1,59.7,49.1,59.7,49.1,59.7z"
            />
            <Circle fill={'#fff'} cx="49.1" cy="65.9" r="3.6" />
          </G>
        </G>
      </G>
    </Svg>
  );
}
