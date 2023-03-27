import { Button, Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from "../../components/BalanceBadge"
import { useState } from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { LinearGradient } from 'expo-linear-gradient'


const CaptureWork = ({ navigation, route }) => {

    const [showModal, setShowModal] = useState(true)
    const [startModal, setStartModal] = useState(false)
    const [shareSuccessModal, setShareSuccessModal] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    const [captureType, setCaptureType] = useState(null)
    const [captured, setCaptured] = useState(null)
    const [shareStep, setShareStep] = useState(0)



    // ================ For Video Capture




    const handleSelectCaptureType = (type) => {
        if (type === "photo") {
            setCaptureType(type)
            setShowModal(false)
        }
        else {
            setCaptureType(type)
            setShowModal(false)
            // navigation.navigate("CaptureVideo")
            setCaptured({})
            setShareStep(1)
        }
    }

    return (
        <>
            <NormalLayout navigation={navigation} route={route} shadowShown={true} headerLeft={<BalanceBadge />} >
                <View style={styles.container}>
                    <View style={styles.pageHeadingBox}>
                        <Text style={styles.pageHeading}>Complete Homework</Text>
                        <Ionicons name="star" style={styles.pageHeadingIcon} />
                        <Ionicons name="star" style={styles.pageHeadingIcon} />
                        <Ionicons name="star" style={styles.pageHeadingIcon} />
                    </View>
                    <View style={styles.dateAndTimeBoxContainer}>
                        <View style={{ ...styles.dateAndTimeBox, backgroundColor: "#F374AE" }}>
                            <AntDesign name="calendar" style={styles.dateAndTimeBoxIcon} />
                            <Text style={styles.dateAndTimeBoxText}>Monday</Text>
                        </View>
                        <View style={{ ...styles.dateAndTimeBox, backgroundColor: "#9B56F1" }}>
                            <MaterialCommunityIcons name="alarm" style={styles.dateAndTimeBoxIcon} />
                            <Text style={styles.dateAndTimeBoxText}>Time: 00:30</Text>
                        </View>
                    </View>


                    {
                        captureType === "photo" && shareStep !== 2 && <View style={styles.demoPhotoBox}>
                            <ImageBackground source={require("../../../assets/CaptureWork/DemoPhotoBoxImg.png")} style={styles.demoPhotoBoxBgImg}>
                                <View style={styles.demoPhotoBoxMiniImgBox}>
                                    <Image source={require("../../../assets/CaptureWork/DemoPhotoBoxImgMiniImg.png")} alt="" style={styles.demoPhotoBoxMiniImg} />
                                    <View style={styles.demoPhotoBoxMiniImgBoxLine}></View>
                                    <Image source={require("../../../assets/CaptureWork/DemoPhotoBoxImgMiniImg.png")} alt="" style={styles.demoPhotoBoxMiniImg} />
                                </View>
                            </ImageBackground>
                        </View>
                    }
                    {
                        shareStep === 2 && <View style={{ alignItems: "flex-start", marginVertical: 20 }}>
                            <TouchableOpacity onPress={() => setSuccessModal(2)}>
                                <Image source={require("../../../assets/CaptureWork/DemoPhotoBoxImg.png")} style={{ width: 300, height: 200, resizeMode: "cover", marginBottom: 20 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSuccessModal(3)}>
                                <Image source={require("../../../assets/CaptureWork/DemoPhotoBoxImg2.png")} style={{ width: 300, height: 200, resizeMode: "cover", marginBottom: 20 }} />
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        captureType === "video" && shareStep !== 2 && <View style={styles.videoContainer}>
                            <TouchableOpacity onPress={() => setSuccessModal(1)}>
                                <Image source={require("../../../assets/CaptureWork/DemoVideoBoxImg.png")} style={{ width: 300, height: 400, borderRadius: 14 }} />
                            </TouchableOpacity>
                        </View>
                    }


                    {
                        captured === null && captureType === "photo" && <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, width: 200, alignSelf: 'center' }} onPress={() => setStartModal(true)}>
                            <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 14 }}>Start</Text>
                        </TouchableOpacity>
                    }
                    {
                        captured !== null && captureType === "photo" && <>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, width: 200, alignSelf: 'center' }} onPress={() => shareStep === 1 ? setShareStep(2) : setShareSuccessModal(true)}>
                                    <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 14 }}>Share with parent</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 99, backgroundColor: "#F5EE9E", alignItems: "center", justifyContent: "center", marginLeft: 24 }} onPress={() => setCaptured(null)}>
                                    <Ionicons name="reload" style={{ fontSize: 18 }} />
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                    {
                        captured !== null && captureType === "video" && <>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, width: 200, alignSelf: 'center' }} onPress={() => shareStep === 1 ? setShareStep(2) : setShareSuccessModal(true)}>
                                    <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 14 }}>Share with parent</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 99, backgroundColor: "#F5EE9E", alignItems: "center", justifyContent: "center", marginLeft: 24 }} >
                                    <Ionicons name="reload" style={{ fontSize: 18 }} />
                                </TouchableOpacity>
                            </View>
                        </>
                    }


                </View>
            </NormalLayout>
            {
                showModal && <Modal visible={showModal} transparent={true} animationType="fade" onRequestClose={() => setShowModal(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalTopContainer}></TouchableOpacity>
                        <View style={styles.modalMainContainer}>
                            <Text style={styles.captureModalHeading}>Capture your work</Text>
                            <View style={styles.captureModalBox}>
                                <Image source={require("../../../assets/CaptureWork/image.png")} alt="" />
                                <TouchableOpacity style={{ ...GlobalStyle.secondaryBtn, ...styles.primaryBtn }} onPress={() => handleSelectCaptureType("photo")}>
                                    <Text style={{ color: "#FFFFFF" }}>Take Photo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.captureModalBox}>
                                <Image source={require("../../../assets/CaptureWork/video.png")} alt="" />
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.primaryBtn }} onPress={() => handleSelectCaptureType("video")}>
                                    <Text style={{ color: "#FFFFFF" }}>Take Video</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            }
            {
                startModal && <Modal visible={startModal} transparent={true} animationType="fade" onRequestClose={() => setStartModal(false)}>
                    <View style={styles.startModalContainer}>
                        <View style={styles.startModalBox}>
                            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => { setStartModal(false); setErrorModal(true) }}>
                                <Ionicons name="close" style={styles.modalCloseBtnIcon} />
                            </TouchableOpacity>
                            <Image source={require("../../../assets/Rewards/HappyImg.png")} style={styles.startModalMainImg} />
                            <Text style={styles.startModalText}>Last time you completed this job in xx minutes, complete faster to receive extra stars.</Text>
                            <View style={styles.startModalBigStarBox}>
                                <Image source={require("../../../assets/Checklist/BigStarImg.png")} />
                                <Image source={require("../../../assets/Checklist/BigStarImg.png")} />
                            </View>
                            <View style={{ ...styles.startModalTimeBox, backgroundColor: "#9B56F1" }}>
                                <MaterialCommunityIcons name="alarm" style={{ fontSize: 20, color: "#FFFFFF", marginRight: 5 }} />
                                <Text style={{ fontSize: 10, color: "#FFFFFF" }}>Task completed now in 00:30</Text>
                            </View>
                            <View style={{ ...styles.startModalTimeBox, backgroundColor: "#9B56F14D" }}>
                                <MaterialCommunityIcons name="alarm" style={{ fontSize: 20, color: "#7D7D7D", marginRight: 5 }} />
                                <Text style={{ fontSize: 10, color: "#7D7D7D" }}>Last task completed in 01:30</Text>
                            </View>
                            <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, marginTop: 20 }} onPress={() => { setCaptured({}); setStartModal(false); setShareStep(1) }}>
                                <Text style={{ color: "#FFFFFF", fontWeight: "500", fontSize: 14 }}>Start</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
            {
                shareSuccessModal && <Modal visible={shareSuccessModal} transparent={true} animationType="fade" onRequestClose={() => setShareSuccessModal(false)}>
                    <View style={styles.shareSuccessModal}>
                        <TouchableOpacity style={styles.shareSuccessModalTop} onPress={() => {
                            setShareSuccessModal(false); setShowModal(true); setCaptured(null); setShareStep(0)
                        }}></TouchableOpacity>
                        <View style={styles.shareSuccessModalBottom}>
                            <Image source={require("../../../assets/Rewards/HappyImg.png")} style={{ width: 220, height: 220, alignSelf: "center" }} />
                            <Text style={{ fontSize: 26, fontWeight: "600", color: "#000000", marginTop: 40 }}>Hey Kevin , </Text>
                            <Text style={{ fontSize: 21, fontWeight: "400", color: "#000000", marginTop: 15 }}>Great Job! Wait for your guardians approval. </Text>
                        </View>
                    </View>
                </Modal>
            }
            {
                successModal && <Modal visible={true} transparent={true} animationType="fade" onRequestClose={() => setSuccessModal(false)}>
                    <View style={styles.successModalContainer}>
                        <TouchableOpacity style={styles.successModalTop} onPress={() => setSuccessModal(false)}>

                        </TouchableOpacity>
                        <View style={styles.successModalBottom}>
                            <ImageBackground source={require("../../../assets/Rewards/ModalBg.png")} style={styles.successModalBottomBg}>
                                {
                                    successModal === 1 && <>
                                        <Text style={styles.successModalHeading}>Congratulations, you completed this task faster than last time.</Text>
                                        <View style={styles.successModalBox}>
                                            <LinearGradient colors={["#80E1E0", "#369694"]} style={styles.successModalBoxBg}>
                                                <View style={styles.successModalBoxImgBox}>
                                                    <Image source={require("../../../assets/CaptureWork/SuccessImg1.png")} style={styles.successModalBoxImg} />
                                                </View>
                                                <Text style={styles.successModalBoxHeading}>You get 2 star Extra</Text>
                                                {/* <Text style={styles.successModalBoxText}>You get 2 star Extra</Text> */}
                                                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", marginBottom: 20 }}>
                                                    <Ionicons name="star" size={50} style={styles.successModalStarIcon} />
                                                    <Ionicons name="star" size={50} style={styles.successModalStarIcon} />
                                                </View>
                                                <View style={{ width: 200, alignSelf: "center" }}>
                                                    <View style={{ ...styles.dateAndTimeBox, backgroundColor: "#9B56F1" }}>
                                                        <MaterialCommunityIcons name="alarm" style={styles.dateAndTimeBoxIcon} />
                                                        <Text style={styles.dateAndTimeBoxText}>Task completed now in 00:30</Text>
                                                    </View>
                                                    <View style={{ ...styles.dateAndTimeBox, backgroundColor: "#5ABEBC", marginTop: 10 }}>
                                                        <MaterialCommunityIcons name="alarm" style={styles.dateAndTimeBoxIcon} />
                                                        <Text style={styles.dateAndTimeBoxText}>Last task completed in 01:30</Text>
                                                    </View>
                                                </View>
                                                <TouchableOpacity style={styles.successModalBtn}>
                                                    <Text style={styles.successModalBtnText}>Back to tasks</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </>
                                }
                                {
                                    successModal === 2 && <>
                                        <Text style={styles.successModalHeading}>Awesome Work! You are very close to receiving this reward.</Text>
                                        <View style={styles.successModalBox}>
                                            <LinearGradient colors={["#B3A3F4", "#534397"]} style={styles.successModalBoxBg}>
                                                <View style={styles.successModalBoxImgBox}>
                                                    <Image source={require("../../../assets/CaptureWork/SuccessImg2.png")} style={styles.successModalBoxImg} />
                                                </View>
                                                <Text style={styles.successModalBoxHeading}>Extra Pocketmoney this month</Text>
                                                <Text style={{ fontSize: 12, color: "#FFFFFF", textAlign: "center" }}>Need 30 stars more</Text>
                                                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                                                    <Text style={{ color: "#FFFFFF" }}>
                                                        <Text style={{ fontWeight: "800" }}>120</Text>
                                                        /150
                                                    </Text>
                                                    <Ionicons name="star" style={{ ...styles.successModalStarIcon, fontSize: 18, marginLeft: 10 }} />
                                                </View>
                                                <TouchableOpacity style={styles.successModalBtn}>
                                                    <Text style={styles.successModalBtnText}>Back to tasks</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </>
                                }
                                {
                                    successModal === 3 && <>
                                        <Text style={styles.successModalHeading}>Congratulations! You have finished this job.</Text>
                                        <View style={styles.successModalBox}>
                                            <LinearGradient colors={["#FFB1D5", "#DA5793"]} style={styles.successModalBoxBg}>
                                                <View style={styles.successModalBoxImgBox}>
                                                    <Image source={require("../../../assets/CaptureWork/SuccessImg3.png")} style={styles.successModalBoxImg} />
                                                </View>
                                                <Text style={styles.successModalBoxHeading}>Extra Pocketmoney this month</Text>
                                                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                                                    <Text style={{ color: "#FFFFFF" }}>
                                                        <Text style={{ fontWeight: "800" }}>120</Text>
                                                        /150
                                                    </Text>
                                                    <Ionicons name="star" style={{ ...styles.successModalStarIcon, fontSize: 18, marginLeft: 10 }} />
                                                </View>
                                                <TouchableOpacity style={styles.successModalBtn}>
                                                    <Text style={styles.successModalBtnText}>Back to tasks</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </>
                                }
                            </ImageBackground>
                        </View>
                    </View>
                </Modal>
            }
            {
                errorModal && <Modal visible={errorModal} transparent={true} animationType="fade" onRequestClose={() => setErrorModal(false)}>
                    <View style={styles.shareSuccessModal}>
                        <TouchableOpacity style={styles.shareSuccessModalTop} onPress={() => {
                            setStartModal(false);
                            setShareSuccessModal(false);
                            setSuccessModal(false);
                            setErrorModal(false);
                            setCaptureType(null)
                            setCaptured(null)
                            setShareStep(0)
                            setShowModal(true)
                        }}></TouchableOpacity>
                        <View style={styles.shareSuccessModalBottom}>
                            <Text style={{ fontSize: 21, fontWeight: "500", textAlign: "center" }}>Oops! You need to try again and complete xxxx correctly.</Text>
                            <Text style={{ fontSize: 14, fontWeight: "400", textAlign: "center", marginTop: 20 }}>Hi kevin I appreciate your help so much. But make bed properly from right and left , adjust it.</Text>
                            <Image source={require("../../../assets/CaptureWork/ErrorModalImg.png")} style={{ width: 300, height: 350, resizeMode: "contain", alignSelf: "center" }} />
                            <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, width: 200, alignSelf: "center" }} onPress={() => {
                                setStartModal(false);
                                setShareSuccessModal(false);
                                setSuccessModal(false);
                                setErrorModal(false);
                                setCaptureType(null)
                                setCaptured(null)
                                setShareStep(0)
                                setShowModal(true)
                            }}>
                                <Text style={{ color: "#FFFFFF" }}>Do task Again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
        </>
    )
}

export default CaptureWork

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF"
    },


    modalContainer: {
        flex: 1,
        backgroundColor: "#000000A5"
    },
    modalTopContainer: {
        flex: 2
    },
    modalMainContainer: {
        flex: 8,
        backgroundColor: "#F8FFFF",
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    captureModalHeading: {
        color: "#393E41",
        fontWeight: "800",
        fontSize: 28,
        textAlign: "center",
        marginTop: 30
    },
    captureModalBox: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 14,
        shadowColor: "rgba(117, 117, 117, 1)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        backgroundColor: "#FFFFFF",
        marginTop: 50
    },
    primaryBtn: {
        width: 200,
        marginTop: 10
    },

    pageHeadingBox: {
        flexDirection: "row",
        alignItems: 'center'
    },
    pageHeading: {
        fontSize: 22,
        fontWeight: "600",
        color: "#000000",
        marginRight: 10
    },
    pageHeadingIcon: {
        fontSize: 25,
        color: "#CACACA"
    },


    dateAndTimeBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15
    },
    dateAndTimeBox: {
        paddingVertical: 8,
        paddingHorizontal: 13,
        borderRadius: 99,
        flexDirection: "row",
        alignItems: "center"
    },
    dateAndTimeBoxIcon: {
        color: "#FFFFFF",
        fontSize: 16,
        marginRight: 9
    },
    dateAndTimeBoxText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "400"
    },

    demoPhotoBox: {
        marginTop: 20,
        width: "100%",
        height: 400,
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: 30
    },
    demoPhotoBoxBgImg: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        justifyContent: "flex-end"
    },
    demoPhotoBoxMiniImgBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF3D",
        blurType: "dark",
        blurAmount: 5,
        blurRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 13
    },
    demoPhotoBoxMiniImg: {},
    demoPhotoBoxMiniImgBoxLine: {
        width: 180,
        height: 1,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#3CBAB8"
    },



    startModalContainer: {
        flex: 1,
        backgroundColor: "#00000078",
        alignItems: "center",
        justifyContent: "center"
    },
    startModalBox: {
        width: 270,
        height: 500,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 20,
        paddingHorizontal: 15,
        position: "relative"
    },
    modalCloseBtn: {
        position: "absolute",
        top: 5,
        right: 5
    },
    modalCloseBtnIcon: {
        fontSize: 22
    },
    startModalMainImg: {
        width: 160,
        height: 160,
        alignSelf: "center"
    },
    startModalText: {
        textAlign: "center",
        fontSize: 11,
        fontWeight: "400",
        color: "#000000",
        marginVertical: 20
    },
    startModalBigStarBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    startModalTimeBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 99,
        marginBottom: 15
    },



    shareSuccessModal: {
        flex: 1
    },
    shareSuccessModalTop: {
        flex: 2.5,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    shareSuccessModalBottom: {
        flex: 9,
        backgroundColor: "#F8FFFF",
        paddingVertical: 60,
        paddingHorizontal: 24
    },


    videoContainer: {
        width: 300,
        height: 400,
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical: 20
    },





    successModalContainer: {
        flex: 1
    },
    successModalTop: {
        flex: 1.2
    },
    successModalBottom: {
        flex: 10,
        backgroundColor: "#FFFFFF"
    },
    successModalBottomBg: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    successModalHeading: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 21,
        color: "#000000",
        marginTop: 20,
        marginBottom: 20
    },
    successModalBox: {
        width: 260,
        alignSelf: "center",
        borderRadius: 15,
        overflow: "hidden"
    },
    successModalBoxBg: {
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    successModalBoxImgBox: {
        width: 140,
        height: 140,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        backgroundColor: "#FFFFFF"
    },
    successModalBoxImg: {
        width: 80,
        height: 80
    },
    successModalBoxHeading: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 40,
        marginBottom: 20
    },
    successModalStarIcon: {
        color: "#FFB800",
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10
    },

    successModalBtn: {
        width: 200,
        alignItems: "center",
        marginTop: 30,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        paddingVertical: 15
    },
    successModalBtnText: {
        fontWeight: "500",
        fontSize: 14,
        color: "#2E8F8E"
    }
})