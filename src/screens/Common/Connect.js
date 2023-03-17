import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'
import ConnectScreenImg from "../../../assets/Connect/ConnectScreenImg.png"
import GlobalStyle from '../../styles/GlobalStyle'

const Connect = ({ navigation }) => {
    return (
        <>
            <NormalLayout headerLeft={<Text style={styles.headerLeft}>LifeSkillz</Text>} shadowShown={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>Connect to your Guardian.</Text>
                    <Image source={ConnectScreenImg} style={styles.image} />
                    <Text style={styles.smallTxt}>Add your parent or guardian to your account easily.</Text>
                    <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.btn }} onPress={() => navigation.navigate("ConnectScan")}>
                        <Text style={styles.btnTxt}>Connect Parent</Text>
                    </TouchableOpacity>
                </View>
            </NormalLayout>
        </>
    )
}

export default Connect

const styles = StyleSheet.create({
    headerLeft: {
        fontWeight: "500",
        fontSize: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#f4f4fe",
        paddingVertical: 25,
        alignItems: "center"
    },
    title: {
        color: "#000000",
        fontWeight: "600",
        fontSize: 25
    },
    image: {
        width: 250,
        resizeMode: "contain"
    },
    smallTxt: {
        marginVertical: 40,
        color: "#000000",
        fontWeight: "300",
        fontSize: 13
    },
    btn: {
        maxWidth: 250,
    },
    btnTxt: {
        color: "white"
    }
})