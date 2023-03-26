import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const CheckListBox = ({ bgColor, bdColor, text, iconType, navigation }) => {
    return (
        <TouchableOpacity style={{ ...styles.container, backgroundColor: bgColor, borderColor: bdColor }} onPress={() => navigation ? navigation.navigate("ConnectScan") : {}}>
            <View style={{ ...styles.bigStarBox, borderColor: bdColor }}>
                <Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={styles.bigStarImg} />
            </View>
            <View style={styles.textContainer}>
                <Text>{text}</Text>
                <View style={styles.starBox}>
                    <FontAwesome name="star" size={15} style={styles.fillStar} />
                    <FontAwesome name="star" size={15} style={styles.fillStar} />
                    <FontAwesome name="star" size={15} style={styles.fillStar} />
                    <FontAwesome name="star-half-empty" size={15} style={styles.fillStar} />
                    <FontAwesome name="star-half-o" size={15} style={styles.fillStar} />
                </View>
            </View>
            <TouchableOpacity style={{ ...styles.iconBox, borderColor: bdColor }}>
                {
                    iconType === "checkmark" && <Ionicons name="checkmark" size={20} />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default CheckListBox

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99,
        marginBottom: 25,
        paddingRight: 15
    },

    bigStarImg: {
        width: 40,
        height: 40
    },
    bigStarBox: {
        width: 70,
        height: 70,
        borderRadius: 999,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
    },

    textContainer: {
        alignItems: "flex-start"
    },
    starBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    iconBox: {
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1
    },

    fillStar: {
        color: "#FFB800",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5,
        marginRight: 3
    }
})