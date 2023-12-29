import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from './Favorite';
import {FavoriteScreens} from "./index"
import { HeaderStyles } from '@/styles/globalStyles'; 
export type FavoriteStackParamList = {
  [FavoriteScreens.FAVORITE]: undefined;
};

const Stack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FavoriteScreens.FAVORITE}
        component={FavoriteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteContainer;
