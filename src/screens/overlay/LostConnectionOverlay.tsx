import React, {memo, FC} from "react";
import { SafeAreaView, View, Text } from "react-native";
import UnauthorizedImage from '../../../assets/images/overlay/UnauthorizedImage';
import CustomButton from "@/components/common/CustomButton";
const LostConnectionOverlay = memo(() => {
  return (
    <SafeAreaView>
      <UnauthorizedImage />
      <Text className="text-center text-[25px] font-medium my-2">
        Log in or create account to save your favorites recipes
      </Text>
      <View className="space-y-2">
        <CustomButton>Login</CustomButton>
        <CustomButton>Go to Homepage</CustomButton>
      </View>
    </SafeAreaView>
  );
});

export default LostConnectionOverlay;