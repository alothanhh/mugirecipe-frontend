import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeContainer from '@/screens/home/HomeContainer';
import FavoriteContainer from '@/screens/favorite/FavoriteContainer';
import UnknownContainer from '@/screens/unknown/UnknownContainer';
import ProfileContainer from '@/screens/profile/ProfileContainer';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '@/constants/colors';
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'HomeTab':
              return <Ionicons name="home-outline" size={24} color={color} />;
            case 'FavoriteTab':
              return <Ionicons name="heart-outline" size={24} color={color} />;
            case 'UnknownTab':
              return (
                <AntDesign name="questioncircleo" size={24} color={color} />
              );

            case 'ProfileTab':
              return (
                <Ionicons name="ios-settings-outline" size={24} color={color} />
              );
          }
        },
        headerShown: false,
        tabBarLabelStyle: {
          // fontFamily: 'montserrat-regular',
          paddingBottom: 0,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.secondary,
        tabBarActiveTintColor: colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarVisibilityAnimationConfig: {},
        tabBarStyle: {
          // height: '%',
          paddingHorizontal: 40,
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeContainer}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteContainer}
        options={{ title: 'Favorite', headerTitle: "Favorite Recipes" }}
      />
      <Tab.Screen
        name="UnknownTab"
        component={UnknownContainer}
        options={{ title: 'Unknown' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileContainer}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default Main;
