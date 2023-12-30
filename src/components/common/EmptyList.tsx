import React, { FC, memo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ScreenWrapper from './ScreenWrapper';
import SearchIcon from '../../../assets/images/common/Search';
const EmptyList: FC = memo(() => {
  return (
    <SafeAreaView className="my-auto mt-[50%]">
      <ScreenWrapper>
        <View className="flex flex-row justify-center">
          <SearchIcon />
        </View>
        <Text className="text-center text-[25px] font-semibold">Item not found</Text>
        <Text className="text-center opacity-50">
          Try searching the item with a different keyword.
        </Text>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default EmptyList;
