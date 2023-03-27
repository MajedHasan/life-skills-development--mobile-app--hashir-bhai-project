import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"



const WishlistBox = ({ bgC1, bgC2, IconBoxContent, StarIcon, text, style }) => {
    return (
        <LinearGradient colors={[bgC1, bgC2]} style={style ? { ...styles.container, ...style } : styles.container}>
            <View style={styles.iconBox}>
                {IconBoxContent && IconBoxContent}
                {StarIcon && <>
                    <Ionicons name="star" style={styles.starIcon} />
                    <Text style={styles.iconText}>{StarIcon}</Text>
                </>}
            </View>
            <Text style={styles.iconBoxText}>{text}</Text>
        </LinearGradient>
    )
}

export default WishlistBox

const styles = StyleSheet.create({
    container: {
        width: 100,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 10
    },
    iconBox: {
        width: 60,
        height: 60,
        borderRadius: 999,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
    },
    iconBoxText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 12,
        textAlign: "center",
        marginTop: 10
    },
    starIcon: {
        color: "#FFB800",
        fontSize: 22,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10
    },
    iconText: {
        color: "#2B3236",
        fontSize: 8,
        fontWeight: "400"
    }
})