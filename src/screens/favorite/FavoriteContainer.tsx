import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from './Favorite';
import {FavoriteScreens} from "./index"

export type FavoriteStackParamList = {
  [FavoriteScreens.FAVORITE]: undefined;
};

const Stack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={FavoriteScreens.FAVORITE} component={Favorite} options={{
        headerTitle: "Favorite Recipes"
      }} />
    </Stack.Navigator>
  );
};

export default FavoriteContainer;
