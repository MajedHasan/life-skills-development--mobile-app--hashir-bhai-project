import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import PhoneInput from "react-native-phone-number-input";

import { PrimaryStatusBar } from '../../components/StatusBars'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Feather from "react-native-vector-icons/Feather"

import ForgetPasswordImg from "../../../assets/ForgetPasswordImg.png"
import ForgetPasswordImg2 from "../../../assets/ForgetPasswordImg2.png"
import GlobalStyle from '../../styles/GlobalStyle'
import { SecondaryColor } from '../../utils/Colors'



const ForgetPassword = ({ navigation }) => {

    const [emailOrPhone, setEmailOrPhone] = useState("email")
    const [selectedCountry, setSelectedCountry] = useState()
    const [value, setValue] = useState("");

    return (
        <>
            <SafeAreaLayout statusBarType="primary">
                <PrimaryStatusBar />
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Image source={emailOrPhone === "email" ? ForgetPasswordImg : ForgetPasswordImg2} style={styles.topImg} />
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>Forget Password</Text>
                        <Text style={styles.subHeading}>
                            {
                                emailOrPhone === "email" ? "Please enter your email address and we will send you a password reset link." : "Please enter the phone number your account is created under, and we will send you a password reset link."
                            }
                        </Text>
                        <View style={styles.emailOrPhoneBox}>
                            <TouchableOpacity style={emailOrPhone === "email" ? styles.activeBox : styles.emailOrPhoneBoxBtn} onPress={() => setEmailOrPhone("email")}>
                                <Text style={emailOrPhone === "email" ? styles.activeBoxTxt : styles.emailOrPhoneBoxBtnTxt}>Via Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={emailOrPhone === "phone" ? styles.activeBox : styles.emailOrPhoneBoxBtn} onPress={() => setEmailOrPhone("phone")}>
                                <Text style={emailOrPhone === "phone" ? styles.activeBoxTxt : styles.emailOrPhoneBoxBtnTxt}>Via Phone Number</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...styles.inputGroup, marginTop: 30, marginBottom: 20 }}>
                            <View style={styles.inputLabelBox}>
                                {
                                    emailOrPhone === "email" ? <>
                                        <SimpleLineIcons name="envelope" size={15} />
                                        <Text style={styles.inputLabel}>Email</Text>
                                    </> : <>
                                        <Feather name="phone" size={15} />
                                        <Text style={styles.inputLabel}>Number</Text>
                                    </>
                                }
                            </View>
                            {
                                emailOrPhone === "email" ? <>
                                    <View style={styles.textInputBox}>
                                        <TextInput placeholder='Enter username here' style={styles.textInput} />
                                    </View>
                                </> : <>
                                    <View style={styles.phoneInputBox}>
                                        <PhoneInput
                                            defaultValue={value}
                                            defaultCode="AU"
                                            layout="first"
                                            onChangeText={(text) => {
                                                setValue(text);
                                            }}
                                            onChangeFormattedText={(text) => {
                                                setSelectedCountry(text);
                                            }}
                                            withDarkTheme
                                            withShadow
                                            autoFocus
                                        />
                                    </View>
                                </>
                            }
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.forgetPasswordTxt}>Back to login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => navigation.navigate("Verification")}>
                                <Text style={{ color: "white" }}>Send Link</Text>
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
    emailOrPhoneBox: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 9
    },
    activeBox: {
        backgroundColor: SecondaryColor,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 12
    },
    emailOrPhoneBoxBtn: {
        flex: 1,
    },
    emailOrPhoneBoxBtnTxt: {
        color: SecondaryColor,
        textAlign: "center",
        fontWeight: "500",
        fontSize: 14
    },
    activeBoxTxt: {
        color: "white",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 14
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
        flexDirection: "row",
        shadowColor: "rgba(146, 146, 146, 0.25)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 30,
    },
    phoneInputBox: {
        flexDirection: "row"
    },
    textInput: {
        color: "#AFAFAF",
        fontSize: 10,
        fontWeight: "400",
    },
    phoneInput: {
        color: "#AFAFAF",
        fontSize: 10,
        fontWeight: "400",
        width: 100
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
    }
})

export default ForgetPassword