import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// Screens
import HomeScreen from './Home';
import TrendingScreen from './Trending';
import NotificationScreen from '../notification/Notification';
import SearchScreen from '../search/Search';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderStyles } from '@/styles/globalStyles';
// Types
import { HomeScreens } from './index';
export type HomeStackParamList = {
  [HomeScreens.HOME]: undefined;
  [HomeScreens.TRENDING]: undefined;
  [HomeScreens.NOTIFICATION]: undefined;
  [HomeScreens.SEARCH]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeContainer = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={HomeScreens.HOME}>
      <Stack.Screen
        name={HomeScreens.HOME}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="black"
              onPress={() => navigation.navigate(HomeScreens.NOTIFICATION)}
            />
          ),
          ...HeaderStyles,
        })}
      />
      <Stack.Screen
        name={HomeScreens.TRENDING}
        component={TrendingScreen}
        options={{
          ...HeaderStyles,
        }}
      />
      <Stack.Screen
        name={HomeScreens.NOTIFICATION}
        component={NotificationScreen}
        options={{
          ...HeaderStyles,
        }}
      />
      <Stack.Screen
        name={HomeScreens.SEARCH}
        component={SearchScreen}
        options={{
          ...HeaderStyles,
          headerTitle: "Search/Scanning results"
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeContainer;
