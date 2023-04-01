import { Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Octicons from "react-native-vector-icons/Octicons"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'




const BottomTabs = ({ tabType, route, navigation }) => {

    const [modal, setModal] = useState(false)
    const Page = route.name
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user')
            if (user !== null) {
                return setUser(JSON.parse(user))
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <View style={styles.containerWrapper}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Checklist")}>
                        <View style={Page.includes("Checklist") && styles.btnActiveBar}></View>
                        <MaterialCommunityIcons name="calendar-check" size={20} style={Page.includes("Checklist") ? styles.btnActiveIcon : styles.btnIcon} />
                        <Text style={Page.includes("Checklist") ? styles.btnActiveText : styles.btnText}>Checklist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Planner")}>
                        <View style={Page.includes("Planner") && styles.btnActiveBar}></View>
                        <MaterialCommunityIcons name="calendar-edit" size={20} style={Page.includes("Planner") ? styles.btnActiveIcon : styles.btnIcon} />
                        <Text style={Page.includes("Planner") ? styles.btnActiveText : styles.btnText}>Planner</Text>
                    </TouchableOpacity>
                    {
                        user?.role === "parent" && <TouchableOpacity style={styles.addBtn} onPress={() => setModal(true)}>
                            <LinearGradient colors={["#84FFFD", "#3CBAB8"]} style={styles.addBtnGradient}>
                                <Entypo name="plus" size={20} />
                            </LinearGradient>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Rewards")}>
                        <View style={Page.includes("Reward") && styles.btnActiveBar}></View>
                        <FontAwesome5 name="award" size={20} style={Page.includes("Reward") ? styles.btnActiveIcon : styles.btnIcon} />
                        <Text style={Page.includes("Reward") ? styles.btnActiveText : styles.btnText}>Reward</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Wishlist")}>
                        <View style={Page.includes("Wishlist") && styles.btnActiveBar}></View>
                        <Octicons name="checklist" size={20} style={Page.includes("Wishlist") ? styles.btnActiveIcon : styles.btnIcon} />
                        <Text style={Page.includes("Wishlist") ? styles.btnActiveText : styles.btnText}>Wishlist</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                modal && <Modal
                    visible={modal}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setModal(null)}
                >
                    <TouchableOpacity style={modalStyles.container}>
                        <View style={modalStyles.btnBox}>
                            <TouchableOpacity onPress={() => { setModal(false); navigation.navigate("AddTask") }}>
                                <LinearGradient colors={["#FFBEDC", "#F374AE"]} style={modalStyles.btn}>
                                    <Feather name="plus" style={modalStyles.btnIcon} />
                                    <Text style={modalStyles.btnText}>Add Task</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModal(false); navigation.navigate("AddReward") }}>
                                <LinearGradient colors={["#FFE5A4", "#FFB800"]} style={modalStyles.btn}>
                                    <Feather name="plus" style={modalStyles.btnIcon} />
                                    <Text style={modalStyles.btnText}>Add Reward</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <View style={{ borderWidth: 1, borderColor: "#FFFFFF42", borderStyle: "dashed", width: 1, height: 100, alignSelf: "center", transform: [{ rotate: "140deg" }] }}></View>
                            <View style={{ borderWidth: 1, borderColor: "#FFFFFF42", borderStyle: "dashed", width: 1, height: 100, alignSelf: "center", transform: [{ rotate: "220deg" }] }}></View>
                        </View>
                        <LinearGradient colors={["#84FFFD", "#3CBAB8"]} style={modalStyles.uploadBtn} onPress={() => setModal(false)}>
                            <Feather name="plus" style={modalStyles.uploadBtnIcon} />
                        </LinearGradient>
                        <View style={{ marginBottom: Platform.OS === "ios" ? 30 : 0 }}>

                        </View>
                    </TouchableOpacity>
                </Modal>
            }
        </>
    )
}

export default BottomTabs


const styles = StyleSheet.create({
    containerWrapper: {
        paddingHorizontal: 20,
        paddingBottom: 8,
        backgroundColor: "#FFFFFF",
    },
    container: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 4,
        paddingHorizontal: 22,
        width: "100%",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 999,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10
    },
    btn: {
        alignItems: "center"
    },
    btnActiveBar: {
        width: 30,
        height: 3,
        borderRadius: 9,
        backgroundColor: "#000000"
    },
    btnActiveIcon: {
        marginVertical: 5,
    },
    btnIcon: {
        marginVertical: 5,
        color: "#9F9F9F"
    },
    btnText: {
        fontSize: 8,
        fontWeight: "400",
        color: "#9F9F9F"
    },
    btnActiveText: {
        fontSize: 8,
        fontWeight: "400",
        color: "#000000",
    },

    addBtnGradient: {
        width: 45,
        height: 45,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -40,
        shadowColor: "rgba(223, 223, 223, 0.25)",
        elevation: 30,
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 1,
        shadowRadius: 30
    }
})

const modalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00000080",
        justifyContent: "flex-end",
        paddingVertical: 35,
        paddingHorizontal: 40
    },
    btnBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8
    },
    btnIcon: {
        fontSize: 15,
        marginRight: 12
    },
    btnText: {
        fontSize: 12,
        fontWeight: "400"
    },

    uploadBtn: {
        width: 45,
        height: 45,
        borderRadius: 99,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    uploadBtnIcon: {
        fontSize: 20
    }
})