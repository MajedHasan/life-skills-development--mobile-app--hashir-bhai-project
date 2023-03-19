import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from '../../components/BalanceBadge'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Entypo from "react-native-vector-icons/Entypo"


const Notification = ({ navigation, route }) => {

    return (
        <>
            <PrimaryStatusBar></PrimaryStatusBar>
            <NormalLayout headerLeft={<BalanceBadge showBalanceType="day" navigation={navigation} route={route}></BalanceBadge>}>
                <View style={styles.container}>
                    <ScrollView style={styles.wrapper}>
                        <NotificationCard borderColor="#FFB800" text="Congrats ,You claimed a new reward."></NotificationCard>
                        <NotificationCard borderColor="#F374AE" text="Your Wishlist updatde with “New ipad”."></NotificationCard>
                        <NotificationCard borderColor="#F09A6D" text="Yoohoo, you get a bonous."></NotificationCard>
                        <NotificationCard borderColor="#6F00DE" text="Congrats ,you get a bonus of 5 stars"></NotificationCard>
                        <NotificationCard borderColor="#65F2F0" text="You have to do make bed correctly again."></NotificationCard>
                    </ScrollView>
                </View>
            </NormalLayout>
        </>
    )
}

export default Notification


const NotificationCard = ({ borderColor, text, shareBtnShow }) => {
    return (
        <View style={styles.notificationCard}>
            <View style={styles.cardInfo}>
                <View style={{ ...styles.cardBorder, backgroundColor: borderColor }}></View>
                <Text style={styles.cardText}>{text}</Text>
            </View>
            {
                shareBtnShow === true && <Entypo name="share" size={18} />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    notificationCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        shadowColor: "rgba(117, 117, 117, 0.25)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 15,
        marginBottom: 20
    },
    cardInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    cardBorder: {
        width: 8,
        height: 45,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardText: {
        marginLeft: 15,
        fontSize: 14,
        fontWeight: "400"
    }
})