import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { LinearGradient } from "expo-linear-gradient";



const BalanceBadge = ({ showBalanceType }) => {
    return (
        <View>
            <LinearGradient colors={["#FFCBE3", "#F374AE"]} style={styles.container}>
                <Text style={styles.text}>
                    {
                        showBalanceType === "day" && "Today's "
                    }
                    {
                        showBalanceType === "week" && "This Week "
                    }
                    {
                        showBalanceType === "month" && "This Month "
                    }
                    {
                        !showBalanceType && "Total "
                    }
                    Balance :
                </Text>
                <Image source={require("../../assets/Notification/BalanceBadgeStar.png")} alt="" />
                <Text style={styles.text}>120</Text>
            </LinearGradient>
        </View>
    )
}

export default BalanceBadge

const styles = StyleSheet.create({
    container: {
        paddingVertical: 3,
        paddingHorizontal: 13,
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 10
    }
})