import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaLayout from './SafeAreaLayout'

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ChildrenProfileImg from "../../assets/ChildrenProfileImg.png"


const NormalLayout = ({ children, headerLeft, shadowShown }) => {
    return (
        <>
            <SafeAreaLayout>
                <View style={shadowShown ? styles.headerWithShadow : styles.header}>
                    <View>
                        {headerLeft ? headerLeft : <Text></Text>}
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.notification}>
                            <MaterialIcons name="notifications-none" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={ChildrenProfileImg} style={styles.ProfileImg} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    {children}
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default NormalLayout

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#FFFFFF"
    },
    headerWithShadow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#FFFFFF",
        shadowColor: "rgba(223, 223, 223, 0.25)",
        elevation: 30,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center"
    },
    notification: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F4FE",
        borderRadius: 999,
        marginRight: 12
    },
    ProfileImg: {
        width: 40,
        height: 40,
        borderRadius: 999
    },
    container: {
        flex: 1
    }
})