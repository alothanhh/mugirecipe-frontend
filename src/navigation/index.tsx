import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreens } from '../screens';
import MainScreen from './Main';
import AuthenticationScreen from './Authentication';
import OnboardingScreen from '@/screens/onboarding/Onboarding';
import colors from '@/constants/colors';
export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.ONBOARDING]: undefined;
  [RootScreens.AUTHENTICATION]: undefined;
};

const NativeStack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.background} style="dark" />
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={RootScreens.MAIN}
      >
        <NativeStack.Screen
          name={RootScreens.ONBOARDING}
          component={OnboardingScreen}
        />
        <NativeStack.Screen
          name={RootScreens.AUTHENTICATION}
          component={AuthenticationScreen}
        />

        <NativeStack.Screen name={RootScreens.MAIN} component={MainScreen} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
