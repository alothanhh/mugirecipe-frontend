import React, { FC, memo } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
export type CategoryItemProps = {
  content: string;
  image: string;
  lowerPrice: number;
  upperPrice: number;
  usdPrice: number;
};
const CategoryItem: FC<CategoryItemProps> = memo(
  ({ content, image, lowerPrice, upperPrice, usdPrice }) => {
    return (
      <TouchableOpacity className="bg-white w-[233px] h-[308px] rounded-[15px]">
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
        </View>
      </TouchableOpacity>
    );
  }
);

export default CategoryItem;
