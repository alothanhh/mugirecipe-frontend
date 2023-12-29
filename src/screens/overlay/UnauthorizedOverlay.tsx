import React, { memo, FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UnauthorizedImage from '../../../assets/images/overlay/UnauthorizedImage';
import CustomButton from '@/components/common/CustomButton';
import ScreenWrapper from '@/components/common/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { HomeScreens } from '../home';
import { AuthenticationScreens } from '../authentication';
import { RootScreens } from '..';
const UnauthorizedOverlay = memo(() => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView className='my-auto'>
      <ScreenWrapper>
        <UnauthorizedImage />
        <Text className="text-center text-[25px] font-medium my-4">
          Log in or create account to save your favorites recipes
        </Text>
        <View className="space-y-4">
          <View>
            <CustomButton
              containerStyle="w-[90%] mx-auto"
              onPress={() => navigation.navigate(RootScreens.AUTHENTICATION)}
            >
              Login
            </CustomButton>
          </View>
          <View>
            <CustomButton
              containerStyle="w-[90%] mx-auto"
              onPress={() => navigation.navigate(RootScreens.MAIN, {
                screen: "HomeTab"
              })}
            >
              Go to Homepage
            </CustomButton>
          </View>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default UnauthorizedOverlay;
