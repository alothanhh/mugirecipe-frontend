import React, {FC, memo} from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import RecipeItemList from '@/components/recipes/RecipeItemList';
import SearchBar from '@/components/common/SearchBar';
import ScreenWrapper from '@/components/common/ScreenWrapper';

export type TrendingProps = {
  navigation: any;
}

const Trending: FC<TrendingProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenWrapper>
        <SearchBar navigation={navigation} />
        <View className="mt-2">
          <RecipeItemList numOfItems={null} />
          {/* <RecipeItemList /> */}
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Trending;
