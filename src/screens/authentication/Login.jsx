import colors from '@/constants/colors';
import React, { FC, memo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { HomeScreens } from '../home';
import { RootScreens } from '..';
import { useForm, Controller } from 'react-hook-form';
import { useAuthContext } from '@/context/AuthContext';
// APIs
import { login } from '@/apis/authentication';
// export type LoginProps = {
//   navigation: any;
// };

const Login = memo(({ navigation }) => {
  const { isAuthenticated, onLogin } = useAuthContext();
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: ``,
      password: ``,
    },
  });
  const submitHandler = async (data) => {
    const { email, password } = data;
    console.log(`click login button`);
    try {
      const token = await login(email);
      // console.log(`token = ${token}`);
      onLogin(token);
      console.log(`isAuthenticated = ${isAuthenticated}`);
      // console.log(`stored token = ${await AsyncStorage.getItem("token")}`);
      navigation.replace(RootScreens.MAIN);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScreenWrapper>
        <TitleContainer title="Login" />
        {/* Input container */}
        <View className="space-y-3 mt-3">
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholder="Email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text className="text-[#8B1A10] text-[13px]">
                This is required
              </Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  isPassword={isHiddenPassword}
                >
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
              )}
              name="password"
            />
            {errors.password && (
              <Text className="text-[#8B1A10] text-[13px]">
                This is required
              </Text>
            )}
          </View>
          <Pressable
            className="py-1 w-[50%]"
            onPress={() =>
              navigation.navigate(AuthenticationScreens.FORGETPASSWORD)
            }
          >
            <Text className="text-[14px] text-[#8B1A10]">
              Forgot your password?
            </Text>
          </Pressable>

          <View className="mx-auto">
            <CustomButton onPress={handleSubmit(submitHandler)}>
              Login
            </CustomButton>
          </View>
        </View>
        <View className="mx-auto mt-4">
          <Text className="text-[16px] text-center">
            Don't have an account?
          </Text>
          <Pressable
            onPress={() => navigation.navigate(AuthenticationScreens.REGISTER)}
          >
            <Text className="text-[16px] uppercase text-[#8B1A10] text-center">
              Sign up here
            </Text>
          </Pressable>
        </View>
        {/* Divider */}
        <View className="flex flex-row items-center my-2">
          <View className="flex-grow border-t border-black opacity-20 w-auto"></View>
          <Text className="px-3 text-black text-center -translate-y-0.5">
            or
          </Text>
          <View className="flex-grow border-t border-black opacity-20 w-auto"></View>
        </View>
        <View className="flex flex-row justify-center items-center w-full rounded-[70px] h-[60px] bg-white mt-2">
          <View>
            <GoogleLogo />
          </View>
          <View>
            <Text>Sign up with Google</Text>
          </View>
        </View>
      </ScreenWrapper>
    </SafeAreaView>
  );
});

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
