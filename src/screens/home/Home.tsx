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
import CategorySection from './components/CategorySection';
import RecipeItemList from '@/components/recipes/RecipeItemList';
import SearchBar from '@/components/common/SearchBar';

// Types
import { HomeScreens } from '.';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import RecipeContainer from '@/components/recipes/RecipeContainer';

type HomeProps = {
  navigation: any;
};
const Home: FC<HomeProps> = memo(({ navigation }) => {
  // console.log(colors.white);
  // const whiteColor = `text-[${colors.white}]`;
  // const primaryColor = `text-[${colors.primary}]`;
  // console.log(whiteColor);
  const MAX_RENDER_ITEMS = 10;
  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* Inner container */}
      <ScreenWrapper>
        <SearchBar navigation={navigation} />
        {/* Categories container */}
        <View className="mt-3">
          <CategorySection />
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
