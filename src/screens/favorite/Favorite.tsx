import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SearchBar from '@/components/common/SearchBar';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import FavoriteItemList from './components/FavoriteItemList';
const Favorite = () => {
  return (
    <SafeAreaView>
      <ScreenWrapper>
        <View className="space-y-2">
          <View>
            <SearchBar />
          </View>
          <View>
            <FavoriteItemList />
          </View>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
};

export default Favorite;
