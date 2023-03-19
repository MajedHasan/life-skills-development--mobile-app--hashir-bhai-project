import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Entypo from "react-native-vector-icons/Entypo"


const AddUserManually = ({ navigation }) => {


    return (
        <>
            <PrimaryStatusBar></PrimaryStatusBar>
            <SafeAreaLayout>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Entypo name="chevron-thin-left" size={18} onPress={() => navigation.goBack()} />
                        <Text style={styles.topContainerHeading}>Add Parent</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.mainContainer}>

                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default AddUserManually



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingBottom: 5
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: "#FFFFFF"
    },
    topContainerHeading: {
        fontWeight: "500",
        fontSize: 22
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 25
    }
})