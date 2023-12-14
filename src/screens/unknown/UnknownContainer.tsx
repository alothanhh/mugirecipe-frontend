import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Unknown from './Unknown';
import { UnknownScreens } from './index';

export type UnknownStackParamList = {
  [UnknownScreens.UNKNOWN]: undefined;
};

const Stack = createNativeStackNavigator<UnknownStackParamList>();

const UnknownContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={UnknownScreens.UNKNOWN} component={Unknown} />
    </Stack.Navigator>
  );
};

export default UnknownContainer;
