import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';

const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.navigate("UserType")
    }, 1500);

    return (
        <View style={styles.container}>
            <Image style={styles.bgImg} source={require("../../../assets/Splash-bg.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: `url(${require("../../../assets/Splash-bg.png")})`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImg: {
        maxWidth: "100%",
        width: "100%",
    }
});

export default Splash