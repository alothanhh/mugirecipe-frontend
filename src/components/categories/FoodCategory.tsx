import React, { memo, FC } from 'react';
import { View, Text } from 'react-native';
import colors from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export type FoodCategoryProps = {
  id: number;
  content: string;
  icon: Element;
}
const FoodCategory: FC<FoodCategoryProps> = memo(() => {
  return (
    <View className="flex flex-row items-center space-x-1 px-1 container h-[50px] max-w-[130px]  bg-[#B73E3E] rounded-[30px]">
      <View className="flex flex-row items-center justify-center h-[45px] w-[45px] bg-white rounded-full">
        <MaterialCommunityIcons
          name="food-variant"
          size={24}
          color={colors.primary}
        />
      </View>
      <Text className="text-white text-[11px] max-w-[60px] font-semibold">
        Traditional Food
      </Text>
    </View>
  );
});

export default FoodCategory;
