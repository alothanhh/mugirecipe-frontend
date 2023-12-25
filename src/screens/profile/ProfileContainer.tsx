import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import { ProfileScreens } from './index';
import EditProfile from './EditProfile';

export type ProfileStackParamList = {
  [ProfileScreens.PROFILE]: undefined;
  [ProfileScreens.EDIT_PROFILE]: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileContainer = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={ProfileScreens.PROFILE} component={Profile} />
        <Stack.Screen name={ProfileScreens.EDIT_PROFILE} component={EditProfile} />
      </Stack.Navigator>
  );
};

export default ProfileContainer;
