import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
import { View, Pressable } from 'react-native';
function Arrow(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Svg
        width={44}
        height={40}
        viewBox="0 0 44 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <Path fill="url(#pattern0)" d="M0 0H44V40H0z" />
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use
              xlinkHref="#image0_75_331"
              transform="matrix(.0101 0 0 .01111 .045 0)"
            />
          </Pattern>
          <Image
            id="image0_75_331"
            width={90}
            height={90}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABz0lEQVR4nO3cMS8EQRTA8QkJCnfzLMXtc6ERQqcRPt0VgjPvrrhWiUqp8ElERY2EUnTISSQKEie7b4/9/5Kpd/PPZO92d2ZDAAAAAAAAAAAAAABn+9qYP9TG2lkIk8QvwWAlTCeNp0nlxVReLZfrnsZNYhcf+eI98KeRVG6Y2SVHto/RyjaKOlZtdTbCVMrj+beRVV677eZW1ef57yMboX0iG6F9IhuhfSIboX0iG6F9IhuhfSIboX0iG6F9IhuhfSIboX0iG6F/+YCoLiOPz6bxKmnc6+WzC6FIRJYvoyeV+6RzO0TW8md4yuXRWrLMTFaPS0o84XKhLqGfOsthpvJ/F1aD0W1l6/zwqUPoUd8WJZVu1bPD6hDaNN5WfdL2BwehdXxDH1Q9O6wOobkLFJ/QQ/y9k5FDD9cUjhyamS0+NyzElpFCJ43Hv45MbPlZ6FweuvncUigCP5DyzUyWu/5itl1IZGLLVw/+L1Med/vtZhbKwKssR7ycdcRyA0csoHHEkjBHLHJ0xLJdRyxEd8TWCkdsFnLE9jdHbOh0NGCLcvWxE5vuy4ltKkcfn5EYRuYzEiXqt5tZTxurnRAmyjwOAAAAAAAAAAAAAIQx8QbKj39xINvpZwAAAABJRU5ErkJggg=="
          />
        </Defs>
      </Svg>
    </Pressable>
  );
}

export default Arrow;
