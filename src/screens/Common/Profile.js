import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BalanceBadge from '../../components/BalanceBadge'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'

import ChildrenProfileImg from "../../../assets/Profile/ChildrenProfileImg2.png"
import { PrimaryColor, SecondaryColor } from '../../utils/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useState } from 'react'


const Profile = ({ navigation }) => {

    const [activeNotification, setActiveNotification] = useState(false)
    const [activeReminers, setActiveReminers] = useState(false)

    const handleLogout = () => {
        navigation.navigate("Login")
    }

    return (
        <>
            <PrimaryStatusBar></PrimaryStatusBar>
            <SafeAreaLayout>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Text style={styles.topContainerHeading}>Profile</Text>
                        <BalanceBadge showBalanceType="day"></BalanceBadge>
                    </View>
                    <View style={styles.mainContainer}>
                        <Image source={ChildrenProfileImg} alt="" style={styles.profileImg} />
                        <Text style={styles.userName}>Alexa</Text>
                        <View style={styles.taskBoxWrapper}>
                            <View style={{ ...styles.taskBox, backgroundColor: SecondaryColor }}>
                                <Text style={styles.taskBoxHeading}>Task Done</Text>
                                <Text style={styles.taskBoxText}>234</Text>
                            </View>
                            <View style={{ ...styles.taskBox, backgroundColor: PrimaryColor }}>
                                <Text style={styles.taskBoxHeading}>Pending Tasks</Text>
                                <Text style={styles.taskBoxText}>6</Text>
                            </View>
                        </View>
                        <ScrollView style={styles.settingsItemsWrapper}>
                            <TouchableOpacity style={styles.settingsItem}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <Image source={require("../../../assets/Profile/ManageAccount.png")} alt="" />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Manage Account</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={15} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingsItem} onPress={() => navigation.navigate("AddUser")}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <Image source={require("../../../assets/Profile/AddAParent.png")} alt="" />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Add a parent</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={15} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingsItem}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <Image source={require("../../../assets/Profile/notification.png")} alt="" />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Notifications</Text>
                                </View>
                                <TouchableOpacity style={styles.checkbox} onPress={() => setActiveNotification(!activeNotification)}>
                                    {
                                        activeNotification ? <>
                                            <View style={styles.checkboxInActiveBtn}></View>
                                            <Text></Text>
                                        </> : <>
                                            <Text></Text>
                                            <View style={styles.checkboxActiveBtn}></View>
                                        </>
                                    }
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingsItem}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <Image source={require("../../../assets/Profile/Reminers.png")} alt="" />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Reminers</Text>
                                </View>
                                <TouchableOpacity style={styles.checkbox} onPress={() => setActiveReminers(!activeReminers)}>
                                    {
                                        activeReminers ? <>
                                            <View style={styles.checkboxInActiveBtn}></View>
                                            <Text></Text>
                                        </> : <>
                                            <Text></Text>
                                            <View style={styles.checkboxActiveBtn}></View>
                                        </>
                                    }
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingsItem}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <Image source={require("../../../assets/Profile/Setting.png")} alt="" />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Security and privacy</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={15} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingsItem}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <FontAwesome name="legal" size={15} />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Help & Legal</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={15} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.settingsItem}>
                                <View style={styles.settingsBox}>
                                    <View style={styles.iconBox}>
                                        <Image source={require("../../../assets/Profile/medal-star.png")} alt="" />
                                    </View>
                                    <Text style={styles.settingsItemBoxText}>Get Premium</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={15} />
                            </TouchableOpacity>
                        </ScrollView>
                        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                            <Text style={styles.logoutBtnText}>Logout</Text>
                            <MaterialCommunityIcons name='logout' size={16} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default Profile



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingBottom: 5
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: "#FFFFFF"
    },
    topContainerHeading: {
        fontWeight: "500",
        fontSize: 22
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 25
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 9999,
        alignSelf: "center"
    },
    userName: {
        alignSelf: "center",
        color: "#000000",
        fontWeight: "500",
        fontSize: 22,
        marginTop: 5,
        marginBottom: 22
    },
    taskBoxWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22
    },
    taskBox: {
        borderRadius: 12,
        paddingVertical: 13,
        paddingHorizontal: 17,
        width: 150
    },
    taskBoxHeading: {
        fontSize: 16,
        fontWeight: "500",
        color: "#FFFFFF",
    },
    taskBoxText: {
        fontSize: 14,
        fontWeight: "300",
        color: "#FFFFFF",
    },

    settingsItemsWrapper: {
    },
    settingsItem: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#CFCFCF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    settingsBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconBox: {
        backgroundColor: "#F5EE9E",
        padding: 12,
        borderRadius: 8
    },
    icon: {

    },
    settingsItemBoxText: {
        color: "#000000",
        fontWeight: "500",
        fontSize: 12,
        marginLeft: 10
    },

    checkbox: {
        borderRadius: 999,
        width: 34,
        height: 15,
        backgroundColor: "#BDBDBD",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    checkboxInActiveBtn: {
        width: 20,
        height: 20,
        borderRadius: 999,
        backgroundColor: "#F1F1F1",
    },
    checkboxActiveBtn: {
        width: 20,
        height: 20,
        borderRadius: 999,
        backgroundColor: "#020202",
    },

    logoutBtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    logoutBtnText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#000000",
        marginRight: 8
    }
})