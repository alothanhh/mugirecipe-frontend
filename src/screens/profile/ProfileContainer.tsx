import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import { ProfileScreens } from './index';

export type ProfileStackParamList = {
  [ProfileScreens.PROFILE]: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ProfileScreens.PROFILE} component={Profile} options={{
        headerTitle: "My Profile"
      }} />
    </Stack.Navigator>
  );
};

export default ProfileContainer;
