import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SecondaryColor } from "../../utils/Colors"


const MyProgramOrFamilyFeed = ({ checklistPageType, setChecklistPageType }) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonBox}>
                <TouchableOpacity style={styles.button} onPress={() => setChecklistPageType("MY PROGRAM")}>
                    <Text style={checklistPageType === "MY PROGRAM" ? { ...styles.buttonTextActive, ...styles.buttonText } : { ...styles.buttonTextInActive, ...styles.buttonText }}>MY PROGRAM</Text>
                    {
                        checklistPageType === "MY PROGRAM" && <View style={styles.activeBtnButtomBorder}></View>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setChecklistPageType("FAMILY FEED")}>
                    <Text style={checklistPageType === "FAMILY FEED" ? { ...styles.buttonTextActive, ...styles.buttonText } : { ...styles.buttonTextInActive, ...styles.buttonText }}>FAMILY FEED</Text>
                    {
                        checklistPageType === "FAMILY FEED" && <View style={styles.activeBtnButtomBorder}></View>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyProgramOrFamilyFeed

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#CBCBCB",
        backgroundColor: "#FFFFFF",
        marginTop: 2
    },
    buttonBox: {
        width: 300,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        alignItems: "center"
    },
    buttonText: {
        paddingVertical: 8,
        fontSize: 16
    },
    buttonTextActive: {
        color: SecondaryColor,
        fontWeight: "400"
    },
    buttonTextInActive: {
        fontWeight: "500",
        color: "#A7A7A7"
    },
    activeBtnButtomBorder: {
        backgroundColor: "#F374AE",
        borderRadius: 999,
        width: 110,
        height: 5,
        marginBottom: -2.5
    }
})