import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'
import BalanceBadge from '../../components/BalanceBadge'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"


const WishlistImg = ({ navigation, route }) => {


    const [noImageFound, setNoImageFound] = useState(true)



    return (
        <NormalLayout headerLeft={<BalanceBadge />} shadowShown={true} navigation={navigation} route={route}>
            <View style={styles.container}>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.headingBox}>
                        <Text></Text>
                        <Text style={styles.heading}>New Ipad</Text>
                        <TouchableOpacity style={styles.headingIconBox} onPress={() => setNoImageFound(false)}>
                            <Ionicons name="camera-outline" size={18} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.subHeading}>Upload Images for your wishlist</Text>
                    {
                        noImageFound === true && <>
                            <Image source={require("../../../assets/Wishlist/ImageNotFound.png")} style={styles.notFoundImage} />
                            <Text style={styles.noImageFoundText}>No image Found Yet!</Text>
                        </>
                    }
                    {
                        noImageFound === false && <>
                            <View style={styles.imgBoxWrapper}>
                                <ImageBackground source={require("../../../assets/Wishlist/IpadImg1.png")} style={styles.imgBox}>
                                    <TouchableOpacity style={styles.imgBoxMoreIconBtn}>
                                        <Feather name="trash" style={styles.imgBoxMoreIcon} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground source={require("../../../assets/Wishlist/IpadImg2.png")} style={styles.imgBox}>
                                    <TouchableOpacity style={styles.imgBoxMoreIconBtn}>
                                        <Feather name="trash" style={styles.imgBoxMoreIcon} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground source={require("../../../assets/Wishlist/IpadImg3.png")} style={styles.imgBox}>
                                    <TouchableOpacity style={styles.imgBoxMoreIconBtn}>
                                        <Feather name="trash" style={styles.imgBoxMoreIcon} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground source={require("../../../assets/Wishlist/IpadImg4.png")} style={styles.imgBox}>
                                    <TouchableOpacity style={styles.imgBoxMoreIconBtn}>
                                        <Feather name="trash" style={styles.imgBoxMoreIcon} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground source={require("../../../assets/Wishlist/IpadImg5.png")} style={styles.imgBox}>
                                    <TouchableOpacity style={styles.imgBoxMoreIconBtn}>
                                        <Feather name="trash" style={styles.imgBoxMoreIcon} />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground source={require("../../../assets/Wishlist/IpadImg6.png")} style={styles.imgBox}>
                                    <TouchableOpacity style={styles.imgBoxMoreIconBtn}>
                                        <Feather name="trash" style={styles.imgBoxMoreIcon} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </>
                    }
                </View>
            </View>
        </NormalLayout>
    )
}

export default WishlistImg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    topContainer: {
        flex: 3,
    },
    mainContainer: {
        flex: 10,
        backgroundColor: "#F8FFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 40,
        paddingHorizontal: 24
    },
    headingBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headingIconBox: {
        width: 50,
        height: 50,
        backgroundColor: "#F4F4FE",
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center"
    },
    headingIconBoxIcon: {},
    heading: {
        color: "",
        fontSize: 22,
        fontWeight: "500"
    },
    subHeading: {
        color: "#848484",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center"
    },

    notFoundImage: {
        alignSelf: "center",
        width: 250,
        height: 250,
        resizeMode: "contain",
        marginTop: 40,
    },
    noImageFoundText: {
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center"
    },



    imgBoxWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    imgBox: {
        width: 100,
        height: 100,
        borderRadius: 14,
        position: "relative",
        marginVertical: 8,
        marginHorizontal: 5
    },
    imgBoxMoreIconBtn: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    imgBoxMoreIcon: {
        color: "#FFFFFF",
        fontSize: 25
    }
})