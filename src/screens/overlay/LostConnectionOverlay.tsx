import React, { memo, FC } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import LostConnectionImage from '../../../assets/images/overlay/LostConnectionImage';
import CustomButton from '@/components/common/CustomButton';
import ScreenWrapper from '@/components/common/ScreenWrapper';
const LostConnectionOverlay = memo(() => {
  return (
    <SafeAreaView className="my-auto">
      <ScreenWrapper>
        <View className="flex flex-row justify-center">
          <LostConnectionImage />
        </View>
        <View className="space-y-2">
          <Text className="text-center text-[25px] font-semibold">
            No internet Connection
          </Text>
          <Text className="text-center opacity-50">
            Your internet connection is currently not available please check or
            try again.
          </Text>
        </View>
        <View className="mt-4">
          <CustomButton containerStyle="mx-auto">Try again</CustomButton>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default LostConnectionOverlay;
