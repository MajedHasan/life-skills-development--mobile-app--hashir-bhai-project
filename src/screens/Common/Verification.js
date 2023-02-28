import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'

import ForgetPasswordImg from "../../../assets/ForgetPasswordImg.png"
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
                        <Image source={ForgetPasswordImg} style={styles.topImg} />
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.heading}>Verification</Text>
                        <Text style={styles.subHeading}>Enter the verification code below</Text>
                        <View style={{ ...styles.inputGroup, marginTop: 30, marginBottom: 20 }}>

                        </View>
                        <View>
                            <TouchableOpacity onPress={handleSendCode}>
                                <Text style={styles.forgetPasswordTxt}>Didn’t receive? <Text style={{ color: SecondaryColor }}>Send again</Text></Text>
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
    inputLabelBox: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
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