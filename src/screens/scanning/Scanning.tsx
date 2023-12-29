import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef, memo, FC } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import colors from '@/constants/colors';

import { MaterialIcons } from '@expo/vector-icons';
import { ScanningScreens } from '.';

export type ScanningProps = {
  navigation: any;
};

const Scanning: FC<ScanningProps> = memo(({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  // const [preview, setPreview] = useState();

  const ref = useRef(null)

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const _takePhoto = async () => {
    if (ref.current) {
      const photo = await (ref.current as any).takePictureAsync();
      // console.log(photo)
      // setUri(photo.uri);
      navigation.navigate(ScanningScreens.PREVIEW, {
        data: photo.uri
      })
    } else {
      console.error('Ref is null.');
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
          <View style={styles.listButton}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <MaterialIcons name="flip-camera-android" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="add-photo-alternate" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.snapphoto}
          onPress={_takePhoto}
        >
          <Text style={styles.text}>Snap Photo</Text>
        </TouchableOpacity>
      </Camera>
      {/* Preview Image */}
      {/* <Image
        className="w-[208px] h-[204px] rounded-[15px]"
        source={{
          uri: uri
        }}
      /> */}
    </View>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'transparent',
    // alignContent: 'center',
    marginTop: 200,
    // marginBottom: 64,
    marginLeft: 15,
    marginRight: 15,
  },
  listButton: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    // backgroundColor: 'red'
  },
  snapphoto: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightred,
    marginBottom: 70,
    padding: 15,
    borderRadius: 20,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightred,
    margin: 5,
    padding: 15,
    borderRadius: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});


export default Scanning;
