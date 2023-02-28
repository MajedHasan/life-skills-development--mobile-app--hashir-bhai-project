import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

import ResetPasswordImg from "../../../assets/ReserPassword.png"
import GlobalStyle from '../../styles/GlobalStyle'
import { SecondaryColor } from '../../utils/Colors'



const ResetPassword = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(true)
    const [confirmShowPassword, setConfirmShowPassword] = useState(true)

    return (
        <>
            <SafeAreaLayout statusBarType="primary">
                <PrimaryStatusBar />
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image source={ResetPasswordImg} style={styles.topImg} />
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>Reset Password</Text>
                        <Text style={styles.subHeading}>Enter your new password below.</Text>
                        <View style={{ ...styles.inputGroup, marginTop: 40, marginBottom: 30 }}>
                            <View style={styles.inputLabelBox}>
                                <SimpleLineIcons name="lock" size={15} />
                                <Text style={styles.inputLabel}>Password</Text>
                            </View>
                            <View style={styles.textInputBox}>
                                <TextInput
                                    placeholder='Enter password'
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
                        <View style={{ ...styles.inputGroup, marginBottom: 30 }}>
                            <View style={styles.inputLabelBox}>
                                <SimpleLineIcons name="lock" size={15} />
                                <Text style={styles.inputLabel}>Confirm Password</Text>
                            </View>
                            <View style={styles.textInputBox}>
                                <TextInput
                                    placeholder='Enter confirm password'
                                    style={styles.textInput}
                                    name="confirmPassword"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="confirmPassword"
                                    secureTextEntry={confirmShowPassword ? true : false}
                                    enablesReturnKeyAutomatically
                                />
                                {
                                    confirmShowPassword ? <Feather name="eye-off" size={15} onPress={() => setConfirmShowPassword(false)} /> : <Feather name="eye" size={15} onPress={() => setConfirmShowPassword(true)} />
                                }
                            </View>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.navigate("Login")}>
                                <Text style={{ color: "white" }}>Submit</Text>
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

export default ResetPassword