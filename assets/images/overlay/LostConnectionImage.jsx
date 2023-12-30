import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
function LostConnectionImage(props) {
  return (
    <View>
      <Svg
        width={200}
        height={200}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M100 166.667A8.333 8.333 0 10100 150a8.333 8.333 0 000 16.667zM103.667 91.666l-15.834-15.75-20.5-20.333-12.916-12.917-15.167-15.25A8.367 8.367 0 0027.417 39.25l11.5 11.416 12.166 12.167L69.668 81.5l12.916 12.833 22.834 22.833 23.25 23.334 32.083 32.083a8.342 8.342 0 005.917 2.465 8.338 8.338 0 005.917-2.465 8.332 8.332 0 000-11.833l-68.917-69.084zM181 66.083a116.083 116.083 0 00-81-32.75 117.5 117.5 0 00-37 6.083l13.5 13.5a99.085 99.085 0 0193 25 8.335 8.335 0 005.75 2.334 8.334 8.334 0 006-2.584 8.335 8.335 0 00-.25-11.583zM31.834 55.416A119.339 119.339 0 0019 66.083a8.333 8.333 0 0011.5 12 109.073 109.073 0 0113.334-10.75l-12-11.917zM141.667 109.5a8.34 8.34 0 005.916 2.5 8.333 8.333 0 006.001-14.084A75.012 75.012 0 00100 75h-1.333l19.583 19.583a58.329 58.329 0 0123.417 14.917zm-79.75-24a73.334 73.334 0 00-15.834 12.416 8.43 8.43 0 0012.25 11.584A60.838 60.838 0 0175 97.75L61.917 85.5zm9.166 42.833a8.339 8.339 0 1011.584 12 25.498 25.498 0 0132-2.083l-21-21a41.663 41.663 0 00-22.584 11.083z"
          fill="#C7C7C7"
        />
      </Svg>
    </View>
  );
}

export default LostConnectionImage;
