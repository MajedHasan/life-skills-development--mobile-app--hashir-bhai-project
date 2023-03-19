import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Entypo from "react-native-vector-icons/Entypo"
import { PrimaryColor } from '../../utils/Colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const ManageAccount = ({ navigation }) => {


    return (
        <>
            <PrimaryStatusBar></PrimaryStatusBar>
            <SafeAreaLayout>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Entypo name="chevron-thin-left" size={18} onPress={() => navigation.goBack()} />
                        <Text style={styles.topContainerHeading}>Manage Account</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.heading}>Enter Parent details</Text>
                        <View style={styles.imageBox}>
                            <Image source={require("../../../assets/Profile/ChildrenProfileImg2.png")} alt="" style={styles.image} />
                        </View>
                        <TouchableOpacity style={styles.editBtn}>
                            <Text style={styles.editBtnText}>Alexa</Text>
                            <MaterialCommunityIcons name="pencil" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default ManageAccount



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
    },
    heading: {
        color: "#000000",
        fontWeight: "500",
        fontSize: 22,
        alignSelf: "center",
        marginTop: 20
    },
    imageBox: {
        borderWidth: 1,
        borderColor: PrimaryColor,
        padding: 10,
        width: 150,
        height: 150,
        borderRadius: 999,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 40
    },
    image: {
        borderRadius: 999,
        width: "100%",
        height: "100%"
    },
    editBtn: {
        width: 80,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    editBtnText: {
        fontWeight: "300",
        fontSize: 18,
        marginRight: 30
    }
})