import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'

const WishlistBox = ({ bgC1, bgC2, IconBoxContent, text, style }) => {
    return (
        <LinearGradient colors={[bgC1, bgC2]} style={style ? { ...styles.container, ...style } : styles.container}>
            <View style={styles.iconBox}>
                {IconBoxContent}
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
    }
})