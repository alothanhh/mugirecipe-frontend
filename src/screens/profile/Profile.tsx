import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '@/constants/colors';
import UnauthorizedOverlay from '../overlay/UnauthorizedOverlay';
//Navigation import
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { useAuthContext } from '@/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = (props: any) => {
  const { isAuthenticated } = useAuthContext();
  // const [isAuthenticated, setIsAuthenticated] = useState<string | null>('');

  // useEffect(() => {
  //   const getToken = async () => {
  //     const token = await AsyncStorage.getItem('token');
  //     setIsAuthenticated(token);
  //   };
  //   getToken();
  // }, []);
  // console.log(`token = ${isAuthenticated}`);
  if (!isAuthenticated) {
    return <UnauthorizedOverlay />;
  }
  return (
    <View style={{ margin: 25, marginTop: 50 }}>
      <Text style={styles.titleText}>
        My Profile
        {'\n'}
      </Text>
      <Text style={styles.subTitleText}>Personal Detail</Text>
      <View
        style={{
          backgroundColor: colors.white,
          padding: 15,
          borderRadius: 30,
          marginTop: 10,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Image
              source={require('../../../assets/images/avatar.jpg')}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
          >
            <Text style={styles.subTitleText}>Dang Quang Thanh</Text>
            <Text style={styles.textInfo}>thanh.dg@hcmut.edu.vn</Text>
            <View
              style={{
                borderBottomColor: colors.darkgray,
                borderBottomWidth: 1,
                margin: 3,
              }}
            ></View>
            <Text style={styles.textInfo}>+84 9011039271</Text>
            <View
              style={{
                borderBottomColor: colors.darkgray,
                borderBottomWidth: 1,
                margin: 3,
              }}
            ></View>
            <Text style={styles.textInfo}>
              I am a com-sci student {'\n'}with a strong passion for {'\n'}
              cooking
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => props.navigation.navigate('EditProfile')}
        >
          <Text
            style={{
              color: colors.white,
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChangePassword')}
        style={{
          backgroundColor: colors.white,
          padding: 20,
          borderRadius: 30,
          marginTop: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text style={[styles.subTitleText, {}]}>Change Password</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios/50/more-than.png' }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMargin: {
    padding: '10px',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    // fontFamily: 'Poppins-Medium',
    fontSize: 27,
    fontWeight: '600', //bold
  },
  subTitleText: {
    fontSize: 18,
    fontWeight: '500',
  },
  textInfo: {
    color: colors.darkgray,
    fontSize: 16,
    fontWeight: '500',
    padding: 3,
  },
  buttonStyle: {
    backgroundColor: colors.lightred,
    borderRadius: 30,
    padding: 15,
    width: '70%',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Profile;
