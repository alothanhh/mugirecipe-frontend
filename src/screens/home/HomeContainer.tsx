import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { HomeScreens } from './index';

export type HomeStackParamList = {
  [HomeScreens.HOME]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HomeScreens.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeContainer;
