import React, { memo, FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '@/constants/colors';
import { useForm, Controller } from 'react-hook-form';
import { HomeScreens } from '@/screens/home';

export type SearchBarProps = {
  navigation: any;
};

const SearchBar: FC<SearchBarProps> = memo(({ navigation }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      keyword: ``,
    },
  });

  const findRecipeHandler = (data: any) => {
    // console.log(`data = `, data);
    navigation.navigate(HomeScreens.SEARCH, data);
  };
  return (
    <View className="flex flex-row items-center justify-start space-x-1 px-4 bg-white h-[50px] rounded-[30px] ">
      <FontAwesome name="search" size={20} color={colors.placeholder} />
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Find your favorite meals"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={handleSubmit(findRecipeHandler)}
            />
          )}
          name="keyword"
        />
      </View>
    </View>
  );
});

export default SearchBar;
