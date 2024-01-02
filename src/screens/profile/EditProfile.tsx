import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import colors from '@/constants/colors';


const EditProfile = () => {
  const [name, onChangeName] = React.useState('Dang Quang Thanh');
  const [email, onChangeEmail] = React.useState('thanh.dg@hcmut.edu.vn');
  const [phone, onChangePhone] = React.useState('0337268100');
  const [description, onChangeDescription] = React.useState('I am a com-sci student with a strong passion for cooking');

  return (
    <View style={{ margin: 25,  marginTop: 50 }}>
      <Text style={styles.titleText}>
        Edit Profile
        {'\n'}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../../assets/images/avatar.jpg')}
          style={{ width: 120, height: 120, borderRadius: 100 }}
        />
        <SafeAreaView style={{ marginTop: 15 }}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            multiline
            style={[styles.input, { height: 100 }]}
            onChangeText={onChangeDescription}
            value={description}
          // placeholder="useless placeholder"
          />
        </SafeAreaView>
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
          }}>Save</Text>
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
    fontFamily: 'Poppins',
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
    backgroundColor: colors.lightred,
    borderRadius: 30,
    padding: 15,
    width: '70%',
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    height: 50,
    width: 350,
    // marginTop: 15,
    fontSize: 18,
    fontWeight: '500',
    // borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
  },
  label: {
    color: colors.darkgray,
    paddingLeft: 15,
    marginBottom: 5,
    marginTop: 10
  }
});

export default EditProfile;
