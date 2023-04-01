import { Image, ImageBackground, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'
import Ionicons from "react-native-vector-icons/Ionicons"
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import GlobalStyle from '../../styles/GlobalStyle'
import { ModalResultBox } from '../Common/ConnectScan'


const AddReward = ({ navigation, route }) => {

    const [modal, setModal] = useState(false)
    const [modalType, setModalType] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const [searchText, setSearchText] = useState("")


    return (
        <>
            <NormalLayout headerLeft={<Ionicons name="chevron-back" size={22} onPress={() => navigation.goBack()} />} shadowShown={true} showNavMenu={true} route={route} navigation={navigation}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.heading}>Add Reward</Text>
                        <View style={styles.searchBox}>
                            <View style={styles.searchBoxInnerBox}>
                                <Ionicons name="search" style={styles.searchBoxSearchIcon} />
                                <TextInput
                                    placeholder='Search reward here...'
                                    style={styles.searchBoxInput}
                                />
                            </View>
                            <LinearGradient colors={["#65E8E6", "#3CBAB8"]} style={styles.searchBoxFilterBox}>
                                <Ionicons name="ios-filter" style={styles.searchBoxFilterBoxIcon} />
                            </LinearGradient>
                        </View>

                        <ScrollView style={{ flex: 1 }}>
                            <View style={styles.jobBoxContainer}>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>New ipad</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>Extra Sports time</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>2 Chocolate </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>Kissa metup</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>Dinner</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>2 New Clothes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={styles.jobBoxText}>New Pet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.jobBox} onPress={() => { setModal(true); setModalType("inputs") }}>
                                    <Text style={{ ...styles.jobBoxText, color: "#F374AE", fontWeight: "600" }}>Others</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </NormalLayout>

            {
                modal && <Modal
                    visible={modal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModal(false)}
                >
                    <SafeAreaLayout>
                        {
                            modalType === "inputs" && <View style={styles.modalContainer}>
                                <TouchableOpacity style={styles.modalTopBox} onPress={() => { setModal(false); setModalType(null) }}></TouchableOpacity>
                                <View style={styles.modalMainContainer}>
                                    <Text style={styles.heading}>Add Job</Text>

                                    <View>
                                        <Text style={styles.label}>Job name</Text>
                                        <View style={styles.inputBox}>
                                            <TextInput style={styles.input} placeholder='Write task name here...' />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.label}>Add Reward</Text>
                                        <View style={styles.inputBox}>
                                            <TextInput style={styles.input} placeholder='Set reward here...' />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.label}>Assign Star Count</Text>
                                        <View style={styles.inputBox}>
                                            <Ionicons name="star" style={{ ...styles.inputBoxIcon, color: "#FFB800", marginRight: 10 }} />
                                            <TextInput style={styles.input} placeholder='10' />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                        <View style={{ width: 160 }}>
                                            <Text style={styles.label}>Set Day</Text>
                                            <TouchableOpacity style={styles.datePickerBox}>
                                                <TextInput placeholder='13. 12. 2022' style={styles.datePickerBoxInput} />
                                                <LinearGradient colors={["#FFA5CE", "#F374AE"]} style={styles.datePickerBoxFilter}>
                                                    <FontAwesome5 name="calendar-alt" style={styles.datePickerBoxIcon} />
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: 160 }}>
                                            <Text style={styles.label}>Set Time</Text>
                                            <TouchableOpacity style={styles.datePickerBox}>
                                                <TextInput placeholder='10:00 PM' style={styles.datePickerBoxInput} />
                                                <LinearGradient colors={["#FFA5CE", "#F374AE"]} style={styles.datePickerBoxFilter}>
                                                    <FontAwesome5 name="clock" style={styles.datePickerBoxIcon} />
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <TouchableOpacity style={styles.agreeTxtBox}>
                                        <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                                            {
                                                isChecked && <AntDesign name="check" size={10} />
                                            }
                                        </TouchableOpacity>
                                        <Text style={styles.agreeTxt}>Repeat this task for this week</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => setModalType("assign")}>
                                        <Text style={{ color: "#FFFFFF" }}>Continue</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        }
                        {
                            modalType === "assign" && <View style={styles.modalContainer}>
                                <TouchableOpacity style={styles.modalTopBox} onPress={() => { setModal(false); setModalType(null) }}></TouchableOpacity>
                                <View style={styles.modalMainContainer}>
                                    <Text style={styles.heading}>Select Children to Complete</Text>

                                    <View style={styles.searchBox}>
                                        <View style={styles.searchBoxInnerBox}>
                                            <Ionicons name="search" style={styles.searchBoxSearchIcon} />
                                            <TextInput
                                                placeholder='Search child here...'
                                                style={styles.searchBoxInput}
                                                onChangeText={(e) => setSearchText(e)}
                                            />
                                        </View>
                                        <LinearGradient colors={["#65E8E6", "#3CBAB8"]} style={styles.searchBoxFilterBox}>
                                            <Ionicons name="ios-filter" style={styles.searchBoxFilterBoxIcon} />
                                        </LinearGradient>
                                    </View>

                                    <ScrollView>
                                        <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg1.png")} />
                                        <ModalResultBox ImageUrl={require("../../../assets/Connect/ConnectFromContactImg2.png")} />
                                    </ScrollView>

                                    {
                                        searchText?.length > 0 ? <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => setModalType("done")}>
                                            <Text style={{ color: "#FFFFFF" }}>Schedule</Text>
                                        </TouchableOpacity> : <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => setModalType("done")}>
                                            <Text style={{ color: "#FFFFFF" }}>Assign Job</Text>
                                        </TouchableOpacity>
                                    }

                                </View>
                            </View>
                        }
                        {
                            modalType === "done" && <View style={styles.modalContainer}>
                                <TouchableOpacity style={styles.modalTopBox} onPress={() => { setModal(false); setModalType(null) }}></TouchableOpacity>
                                <View style={successModalStyles.successModalBottom}>
                                    <ImageBackground source={require("../../../assets/Rewards/ModalBg.png")} style={successModalStyles.successModalBottomBg}>
                                        <Text style={successModalStyles.successModalHeading}>Yoohoo! New task list with reward is added</Text>
                                        <View style={successModalStyles.successModalBox}>
                                            <LinearGradient colors={["#B3A3F4", "#534397"]} style={successModalStyles.successModalBoxBg}>

                                                <View style={successModalStyles.successModalBoxImgBox}>
                                                    <Image source={require("../../../assets/Rewards/HappyImg.png")} style={successModalStyles.successModalBoxImg} />
                                                </View>

                                                <Text style={successModalStyles.successModalBoxHeading}>New x reward is added in Kevins’ list</Text>

                                                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                                                    <Text style={{ fontSize: 12, fontWeight: "400", color: "#FFFFFF", marginRight: 5 }}>0/150</Text>
                                                    <Ionicons name="star" style={{ ...successModalStyles.successModalStarIcon, fontSize: 17, marginLeft: 2 }} />
                                                </View>

                                                <TouchableOpacity style={{ ...successModalStyles.successModalBtn }} onPress={() => { setModal(false); setModalType(null) }}>
                                                    <Text style={successModalStyles.successModalBtnText}>Done</Text>
                                                </TouchableOpacity>

                                            </LinearGradient>
                                        </View>

                                    </ImageBackground>
                                </View>
                            </View>
                        }
                    </SafeAreaLayout>
                </Modal>
            }
        </>
    )
}

export default AddReward


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    container2: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 24
    },
    heading: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 20
    },

    searchBox: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 99,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8,
        marginBottom: 25
    },
    searchBoxInnerBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    searchBoxSearchIcon: {
        fontSize: 19,
        marginRight: 10
    },
    searchBoxInput: {
        color: "#7C7C7C",
        fontSize: 10,
        fontWeight: "400",
    },
    searchBoxFilterBox: {
        paddingVertical: 15,
        paddingHorizontal: 18,
        borderTopRightRadius: 99,
        borderBottomRightRadius: 99,
    },
    searchBoxFilterBoxIcon: {
        color: "#FFFFFF",
        fontSize: 17
    },

    jobBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    jobBox: {
        width: 160,
        paddingVertical: Platform.OS === "ios" ? 14 : 10,
        paddingHorizontal: 20,
        borderRadius: 99,
        backgroundColor: "#F5EE9E",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    jobBoxText: {
        textAlign: "center",
        fontSize: 13,
        fontWeight: "400",
        color: "#000000",
    },


    modalContainer: {
        flex: 1
    },
    modalTopBox: {
        flex: 1,
        backgroundColor: "#00000080"
    },
    modalMainContainer: {
        flex: 9,
        backgroundColor: "#F8FFFF",
        paddingHorizontal: 24,
        paddingVertical: 20
    },


    label: {
        fontSize: 12,
        fontWeight: "500",
        marginBottom: 5
    },
    inputBox: {
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderColor: "#D7D7D7",
        borderWidth: 1,
        borderRadius: 99,
        paddingVertical: Platform.OS === "ios" ? 14 : 8,
        paddingHorizontal: 22,
        marginBottom: 22
    },
    input: {
        color: "#7C7C7C",
        fontSize: 10,
        fontWeight: "400"
    },
    inputBoxIcon: {
        fontSize: 17
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


    datePickerBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#D7D7D7",
        borderRadius: 99,
        paddingLeft: 15
    },
    datePickerBoxInput: {
        fontSize: 12,
        fontWeight: "500",
        color: "#393E41"
    },
    datePickerBoxFilter: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderTopRightRadius: 99,
        borderBottomRightRadius: 99,
    },
    datePickerBoxIcon: {
        color: "#FFFFFF",
        fontSize: 17
    }
})


const successModalStyles = StyleSheet.create({
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
