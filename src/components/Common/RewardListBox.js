import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"


const RewardListBox = ({ bgColor, bdColor, text, progressBg, progress, progressColor, btnBg1, btnBg2, navigation }) => {

    const [showModal, setShowModal] = useState(false)
    const [showRewardModal, setShowRewardModal] = useState(false)

    return (
        <>
            {
                progressBg && <TouchableOpacity style={{ ...styles.container, backgroundColor: bgColor, borderColor: bdColor }} onPress={() => navigation ? navigation.navigate("ConnectScan") : setShowRewardModal(true)}>
                    <View style={{ ...styles.bigStarBox, borderColor: bdColor }}>
                        <Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={styles.bigStarImg} />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.topBox}>
                            <Text>{text}</Text>
                            <View style={styles.starBox}>
                                <Ionicons name="star" style={styles.icon} />
                                <Text>{progress}/5</Text>
                            </View>
                        </View>
                        <View style={progressBg ? { ...styles.bottomBox, backgroundColor: progressBg, width: 200 } : styles.bottomBox}>
                            <View style={{ backgroundColor: progressColor ? progressColor : bdColor, width: 40 * progress, height: 3 }}></View>
                        </View>
                    </View>
                    <View></View>
                </TouchableOpacity>
            }
            {
                btnBg1 && <View style={{ ...styles.container, backgroundColor: bgColor, borderColor: bdColor }}>
                    <View style={{ ...styles.bigStarBox, borderColor: bdColor }}>
                        <Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={styles.bigStarImg} />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.topBox}>
                            <Text>{text}</Text>
                            <View style={styles.starBox}>
                                <Ionicons name="star" style={styles.icon} />
                                <Text>{progress}/5</Text>
                            </View>
                        </View>
                        <View style={styles.bottomBox}>
                            <TouchableOpacity onPress={() => setShowModal(true)}>
                                <LinearGradient colors={[btnBg1, btnBg2]} style={styles.btn} >
                                    <Text style={styles.btnText}>Claim reward</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View></View>
                </View>
            }



            {
                showModal && <Modal
                    visible={showModal}
                    transparent={true}
                    onRequestClose={() => setShowModal(false)}
                    animationType="fade"
                >
                    <View style={styles.ModalContainer}>
                        <TouchableOpacity style={styles.modalTop} onPress={() => setShowModal(false)}></TouchableOpacity>
                        <ImageBackground source={require("../../../assets/Rewards/ModalBg.png")} style={styles.modalBackground}>
                            <Text style={styles.modalHeading}>Congratulations, you have a reward on it's way.</Text>
                            <LinearGradient colors={["#B3A3F4", "#534397"]} style={styles.modalBox} >
                                <View style={styles.modalBoxImgBg}>
                                    <Image source={require("../../../assets/Rewards/HappyImg.png")} alt="" style={styles.modalBoxImg} />
                                </View>
                                <Text style={styles.modalBoxTitle}>Yeah! You received extra pocket money this month!</Text>
                                <Text style={styles.modalBoxSubTitle}>You completed all the sats</Text>
                                <View style={styles.modalBoxStarBox}>
                                    <Text style={styles.modalBoxStarBoxText}>
                                        <Text style={styles.modalBoxStarBoxTextBold}>150</Text>/150
                                    </Text>
                                    <Ionicons name="star" style={styles.modalBoxStarBoxIcon} />
                                </View>
                                <TouchableOpacity style={styles.modalBtn} onPress={() => setShowModal(false)}>
                                    <Text style={styles.modalBtnText}>Win more</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalBtnOutline}>
                                    <Text style={styles.modalBtnOutlineText}>Take Screenshot</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                </Modal>
            }
            {
                showRewardModal && <Modal
                    visible={showRewardModal}
                    transparent={true}
                    onRequestClose={() => setShowModal(false)}
                    animationType="slide"
                >
                    <View style={styles.RewardModalContainer}>
                        <TouchableOpacity style={styles.RewardModalTop} onPress={() => setShowRewardModal(false)}></TouchableOpacity>
                        <View style={styles.RewardModalBottom}>
                            <View style={styles.todaysJobHeadingBox}>
                                <Text style={styles.todaysJobHeading}> New Ipad</Text>
                                <TouchableOpacity style={styles.todaysJobHeadingBtn} >
                                    <Text style={styles.todaysJobHeadingBtnText}>This week</Text>
                                    <View style={styles.todaysJobHeadingBtnIconBox}>
                                        <Feather name="calendar" size={15} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                <View style={styles.RewardModalBox}>
                                    <View style={{ ...styles.RewardModalBoxDateBox, backgroundColor: "#3CBAB8" }}>
                                        <Text style={styles.RewardModalBoxDateBoxText} >MON</Text>
                                        <View style={styles.RewardModalBoxDateBoxIconBox} >
                                            <Text style={styles.RewardModalBoxDateBoxIconBoxText} >5/7</Text>
                                            <Ionicons name="star" style={styles.RewardModalBoxDateBoxIcon} />
                                        </View>
                                    </View>
                                    <View style={styles.RewardModalBoxRight}>
                                        <View style={styles.RewardModalBoxIcons}>
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                        </View>
                                        <View style={styles.RewardModalBoxLine}></View>
                                        <View style={styles.RewardModalBoxTexts}>
                                            <Text style={styles.RewardModalBoxText}>Task 1</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 2</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 3</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 4</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 5</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 6</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RewardModalBox}>
                                    <View style={{ ...styles.RewardModalBoxDateBox, backgroundColor: "#F374AE" }}>
                                        <Text style={styles.RewardModalBoxDateBoxText} >TUE</Text>
                                        <View style={styles.RewardModalBoxDateBoxIconBox} >
                                            <Text style={styles.RewardModalBoxDateBoxIconBoxText} >5/7</Text>
                                            <Ionicons name="star" style={styles.RewardModalBoxDateBoxIcon} />
                                        </View>
                                    </View>
                                    <View style={styles.RewardModalBoxRight}>
                                        <View style={styles.RewardModalBoxIcons}>
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                        </View>
                                        <View style={styles.RewardModalBoxLine}></View>
                                        <View style={styles.RewardModalBoxTexts}>
                                            <Text style={styles.RewardModalBoxText}>Task 1</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 2</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 3</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 4</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 5</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 6</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RewardModalBox}>
                                    <View style={{ ...styles.RewardModalBoxDateBox, backgroundColor: "#0057FF" }}>
                                        <Text style={styles.RewardModalBoxDateBoxText} >WED</Text>
                                        <View style={styles.RewardModalBoxDateBoxIconBox} >
                                            <Text style={styles.RewardModalBoxDateBoxIconBoxText} >5/7</Text>
                                            <Ionicons name="star" style={styles.RewardModalBoxDateBoxIcon} />
                                        </View>
                                    </View>
                                    <View style={styles.RewardModalBoxRight}>
                                        <View style={styles.RewardModalBoxIcons}>
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                        </View>
                                        <View style={styles.RewardModalBoxLine}></View>
                                        <View style={styles.RewardModalBoxTexts}>
                                            <Text style={styles.RewardModalBoxText}>Task 1</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 2</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 3</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 4</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 5</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 6</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RewardModalBox}>
                                    <View style={{ ...styles.RewardModalBoxDateBox, backgroundColor: "#FF54EE" }}>
                                        <Text style={styles.RewardModalBoxDateBoxText} >THU</Text>
                                        <View style={styles.RewardModalBoxDateBoxIconBox} >
                                            <Text style={styles.RewardModalBoxDateBoxIconBoxText} >5/7</Text>
                                            <Ionicons name="star" style={styles.RewardModalBoxDateBoxIcon} />
                                        </View>
                                    </View>
                                    <View style={styles.RewardModalBoxRight}>
                                        <View style={styles.RewardModalBoxIcons}>
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                        </View>
                                        <View style={styles.RewardModalBoxLine}></View>
                                        <View style={styles.RewardModalBoxTexts}>
                                            <Text style={styles.RewardModalBoxText}>Task 1</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 2</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 3</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 4</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 5</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 6</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RewardModalBox}>
                                    <View style={{ ...styles.RewardModalBoxDateBox, backgroundColor: "#45FF6E" }}>
                                        <Text style={styles.RewardModalBoxDateBoxText} >FRI</Text>
                                        <View style={styles.RewardModalBoxDateBoxIconBox} >
                                            <Text style={styles.RewardModalBoxDateBoxIconBoxText} >5/7</Text>
                                            <Ionicons name="star" style={styles.RewardModalBoxDateBoxIcon} />
                                        </View>
                                    </View>
                                    <View style={styles.RewardModalBoxRight}>
                                        <View style={styles.RewardModalBoxIcons}>
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                        </View>
                                        <View style={styles.RewardModalBoxLine}></View>
                                        <View style={styles.RewardModalBoxTexts}>
                                            <Text style={styles.RewardModalBoxText}>Task 1</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 2</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 3</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 4</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 5</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 6</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RewardModalBox}>
                                    <View style={{ ...styles.RewardModalBoxDateBox, backgroundColor: "#3CBAB8" }}>
                                        <Text style={styles.RewardModalBoxDateBoxText} >SAT</Text>
                                        <View style={styles.RewardModalBoxDateBoxIconBox} >
                                            <Text style={styles.RewardModalBoxDateBoxIconBoxText} >5/7</Text>
                                            <Ionicons name="star" style={styles.RewardModalBoxDateBoxIcon} />
                                        </View>
                                    </View>
                                    <View style={styles.RewardModalBoxRight}>
                                        <View style={styles.RewardModalBoxIcons}>
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCheckMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                            <Image source={require("../../../assets/Rewards/RewardCrosMark.png")} style={styles.RewardModalBoxIcon} />
                                        </View>
                                        <View style={styles.RewardModalBoxLine}></View>
                                        <View style={styles.RewardModalBoxTexts}>
                                            <Text style={styles.RewardModalBoxText}>Task 1</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 2</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 3</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 4</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 5</Text>
                                            <Text style={styles.RewardModalBoxText}>Task 6</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            }
        </>
    )
}

export default RewardListBox

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99,
        marginBottom: 25,
        paddingRight: 15
    },

    bigStarImg: {
        width: 40,
        height: 40
    },
    bigStarBox: {
        width: 70,
        height: 70,
        borderRadius: 999,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
    },

    infoContainer: {
        alignItems: "flex-start"
    },

    topBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
        marginBottom: 5
    },

    starBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        fontSize: 15,
        marginRight: 5,
        color: "#FFB800",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5,
        marginRight: 3
    },

    btn: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    btnText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "500"
    },



    ModalContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    modalTop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    modalBackground: {
        flex: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 30
    },
    modalHeading: {
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        color: "#000000",
        maxWidth: 280,
        alignSelf: "center",
        marginBottom: 20
    },
    modalBox: {
        width: 260,
        height: 500,
        alignSelf: "center",
        borderRadius: 14,
        alignItems: "center"
    },
    modalBoxImgBg: {
        backgroundColor: "#FFFFFF",
        borderRadius: 999,
        width: 160,
        height: 160,
        resizeMode: "contain",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15
    },
    modalBoxImg: {
        width: 110,
        height: 110
    },
    modalBoxTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF",
        paddingHorizontal: 40
    },
    modalBoxSubTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "400",
        color: "#FFFFFF",
        paddingHorizontal: 40,
        marginTop: 11,
        marginBottom: 25
    },
    modalBoxStarBox: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    modalBoxStarBoxIcon: {
        color: "#FFB800",
        fontSize: 30
    },
    modalBoxStarBoxText: {
        color: "#FFFFFF",
        fontSize: 14,
        marginRight: 10
    },
    modalBoxStarBoxTextBold: {
        fontWeight: "900"
    },
    modalBtn: {
        width: 191,
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 99,
        backgroundColor: "#FFFDFE",
        marginTop: 25,
        marginBottom: 10
    },
    modalBtnText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#554499"
    },
    modalBtnOutline: {
        width: 191,
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 99,
        borderWidth: 1,
        borderColor: "#FFFFFF"
    },
    modalBtnOutlineText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#FFFDFE"
    },





    todaysJobHeadingBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 20
    },
    todaysJobHeading: {
        fontWeight: "600",
        fontSize: 20
    },
    todaysJobHeadingBtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    todaysJobHeadingBtnText: {
        fontWeight: "300",
        fontSize: 12
    },
    todaysJobHeadingBtnIconBox: {
        width: 32,
        height: 32,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },

    RewardModalContainer: {
        flex: 1
    },
    RewardModalTop: {
        flex: 1,
        // backgroundColor: "#FFFFFF"
    },
    RewardModalBottom: {
        flex: 9,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    RewardModalBox: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    RewardModalBoxDateBox: {
        borderRadius: 14,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    RewardModalBoxDateBoxText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "500"
    },
    RewardModalBoxDateBoxIconBox: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 3
    },
    RewardModalBoxDateBoxIconBoxText: {
        color: "#FFFFFF",
        fontSize: 10,
        fontWeight: "500"
    },
    RewardModalBoxDateBoxIcon: {
        color: "#FFB800",
        fontSize: 14,
        marginLeft: 3
    },

    RewardModalBoxRight: {
        width: 275
    },
    RewardModalBoxIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    RewardModalBoxIcon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
        alignSelf: "center"
    },
    RewardModalBoxLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#3CBAB8",
        marginVertical: 5
    },
    RewardModalBoxTexts: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    RewardModalBoxText: {
        color: "#000000",
        fontSize: 9,
        fontWeight: "400"
    },
})