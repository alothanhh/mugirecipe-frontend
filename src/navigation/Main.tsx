import React, { FC } from 'react';
import { View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeContainer from '@/screens/home/HomeContainer';
import FavoriteContainer from '@/screens/favorite/FavoriteContainer';
import ProfileContainer from '@/screens/profile/ProfileContainer';
import SettingsContainer from '@/screens/settings/SettingsContainer';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import colors from '@/constants/colors';
import ScanningContainer from '@/screens/scanning/ScanningContainer';
const Tab = createBottomTabNavigator();

type ScanningButtonTypes = {
  children: React.ReactNode;
  onPress(): void | undefined;
};
const ScanningButton: FC<ScanningButtonTypes> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -25,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: colors.lightred,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'HomeTab':
              return (
                <View
                  className={`${
                    focused &&
                    'flex items-center justify-center bg-[#F2F2F2] rounded-full h-[37.5px] w-[37.5px]'
                  }`}
                >
                  <Ionicons name="home-outline" size={24} color={color} />
                </View>
              );
            case 'FavoriteTab':
              return (
                <View
                  className={`${
                    focused &&
                    'flex items-center justify-center bg-[#F2F2F2] rounded-full h-[37.5px] w-[37.5px]'
                  }`}
                >
                  <Ionicons name="heart-outline" size={24} color={color} />
                </View>
              );
            case 'ProfileTab':
              return (
                <View
                  className={`${
                    focused &&
                    'flex items-center justify-center bg-[#F2F2F2] rounded-full h-[37.5px] w-[37.5px]'
                  }`}
                >
                  <AntDesign name="questioncircleo" size={24} color={color} />
                </View>
              );

            case 'ScanningTab':
              return <Feather name="camera" size={24} color="#FFFFFF" />;
            case 'SettingsTab':
              return (
                <View
                  className={`${
                    focused &&
                    'flex items-center justify-center bg-[#F2F2F2] rounded-full h-[37.5px] w-[37.5px]'
                  }`}
                >
                  <Ionicons
                    name="ios-settings-outline"
                    size={24}
                    color={color}
                  />
                </View>
              );
          }
        },
        headerShown: false,
        tabBarLabelStyle: {
          // fontFamily: 'montserrat-regular',
          paddingBottom: 0,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.darkgray,
        tabBarActiveTintColor: colors.lightred,
        // tabBarActiveBackgroundColor: '#ccc',
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
        options={{ title: 'Favorite' }}
      />
      <Tab.Screen
        name="ScanningTab"
        component={ScanningContainer}
        options={{
          tabBarButton: (props: any) => <ScanningButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileContainer}
        options={{ title: 'Profile' }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsContainer}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

export default Main;
