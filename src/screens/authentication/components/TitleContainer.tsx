import React, { memo, FC } from 'react';

import { View, TextInput, Text } from 'react-native';
import MainImage from '../../../../assets/images/auth/MainImage';
export type TitleContainerProps = {
  title: string;
};

const TitleContainer: FC<TitleContainerProps> = memo(({ title }) => {
  return (
    <View className="w-full h-[250px] bg-white rounded-[30px]">
      {/* Inner container */}
      <View className="my-auto">
        <View className="mx-auto w-[250px] h-[150px]">
          <MainImage />
        </View>
        <Text className="text-[36px] font-bold text-center capitalize text-[#8B1A10]">
          {title}
        </Text>
      </View>
    </View>
  );
});

export default TitleContainer;
