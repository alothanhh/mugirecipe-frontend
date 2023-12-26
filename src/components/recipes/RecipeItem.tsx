import React, { FC, memo } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import colors from '@/constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export type RecipeItemProps = {
  image: string;
  name: string;
  numOfRating: number;
  numOfView: number;
};

const RecipeItem: FC<RecipeItemProps> = memo(
  ({ image, name, numOfRating, numOfView }) => {
    return (
      <TouchableOpacity className="bg-white rounded-[15px] w-full h-[132px] px-3">
        {/* Inner Container */}
        <View className="flex flex-row justify-between items-start space-x-2  my-auto">
          {/* Image container */}
          <View>
            <Image
              className="h-[107px] w-[131px] rounded-[15px]"
              source={{
                uri: image,
              }}
            />
          </View>
          {/* Info container */}
          <View className="flex flex-col justify-between items-end h-[107px] ">
            <View className="flex flex-col justify-between">
              <Text className="text-[19px] font-medium text-wrap text-balance">
                {name.slice(0, 15) + '...'}
              </Text>
              {/* Star container */}
              <View className="flex flex-row items-center">
                <AntDesign name="star" size={15} color={colors.yellow} />
                <AntDesign name="star" size={15} color={colors.yellow} />
                <AntDesign name="star" size={15} color={colors.yellow} />
                <AntDesign name="star" size={15} color={colors.yellow} />
                <AntDesign name="star" size={15} color={colors.yellow} />
                <Text className="text-[13px] font-normal ">
                  ({numOfRating}) | {numOfView} view
                </Text>
              </View>
            </View>
            {/* Button container */}
            <View className="flex flex-row items-center justify-end space-x-2">
              <AntDesign name="hearto" size={16} color="black" />
              <FontAwesome name="share" size={16} color="black" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

export default RecipeItem;
