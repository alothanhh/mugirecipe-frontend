import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Scanning';
import { ScanningScreens } from './index';
import Preview from './Preview';
import Result from './Result';

export type ScanningStackParamList = {
  [ScanningScreens.SCANNING]: undefined;
  [ScanningScreens.PREVIEW]: undefined;
  [ScanningScreens.RESULT]: undefined;
};

const Stack = createNativeStackNavigator<ScanningStackParamList>();

const ScanningContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScanningScreens.SCANNING}
        component={Profile}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name={ScanningScreens.PREVIEW}
        component={Preview}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name={ScanningScreens.RESULT}
        component={Result}
        options={{ headerTitle: "Scanning Result" }}
      />
    </Stack.Navigator>
  );
};

export default ScanningContainer;
