import React, { memo, FC } from 'react';
import { Platform, TouchableOpacity, Text, View } from 'react-native';
import colors from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type FoodCategoryProps = {
  content: string;
  icon: any;
  onPress: () => void;
  isTargeted: boolean;
}

const FoodCategory: FC<FoodCategoryProps> = memo(({ content, icon, onPress, isTargeted }) => {
  return (
    <View className="">
      {Platform.OS === 'ios' ?
        <TouchableOpacity
          onPress={onPress}
          className={`flex flex-row items-center space-x-2 px-1 pr-3 container ${isTargeted && 'h-[50px] max-w-[135px]  bg-[#B73E3E] rounded-[30px]'
            } `}
        >
          <View
            className={`flex flex-row items-center justify-center h-[45px] w-[45px] ${isTargeted && ' bg-white rounded-full'
              }`}
          >
            {/* <MaterialCommunityIcons
          name="food-variant"
          size={24}
          color={colors.primary}
        /> */}
            {icon}
          </View>
          {isTargeted && (
            <Text className="text-white text-[11px] max-w-[80px] font-semibold">
              {content}
            </Text>
          )}
        </TouchableOpacity> 
        :
        <TouchableOpacity
          onPress={onPress}
          className={`flex flex-row items-center space-x-1 px-1 container ${isTargeted && 'h-[50px] max-w-[135px]  bg-[#B73E3E] rounded-[30px]'
            } `}
        >
          <View
            className={`flex flex-row items-center justify-center h-[45px] w-[45px] ${isTargeted && ' bg-white rounded-full'
              }`}
          >
            {/* <MaterialCommunityIcons
          name="food-variant"
          size={24}
          color={colors.primary}
        /> */}
            {icon}
          </View>
          {isTargeted && (
            <Text className="text-white text-[11px] max-w-[60px] font-semibold">
              {content}
            </Text>
          )}
        </TouchableOpacity>}
    </View>
  );
});

export default FoodCategory;
