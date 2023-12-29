import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationScreens } from '@/screens/authentication';
import LoginScreen from '@/screens/authentication/Login';
import RegisterScreen from '@/screens/authentication/Register';
import ForgetPasswordScreen from '@/screens/authentication/ForgetPassword';
import Home from '@/screens/home/Home';
import { HeaderStyles } from '@/styles/globalStyles';
import Arrow from '../../assets/images/common/Arrow';
import { useNavigation } from '@react-navigation/native';
export type AuthenticationStackParamList = {
  [AuthenticationScreens.LOGIN]: undefined;
  [AuthenticationScreens.REGISTER]: undefined;
  [AuthenticationScreens.FORGETPASSWORD]: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationContainer = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={AuthenticationScreens.LOGIN}>
      <Stack.Screen
        name={AuthenticationScreens.LOGIN}
        component={LoginScreen}
        options={{
          ...HeaderStyles,
          headerTitle: '',
          headerLeft: () => (
            <Arrow onPress={() => navigation.goBack()}/>
          ),
        }}
      />
      <Stack.Screen
        name={AuthenticationScreens.REGISTER}
        component={RegisterScreen}
        options={({ navigation }) => ({
          ...HeaderStyles,
          headerTitle: '',
          headerLeft: () => <Arrow onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name={AuthenticationScreens.FORGETPASSWORD}
        component={ForgetPasswordScreen}
        options={({ navigation }) => ({
          ...HeaderStyles,
          headerTitle: '',
          headerLeft: () => <Arrow onPress={() => navigation.goBack()} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationContainer;
