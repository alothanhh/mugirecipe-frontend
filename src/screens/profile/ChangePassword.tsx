import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, SafeAreaView, Pressable } from 'react-native';
import colors from '@/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ChangePassword = () => {
    const [currentPassword, onChangeCurrentPassword] = React.useState('123456789');
    const [newPassword, onChangeNewPassword] = React.useState('123456789');
    const [repeatPassword, onChangeRepeatPassword] = React.useState('123456789');

    // State variable to track password visibility 
    const [showPassword, setShowPassword] = React.useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={{ margin: 25, marginTop: 50 }}>
            <Text style={styles.titleText}>
                Change Password
                {'\n'}
            </Text>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../../assets/images/avatar.jpg')}
                    style={{ width: 120, height: 120, borderRadius: 100 }}
                />
                <SafeAreaView style={{ marginTop: 15 }}>
                    <Text style={styles.label}>Current Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeCurrentPassword}
                            value={currentPassword}
                            secureTextEntry={!showPassword}
                        />
                        <Pressable onPress={toggleShowPassword}>
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color={colors.lightred}
                            // style={styles.icon}
                            />
                        </Pressable>
                    </View>
                    <Text style={styles.label}>New Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNewPassword}
                            value={newPassword}
                            secureTextEntry={!showPassword}
                        />
                        <Pressable onPress={toggleShowPassword}>
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color={colors.lightred}
                            // style={styles.icon}
                            />
                        </Pressable>
                    </View>
                    <Text style={styles.label}>Repeat New Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeRepeatPassword}
                            value={repeatPassword}
                            secureTextEntry={!showPassword}
                        // keyboardType="numeric"
                        />
                        <Pressable onPress={toggleShowPassword}>
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color={colors.lightred}
                            // style={styles.icon}
                            />
                        </Pressable>
                    </View>
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
                    }}>Update Password</Text>
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
        marginTop: 25,
        marginBottom: 10
    },
    inputContainer: {
        backgroundColor: 'white',
        // width: '90%',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15
    },
    input: {
        height: 50,
        width: '95%',
        fontSize: 18,
        fontWeight: '500',
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

export default ChangePassword;
