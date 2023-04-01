import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput } from 'react-native'
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
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import WeekPicker from '../../components/Common/WeekPicker'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import GlobalStyles from "../../styles/GlobalStyle"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SafeAreaLayout from '../../components/SafeAreaLayout'
import GlobalStyle from '../../styles/GlobalStyle'



const Checklist = ({ navigation, route }) => {

    const [checklistPageType, setChecklistPageType] = useState("MY PROGRAM")
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState({})
    const [currentChild, setCurrentChild] = useState("Kevin")
    const [chartType, setChartType] = useState("Daily")
    const [pickedDay, setPickedDay] = useState("MONDAY")
    const [selectedDate, setSelectedDate] = useState('');
    const [uploadModal, setUploadModal] = useState(false)
    const [uploadModalType, setUploadModalType] = useState(null)

    const [addVideoScreen, setAddVideoScreen] = useState(null)


    const handleUser = async () => {
        const jsonUser = await AsyncStorage.getItem("user")
        const user = JSON.parse(jsonUser)
        setUser(user)
    }
    useEffect(() => {
        handleUser()
    }, [])



    const GalleryBox = ({ imgUrl }) => {

        const [isSelected, setIsSelected] = useState(false)

        return (
            <TouchableOpacity style={parentStyles.galleryBox} onPress={() => { setIsSelected(!isSelected) }}>
                {
                    isSelected && <View style={parentStyles.galleryBoxCheckBox}>
                        <Ionicons name="checkmark" style={parentStyles.galleryBoxCheckBoxIcon} />
                    </View>
                }
                <Image source={imgUrl} style={parentStyles.galleryBoxImg} />
            </TouchableOpacity>
        )
    }



    return (
        <>
            {
                user?.role === "child" && <>
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
            }
            {
                user?.role === "parent" && <>
                    <NormalLayout navigation={navigation} route={route} shadowShown={true} showNavMenu={addVideoScreen === null ? true : false} headerLeft={<BalanceBadge />} >
                        <View style={styles.container}>
                            <MyProgramOrFamilyFeed checklistPageType={checklistPageType} setChecklistPageType={setChecklistPageType} />
                            {
                                checklistPageType === "MY PROGRAM" && <ScrollView style={styles.mainContent}>

                                    <View style={parentStyles.selectBoxSection}>
                                        <View style={parentStyles.selectedBox}>
                                            <SelectDropdown
                                                data={["Kevin", "Hashir", "Majed"]}
                                                defaultButtonText={currentChild}
                                                buttonTextAfterSelection={(selectedItem, index) => {
                                                    return selectedItem
                                                }}
                                                rowTextForSelection={(item, index) => {
                                                    return item
                                                }}
                                                onSelect={(selectedItem, index) => {
                                                    setCurrentChild(selectedItem)
                                                }}
                                                buttonStyle={{ width: 100, backgroundColor: "#FFFFFF" }}
                                                buttonTextStyle={{ fontSize: 16, fontWeight: "600" }}
                                            />
                                            <FontAwesome5 name="chevron-down" style={parentStyles.selectedBoxIcon} />
                                        </View>
                                        <View style={parentStyles.dateBoxContainer}>
                                            <SelectDropdown
                                                data={["Daily", "Weekly", "Monthly"]}
                                                defaultButtonText={chartType}
                                                buttonTextAfterSelection={(selectedItem, index) => {
                                                    return selectedItem
                                                }}
                                                rowTextForSelection={(item, index) => {
                                                    return item
                                                }}
                                                onSelect={(selectedItem, index) => {
                                                    setChartType(selectedItem)
                                                }}
                                                buttonStyle={{ width: 90, backgroundColor: "#FFFFFF" }}
                                                buttonTextStyle={{ fontSize: 14, fontWeight: "300" }}
                                            />
                                            <View style={parentStyles.dateBox}>
                                                <FontAwesome5 name="calendar-alt" style={parentStyles.dateBoxIcon} />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={parentStyles.progressBoxContainer}>
                                        <View style={parentStyles.progressBox}>
                                            <View style={parentStyles.progressBoxInnerBox}>
                                                <View style={parentStyles.progressBoxCircleBox}>
                                                    <Image source={require("../../../assets/Checklist/Circle1.png")} style={{ width: 70, height: 70 }} />
                                                </View>
                                                <View style={parentStyles.progressBoxInnerBoxStarBox}>
                                                    <Text style={parentStyles.progressBoxInnerBoxStarBoxText}>14/32</Text>
                                                    <Ionicons name="star" style={parentStyles.progressBoxInnerBoxStarBoxIcon} />
                                                </View>
                                            </View>
                                            <Text style={parentStyles.progressBoxText}>Today progress so far</Text>
                                        </View>
                                        <View style={parentStyles.progressBox}>
                                            <View style={parentStyles.progressBoxInnerBox}>
                                                <View style={parentStyles.progressBoxCircleBox}>
                                                    <Image source={require("../../../assets/Checklist/Circle2.png")} style={{ width: 70, height: 70 }} />
                                                </View>
                                                <View style={parentStyles.progressBoxInnerBoxStarBox}>
                                                    <Text style={parentStyles.progressBoxInnerBoxStarBoxText}>30/132</Text>
                                                    <Ionicons name="star" style={parentStyles.progressBoxInnerBoxStarBoxIcon} />
                                                </View>
                                            </View>
                                            <Text style={parentStyles.progressBoxText}>Next Reward</Text>
                                        </View>
                                    </View>



                                    <View style={styles.todaysJobHeadingBox}>
                                        <Text style={styles.todaysJobHeading}>
                                            {chartType === "Daily" && "Today’s "}
                                            {chartType === "Weekly" && "Weekly "}
                                            {chartType === "Monthly" && "Monthly "}
                                            Task
                                        </Text>
                                        <TouchableOpacity style={styles.todaysJobHeadingBtn} onPress={() => setShowModal(true)}>
                                            <Text style={styles.todaysJobHeadingBtnText}>See all</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {
                                        chartType === "Weekly" && <WeekPicker setPickedDay={setPickedDay} />
                                    }
                                    {
                                        chartType === "Monthly" && <DatePicker
                                            onSelectedChange={date => setSelectedDate(date)}
                                            selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
                                            backgroundColor="#FFFFFF"
                                            mode="calendar"
                                            style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, marginBottom: 30 }}
                                        />
                                    }

                                    <CheckListBox text="Cleaning the toilets" iconType="checkmark" bgColor="#F374AE66" bdColor="#F374AE" navigation={navigation}></CheckListBox>
                                    <CheckListBox text="Make bed properly" iconType="checkmark" bgColor="#0ADBDB66" bdColor="#09DBDB"></CheckListBox>
                                    <CheckListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00"></CheckListBox>

                                    <View style={styles.todaysJobHeadingBox}>
                                        <Text style={styles.todaysJobHeading}>{currentChild} Wishlist</Text>
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
                                checklistPageType === "FAMILY FEED" && addVideoScreen === null && <ScrollView style={styles.mainContent}>
                                    <View style={parentStyles.familyFeedTopBox}>
                                        <Text style={parentStyles.familyFeedTopBoxText}>Family feed</Text>
                                        <View style={parentStyles.familyFeedTopBoxSearchAndBtn}>
                                            <FontAwesome5 name="search" style={parentStyles.familyFeedTopBoxSearchIcon} />
                                            <TouchableOpacity style={{ ...GlobalStyles.primaryBtn, width: 130 }} onPress={() => setAddVideoScreen("selectVideo")}>
                                                <Text style={{ color: "#FFFFFF" }}>+ Add Video</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
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
                            {
                                checklistPageType === "FAMILY FEED" && addVideoScreen === "selectVideo" && <View style={{ ...styles.mainContent, justifyContent: "space-between", paddingHorizontal: 0, paddingVertical: 0 }}>
                                    <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
                                        <View style={{ ...styles.todaysJobHeadingBox, marginTop: 0 }}>
                                            <Text style={styles.todaysJobHeading}>My Gallery</Text>
                                            <TouchableOpacity style={{ ...styles.todaysJobHeadingBtnIconBox, backgroundColor: "#F4F4FE" }}>
                                                <Ionicons name="camera-outline" style={{ fontSize: 15 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{ color: "#5E5E5E", fontSize: 12, fontWeight: "400" }}>Upload a video or photo to your child's account so they can refer back to your instructions in the future.</Text>
                                        <ScrollView style={{ height: 150 }}>
                                            <View style={parentStyles.galleryBoxContainer}>
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg1.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg2.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg3.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg4.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg5.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg6.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg7.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg8.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg9.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg1.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg2.png")} />
                                                <GalleryBox imgUrl={require("../../../assets/Checklist/GalleryImg3.png")} />
                                            </View>
                                        </ScrollView>
                                    </View>
                                    <View style={{ backgroundColor: "#F374AE", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                        <ScrollView style={{ paddingHorizontal: 10, paddingBottom: 5 }} horizontal={true}>
                                            <View style={{ ...parentStyles.galleryBox, marginRight: 12 }}>
                                                <FontAwesome name="times-circle-o" style={{ top: 25, right: -35, zIndex: 99, fontSize: 20 }} />
                                                <Image source={require("../../../assets/Checklist/GalleryImg1.png")} style={parentStyles.galleryBoxImg} />
                                            </View>
                                            <View style={{ ...parentStyles.galleryBox, marginRight: 12 }}>
                                                <FontAwesome name="times-circle-o" style={{ top: 25, right: -35, zIndex: 99, fontSize: 20 }} />
                                                <Image source={require("../../../assets/Checklist/GalleryImg1.png")} style={parentStyles.galleryBoxImg} />
                                            </View>
                                            <View style={{ ...parentStyles.galleryBox, marginRight: 12 }}>
                                                <FontAwesome name="times-circle-o" style={{ top: 25, right: -35, zIndex: 99, fontSize: 20 }} />
                                                <Image source={require("../../../assets/Checklist/GalleryImg1.png")} style={parentStyles.galleryBoxImg} />
                                            </View>
                                            <View style={{ ...parentStyles.galleryBox, marginRight: 12 }}>
                                                <FontAwesome name="times-circle-o" style={{ top: 25, right: -35, zIndex: 99, fontSize: 20 }} />
                                                <Image source={require("../../../assets/Checklist/GalleryImg1.png")} style={parentStyles.galleryBoxImg} />
                                            </View>
                                        </ScrollView>
                                        <TouchableOpacity style={{ width: 60, height: 120, backgroundColor: "#393E41", alignItems: "center", justifyContent: "center" }} onPress={() => { setUploadModal(true); setUploadModalType("upload video") }}>
                                            <Ionicons name="arrow-forward" style={{ fontSize: 25, color: "#FFFFFF" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
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
                    {
                        uploadModal && <SafeAreaLayout>
                            <Modal visible={uploadModal} transparent={true} animationType="fade" onRequestClose={() => setUploadModal(null)}>
                                <View style={uploadModalStyles.container}>
                                    {
                                        uploadModalType === "upload video" && <>
                                            <View style={uploadModalStyles.topBox}>
                                                <Ionicons name="chevron-back" style={uploadModalStyles.topBoxIcon} />
                                                <Text style={uploadModalStyles.topBoxText}>Upload</Text>
                                                <Feather name="more-vertical" style={uploadModalStyles.topBoxIcon} />
                                                {/* <TouchableOpacity>
                                                    <Image source={require("../../../assets/ChildrenProfileImg.png")} style={{ width: 40, height: 40, borderRadius: 99 }} />
                                                </TouchableOpacity> */}
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <ImageBackground source={require("../../../assets/Checklist/UploadVideo.png")} style={{ width: "100%", height: "100%", resizeMode: "cover" }}>

                                                </ImageBackground>
                                            </View>
                                            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                                                <View style={uploadModalStyles.form}>
                                                    <Text style={uploadModalStyles.label}>Title:</Text>
                                                    <View style={{ ...uploadModalStyles.inputBox, borderRadius: 99 }}>
                                                        <TextInput placeholder='Write title here...' style={uploadModalStyles.input} />
                                                    </View>
                                                    <Text style={uploadModalStyles.label}>Description:</Text>
                                                    <View style={{ ...uploadModalStyles.inputBox, borderRadius: 14, height: 70 }}>
                                                        <TextInput
                                                            placeholder='Write details here...'
                                                            multiline={true}
                                                            style={uploadModalStyles.input}
                                                        />
                                                    </View>
                                                    <TouchableOpacity style={uploadModalStyles.uploadVideo} onPress={() => setUploadModal(false)}>
                                                        <View style={uploadModalStyles.uploadVideoIconBox}>
                                                            <Feather name="plus" style={uploadModalStyles.uploadVideoIcon} />
                                                        </View>
                                                        <Text style={uploadModalStyles.uploadVideoText}>Select another video</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={GlobalStyle.primaryBtn} onPress={() => setUploadModalType("select category")}>
                                                        <Text style={{ color: "#FFFFFF" }}>Upload</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </>
                                    }
                                    {
                                        uploadModalType === "select category" && <>
                                            <View style={{ ...uploadModalStyles.topBox, backgroundColor: "#FFFFFF", ...uploadModalStyles.shadow }}>
                                                <Ionicons name="chevron-back" style={uploadModalStyles.topBoxIcon} />
                                                <Text style={uploadModalStyles.topBoxText}>Upload</Text>
                                                <TouchableOpacity>
                                                    <Image source={require("../../../assets/ChildrenProfileImg.png")} style={{ width: 40, height: 40, borderRadius: 99 }} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 1, backgroundColor: "#FFFFFF", paddingBottom: 30 }}>
                                                <ScrollView style={{
                                                    flex: 1, paddingTop: 10, paddingBottom: 30, paddingHorizontal: 30
                                                }}>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg1.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Clean your room</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg2.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Do Home work</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg3.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Clean Lawn</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg4.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Collect rabbits out of collection</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg1.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Clean your room</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg2.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Do Home work</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg3.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Clean Lawn</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={uploadModalStyles.selectCategoryBoxWrapper} onPress={() => setUploadModalType("done")}>
                                                        <ImageBackground source={require("../../../assets/Checklist/CategoryImg4.png")} style={uploadModalStyles.selectCategoryBox}>
                                                            <Text style={uploadModalStyles.selectCategoryBoxText}>Collect rabbits out of collection</Text>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                </ScrollView>
                                            </View>
                                        </>
                                    }
                                    {
                                        uploadModalType === "done" && <>
                                            <TouchableOpacity style={{ backgroundColor: "#000000CC", flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { setUploadModal(false); setAddVideoScreen(null) }}>
                                                <Image source={require("../../../assets/Checklist/Checkmark.png")} />
                                                <Text style={{ fontSize: 18, fontWeight: "600", color: "#FFFFFF", marginTop: 20 }}>Video added Successfully!</Text>
                                            </TouchableOpacity>
                                        </>
                                    }
                                </View>
                            </Modal>
                        </SafeAreaLayout>
                    }
                </>
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

const parentStyles = StyleSheet.create({
    selectBoxSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    selectedBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    dateBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dateBox: {
        width: 40,
        height: 40,
        borderRadius: 99,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F4F4FE"
    },
    dateBoxIcon: {
        fontSize: 15
    },

    progressBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    progressBox: {
        width: 165,
        paddingVertical: 15,
        paddingHorizontal: 18,
        backgroundColor: "#F5EE9E",
        borderRadius: 15
    },

    progressBoxText: {
        fontSize: 12,
        fontWeight: "500"
    },
    progressBoxInnerBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5
    },
    progressBoxInnerBoxStarBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    progressBoxInnerBoxStarBoxText: {
        marginRight: 5,
        fontWeight: "400",
        fontSize: 12
    },
    progressBoxInnerBoxStarBoxIcon: {
        color: "#FFB800",
        fontSize: 20
    },

    familyFeedTopBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    familyFeedTopBoxText: {
        fontSize: 20,
        fontWeight: "600"
    },
    familyFeedTopBoxSearchAndBtn: {
        flexDirection: "row",
        alignItems: "center",
    },
    familyFeedTopBoxSearchIcon: {
        fontSize: 20,
        marginRight: 10
    },



    galleryBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "relative",
        paddingVertical: 10,
        flexWrap: "wrap"
    },
    galleryBox: {
        width: 100,
        height: 100,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12
    },
    galleryBoxImg: {
        width: "100%",
        height: "100%"
    },
    galleryBoxCheckBox: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 99,
        width: 50,
        height: 50,
        borderRadius: 99,
        backgroundColor: "#FFFFFF80",
        alignItems: "center",
        justifyContent: "center",
    },
    galleryBoxCheckBoxIcon: {
        fontSize: 25,
        color: "#000000"
    }
})

const uploadModalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF90",
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginTop: Platform.OS === "ios" ? 50 : 0
    },
    topBoxIcon: {
        fontSize: 25
    },
    topBoxText: {
        fontSize: 18,
        fontWeight: "600"
    },

    form: {
        width: 320,
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: "#F9F9F9",
        borderRadius: 15,
        alignSelf: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.22,
        shadowRadius: 9.22,
        elevation: 12,
        marginTop: -35
    },
    label: {
        fontSize: 12,
        fontWeight: "400",
        marginBottom: 3
    },
    inputBox: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E7E7E7",
        paddingVertical: Platform.OS === "ios" ? 15 : 8,
        paddingHorizontal: 23,
        marginBottom: 20
    },
    input: {
        color: "#AFAFAF",
        fontSize: 10,
        fontWeight: "400"
    },
    uploadVideo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    uploadVideoIconBox: {
        width: 45,
        height: 42,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    uploadVideoIcon: {
        fontSize: 25
    },
    uploadVideoText: {
        fontSize: 12,
        fontWeight: "400"
    },



    selectCategoryBoxWrapper: {
        borderRadius: 15,
        overflow: "hidden",
        marginTop: 10,
        marginBottom: 10
    },
    selectCategoryBox: {
        width: "100%",
        height: 70,
        resizeMode: "contain",
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center"
    },
    selectCategoryBoxText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFFFF"
    },
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.22,
        shadowRadius: 9.22,
        elevation: 12,
    }
})