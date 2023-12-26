import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Trending from './Trending';
import { HomeScreens } from './index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderStyles } from '@/styles/globalStyles';
export type HomeStackParamList = {
  [HomeScreens.HOME]: undefined;
  [HomeScreens.TRENDING]: undefined
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeScreens.HOME}
        component={Home}
        options={{
          headerRight: () => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="black"
            />
          ),
          ...HeaderStyles,
        }}
      />
      <Stack.Screen
        name={HomeScreens.TRENDING}
        component={Trending}
        options={{
          ...HeaderStyles,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeContainer;
