import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'

import ChildImg from "../../../assets/UserType/Child.png"
import ParentImg from "../../../assets/UserType/Parent.png"
import GlobalStyle from '../../styles/GlobalStyle'

const UserType = ({ navigation }) => {

    const handleUserTypeSelect = (usertype) => {
        navigation.navigate("Login", { userType: usertype })
    }

    return (
        <>
            <SafeAreaLayout>
                <PrimaryStatusBar />
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Who Is Using This Device?
                    </Text>
                    <View style={styles.box}>
                        <Image source={ChildImg} />
                        <TouchableOpacity style={{ ...GlobalStyle.secondaryBtn, ...styles.btn }} onPress={() => handleUserTypeSelect("child")}>
                            <Text style={styles.btnText}>Child</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <Image source={ParentImg} />
                        <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.btn }} onPress={() => handleUserTypeSelect("parent")}>
                            <Text style={styles.btnText}>Parent</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default UserType

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: "#F8FFFF"
    },
    heading: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "600",
        flex: 1
    },
    box: {
        flex: 2,
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: 40,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 9,
        height: "100%",
        justifyContent: "center",
        shadowColor: "rgba(117, 117, 117, 0.25)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
    },
    btn: {
        marginTop: 20,
        width: 200,
    },
    btnText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 15
    }
})