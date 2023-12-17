import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import colors from '@/constants/colors';
// import avatar from '../../../assets/images/avatar.jpg'

const Profile = () => {
  return (
    <View style={{ margin: 25 }}>
      <Text style={styles.titleText}>
        My Profile
        {'\n'}
      </Text>
      <Text style={styles.subTitleText}>Personal Detail</Text>
      <View style={{
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 30,
        marginTop: 10,
        // justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <View style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
            <Image
              source={require('../../../assets/images/avatar.jpg')}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <Text style={styles.subTitleText}>Tran Duc Tuan</Text>
            <Text style={styles.textInfo}>tranductuan@gmail.com</Text>
            <View style={{
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              margin: 3
            }}>
            </View>
            <Text style={styles.textInfo}>+84 9011039271</Text>
            <View style={{
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              margin: 3
            }}>
            </View>
            <Text style={styles.textInfo}>I am a com-sci student {'\n'}with a strong passion for {'\n'}cooking</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => { }}  >
          <Text style={{
            color: '#FFFFFF',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '500',
          }}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row'
      }}>
        <Text style={[styles.subTitleText,{}]}>Change Password</Text>
        <Image source={{uri: 'https://img.icons8.com/ios/50/more-than.png'}}
       style={{width: 30, height: 30}} />
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
    fontSize: 27,
    fontWeight: '600', //bold
  },
  subTitleText: {
    fontSize: 18,
    fontWeight: '500',
  },
  textInfo: {
    color: '#BEBEBE',
    // alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    padding: 3,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    padding: 15,
    width: '50%',
    marginTop: 20,
    marginBottom: 10
  }
});

export default Profile;
