import React, { FC, memo, useState } from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import colors from '@/constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RecipeParamList } from './RecipeContainer';
import { RecipeScreens } from '.';
import { HomeStackParamList } from '@/screens/home/HomeContainer';
import { HomeScreens } from '@/screens/home';

export type RecipeItemProps = {
  id: string;
  image: string;
  name: string;
  numOfRating: number;
  numOfView: number;
  isFavorite?: boolean;
};

const useAppNavigation = () => {
  return useNavigation<NavigationProp<HomeStackParamList>>();
}

const RecipeItem: FC<RecipeItemProps> = memo(
  ({ id, image, name, numOfRating, numOfView, isFavorite }) => {

    const navigate = useAppNavigation();

    const [isFavoriteItem, setIsFavoriteItem] = useState(isFavorite);
    const toggleFavoriteItemHandler = () => {
      setIsFavoriteItem((prev) => !prev);
    };
    return (
      <TouchableOpacity className="bg-white rounded-[15px] w-full h-[132px] px-3" onPress={() => navigate.navigate(HomeScreens.DETAIL, { id: id })}>
        {/* Inner Container */}
        <View className="flex flex-row justify-between items-start space-x-2  my-auto">
          {/* Image container */}
          <View>
            {
              Platform.OS === 'ios' ?
                <Image
                  className="h-[107px] w-[145px] rounded-[15px]"
                  source={{
                    uri: image,
                  }}
                /> : <Image
                  className="h-[107px] w-[131px] rounded-[15px]"
                  source={{
                    uri: image,
                  }}
                />
            }
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
              {isFavoriteItem ? (
                <AntDesign
                  name="heart"
                  size={16}
                  color={colors.primary}
                  onPress={toggleFavoriteItemHandler}
                />
              ) : (
                <AntDesign
                  name="hearto"
                  size={16}
                  color="black"
                  onPress={toggleFavoriteItemHandler}
                />
              )}
              <FontAwesome name="share" size={16} color="black" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

export default RecipeItem;
