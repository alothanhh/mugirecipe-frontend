import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef, memo, FC } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import colors from '@/constants/colors';
import axios from 'axios';
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

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '9f173c8077074ad78adc896d9dddc268';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'food-item-recognition';
    const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';
    const IMAGE_URL = 'https://www.thitbosi.com/uploads/files/2023/10/26/thumbs-1024-768-0/SP002120-PD02434-WEB_Loi-Vai-Bo-My-Steak-TP.png';

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "base64": data
                    }
                }
            }
        ]
    });

    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        }
    };
    
    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    
    const [result, setResult] = useState('');
    
    axios.post(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`, raw, requestOptions)
        .then(response => {
            setResult(response.data.outputs[0].data.concepts[0].name);
        })
        .catch(error => console.log('error', error));

    return (
        <View style={styles.container}>
            <Text style={[styles.subTitleText, { marginBottom: 10 }]}>
                Your detected ingredient
            </Text>
            {result === '' ? <ActivityIndicator size="large" style={{marginBottom: 10}} /> :
                <Text style={[styles.titleText, { marginBottom: 10 }]}>
                    {result}
                </Text>}
            {/* Preview Image */}
            <Image
                style={styles.preview}
                source={{ uri: `data:image/jpeg;base64,${data}` }}
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 60,
        height: '100%'
    },
    preview: {
        height: '75%',
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
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
    }
});


export default Preview;
