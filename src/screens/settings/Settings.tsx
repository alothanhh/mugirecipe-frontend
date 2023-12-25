import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import colors from '@/constants/colors';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';

const Settings = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
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
          }}
            onPress={handlePresentModalPress}>
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
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View>
            <Text style={[styles.subTitleText, { paddingLeft: 15, marginBottom: 10 }]}>Select language</Text>
          </View>
          <View style={{ backgroundColor: colors.lightgray, height: '100%' }}>
            <Text style={styles.label}>Recent</Text>
            <View style={{ backgroundColor: 'white', padding: 15, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={[styles.subTitleText, { color: colors.green }]}>English</Text>
              <AntDesign name="checkcircleo" size={24} color={colors.green} />
            </View>
            <Text style={styles.label}>All languages</Text>
            <View style={{ backgroundColor: 'white', paddingTop: 10, height: '100%' }}>
              <Text style={[styles.subTitleText, { paddingLeft: 15, marginBottom: 10 }]}>Vietnamese</Text>
            </View>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
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
  },
  label: {
    color: colors.darkgray,
    paddingLeft: 15,
    marginBottom: 5,
    marginTop: 10
  }
});

export default Settings;
