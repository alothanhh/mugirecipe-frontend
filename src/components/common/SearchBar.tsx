import React, { memo, FC } from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '@/constants/colors';

const SearchBar = memo(() => {
  return (
    <View className="flex flex-row items-center justify-start space-x-1 px-4 bg-white h-[50px] rounded-[30px] ">
      <FontAwesome name="search" size={20} color={colors.placeholder} />
      <TextInput placeholder="Find your favorite meals" />
    </View>
  );
});

export default SearchBar;
