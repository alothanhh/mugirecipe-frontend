import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Scanning';
import { ScanningScreens } from './index';
import Preview from './Preview';
import SearchScreen from '../search/Search';

import { HeaderStyles } from '@/styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

import Arrow from '../../../assets/images/common/Arrow';

export type ScanningStackParamList = {
  [ScanningScreens.SCANNING]: undefined;
  [ScanningScreens.PREVIEW]: undefined;
  [ScanningScreens.SEARCH]: undefined;
};

const Stack = createNativeStackNavigator<ScanningStackParamList>();

const ScanningContainer = () => {
  const navigation = useNavigation();
  
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
        name={ScanningScreens.SEARCH}
        component={SearchScreen}
        options={{
          ...HeaderStyles,
          // headerLeft: () => <Arrow onPress={() => navigation.goBack()} />,
          headerTitle: 'Scanning results',
        }}
      />
    </Stack.Navigator>
  );
};

export default ScanningContainer;
