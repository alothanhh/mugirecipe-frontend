import { HomeScreens } from '@/screens/home';
import { HomeStackParamList } from '@/screens/home/HomeContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC, memo } from 'react';
import { Platform, View, Image, Text, TouchableOpacity } from 'react-native';

export type CategoryItemProps = {
  id: string;
  content: string;
  image: string;
  lowerPrice: number;
  upperPrice: number;
  usdPrice: number;
};

const useAppNavigation = () => {
  return useNavigation<NavigationProp<HomeStackParamList>>();
}

const CategoryItem: FC<CategoryItemProps> = memo(
  ({ id, content, image, lowerPrice, upperPrice, usdPrice }) => {

    const navigate = useAppNavigation();

    return (
      <TouchableOpacity className="bg-white w-[243px] h-[338px] rounded-[15px]" onPress={() => navigate.navigate(HomeScreens.DETAIL, { id: id })}>
        {Platform.OS === 'ios' ?
          <View className="mx-auto my-4 w-[208px]">
            <View>
              <Image
                className="w-[208px] h-[204px] rounded-[15px]"
                source={{
                  uri: image
                }}
              />
            </View>
            <View className="flex flex-col space-y-[15px] mt-[5px]">
              <Text className="text-[19px] font-bold">
                {content.slice(0, 16) + "..."}
              </Text>
              <View>
                <Text className="font-semibold">
                  Price: {lowerPrice} VND - {upperPrice} VND
                </Text>
                <Text className="font-semibold">(from ${usdPrice} USD)</Text>
              </View>
            </View>
          </View> 
          :
          <View className="mx-auto my-auto w-[208px]">
            <View>
              <Image
                className="w-[208px] h-[204px] rounded-[15px]"
                source={{
                  uri: image
                }}
              />
            </View>
            <View className="flex flex-col space-y-[15px] mt-[5px]">
              <Text className="text-[19px] font-bold">
                {content.slice(0, 16) + "..."}
              </Text>
              <View>
                <Text className="font-semibold">
                  Price: {lowerPrice} VND - {upperPrice} VND
                </Text>
                <Text className="font-semibold">(from ${usdPrice} USD)</Text>
              </View>
            </View>
          </View>}
      </TouchableOpacity>
    );
  }
);

export default CategoryItem;
