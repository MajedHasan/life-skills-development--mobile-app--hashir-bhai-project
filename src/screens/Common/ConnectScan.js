import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import GlobalStyle from '../../styles/GlobalStyle'
import { PrimaryColor } from '../../utils/Colors'


const ConnectScan = ({ navigation }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <NormalLayout headerLeft={<Feather name="chevron-left" size={30} onPress={() => navigation.goBack()} />}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.header}>
                        <View style={styles.headerBox}>
                            <Image source={require("../../../assets/Connect/profilePic.png")} alt="" style={styles.profilePic} />
                            <View>
                                <Text style={styles.headerHeading}>Alexa</Text>
                                <View style={styles.headerInfoBox}>
                                    <MaterialCommunityIcons name="map-marker-outline" size={13} />
                                    <Text style={styles.headerInfoBoxText}>San Francisco , USA </Text>
                                </View>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={22} />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.heading}>Connect to your Guardian</Text>
                        <Text style={styles.subHeading}>Scan the QR code and connect to your Guardians account.</Text>
                        <View style={styles.qrCodeBox}>
                            <Image source={require("../../../assets/Connect/qrCode.png")} />
                        </View>
                        <View style={styles.bottonBox}>
                            <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.primaryBtn }}>
                                <Text style={styles.primaryBtnTxt}>Scan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={GlobalStyle.primaryBtnOutline} onPress={() => setShowModal(true)}>
                                <Text style={styles.primaryOutlineBtnTxt}>Select from contact</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </NormalLayout>
            {
                showModal && <Modal
                    animationType="slide"
                    visible={showModal}
                    // transparent={true}
                    style={styles.mdoalContainer}
                >
                    <View>
                        {/* <View style={styles.mdoalContainer}>

                        </View> */}
                    </View>
                </Modal>
            }
        </>
    )
}

export default ConnectScan

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    header: {
        backgroundColor: "#F5EE9E",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    profilePic: {
        borderRadius: 999,
        marginRight: 10
    },
    headerBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerInfoBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerHeading: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000000"
    },
    headerInfoBoxText: {
        fontSize: 13,
        fontWeight: "400",
        color: "#4C4545",
        marginLeft: 3
    },
    content: {
        alignItems: "center",
    },
    heading: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 50,
        marginBottom: 8
    },
    subHeading: {
        color: "#494949",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
        maxWidth: 250,
        marginBottom: 40
    },
    qrCodeBox: {
        width: 200,
        height: 200,
        marginBottom: 35
    },
    bottonBox: {
        width: 200
    },
    primaryBtn: {
        marginBottom: 15
    },
    primaryBtnTxt: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 12
    },
    primaryOutlineBtnTxt: {
        color: PrimaryColor,
        fontWeight: "400",
        fontSize: 12
    },
    mdoalContainer: {
        backgroundColor: "red"
    }
})