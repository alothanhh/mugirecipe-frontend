import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import { ProfileScreens } from './index';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';

export type ProfileStackParamList = {
  [ProfileScreens.PROFILE]: undefined;
  [ProfileScreens.EDIT_PROFILE]: undefined;
  [ProfileScreens.CHANGE_PASSWORD]: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ProfileScreens.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ProfileScreens.EDIT_PROFILE}
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ProfileScreens.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileContainer;
