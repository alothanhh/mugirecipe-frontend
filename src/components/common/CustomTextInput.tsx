import React, { memo, FC } from 'react';

import { View, TextInput } from 'react-native';

export type CustomTextInputProps = {
  children?: React.ReactNode;
  placeholder: string;
};

const CustomTextInput: FC<CustomTextInputProps> = memo(
  ({ children, placeholder }) => {
    return (
      <View className="flex flex-row justify-between items-center w-full bg-white h-[55px] text-[20px] rounded-[20px] px-8">
        <View>
          <TextInput
            placeholder={placeholder}
            className="text-[16px] w-full"
            inputMode="text"
          />
        </View>
        {children}
      </View>
    );
  }
);

export default CustomTextInput;
