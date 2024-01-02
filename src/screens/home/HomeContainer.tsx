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

import RecipeContainer from '@/components/recipes/RecipeContainer';
import Detail from '@/components/recipes/detail/Detail';
import Review from '@/components/recipes/detail/reviews/Reviews';

import Arrow from '../../../assets/images/common/Arrow';


export type HomeStackParamList = {
  [HomeScreens.HOME]: undefined;
  [HomeScreens.TRENDING]: undefined;
  [HomeScreens.NOTIFICATION]: undefined;
  [HomeScreens.SEARCH]: undefined;
  [HomeScreens.DETAIL]: {id: string} | undefined;
  [HomeScreens.REVIEW]: undefined;
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
          // headerLeft: () => <Arrow onPress={() => navigation.goBack()} />,
        }}
      />
      <Stack.Screen
        name={HomeScreens.NOTIFICATION}
        component={NotificationScreen}
        options={{
          ...HeaderStyles,
          // headerLeft: () => <Arrow onPress={() => navigation.goBack()} />,
        }}
      />
      <Stack.Screen
        name={HomeScreens.SEARCH}
        component={SearchScreen}
        options={{
          ...HeaderStyles,
          headerTitle: 'Search/Scanning results',
        }}
      />
      <Stack.Screen name={HomeScreens.DETAIL} component={Detail} options={{headerTitle: "", headerShown: true}}/>
      <Stack.Screen name={HomeScreens.REVIEW} component={Review} options={{headerTitle: "", headerShown: true}}/>
      {/* <Stack.Screen name={HomeScreens.DETAIL} component={RecipeContainer} options={{headerTitle: "", headerShown: false}}/> */}
    </Stack.Navigator>
  );
};

export default HomeContainer;
