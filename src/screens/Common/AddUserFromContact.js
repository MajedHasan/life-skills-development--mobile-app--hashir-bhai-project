import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SafeAreaLayout from '../../components/SafeAreaLayout'
import { PrimaryStatusBar } from '../../components/StatusBars'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import GlobalStyle from '../../styles/GlobalStyle'
import Ionicons from "react-native-vector-icons/Ionicons"


const AddUserFromContact = ({ navigation }) => {


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
                        <View style={styles.searchBox}>
                            <Feather name="search" size={20} />
                            <TextInput style={styles.searchBoxInput} placeholder='Search name here...' />
                        </View>
                        <ScrollView style={styles.resultBoxContainer}>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User1.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Fatima</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User2.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Mazzad Kabir</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Ionicons name='checkmark-done-outline' size={15} style={{ color: "#FFFFFF" }} />
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User3.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Haider Chuadhry</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User4.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Yie Eshaaz</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User5.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Mr. chips</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User6.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Kevin Alexander</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.resultBox}>
                                <View style={styles.resultBoxContent}>
                                    <Image source={require("../../../assets/AddUser/User7.png")} alt="" style={styles.resultBoxImg} />
                                    <Text style={styles.resultBoxText}>Micheal Mins</Text>
                                </View>
                                <TouchableOpacity style={{ ...GlobalStyle.primaryBtn, ...styles.inviteBtn }}>
                                    <Text style={styles.inviteBtnText}>Invite</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaLayout>
        </>
    )
}

export default AddUserFromContact



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
    searchBox: {
        borderWidth: 1,
        borderColor: "#C5C5C5",
        borderRadius: 999,
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center"
    },
    searchBoxInput: {
        fontWeight: "300",
        fontSize: 12,
        marginLeft: 20
    },
    resultBoxContainer: {
        flex: 1,
        marginTop: 30
    },
    resultBox: {
        borderWidth: 1,
        borderColor: "#C5C5C5",
        borderRadius: 8,
        paddingVertical: 7,
        paddingHorizontal: 12,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15
    },
    resultBoxContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    resultBoxImg: {
        width: 50,
        height: 46,
        borderRadius: 8
    },
    resultBoxText: {
        marginLeft: 15,
        fontWeight: "500",
        fontSize: 12
    },
    inviteBtn: {
        width: 90,
        paddingVertical: 7,
    },
    inviteBtnText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "500",
        marginLeft: 5
    }
})