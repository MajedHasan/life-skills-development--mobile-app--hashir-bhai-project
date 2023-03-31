import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from "../../components/BalanceBadge"
import Entypo from "react-native-vector-icons/Entypo"
import GlobalStyle from '../../styles/GlobalStyle'
import WishlistBox from '../../components/Common/WishlistBox'


const Wishlist = ({ navigation, route }) => {
    return (
        <>
            <NormalLayout showNavMenu="child" navigation={navigation} route={route} shadowShown={true} headerLeft={<BalanceBadge />} >
                <View style={styles.container}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.todaysJobHeadingBox}>
                            <Text style={styles.todaysJobHeading}>Financial Goals</Text>
                            <TouchableOpacity style={{ ...styles.todaysJobHeadingBtn, ...GlobalStyle.primaryBtn, width: 105 }} onPress={() => navigation.navigate("AddWish")}>
                                <Entypo name="plus" style={{ fontSize: 15, color: "#FFFFFF" }} />
                                <Text style={styles.todaysJobHeadingBtnText}>Add wish</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.wishlistBoxContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate("WishlistItems")}>
                                <WishlistBox bgC1="#FF8A8A" bgC2="#CB2F2F" text="500$ Pocket Money" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <WishlistBox bgC1="#FF8A8A" bgC2="#CB2F2F" text="New Lego" StarIcon={"0/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#FF8A8A" bgC2="#CB2F2F" text="New Lego" StarIcon={"0/100"} style={{ marginRight: 10 }} />
                        </View>


                        <View style={styles.todaysJobHeadingBox}>
                            <Text style={styles.todaysJobHeading}>Personal Goals</Text>
                        </View>
                        <View style={styles.wishlistBoxContainer}>
                            <WishlistBox bgC1="#81FF9D" bgC2="#11FF45" text="Learn an instrument" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#81FF9D" bgC2="#11FF45" text="Take part in Speech & Drama classes" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                        </View>


                        <View style={styles.todaysJobHeadingBox}>
                            <Text style={styles.todaysJobHeading}>Emotional Goals</Text>
                        </View>
                        <View style={styles.wishlistBoxContainer}>
                            <WishlistBox bgC1="#FCB3D7" bgC2="#FF06B9" text="Family time playing games" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#FCB3D7" bgC2="#FF06B9" text="Family outing to the park" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                        </View>


                        <View style={styles.todaysJobHeadingBox}>
                            <Text style={styles.todaysJobHeading}>Social Goals</Text>
                        </View>
                        <View style={styles.wishlistBoxContainer}>
                            <WishlistBox bgC1="#4DC4CA" bgC2="#3F7AC1" text="Do something kind to help a neighbor." StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#4DC4CA" bgC2="#3F7AC1" text="Do something kind to help Grandparents" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#4DC4CA" bgC2="#3F7AC1" text="Do something kind to help Grandparents" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                        </View>


                        <View style={styles.todaysJobHeadingBox}>
                            <Text style={styles.todaysJobHeading}>Physical Goals</Text>
                        </View>
                        <View style={styles.wishlistBoxContainer}>
                            <WishlistBox bgC1="#FFDF94" bgC2="#FFA110" text="Do something kind to help a neighbor." StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#FFDF94" bgC2="#FFA110" text="Do something kind to help Grandparents" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                            <WishlistBox bgC1="#FFDF94" bgC2="#FFA110" text="Do something kind to help Grandparents" StarIcon={"30/100"} style={{ marginRight: 10 }} />
                        </View>
                    </ScrollView>
                </View>
            </NormalLayout>
        </>
    )
}

export default Wishlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FFFF",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 0,
        paddingHorizontal: 25
    },
    todaysJobHeadingBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        marginBottom: 20
    },
    todaysJobHeading: {
        fontWeight: "600",
        fontSize: 20
    },
    todaysJobHeadingBtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    todaysJobHeadingBtnText: {
        fontWeight: "300",
        fontSize: 12,
        color: "#FFFFFF"
    },

    wishlistBoxContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap"
    },
})