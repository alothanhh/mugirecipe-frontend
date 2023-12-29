import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Scanning';
import { ScanningScreens } from './index';

export type ScanningStackParamList = {
  [ScanningScreens.SCANNING]: undefined;
};

const Stack = createNativeStackNavigator<ScanningStackParamList>();

const ScanningContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScanningScreens.SCANNING}
        component={Profile}
        options={{ headerShown: false,}}
      />
    </Stack.Navigator>
  );
};

export default ScanningContainer;
