import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect } from 'react'

const WeekPicker = ({ setPickedDay }) => {

    const [selectedDay, setSelectedDay] = useState("MONDAY")

    useEffect(() => {
        setPickedDay(selectedDay)
    }, [selectedDay])

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setSelectedDay("FRIDAY")} style={selectedDay === "FRIDAY" && styles.activeBox}>
                <LinearGradient colors={["#FF80F2", "#D412C1"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "FRIDAY" ? 45 : 15 }}>FRI</Text>
                    <Text style={styles.text}>06</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedDay("SATURDAY")}>
                <LinearGradient colors={["#FFE486", "#C7A11A"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "SATURDAY" ? 45 : 15 }}>SAT</Text>
                    <Text style={styles.text}>07</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedDay("SUNDAY")}>
                <LinearGradient colors={["#B57AFF", "#612BA5"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "SUNDAY" ? 45 : 15 }}>SUN</Text>
                    <Text style={styles.text}>08</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedDay("MONDAY")}>
                <LinearGradient colors={["#51D0CE", "#238F8E"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "MONDAY" ? 45 : 15 }}>MON</Text>
                    <Text style={styles.text}>09</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedDay("TUESDAY")}>
                <LinearGradient colors={["#FEC3DE", "#E25696"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "TUESDAY" ? 45 : 15 }}>TUE</Text>
                    <Text style={styles.text}>10</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedDay("WEDNESDAY")}>
                <LinearGradient colors={["#7BFD78", "#40D13D"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "WEDNESDAY" ? 45 : 15 }}>WED</Text>
                    <Text style={styles.text}>11</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedDay("THURSDAY")}>
                <LinearGradient colors={["#6F6CF6", "#413FC1"]} style={{ ...styles.box }}>
                    <Text style={{ ...styles.text, marginBottom: selectedDay === "THURSDAY" ? 45 : 15 }}>THU</Text>
                    <Text style={styles.text}>12</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default WeekPicker

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginVertical: 20
    },
    box: {
        width: 45,
        paddingVertical: 15,
        paddingHorizontal: 8,
        borderRadius: 99
    },
    activeBox: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
        borderRadius: 99
    },
    text: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "300"
    }
})