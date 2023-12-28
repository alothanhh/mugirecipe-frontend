import colors from '@/constants/colors';
import React, { FC, memo, useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context'; // avoid status bar bugs
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';

import { AuthenticationScreens } from '.';
// components
import ScreenWrapper from '@/components/common/ScreenWrapper';
import CustomTextInput from '@/components/common/CustomTextInput';
import CustomButton from '@/components/common/CustomButton';
import TitleContainer from './components/TitleContainer';

export type ForgotPasswordProps = {
  navigation: any;
};

const ForgotPassword: FC<ForgotPasswordProps> = memo(({ navigation }) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenWrapper>
        <TitleContainer title="Forgot Password" />
        {/* Input container */}
        <View className="space-y-4 mt-4">
          <View>
            <CustomTextInput placeholder="Enter your email" />
          </View>
          <View className="flex flex-row justify-between">
            <CustomButton containerStyle="w-[55%]">Reset Password</CustomButton>
            <CustomButton
              containerStyle="w-[40%] border-2 border-[#8B1A10] bg-white"
              inputStyle="text-[#8B1A10]"
            >
              Login
            </CustomButton>
          </View>
        </View>
        {/* <View className="mx-auto mt-4">
          <Text className="text-[16px] text-center">
            Already have an account?
          </Text>
          <Pressable
            onPress={() => navigation.navigate(AuthenticationScreens.LOGIN)}
          >
            <Text className="text-[16px] uppercase text-[#8B1A10] text-center">
              LOG IN HERE
            </Text>
          </Pressable>
        </View> */}
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default ForgotPassword;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
