import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
function Search(props) {
  return (
    <View>
      <Svg
        width={100}
        height={100}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M45.833 79.167c18.41 0 33.334-14.924 33.334-33.334 0-18.41-14.924-33.333-33.334-33.333-18.41 0-33.333 14.924-33.333 33.333 0 18.41 14.924 33.334 33.333 33.334zM87.5 87.5L69.375 69.375"
          stroke="#C7C7C7"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default Search;
