import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../styles/colors';

export default function HidePasswordIcon({style}) {
  return (
    <Svg
      style={style}
      width={50}
      height={50}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-5.0 -10.0 110.0 135.0">
      <Path
        fill={colors.secondary}
        d="m90.539 48.996c-0.73828-0.88281-18.34-21.605-40.543-21.605-6.207 0-12.051 1.6211-17.27 3.9727l-2.7734-2.6445c-0.625-0.59375-1.6133-0.57031-2.2109 0.050781-0.59375 0.625-0.57031 1.6133 0.050781 2.2109l1.9375 1.8477c-11.816 6.207-19.785 15.582-20.277 16.168-0.48438 0.57812-0.48438 1.4258 0 2.0039 0.73828 0.88281 18.34 21.605 40.539 21.605 6.207 0 12.055-1.6211 17.273-3.9727l2.7734 2.6445c0.30078 0.28906 0.69141 0.43359 1.0781 0.43359 0.41406 0 0.82422-0.16406 1.1328-0.48438 0.59375-0.625 0.57031-1.6133-0.050781-2.2109l-1.9375-1.8477c11.816-6.207 19.785-15.578 20.277-16.168 0.48828-0.57812 0.48828-1.4219 0-2.0039zm-40.539 20.488c-18.043 0-33.445-15.367-37.246-19.484 2.4492-2.6523 9.7266-9.9766 19.414-14.852l4.5781 4.3672c-2.2852 2.8828-3.6562 6.5273-3.6562 10.484 0 9.3242 7.5859 16.91 16.91 16.91 4.2461 0 8.125-1.5742 11.098-4.168l3.6875 3.5156c-4.5625 1.9336-9.5625 3.2266-14.785 3.2266zm-8.8242-30.062c2.3945-2 5.4688-3.207 8.8242-3.207 7.6016 0 13.785 6.1836 13.785 13.785 0 3.1211-1.0547 5.9961-2.8125 8.3086zm17.648 21.156c-2.3945 2-5.4688 3.207-8.8242 3.207-7.6016 0-13.785-6.1836-13.785-13.785 0-3.1211 1.0547-5.9961 2.8125-8.3125zm9.0078 4.2734-4.5781-4.3672c2.2852-2.8828 3.6562-6.5273 3.6562-10.484 0-9.3242-7.5859-16.91-16.91-16.91-4.2422 0-8.125 1.5742-11.098 4.168l-3.6875-3.5156c4.5625-1.9297 9.5625-3.2227 14.785-3.2227 18.043 0 33.445 15.367 37.25 19.484-2.4531 2.6484-9.7266 9.9727-19.418 14.848z"
      />
    </Svg>
  );
}
