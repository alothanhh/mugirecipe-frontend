import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { HomeScreens } from './index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export type HomeStackParamList = {
  [HomeScreens.HOME]: undefined;
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
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeContainer;
