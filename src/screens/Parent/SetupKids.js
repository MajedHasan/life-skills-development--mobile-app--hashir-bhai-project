import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SetupKids = ({ navigation }) => {

    const handleNext = async () => {
        const jsonUser = await AsyncStorage.getItem("user")
        const user = await JSON.parse(jsonUser)
        await AsyncStorage.setItem("user", JSON.stringify({ ...user, connected: true }))
        navigation.navigate("Checklist")
    }

    return (
        <NormalLayout shadowShown={true} headerLeft={<Text style={{ fontSize: 20, fontWeight: "500" }}>LifeSkillz</Text>}>
            <View style={styles.container}>
                <Text style={styles.heading}>Setup Your Kids Jobs</Text>
                <View style={styles.boxContainer}>
                    <TouchableOpacity style={styles.box} onPress={handleNext}>
                        <ImageBackground source={require("../../../assets/SetupKids/kids1.png")} style={styles.boxImg}>
                            <View style={styles.boxTextBox}>
                                <Text style={styles.boxTextBoxText}>Levi Meir Clancy</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={handleNext}>
                        <ImageBackground source={require("../../../assets/SetupKids/kids2.png")} style={styles.boxImg}>
                            <View style={styles.boxTextBox}>
                                <Text style={styles.boxTextBoxText}>Levi Meir Clancy</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={handleNext}>
                        <ImageBackground source={require("../../../assets/SetupKids/kids3.png")} style={styles.boxImg}>
                            <View style={styles.boxTextBox}>
                                <Text style={styles.boxTextBoxText}>Levi Meir Clancy</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={handleNext}>
                        <ImageBackground source={require("../../../assets/SetupKids/kids4.png")} style={styles.boxImg}>
                            <View style={styles.boxTextBox}>
                                <Text style={styles.boxTextBoxText}>Levi Meir Clancy</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </NormalLayout>
    )
}

export default SetupKids

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 30
    },
    heading: {
        color: "#000000",
        fontWeight: "600",
        fontSize: 22,
        textAlign: "center",
        marginBottom: 40
    },
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    box: {
        width: 150,
        height: 160,
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: 15
    },
    boxImg: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        justifyContent: "flex-end"
    },
    boxTextBox: {
        backgroundColor: "#FFFFFF80",
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    boxTextBoxText: {
        textAlign: "center",
        color: "#000000",
        fontWeight: "400",
        fontSize: 14
    },
})