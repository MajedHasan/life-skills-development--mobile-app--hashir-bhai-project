import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import GlobalStyle from '../../styles/GlobalStyle'
import { PrimaryColor } from '../../utils/Colors'

import { useToast } from "react-native-toast-notifications";
import Toast from "react-native-toast-notifications";
import { BarCodeScanner } from "expo-barcode-scanner"



const ConnectScan = ({ navigation }) => {

    const toast = useToast()
    const toastRef = useRef();
    const [showModal, setShowModal] = useState(false)

    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [text, setText] = useState("Not yet scanned")
    const [scannerOn, setScannerOn] = useState(false)


    const handleCloseMdoal = () => {
        setShowModal(false)
    }

    const handleAddParent = () => {
        toast.show("Parent Added successfully", {
            type: "success",
            placement: "top",
            duration: 4000,
            offset: 100,
            animationType: "slide-in"
        })
        setTimeout(() => {
            setShowModal(false)
        }, 100);
    }


    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission()
    }, [])

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        setText(data)
        setScannerOn(false)
    }



    if (hasPermission === false) {
        return (
            <NormalLayout headerLeft={<Feather name="chevron-left" size={30} onPress={() => navigation.goBack()} />}>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: 280, alignSelf: "center" }}>
                        <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={askForCameraPermission}>
                            <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "500" }}>Please give camera permission</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </NormalLayout>
        )
    }



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
                        <Text>{text}</Text>
                        {
                            scannerOn === true && <BarCodeScanner
                                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                style={styles.qrCodeScannerBox}
                            />
                        }
                        <View style={!scannerOn && styles.qrCodeBox}>
                            {
                                scannerOn === false && <Image source={require("../../../assets/Connect/qrCode.png")} />
                            }
                        </View>
                        <View style={styles.bottonBox}>
                            <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.primaryBtn }} onPress={() => { setScannerOn(true); setScanned(false) }}>
                                <Text style={styles.primaryBtnTxt}>
                                    {scanned ? "Scan Again" : "Scan"}
                                </Text>
                            </TouchableOpacity>
                            {
                                scannerOn === true && <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, backgroundColor: "red", marginBottom: 10 }} onPress={() => setScannerOn(false)}>
                                    <Text style={styles.primaryBtnTxt}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            }
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
                    transparent={true}
                    onRequestClose={() => setShowModal(false)}
                >
                    <Toast
                        ref={toastRef}
                        position='bottom'
                        positionValue={1000}
                    />
                    <View style={styles.mdoalContainer}>
                        <View style={styles.modalTopBox}>
                            <TouchableOpacity style={styles.modalTopBoxButton} onPress={handleCloseMdoal}></TouchableOpacity>
                        </View>
                        <View style={styles.modalContentBox}>
                            <Text style={styles.modalHeading}>Select from contacts</Text>
                            <Text style={styles.modalSubHeading}>Select below which Guardian's you want to see your profile.</Text>
                            <View style={styles.modalSearchBox}>
                                <Feather name='search' size={15} style={styles.modalSearchBoxIcon} />
                                <TextInput placeholder='Search the contact here...' style={styles.modalSearchBoxText}></TextInput>
                            </View>
                            <ScrollView style={styles.ModalResultBoxWrapper}>
                                <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg1.png")} />
                                <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg2.png")} />
                                <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg1.png")} />
                                <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg2.png")} />
                                <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg1.png")} />
                                <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg2.png")} />
                            </ScrollView>
                            <View style={styles.bottonBox}>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.primaryBtn }} onPress={handleAddParent}>
                                    <Text style={styles.primaryBtnTxt}>Add Parent</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtnOutline, ...styles.primaryBtnOutline }} onPress={() => setShowModal(false)}>
                                    <Text style={styles.primaryOutlineBtnTxt}>Scan Code</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            }
        </>
    )
}

export default ConnectScan


const ModalResultBox = ({ ImageUrl }) => {

    const [select, setSelect] = useState(false)

    return (
        <TouchableOpacity style={styles.modalResultBox} onPress={() => setSelect(!select)}>
            <View style={styles.modalResultBoxImgWrap}>
                <Image source={ImageUrl} alt="" style={styles.modalResultBoxImg} />
                <Text style={styles.modalResultBoxText}>Kevin</Text>
            </View>
            <View style={select ? styles.selectedMark : styles.unselectedMark}>
                <View style={select ? styles.selectedMarkBox : styles.unselectedMarkBox}>

                </View>
            </View>
        </TouchableOpacity>
    )
}


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
    qrCodeScannerBox: {
        width: 300,
        height: 250,
        borderRadius: 15,
        shadowColor: "rgba(117, 117, 117, 0.25)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
        alignSelf: "center",
        marginBottom: 20
    },
    bottonBox: {
        width: 200,
        marginTop: 5
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
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalTopBox: {
        flex: 1,
    },
    modalTopBoxButton: {
        width: "100%",
        height: "100%"
    },
    modalContentBox: {
        flex: 10,
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 35,
        alignItems: "center"
    },
    modalHeading: {
        fontWeight: "600",
        fontSize: 22
    },
    modalSubHeading: {
        fontSize: 14,
        fontWeight: "400",
        marginTop: 10,
        textAlign: "center",
        maxWidth: 280
    },
    modalSearchBox: {
        backgroundColor: "#F8FFFF",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 999,
        shadowColor: "rgba(117, 117, 117, 0.25)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 70
    },
    modalSearchBoxIcon: {
        color: PrimaryColor
    },
    modalSearchBoxText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#767676",
        marginLeft: 10,
    },
    ModalResultBoxWrapper: {
        width: "100%",
        maxHeight: 400
    },
    modalResultBox: {
        backgroundColor: "#F5EE9E",
        width: "100%",
        borderRadius: 22,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    modalResultBoxImgWrap: {
        flexDirection: "row",
        alignItems: "center"
    },
    modalResultBoxImg: {
        borderRadius: 9999,
        width: 55,
        height: 55
    },
    modalResultBoxText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000000",
        marginLeft: 15
    },
    selectedMark: {
        borderWidth: 2,
        borderColor: PrimaryColor,
        padding: 5,
        borderRadius: 9999,
        width: 38,
        height: 38,
    },
    selectedMarkBox: {
        backgroundColor: PrimaryColor,
        width: "100%",
        height: "100%",
        borderRadius: 999
    },
    unselectedMark: {
        borderWidth: 2,
        borderColor: "#FFFFFF",
        padding: 5,
        borderRadius: 9999,
        width: 38,
        height: 38,
    },
    unselectedMarkBox: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
        borderRadius: 999
    }
})