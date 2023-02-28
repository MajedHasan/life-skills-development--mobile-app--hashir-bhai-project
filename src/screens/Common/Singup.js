import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar, SecondaryStatusBar } from '../../components/StatusBars'
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

import FacebookImg from "../../../assets/Facebook.png"
import GoogleImg from "../../../assets/Google.png"
import TwitterImg from "../../../assets/Twitter.png"

import GlobalStyle from '../../styles/GlobalStyle'
import { PrimaryColor, SecondaryColor } from '../../utils/Colors'



const Signup = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(true)
    const [isChecked, setIsChecked] = useState(false)


    return (
        <>
            <SafeAreaLayout statusBarType="primary">
                <SecondaryStatusBar />
                <View style={styles.container}>
                    <View style={styles.top}>
                        <View style={styles.topBox}></View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>Create Account</Text>
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
                                <SimpleLineIcons name="envelope" size={15} />
                                <Text style={styles.inputLabel}>Email</Text>
                            </View>
                            <View style={styles.textInputBox}>
                                <TextInput
                                    placeholder='Enter your email here'
                                    style={styles.textInput}
                                    name="email"
                                />
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
                            <TouchableOpacity style={styles.agreeTxtBox}>
                                <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                                    {
                                        isChecked && <AntDesign name="check" size={10} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.agreeTxt}>I Agreed with terms and conditions and privacy Policy.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={GlobalStyle.primaryBtn}>
                                <Text style={{ color: "white" }}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.registerText}>Have an account?
                                    <Text style={styles.registerSubText}>Login here</Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={GlobalStyle.primaryBtnOutline}>
                                <Text style={{ color: PrimaryColor }}>Scan face to signup</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.otherLoginTxt}>Create your account with</Text>
                        <View style={styles.otherLoginContainer}>
                            <TouchableOpacity>
                                <Image source={FacebookImg} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={GoogleImg} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={TwitterImg} />
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
        backgroundColor: "#393E41"
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: 10
    },
    topBox: {
        width: 300,
        height: 50,
        backgroundColor: "#D1D1D1",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    bottom: {
        flex: 19,
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
    agreeTxtBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 25
    },
    agreeTxt: {
        fontSize: 10,
        fontWeight: "300"
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
    },
    checkbox: {
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 5,
        marginRight: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    otherLoginTxt: {
        fontWeight: "500",
        fontSize: 12,
        textAlign: "center",
        marginTop: 30
    },
    otherLoginContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 250,
        alignSelf: "center",
        marginTop: 5
    }
})

export default Signup