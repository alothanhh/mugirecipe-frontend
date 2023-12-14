import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreens } from '../screens';
import MainScreen from './Main';

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.AUTHENTICATION]: undefined;
};

const NativeStack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" style="dark" />
      <NativeStack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* <NativeStack.Screen name={RootScreens.ONBOARDING} /> */}
        <NativeStack.Screen name={RootScreens.MAIN} component={MainScreen}/>
        {/* <NativeStack.Screen name={RootScreens.AUTHENTICATION} /> */}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
