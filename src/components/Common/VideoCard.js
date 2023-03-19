import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { PrimaryColor } from '../../utils/Colors'

const VideoCard = ({ bgImg, text }) => {
    return (
        <View style={styles.containerWrapper}>
            <ImageBackground source={bgImg} style={styles.container}>
                <Text style={styles.headingText}>{text}</Text>
                <AntDesign name="play" size={35} style={styles.playIcon} />
                <View style={styles.metaBox}>
                    <AntDesign name="heart" size={12} style={{ color: "#FF0000" }} />
                    <Text style={styles.metaBoxText}>12</Text>
                    <View style={styles.line}></View>
                    <MaterialIcons name="insert-comment" size={12} style={{ color: "#00E0FF" }} />
                    <Text style={styles.metaBoxText}>3</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default VideoCard

const styles = StyleSheet.create({
    containerWrapper: {
        borderRadius: 999
    },
    container: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 22,
        marginBottom: 20
    },
    headingText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 14
    },
    playIcon: {
        color: PrimaryColor,
        marginVertical: 30,
        alignSelf: "center",
        shadowColor: PrimaryColor,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8
    },
    metaBox: {
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF4D",
        alignItems: "center",
        width: 100,
        flexDirection: "row"
    },
    metaBoxText: {
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 11,
        marginHorizontal: 5
    },
    line: {
        width: 2,
        height: 12,
        backgroundColor: "#FFFFFF54",
        marginHorizontal: 8
    }
})