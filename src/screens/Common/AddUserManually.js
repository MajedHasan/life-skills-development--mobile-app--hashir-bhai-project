import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Entypo from "react-native-vector-icons/Entypo"
import { PrimaryColor } from '../../utils/Colors'
import Feather from "react-native-vector-icons/Feather"
import GlobalStyle from '../../styles/GlobalStyle'


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
                        <Text style={styles.heading}>Enter Parent details</Text>
                        <View style={styles.imageBox}>
                            <Image source={require("../../../assets/AddUser/AddUserManuallyImg.png")} alt="" style={styles.image} />
                        </View>
                        <View style={styles.inputBoxContainer}>
                            <View style={styles.label}>
                                <Feather name="users" size={15} style={styles.labelIcon} />
                                <Text style={styles.labelText}>First Name</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput placeholder='Enter first name' style={styles.input} />
                            </View>
                        </View>
                        <View style={styles.inputBoxContainer}>
                            <View style={styles.label}>
                                <Feather name="users" size={15} style={styles.labelIcon} />
                                <Text style={styles.labelText}>Last Name</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput placeholder='Enter last name' style={styles.input} />
                            </View>
                        </View>
                        <View style={styles.submitBtnBox}>
                            <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.submitBtn }}>
                                <Text style={styles.btnTxt}>Add Parent</Text>
                            </TouchableOpacity>
                        </View>
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

    inputBoxContainer: {},
    label: {
        flexDirection: "row",
        alignItems: "center"
    },
    labelIcon: {
        color: "#000000"
    },
    labelText: {
        color: "#000000",
        fontWeight: "400",
        fontSize: 12,
        marginLeft: 10
    },
    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderRadius: 999,
        marginTop: 3,
        marginBottom: 25
    },
    input: {
        color: "#AFAFAF",
        fontWeight: "400",
        fontSize: 10
    },

    submitBtn: {
        width: 200,
        alignSelf: "center",
        marginTop: 50
    },
    btnTxt: {
        color: "#FFFFFF"
    },
})