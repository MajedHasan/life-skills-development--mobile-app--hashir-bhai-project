import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

import VerificationImg from "../../../assets/Verification.png"
import { SecondaryColor } from '../../utils/Colors'
import GlobalStyle from '../../styles/GlobalStyle'


const Verification = () => {

    const handleSendCode = () => {
        Alert.alert("Code sent")
    }

    return (
        <>
            <SafeAreaLayout>
                <PrimaryStatusBar />
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image source={VerificationImg} style={styles.topImg} />
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>Verification</Text>
                        <Text style={styles.subHeading}>Enter the verification code below</Text>
                        <View style={{ ...styles.inputGroup, marginTop: 30, marginBottom: 20 }}>
                            <View style={styles.labelBox}>
                                <Text style={styles.label}>Enter OTP here</Text>
                                <SimpleLineIcons name="info" size={18} />
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput placeholder='0' keyboardType='numeric' style={styles.input} />
                                <TextInput placeholder='0' keyboardType='numeric' style={styles.input} />
                                <TextInput placeholder='0' keyboardType='numeric' style={styles.input} />
                                <TextInput placeholder='0' keyboardType='numeric' style={styles.input} />
                                <TextInput placeholder='0' keyboardType='numeric' style={styles.input} />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={handleSendCode}>
                                <Text style={styles.forgetPasswordTxt}>Didn’t receive? <Text style={styles.sendCodeTxt}>Send again</Text></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.navigate("ResetPassword")}>
                                <Text style={{ color: "white" }}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default Verification

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
    labelBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    label: {
        marginRight: 12,
        color: "#4B525C",
        fontWeight: "700",
        fontSize: 18
    },
    inputBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 22
    },
    input: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 8,
        borderColor: "#ECECEC",
        borderWidth: 1,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },
    forgetPasswordTxt: {
        textAlign: "right",
        fontSize: 10,
        fontWeight: "300",
        marginTop: 10,
        marginBottom: 25
    },
    sendCodeTxt: {
        color: SecondaryColor,
        fontWeight: "500",
        textDecorationLine: "underline"
    },
    buttonWrapper: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        width: "80%",
        alignSelf: "center"
    }
})