import { useEffect } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import { userData } from '../../components/Data/data';

const Splash = ({ navigation }) => {


    setTimeout(() => {
        if (userData?.role) {
            if (userData?.connected === true) {
                navigation.navigate("Checklist")
            }
            else {
                if (userData?.role === "child") {
                    navigation.navigate("Connnect")
                } else {
                    if (userData?.doneOnboarding === true) {
                        navigation.navigate("ConnectScan")
                    }
                    else {
                        navigation.navigate("Onboarding")
                    }
                }
            }
        }
        else {
            navigation.navigate("UserType")
        }
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