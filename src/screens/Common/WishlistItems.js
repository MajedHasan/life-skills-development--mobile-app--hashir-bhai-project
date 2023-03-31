import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from "../../components/BalanceBadge"
import { useState } from 'react'
import CheckListBox from '../../components/Common/CheckListBox'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"


const WishlistItems = ({ navigation, route }) => {

    const [checklistPageType, setChecklistPageType] = useState("MY PROGRAM")
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <NormalLayout navigation={navigation} route={route} headerLeft={<>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="chevron-back" size={28} onPress={() => navigation.goBack()} />
                    <BalanceBadge />
                </View>
            </>} shadowShown={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.modalTopContainer} onPress={() => setShowModal(false)}></TouchableOpacity>
                    <View style={styles.modalMainContainer}>
                        <View style={styles.todaysJobHeadingBox}>
                            <Text style={styles.todaysJobHeading}>Pocket Money Wishlist</Text>
                            <TouchableOpacity style={styles.todaysJobHeadingBtn} onPress={() => navigation.navigate("WishlistImg")}>
                                <View style={styles.todaysJobHeadingBtnIconBox}>
                                    <Ionicons name="images-outline" size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{ flex: 1, paddingTop: 25 }}>
                            <CheckListBox text="Cleaning the lawn" iconType="reload" bgColor="#F374AE66" bdColor="#F374AE" navigation={navigation}></CheckListBox>
                            <CheckListBox text="Make bed properly" iconType="reload" bgColor="#0ADBDB66" bdColor="#0ADADB" navigation={navigation}></CheckListBox>
                            <CheckListBox text="Do Maths homework " bgColor="#6F00DE63" bdColor="#6F00DE"></CheckListBox>
                            <CheckListBox text="Cleaning the toilets" bgColor="#FAFF0066" bdColor="#FAFF00"></CheckListBox>
                            <CheckListBox text="Make bed properly" bgColor="#FF000066" bdColor="#FF0000"></CheckListBox>
                            <CheckListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00"></CheckListBox>
                        </ScrollView>
                    </View>
                </View>
            </NormalLayout>
        </>
    )
}

export default WishlistItems

const styles = StyleSheet.create({
    todaysJobHeadingBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
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

    modalContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    modalTopContainer: {
        flex: 1
    },
    modalMainContainer: {
        flex: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    todaysJobHeadingBtnIconBox: {
        width: 32,
        height: 32,
        borderRadius: 99,
        backgroundColor: "#F4F4FE",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    }
})