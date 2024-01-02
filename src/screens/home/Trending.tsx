import React, {FC, memo, useLayoutEffect} from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import RecipeItemList from '@/components/recipes/RecipeItemList';
import SearchBar from '@/components/common/SearchBar';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import Arrow from '../../../assets/images/common/Arrow';

export type TrendingProps = {
  navigation: any;
}

const Trending: FC<TrendingProps> = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <Arrow
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => (
        <View></View>
      ),
    });
  }, [navigation]);

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
    marginTop: 30,
    backgroundColor: colors.background,
  },
});

export default Trending;
