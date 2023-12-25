import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import colors from '@/constants/colors';

const Settings = () => {
  return (
    <View style={{ margin: 25, marginTop: 50 }}>
      <Text style={styles.titleText}>
        Settings
        {'\n'}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{
          backgroundColor: colors.white,
          width: 370,
          padding: 20,
          borderRadius: 30,
          marginTop: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Text style={[styles.subTitleText, {}]}>Languages</Text>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/more-than.png' }}
            style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: colors.white,
          width: 370,
          padding: 20,
          borderRadius: 30,
          marginTop: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Text style={[styles.subTitleText, {}]}>Policy</Text>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/more-than.png' }}
            style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
        // onPress={() =>
        //   props.navigation.navigate('EditProfile')
        // }
        >
          <Text style={{
            color: colors.white,
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '500',
          }}>Log out</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10
  }
});

export default Settings;
