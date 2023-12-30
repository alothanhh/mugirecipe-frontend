import React, { FC, memo, useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SearchBar from '@/components/common/SearchBar';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import FavoriteItemList from './components/FavoriteItemList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UnauthorizedOverlay from '../overlay/UnauthorizedOverlay';

// export type FavoriteProps = {
//   navigation: any;
// };

const Favorite: FC = memo(() => {
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>('');

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(token);
    };
    getToken();
  }, [AsyncStorage.getItem]);
  // console.log(`token = ${isAuthenticated}`);
  if (!isAuthenticated) {
    return <UnauthorizedOverlay />;
  }
  return (
    <SafeAreaView className="mt-[50px]">
      <ScreenWrapper>
        <Text className="font-bold text-[27px]">
          Favorite Recipes
          {'\n'}
        </Text>
        <View className="space-y-4">
          <View>
            {/* <SearchBar /> */}
          </View>
          <View>
            <FavoriteItemList />
          </View>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default Favorite;
