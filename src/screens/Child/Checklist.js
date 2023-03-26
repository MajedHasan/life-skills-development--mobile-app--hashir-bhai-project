import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from "../../components/BalanceBadge"
import MyProgramOrFamilyFeed from '../../components/Common/MyProgramOrFamilyFeed'
import { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { PrimaryColor } from '../../utils/Colors'
import CheckListBox from '../../components/Common/CheckListBox'
import WishlistBox from '../../components/Common/WishlistBox'
import VideoCard from '../../components/Common/VideoCard'
import Feather from "react-native-vector-icons/Feather"


const Checklist = ({ navigation, route }) => {

    const [checklistPageType, setChecklistPageType] = useState("MY PROGRAM")
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <NormalLayout navigation={navigation} route={route} shadowShown={true} showNavMenu="parent" headerLeft={<BalanceBadge />} >
                <View style={styles.container}>
                    <MyProgramOrFamilyFeed checklistPageType={checklistPageType} setChecklistPageType={setChecklistPageType} />
                    {
                        checklistPageType === "MY PROGRAM" && <ScrollView style={styles.mainContent}>

                            <View style={styles.heroSection}>
                                <View>
                                    <Text style={styles.heroSectionHeading}>LifeSkillz</Text>
                                    <Text style={styles.heroSectionText}>Manage your kids tasks</Text>
                                    <AntDesign name="play" size={43} style={styles.heroSectionPlayIcon} />
                                </View>
                                <Image source={require("../../../assets/Checklist/HeroSectionImg.png")} alt="" style={styles.heroSectionImg} />
                            </View>

                            <View style={styles.todaysJobHeadingBox}>
                                <Text style={styles.todaysJobHeading}>Today’s Job</Text>
                                <TouchableOpacity style={styles.todaysJobHeadingBtn} onPress={() => setShowModal(true)}>
                                    <Text style={styles.todaysJobHeadingBtnText}>See all</Text>
                                </TouchableOpacity>
                            </View>

                            <CheckListBox text="Cleaning the toilets" iconType="checkmark" bgColor="#F374AE66" bdColor="#F374AE" navigation={navigation}></CheckListBox>
                            <CheckListBox text="Make bed properly" iconType="checkmark" bgColor="#0ADBDB66" bdColor="#09DBDB"></CheckListBox>
                            <CheckListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00"></CheckListBox>

                            <View style={styles.todaysJobHeadingBox}>
                                <Text style={styles.todaysJobHeading}>My Wishlist</Text>
                                <TouchableOpacity style={styles.todaysJobHeadingBtn} >
                                    <Text style={styles.todaysJobHeadingBtnText}>See all</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.wishlistBoxContainer}>
                                <WishlistBox bgC1="#A3C3FF" bgC2="#3C6ABF" text="Extra Pocket money" />
                                <WishlistBox bgC1="#FFBCF8" bgC2="#FF00B8" text="Extra Sports time"
                                    IconBoxContent={<Image source={require("../../../assets/Checklist/wishlist1.png")} alt="" style={{ width: 30, height: 30 }} />}
                                />
                                <WishlistBox bgC1="#A2FFA0" bgC2="#03A800" text="Sunday Friends party"
                                    IconBoxContent={<Image source={require("../../../assets/Checklist/wishlist2.png")} alt="" style={{ width: 30, height: 30 }} />}
                                />
                                <WishlistBox bgC1="#A2FFA0" bgC2="#03A800" text="Sunday Friends party"
                                    IconBoxContent={<Image source={require("../../../assets/Checklist/wishlist2.png")} alt="" style={{ width: 30, height: 30 }} />}
                                />
                            </View>

                        </ScrollView>
                    }
                    {
                        checklistPageType === "FAMILY FEED" && <ScrollView style={styles.mainContent}>
                            <VideoCard
                                bgImg={require("../../../assets/Checklist/FamilyFeedImg1.png")}
                                text="Clean your hands"
                            />
                            <VideoCard
                                bgImg={require("../../../assets/Checklist/FamilyFeedImg2.png")}
                                text="Clean your hands"
                            />
                            <VideoCard
                                bgImg={require("../../../assets/Checklist/FamilyFeedImg1.png")}
                                text="Clean your hands"
                            />
                            <VideoCard
                                bgImg={require("../../../assets/Checklist/FamilyFeedImg2.png")}
                                text="Clean your hands"
                            />
                        </ScrollView>
                    }
                </View>
            </NormalLayout>
            {
                showModal && <Modal visible={showModal} transparent={true} animationType="fade" onRequestClose={() => setShowModal(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalTopContainer} onPress={() => setShowModal(false)}></TouchableOpacity>
                        <View style={styles.modalMainContainer}>
                            <View style={styles.todaysJobHeadingBox}>
                                <Text style={styles.todaysJobHeading}>Today’s Job</Text>
                                <TouchableOpacity style={styles.todaysJobHeadingBtn} >
                                    <Text style={styles.todaysJobHeadingBtnText}>17 Dec</Text>
                                    <View style={styles.todaysJobHeadingBtnIconBox}>
                                        <Feather name="calendar" size={15} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{ flex: 1, paddingTop: 25 }}>
                                <CheckListBox text="Assignment preperation" iconType="checkmark" bgColor="#F374AE66" bdColor="#F374AE" onPress={() => Alert.alert("Yeahoo")}></CheckListBox>
                                <CheckListBox text="Make bed properly" bgColor="#0ADBDB66" bdColor="#0ADADB"></CheckListBox>
                                <CheckListBox text="Do Maths homework" iconType="checkmark" bgColor="#6F00DE63" bdColor="#6F00DE"></CheckListBox>
                                <CheckListBox text="Cleaning the toilets" iconType="checkmark" bgColor="#FAFF0066" bdColor="#FAFF00"></CheckListBox>
                                <CheckListBox text="Make bed properly" iconType="checkmark" bgColor="#FF000066" bdColor="#FF0000"></CheckListBox>
                                <CheckListBox text="Do Maths homework" iconType="checkmark" bgColor="#04DE0063" bdColor="#04DE00"></CheckListBox>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            }
        </>
    )
}

export default Checklist

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 22,
        backgroundColor: "#FFFFFF"
    },

    heroSection: {
        backgroundColor: "#F5EE9E",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 12,
        alignItems: "center",
        paddingLeft: 15
    },
    heroSectionHeading: {
        fontWeight: "700",
        fontSize: 22
    },
    heroSectionText: {
        fontWeight: "300",
        fontSize: 12,
        marginTop: 15,
        marginBottom: 10
    },
    heroSectionPlayIcon: {
        color: PrimaryColor
    },
    heroSectionImg: {
        width: 170,
        height: 155
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
        fontSize: 12
    },

    wishlistBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },

    modalContainer: {
        flex: 1,
        backgroundColor: "#000000A5"
    },
    modalTopContainer: {
        flex: 1
    },
    modalMainContainer: {
        flex: 10,
        backgroundColor: "#F5F5F5",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    todaysJobHeadingBtnIconBox: {
        width: 32,
        height: 32,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    }
})