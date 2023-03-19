import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BalanceBadge from '../../components/BalanceBadge'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from 'react'
import { SecondaryColor } from '../../utils/Colors'


const AddUser = ({ navigation }) => {

    const [checkManualBox, setCheckManualBox] = useState(false)
    const [checkFromContact, setCheckFromContact] = useState(false)
    const [checkFindNearby, setCheckFindNearby] = useState(false)

    const handleNavigate = (type) => {
        if (type === "Manual") {
            setCheckManualBox(true)
            setTimeout(() => {
                navigation.navigate("AddUserManually")
            }, 1000);
        }
        else if (type === "Contact") {
            setCheckFromContact(true)
            setTimeout(() => {
                navigation.navigate("AddUserFromContact")
            }, 1000);
        }
        else if (type === "Nearby") {
            setCheckFindNearby(true)
            setTimeout(() => {
                navigation.navigate("ConnectScan")
            }, 1000);
        }
    }

    return (
        <>
            <PrimaryStatusBar></PrimaryStatusBar>
            <SafeAreaLayout>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Entypo name="chevron-thin-left" size={18} onPress={() => navigation.goBack()} />
                        <Text style={styles.topContainerHeading}>Add Parent</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <TouchableOpacity style={styles.box} onPress={() => handleNavigate("Manual")}>
                            <Text style={styles.boxText}>Add Manuaily</Text>
                            <View style={checkManualBox ? styles.checkmarkBoxActive : styles.checkmarkBox}>
                                {
                                    checkManualBox && <Ionicons name='checkmark' size={15} />
                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => handleNavigate("Contact")}>
                            <Text style={styles.boxText}>Select from Contacts</Text>
                            <View style={checkFromContact ? styles.checkmarkBoxActive : styles.checkmarkBox}>
                                {
                                    checkFromContact && <Ionicons name='checkmark' size={15} />
                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => handleNavigate("Nearby")}>
                            <Text style={styles.boxText}>Find Nearby</Text>
                            <View style={checkFindNearby ? styles.checkmarkBoxActive : styles.checkmarkBox}>
                                {
                                    checkFindNearby && <Ionicons name='checkmark' size={15} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default AddUser



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
    box: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#C5C5C5",
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
        marginBottom: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    boxText: {
        color: "#000000",
        fontWeight: "500",
        fontSize: 16
    },
    checkmarkBox: {
        borderWidth: 1,
        borderColor: "#C5C5C5",
        borderRadius: 999,
        width: 40,
        height: 40
    },
    checkmarkBoxActive: {
        borderRadius: 999,
        width: 40,
        height: 40,
        backgroundColor: SecondaryColor
    }
})