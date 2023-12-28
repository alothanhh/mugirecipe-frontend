import React, { memo, FC } from 'react';

import { Text, Pressable, View } from 'react-native';

export type CustomButtonProps = {
  children: React.ReactNode;
  containerStyle?: string;
  inputStyle?: string;
  onPress?: () => void;
};

const CustomButton: FC<CustomButtonProps> = memo(
  ({ children, containerStyle, inputStyle, onPress }) => {
    return (
      <Pressable
        onPress={onPress}
        className={
          'flex justify-center items-center w-[200px] h-[45px] bg-[#8B1A10] rounded-[30px] ' +
          ` ${containerStyle}`
        }
      >
        <Text
          className={
            'text-center text-white capitalize text-[17px]' + ` ${inputStyle}`
          }
        >
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
