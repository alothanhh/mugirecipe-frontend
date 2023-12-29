import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef, memo, FC } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import colors from '@/constants/colors';

import { MaterialIcons } from '@expo/vector-icons';

import { useRoute, RouteProp } from '@react-navigation/native';
import { ScanningScreens } from '.';

export type PreviewProps = {
    navigation: any;
};

type RootStackParamList = {
    Preview: { data: string };
};

const Preview: FC<PreviewProps> = memo(({ navigation }) => {
    // Use useRoute hook to get the route object
    // Access the data passed through navigation.navigate
    // const { data } = route.params;
    const route = useRoute<RouteProp<RootStackParamList, 'Preview'>>();

    const { data } = route.params;

    console.log(data);

    return (
        <View style={styles.container}>
            <Text style={[styles.subTitleText, { marginBottom: 10 }]}>
                Your detected ingredient
            </Text>
            <Text style={[styles.titleText, { marginBottom: 10 }]}>
                Chicken
            </Text>
            {/* Preview Image */}
            <Image
                // className="w-[208px] h-[204px] rounded-[15px]"
                style={styles.preview}
                source={{
                    uri: data
                }}
            />
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingLeft: 30, paddingRight: 30 }}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        navigation.navigate(ScanningScreens.SCANNING)
                    }
                >
                    <Text style={{
                        color: colors.white,
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: '500',
                    }}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        navigation.navigate(ScanningScreens.RESULT)
                    }
                >
                    <Text style={{
                        color: colors.white,
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: '500',
                    }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 60,
        height: '100%'
        // justifyContent: 'center',
    },
    preview: {
        height: '75%',
        // objectFit: 'scale-down'
        width: '100%',
        // borderRadius: 20
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
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
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 20,
        // marginBottom: 10
    }
});


export default Preview;
