import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './Settings';
import { SettingsScreens } from './index';

export type SettingsStackParamList = {
  [SettingsScreens.SETTINGS]: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SettingsScreens.SETTINGS} component={Settings} options={{
        headerTitle: "Settings"
      }} />
    </Stack.Navigator>
  );
};

export default SettingsContainer;
