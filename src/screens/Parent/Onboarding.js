import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { TransparentDarkStatusBar } from '../../components/StatusBars'
import { useState } from 'react'
import GlobalStyles from "../../styles/GlobalStyle"
import AsyncStorage from '@react-native-async-storage/async-storage'


const Onboarding = ({ navigation, route }) => {

    const [screen, setScreen] = useState(1)

    const handleNext = async () => {

        const jsonUser = await AsyncStorage.getItem("user")
        const user = await JSON.parse(jsonUser)

        const updatedUser = { ...user, doneOnboarding: true }

        await AsyncStorage.setItem("user", JSON.stringify(updatedUser))

        navigation.replace("ConnectScan")
    }

    return (
        <>
            <SafeAreaLayout>
                <TransparentDarkStatusBar />
                {
                    screen === 1 && <View style={styles.container}>
                        <View style={styles.topBox}>
                            <TouchableOpacity onPress={handleNext} style={styles.skipBtn}>
                                <Text style={styles.skipText}>Skip</Text>
                            </TouchableOpacity>
                            <Image source={require("../../../assets/Onboarding/Screen1.png")} />
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.heading}>Manage Your Child's Activities</Text>
                            <Text style={styles.text}>LifeSkillz is all about teaching kids how to do JOBS! As you set your child's account up age appropriate tasks and jobs will be populated for them to do, including step-by-step instructions for you and them to follow to get started.</Text>
                            <TouchableOpacity style={GlobalStyles.primaryBtn} onPress={() => setScreen(2)}>
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {
                    screen === 2 && <View style={styles.container}>
                        <View style={styles.topBox}>
                            <TouchableOpacity onPress={handleNext} style={styles.skipBtn}>
                                <Text style={styles.skipText}>Skip</Text>
                            </TouchableOpacity>
                            <Image source={require("../../../assets/Onboarding/Screen2.png")} />
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.heading}>Organise Daily, Weekly, Monthly Jobs & Watch Your Kids Habits Change</Text>
                            <Text style={styles.text}>LifeSkillz is all about teaching kids how to do JOBS! As you set your child's account up age appropriate tasks and jobs will be populated for them to do, including step-by-step instructions for you and them to follow to get started.</Text>
                            <TouchableOpacity style={GlobalStyles.primaryBtn} onPress={() => setScreen(3)}>
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {
                    screen === 3 && <View style={styles.container}>
                        <View style={styles.topBox}>
                            <TouchableOpacity onPress={handleNext} style={styles.skipBtn}>
                                <Text style={styles.skipText}>Skip</Text>
                            </TouchableOpacity>
                            <Image source={require("../../../assets/Onboarding/Screen3.png")} />
                        </View>
                        <View style={styles.bottomBox}>
                            <Text style={styles.heading}>Set Goals & Rewards to Keep Your Kids Engaged!</Text>
                            <Text style={styles.text}>To keep kids invested in the ongoing learning process, a gold star reward system has been connected to their personalised WISHLIST, which outlines items and activities they desire in return for doing their jobs. From ice-cream for desert to the latest iPad, the reward system will bring excitement, education and life changing habits to your child's life.</Text>
                            <TouchableOpacity style={GlobalStyles.primaryBtn} onPress={handleNext}>
                                <Text style={styles.btnText}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </SafeAreaLayout>
        </>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, topBox: {
        flex: 1,
        position: "relative"
    },
    skipBtn: {
        position: "absolute",
        top: 15,
        right: 10,
        zIndex: 99
    },
    skipText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "400",
    },
    bottomBox: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    heading: {
        color: "#000000",
        fontWeight: "700",
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    text: {
        color: "#000000",
        fontWeight: "400",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 75
    },
    btnText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 16
    }
})