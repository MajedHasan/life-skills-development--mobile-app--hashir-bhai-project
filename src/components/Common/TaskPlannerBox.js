import { StyleSheet, Text, View, Platform } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const TaskPlannerBox = ({ time, text, isCompleted, bgColor, bdColor, starColor, starCount }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>{time && time}</Text>
            <View style={{ ...styles.emptyBox }}>

            </View>
            <View style={{ ...styles.box, backgroundColor: bgColor, borderColor: bdColor }}>
                <View style={styles.topBox}>
                    <Text style={styles.topBoxText}>{text && text}</Text>
                    {
                        isCompleted && <View style={{ ...styles.checkmarkBox, backgroundColor: bgColor }}>
                            <Ionicons name="checkmark" style={styles.checkmarkBoxIcon} />
                        </View>
                    }
                </View>
                <View style={styles.bottomBox}>
                    <View style={styles.starBox}>
                        {
                            starCount?.map((star, index) => <Ionicons name="star" key={index} style={{ ...styles.starBoxIcon, color: starColor }} />)
                        }
                    </View>
                    <View style={{ ...styles.timeBox, borderColor: bdColor }}>
                        <MaterialCommunityIcons name="timer-sand-empty" style={{ ...styles.timeBoxIcon, color: bdColor }} />
                        <Text style={{ ...styles.timeBoxText, color: bdColor }}>2:00pm</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TaskPlannerBox

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
        paddingRight: 24
    },
    timeText: {
        fontSize: 12,
        fontWeight: "300",
        transform: [{ rotate: "270deg" }],
        height: 15
    },
    emptyBox: {
        width: 17,
        height: 17,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        marginRight: 10,
        marginLeft: Platform.OS === "android" ? -7 : -10,
        borderColor: "#3CBAB8"
    },
    box: {
        width: 300,
        paddingVertical: 8,
        paddingHorizontal: 23,
        borderRadius: 14,
        borderWidth: 1,
        position: "relative"
    },
    topBox: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topBoxText: {
        color: "#1F191C",
        fontWeight: "400",
        fontSize: 16
    },
    checkmarkBox: {
        position: "absolute",
        top: -20,
        right: -28,
        borderWidth: 3,
        borderRadius: 99,
        width: 40,
        height: 40,
        borderColor: "#FFFFFF",
        zIndex: 99,
        alignItems: "center",
        justifyContent: "center"
    },
    checkmarkBoxIcon: {
        color: "#000000",
        fontSize: 25
    },
    bottomBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    starBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    starBoxIcon: {
        fontSize: 17
    },
    timeBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
        paddingHorizontal: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderRadius: 99
    },
    timeBoxIcon: {
        fontSize: 11,
        marginRight: 8
    },
    timeBoxText: {
        fontSize: 10,
        fontWeight: "300"
    }
})