import React, { memo, FC } from 'react';

import { View, TextInput } from 'react-native';

export type CustomTextInputProps = {
  children?: React.ReactNode;
  placeholder: string;
  onBlur: () => void;
  onChangeText: () => void;
  value: any;
  isPassword: boolean;
};

const CustomTextInput: FC<CustomTextInputProps> = memo(
  ({ children, placeholder, onBlur, onChangeText, value, isPassword }) => {
    // console.log(`value = ${value}`);

    return (
      <View className="flex flex-row justify-between items-center w-full bg-white h-[55px] text-[20px] rounded-[20px] px-8">
        <View>
          <TextInput
            placeholder={placeholder}
            className="text-[16px] w-full"
            secureTextEntry={isPassword}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
          />
        </View>
        {children}
      </View>
    );
  }
);

export default CustomTextInput;
