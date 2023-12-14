import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '@/screens/home/HomeContainer';
import FavoriteContainer from '@/screens/favorite/FavoriteContainer';
import UnknownContainer from '@/screens/unknown/UnknownContainer';
import ProfileContainer from '@/screens/profile/ProfileContainer';
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeContainer}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="FavouriteTab"
        component={FavoriteContainer}
        options={{ title: 'Favorite' }}
      />
      <Tab.Screen
        name="TradingTab"
        component={UnknownContainer}
        options={{ title: 'Unknown' }}
      />
      <Tab.Screen
        name="AccountTab"
        component={ProfileContainer}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default Main;
