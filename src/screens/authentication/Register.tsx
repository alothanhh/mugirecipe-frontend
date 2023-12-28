import colors from '@/constants/colors';
import React, { FC, memo, useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context'; // avoid status bar bugs
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Pressable,
  SafeAreaView,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AuthenticationScreens } from '.';
// components
import ScreenWrapper from '@/components/common/ScreenWrapper';
import GoogleLogo from '../../../assets/images/auth/GoogleLogo';
import CustomTextInput from '@/components/common/CustomTextInput';
import CustomButton from '@/components/common/CustomButton';
import TitleContainer from './components/TitleContainer';

export type RegisterProps = {
  navigation: any;
};

const Register: FC<RegisterProps> = memo(({ navigation }) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenWrapper>
        <TitleContainer title="Sign Up" />
        {/* Input container */}
        <View className="space-y-3 mt-3">
          <View>
            <CustomTextInput placeholder="Email" />
          </View>
          <View>
            <CustomTextInput placeholder="Username" />
          </View>
          <View>
            <CustomTextInput placeholder="Password">
              <Pressable
                onPress={() => setIsHiddenPassword((prev) => !prev)}
                className=""
              >
                {isHiddenPassword ? (
                  <AntDesign name="eye" size={24} color={colors.darkgray} />
                ) : (
                  <Entypo
                    name="eye-with-line"
                    size={24}
                    color={colors.darkgray}
                  />
                )}
              </Pressable>
            </CustomTextInput>
          </View>
          <View>
            <Text className="text-black opacity-50 text-[13px] text-center">
              By signing up I accept the{' '}
              <Text className="underline">terms of use</Text> and the
              <Text className="underline">data privacy policy.</Text>
            </Text>
          </View>

          <View className="mx-auto">
            <CustomButton>Sign Up</CustomButton>
          </View>
        </View>
        <View className="mx-auto mt-4">
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
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default Register;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
