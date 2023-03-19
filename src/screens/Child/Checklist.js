import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from "../../components/BalanceBadge"
import MyProgramOrFamilyFeed from '../../components/Common/MyProgramOrFamilyFeed'
import { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { PrimaryColor } from '../../utils/Colors'
import CheckListBox from '../../components/Common/CheckListBox'
import WishlistBox from '../../components/Common/WishlistBox'
import VideoCard from '../../components/Common/VideoCard'


const Checklist = ({ navigation, route }) => {

    const [checklistPageType, setChecklistPageType] = useState("MY PROGRAM")

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
                                <TouchableOpacity style={styles.todaysJobHeadingBtn}>
                                    <Text style={styles.todaysJobHeadingBtnText}>See all</Text>
                                </TouchableOpacity>
                            </View>

                            <CheckListBox text="Cleaning the toilets" iconType="checkmark" bgColor="#F374AE66" bdColor="#F374AE"></CheckListBox>
                            <CheckListBox text="Make bed properly" iconType="checkmark" bgColor="#0ADBDB66" bdColor="#09DBDB"></CheckListBox>
                            <CheckListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00"></CheckListBox>

                            <View style={styles.todaysJobHeadingBox}>
                                <Text style={styles.todaysJobHeading}>My Wishlist</Text>
                                <TouchableOpacity style={styles.todaysJobHeadingBtn}>
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
    todaysJobHeadingBtnText: {
        fontWeight: "300",
        fontSize: 12
    },

    wishlistBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
})