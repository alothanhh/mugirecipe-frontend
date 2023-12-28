import React, { memo, FC } from 'react';
import colors from '@/constants/colors';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import FoodCategoryList from '@/components/categories/FoodCategoryList';
import CategoryItemList from '@/components/categories/CategoryItemList';
import RecipeItemList from '@/components/recipes/RecipeItemList';
import SearchBar from '@/components/common/SearchBar';

// Types
import { HomeScreens } from '.';
import ScreenWrapper from '@/components/common/ScreenWrapper';
// APIs
import {fetchRecipeItems} from "../../apis/recipes/index";
import {useQuery} from "@tanstack/react-query";

type HomeProps = {
  navigation: any;
};
const Home: FC<HomeProps> = memo(({ navigation }) => {
  console.log(colors.white);
  // const whiteColor = `text-[${colors.white}]`;
  // const primaryColor = `text-[${colors.primary}]`;
  // console.log(whiteColor);

  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* Inner container */}
      <ScreenWrapper
      >
        <SearchBar />
        {/* Categories container */}
        <View className="space-y-2 mt-2">
          {/* Category types */}

          <View>
            <FoodCategoryList />
          </View>
          <View>
            <CategoryItemList />
          </View>
        </View>
        {/* Trending Container */}
        <View className="mt-2 space-y-1">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[22px] font-semibold">Treding Recipes</Text>
            <Pressable
              onPress={() => navigation.navigate(HomeScreens.TRENDING)}
            >
              <Text className="font-light text-[18px] text-[#B73E3E]">
                See all
              </Text>
            </Pressable>
          </View>
          {/* Recipe Item */}
          <View>
            <RecipeItemList />
          </View>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
export default Home;
