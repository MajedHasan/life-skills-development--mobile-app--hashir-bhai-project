import { Image, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import NormalLayout from '../../components/Layouts/NormalLayout'
import BalanceBadge from '../../components/BalanceBadge'
import Octicons from "react-native-vector-icons/Octicons"
import GlobalStyles from "../../styles/GlobalStyle"
import Feather from "react-native-vector-icons/Feather"

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react'
import { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const AddWish = ({ navigation, route }) => {

    const [successModal, setSuccessModal] = useState(null)
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);


    const askForPermission = async () => {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
        setHasGalleryPermission(galleryStatus.status === "granted")
    }

    useEffect(() => {
        // askForPermission()
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
            setHasGalleryPermission(galleryStatus.status === "granted")
        })()
    }, [])

    const pickImage = async (image) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result?.assets[0]?.uri)

        if (!result.canceled) {
            image === "image1" && setImage1(result.assets[0].uri);
            image === "image2" && setImage2(result.assets[0].uri);
        }
    };


    return (
        <>
            <NormalLayout navigation={navigation} route={route} headerLeft={<>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="chevron-back" size={28} onPress={() => navigation.goBack()} />
                    <BalanceBadge />
                </View>
            </>} shadowShown={true}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Add your wish here</Text>
                    <View>
                        <Text style={styles.inputLabel}>Gift Name*</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputBoxLabel}>I want to get</Text>
                            <TextInput style={styles.inputBoxInput} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Description</Text>
                        <View style={styles.inputBox}>
                            <TextInput style={{ ...styles.inputBoxInput, height: 125, justifyContent: "flex-start" }} placeholder="Tell why you wants to get this..."
                                numberOfLines={6}
                                multiline={true}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Upload picture (Optional )</Text>
                        <View style={styles.uploadBoxWrapper}>
                            {
                                image1 !== null && <View style={styles.imageBox}>
                                    <Feather name="trash-2" onPress={() => setImage1(null)} style={styles.imageBoxIcon} />
                                    <Image source={{ uri: image1 }} style={styles.imageBoxImg} alt="Image 1" />
                                </View>
                            }
                            {
                                image1 === null && <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage("image1")}>
                                    <Octicons name="upload" style={styles.uploadBoxIcon} />
                                    <Text style={styles.uploadBoxText}>Upload picture here</Text>
                                </TouchableOpacity>
                            }
                            {
                                image2 === null && <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage("image2")}>
                                    <Octicons name="upload" style={styles.uploadBoxIcon} />
                                    <Text style={styles.uploadBoxText}>Upload picture here</Text>
                                </TouchableOpacity>
                            }
                            {
                                image2 !== null && <View style={styles.imageBox}>
                                    <Feather name="trash-2" onPress={() => setImage2(null)} style={styles.imageBoxIcon} />
                                    <Image source={{ uri: image2 }} style={styles.imageBoxImg} alt="Image 2" />
                                </View>
                            }
                        </View>
                    </View>
                    <TouchableOpacity style={{ ...GlobalStyles.primaryBtn, ...styles.btn }} onPress={() => setSuccessModal(1)}>
                        <Text style={styles.btnText}>Send to parent</Text>
                    </TouchableOpacity>
                </View>
            </NormalLayout>
            {
                successModal && <Modal visible={true} transparent={true} animationType="fade" onRequestClose={() => setSuccessModal(false)}>
                    <View style={styles.successModalContainer}>
                        <TouchableOpacity style={styles.successModalTop} onPress={() => setSuccessModal(false)}>

                        </TouchableOpacity>
                        <View style={styles.successModalBottom}>
                            <ImageBackground source={require("../../../assets/Rewards/ModalBg.png")} style={styles.successModalBottomBg}>
                                {
                                    successModal === 1 && <>
                                        <Text style={styles.successModalHeading}>Nice! Send your new Wishlist item to your guardian.</Text>
                                        <View style={styles.successModalBox}>
                                            <LinearGradient colors={["#FFB1D5", "#DA5793"]} style={styles.successModalBoxBg}>
                                                <View style={styles.successModalBoxImgBox}>
                                                    <Image source={require("../../../assets/CaptureWork/SuccessImg3.png")} style={styles.successModalBoxImg} />
                                                </View>
                                                <Text style={styles.successModalBoxHeading}>Extra Pocketmoney this month</Text>
                                                <Text style={{ fontSize: 12, color: "#FFFFFF", textAlign: "center" }}>Waiting for Approval...</Text>
                                                <TouchableOpacity style={styles.successModalBtn} onPress={() => setSuccessModal(false)}>
                                                    <Text style={styles.successModalBtnText}>Back to tasks</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </>
                                }
                                {
                                    successModal === 2 && <>
                                        <Text style={styles.successModalHeading}>Congratulations! You have finished this job.</Text>
                                        <View style={styles.successModalBox}>
                                            <LinearGradient colors={["#FFB1D5", "#DA5793"]} style={styles.successModalBoxBg}>
                                                <View style={styles.successModalBoxImgBox}>
                                                    <Image source={require("../../../assets/CaptureWork/SuccessImg3.png")} style={styles.successModalBoxImg} />
                                                </View>
                                                <Text style={styles.successModalBoxHeading}>Extra Pocketmoney this month</Text>
                                                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                                                    <Text style={{ color: "#FFFFFF" }}>
                                                        <Text style={{ fontWeight: "800" }}>120</Text>
                                                        /150
                                                    </Text>
                                                    <Ionicons name="star" style={{ ...styles.successModalStarIcon, fontSize: 18, marginLeft: 10 }} />
                                                </View>
                                                <TouchableOpacity style={styles.successModalBtn}>
                                                    <Text style={styles.successModalBtnText}>Back to tasks</Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </>
                                }
                            </ImageBackground>
                        </View>
                    </View>
                </Modal>
            }
        </>
    )
}

export default AddWish

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FFFF",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: "#2B3236"
    },
    inputLabel: {
        color: "#000000",
        fontSize: 12,
        fontWeight: "400",
        marginTop: 24,
        marginBottom: 5,
    },
    inputBox: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E1E1E1",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row"
    },
    inputBoxLabel: {
        color: "#3CBAB8",
        fontSize: 12,
        fontWeight: "600",
        textAlignVertical: "top",
        marginRight: 3
    },
    inputBoxInput: {
        flex: 1,
        fontSize: 12
    },
    uploadBoxWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    uploadBox: {
        width: 160,
        height: 140,
        borderWidth: 1,
        borderColor: "#C9C9C9",
        borderStyle: "dashed",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: "#F8FFFF"
    },
    uploadBoxIcon: {
        fontSize: 22
    },
    uploadBoxText: {
        fontSize: 8,
        fontWeight: "400",
        marginTop: 10
    },

    imageBox: {
        width: 160,
        height: 140,
        borderRadius: 12,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
        overflow: "hidden",
        position: "relative"
    },
    imageBoxImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    imageBoxIcon: {
        color: "#000000",
        fontSize: 20,
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 999
    },

    btn: {
        width: 200,
        alignSelf: "center",
        marginTop: 40
    },
    btnText: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 14
    },








    successModalContainer: {
        flex: 1
    },
    successModalTop: {
        flex: 1.2
    },
    successModalBottom: {
        flex: 10,
        backgroundColor: "#FFFFFF"
    },
    successModalBottomBg: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    successModalHeading: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 21,
        color: "#000000",
        marginTop: 20,
        marginBottom: 20
    },
    successModalBox: {
        width: 260,
        alignSelf: "center",
        borderRadius: 15,
        overflow: "hidden"
    },
    successModalBoxBg: {
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    successModalBoxImgBox: {
        width: 140,
        height: 140,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        backgroundColor: "#FFFFFF"
    },
    successModalBoxImg: {
        width: 80,
        height: 80
    },
    successModalBoxHeading: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 40,
        marginBottom: 20
    },
    successModalStarIcon: {
        color: "#FFB800",
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10
    },

    successModalBtn: {
        width: 200,
        alignItems: "center",
        marginTop: 30,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        paddingVertical: 15
    },
    successModalBtnText: {
        fontWeight: "500",
        fontSize: 14,
        color: "#2E8F8E"
    }
})