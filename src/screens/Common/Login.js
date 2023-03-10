import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

import LoginImg from "../../../assets/LoginImg.png"
import GlobalStyle from '../../styles/GlobalStyle'
import { PrimaryColor, SecondaryColor } from '../../utils/Colors'



const Login = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(true)

    return (
        <>
            <SafeAreaLayout statusBarType="primary">
                <PrimaryStatusBar />
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image source={LoginImg} style={styles.topImg} />
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>Log in</Text>
                        <Text style={styles.subHeading}>Please enter your personal information and create password.</Text>
                        <View style={{ ...styles.inputGroup, marginTop: 30, marginBottom: 20 }}>
                            <View style={styles.inputLabelBox}>
                                <Feather name="users" size={15} />
                                <Text style={styles.inputLabel}>Username</Text>
                            </View>
                            <View style={styles.textInputBox}>
                                <TextInput placeholder='Enter username here' style={styles.textInput} />
                            </View>
                        </View>
                        <View style={styles.inputGroup}>
                            <View style={styles.inputLabelBox}>
                                <SimpleLineIcons name="lock" size={15} />
                                <Text style={styles.inputLabel}>Password</Text>
                            </View>
                            <View style={styles.textInputBox}>
                                <TextInput
                                    placeholder='Enter username here'
                                    style={styles.textInput}
                                    name="password"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry={showPassword ? true : false}
                                    enablesReturnKeyAutomatically
                                />
                                {
                                    showPassword ? <Feather name="eye-off" size={15} onPress={() => setShowPassword(false)} /> : <Feather name="eye" size={15} onPress={() => setShowPassword(true)} />
                                }
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                                <Text style={styles.forgetPasswordTxt}>Forget password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.navigate("Connect")}>
                                <Text style={{ color: "white" }}>Log in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                <Text style={styles.registerText}>New here?
                                    <Text style={styles.registerSubText}> Register here</Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={GlobalStyle.primaryBtnOutline}>
                                <Text style={{ color: PrimaryColor }}>Scan face to  Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        flex: 1
    },
    topImg: {
        // width: "100%"
    },
    bottom: {
        flex: 2,
        backgroundColor: "#F8FFFF",
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 25,
    },
    heading: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "600"
    },
    subHeading: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "300",
        marginTop: 10
    },
    inputGroup: {},
    inputLabelBox: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: "400",
        marginLeft: 10
    },
    textInputBox: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#FFFFFF",
        borderRadius: 9999,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        color: "#AFAFAF",
        fontSize: 10,
        fontWeight: "400",
    },
    forgetPasswordTxt: {
        textAlign: "right",
        fontSize: 10,
        fontWeight: "300",
        marginTop: 10,
        marginBottom: 25
    },
    buttonWrapper: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        width: "80%",
        alignSelf: "center"
    },
    registerText: {
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
        marginVertical: 12
    },
    registerSubText: {
        color: SecondaryColor,
        textDecorationStyle: "solid",
        textDecorationLine: "underline"
    }
})

export default Login