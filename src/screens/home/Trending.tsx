import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import RecipeItemList from '@/components/recipes/RecipeItemList';
import SearchBar from '@/components/common/SearchBar';
import ScreenWrapper from '@/components/common/ScreenWrapper';
const Trending = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenWrapper>
        <SearchBar />
        <View className="mt-2">
          <RecipeItemList />
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
