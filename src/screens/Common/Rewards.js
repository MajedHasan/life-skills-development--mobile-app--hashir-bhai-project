import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NormalLayout from "../../components/Layouts/NormalLayout"
import BalanceBadge from "../../components/BalanceBadge"
import { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { PrimaryColor } from '../../utils/Colors'
import CheckListBox from '../../components/Common/CheckListBox'
import WishlistBox from '../../components/Common/WishlistBox'
import VideoCard from '../../components/Common/VideoCard'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"

import SelectDropdown from 'react-native-select-dropdown'
import RewardListBox from '../../components/Common/RewardListBox'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import ChildListAndAddChildSection from '../../components/Common/ChildListAndAddChildSection'



const Rewards = ({ navigation, route }) => {

    const [showModal, setShowModal] = useState(false)
    const [chartType, setChartType] = useState("Daily")
    const [user, setUser] = useState({})

    const handleUser = async () => {
        const jsonUser = await AsyncStorage.getItem("user")
        const user = JSON.parse(jsonUser)
        setUser(user)
    }
    useEffect(() => {
        handleUser()
    }, [])



    return (
        <>
            {
                user?.role === "child" && <>
                    <NormalLayout navigation={navigation} route={route} shadowShown={true} showNavMenu="parent" headerLeft={<BalanceBadge />} >
                        <View style={styles.container}>
                            <ScrollView style={styles.mainContent}>

                                <View style={styles.todaysJobHeadingBox}>
                                    <Text style={styles.todaysJobHeading}>{chartType} Chart</Text>
                                    <TouchableOpacity style={styles.todaysJobHeadingBtn} >
                                        <SelectDropdown
                                            data={["Daily", "Weekly", "Monthly"]}
                                            defaultButtonText={chartType}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                if (chartType === "Daily") {
                                                    return "27 March"
                                                }
                                                else if (chartType === "Weekly") {
                                                    return "Weekly"
                                                }
                                                else if (chartType === "Monthly") {
                                                    return "March"
                                                }
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                return item
                                            }}
                                            onSelect={(selectedItem, index) => {
                                                setChartType(selectedItem)
                                            }}
                                            buttonStyle={{ width: 85, backgroundColor: "#F5F5F5" }}
                                            buttonTextStyle={{ fontSize: 13, fontWeight: "300" }}
                                        />
                                        <View style={styles.todaysJobHeadingBtnIconBox}>
                                            <Feather name="calendar" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                {
                                    chartType === "Daily" && <View style={styles.dailyChart}>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 1</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 2</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 3</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 4</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star-outline" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 5</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star-outline" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 6</Text>
                                        </View>
                                    </View>
                                }
                                {
                                    chartType === "Weekly" && <ScrollView style={styles.weeklyOrMontlyChart} horizontal={true}>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomLeftRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>MON</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>TUE</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>5/5</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>WED</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/3</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>THU</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>FRI</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomRightRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>SAT</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/7</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                }
                                {
                                    chartType === "Monthly" && <ScrollView style={styles.weeklyOrMontlyChart} horizontal={true}>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomLeftRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>12</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>13</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>5/5</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>14</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/3</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>15</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>16</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>17</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>18</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>19</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>20</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>21</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>22</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomRightRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>22</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/7</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                }



                                {
                                    chartType === "Daily" && <>
                                        <View style={styles.todaysJobHeadingBox}>
                                            <Text style={styles.todaysJobHeading}>Daily Rewards</Text>
                                        </View>
                                        <RewardListBox text="Extra Ipad Time" bgColor="#FF000066" bdColor="#FF0000" progressBg="#F08585" progress={3}></RewardListBox>
                                        <RewardListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00" progress={3} btnBg1="#7DFFFD" btnBg2="#3CBAB8"></RewardListBox>
                                        <RewardListBox text="Cleaning the Lawn" bgColor="#FAFF0066" bdColor="#FAFF00" progress={3} progressBg="#F5F5F5" progressColor="#000000"></RewardListBox>
                                    </>
                                }

                                <View style={styles.todaysJobHeadingBox}>
                                    <Text style={styles.todaysJobHeading}>Bonus</Text>
                                </View>
                                <View style={styles.wishlistBoxContainer}>
                                    <WishlistBox bgC1="#A3C3FF" bgC2="#3C6ABF" text="Extra Pocket money" style={{ marginRight: 20 }}
                                        IconBoxContent={<Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={{ width: 30, height: 30 }} />}
                                    />
                                    <WishlistBox bgC1="#FFBCF8" bgC2="#FF00B8" text="Extra Sports time" style={{ marginRight: 20 }}
                                        IconBoxContent={<Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={{ width: 30, height: 30 }} />}
                                    />
                                </View>

                                {
                                    chartType !== "Daily" && <>
                                        <View style={styles.todaysJobHeadingBox}>
                                            <Text style={styles.todaysJobHeading}>Rewards</Text>
                                        </View>
                                        <RewardListBox text="Extra Ipad Time" bgColor="#FF000066" bdColor="#FF0000" progressBg="#F08585" progress={3}></RewardListBox>
                                        <RewardListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00" progress={3} btnBg1="#7DFFFD" btnBg2="#3CBAB8"></RewardListBox>
                                        <RewardListBox text="Cleaning the Lawn" bgColor="#FAFF0066" bdColor="#FAFF00" progress={3} progressBg="#F5F5F5" progressColor="#000000"></RewardListBox>
                                    </>
                                }

                            </ScrollView>
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
                    <NormalLayout navigation={navigation} route={route} shadowShown={true} showNavMenu="parent" headerLeft={<BalanceBadge />} >

                        <View style={{ paddingHorizontal: 20, backgroundColor: "#FFFFFF", paddingBottom: 10 }}>
                            <ChildListAndAddChildSection />
                        </View>

                        <View style={styles.container}>
                            <ScrollView style={styles.mainContent}>

                                <View style={styles.todaysJobHeadingBox}>
                                    <Text style={styles.todaysJobHeading}>{chartType} Chart</Text>
                                    <TouchableOpacity style={styles.todaysJobHeadingBtn} >
                                        <SelectDropdown
                                            data={["Daily", "Weekly", "Monthly"]}
                                            defaultButtonText={chartType}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                if (chartType === "Daily") {
                                                    return "27 March"
                                                }
                                                else if (chartType === "Weekly") {
                                                    return "Weekly"
                                                }
                                                else if (chartType === "Monthly") {
                                                    return "March"
                                                }
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                return item
                                            }}
                                            onSelect={(selectedItem, index) => {
                                                setChartType(selectedItem)
                                            }}
                                            buttonStyle={{ width: 85, backgroundColor: "#F5F5F5" }}
                                            buttonTextStyle={{ fontSize: 13, fontWeight: "300" }}
                                        />
                                        <View style={styles.todaysJobHeadingBtnIconBox}>
                                            <Feather name="calendar" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                {
                                    chartType === "Daily" && <View style={styles.dailyChart}>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 1</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 2</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 3</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 4</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star-outline" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 5</Text>
                                        </View>
                                        <View style={styles.dailyChartBox}>
                                            <Ionicons name="star-outline" style={styles.dailyChartStar} />
                                            <Text style={styles.dailyChartText}>Task 6</Text>
                                        </View>
                                    </View>
                                }
                                {
                                    chartType === "Weekly" && <ScrollView style={styles.weeklyOrMontlyChart} horizontal={true}>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomLeftRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>MON</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>TUE</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>5/5</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>WED</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/3</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>THU</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>FRI</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomRightRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>SAT</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/7</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                }
                                {
                                    chartType === "Monthly" && <ScrollView style={styles.weeklyOrMontlyChart} horizontal={true}>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomLeftRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>12</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>13</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>5/5</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>14</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/3</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>15</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>16</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>17</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>18</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>19</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>20</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>21</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={styles.weeklyOrMontlyChartBoxBottom}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>22</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>7/7</Text>
                                            </View>
                                        </View>
                                        <View style={styles.weeklyOrMontlyChartBox}>
                                            <View style={styles.weeklyOrMontlyChartBoxTop}>
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star-outline" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                                <Ionicons name="star" style={styles.weeklyOrMontlyChartBoxStar} />
                                            </View>
                                            <View style={{ ...styles.weeklyOrMontlyChartBoxBottom, borderBottomRightRadius: 14 }}>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText1}>22</Text>
                                                <Text style={styles.weeklyOrMontlyChartBoxBottomText2}>3/7</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                }



                                {
                                    chartType === "Daily" && <>
                                        <View style={styles.todaysJobHeadingBox}>
                                            <Text style={styles.todaysJobHeading}>Daily Rewards</Text>
                                        </View>
                                        <RewardListBox text="Extra Ipad Time" bgColor="#FF000066" bdColor="#FF0000" progressBg="#F08585" progress={3}></RewardListBox>
                                        <RewardListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00" progress={3} btnBg1="#7DFFFD" btnBg2="#3CBAB8"></RewardListBox>
                                        <RewardListBox text="Cleaning the Lawn" bgColor="#FAFF0066" bdColor="#FAFF00" progress={3} progressBg="#F5F5F5" progressColor="#000000"></RewardListBox>
                                    </>
                                }

                                <View style={styles.todaysJobHeadingBox}>
                                    <Text style={styles.todaysJobHeading}>Bonus</Text>
                                </View>
                                <View style={styles.wishlistBoxContainer}>
                                    <WishlistBox bgC1="#A3C3FF" bgC2="#3C6ABF" text="Extra Pocket money" style={{ marginRight: 20 }}
                                        IconBoxContent={<Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={{ width: 30, height: 30 }} />}
                                    />
                                    <WishlistBox bgC1="#FFBCF8" bgC2="#FF00B8" text="Extra Sports time" style={{ marginRight: 20 }}
                                        IconBoxContent={<Image source={require("../../../assets/Checklist/BigStarImg.png")} alt="" style={{ width: 30, height: 30 }} />}
                                    />
                                </View>

                                {
                                    chartType !== "Daily" && <>
                                        <View style={styles.todaysJobHeadingBox}>
                                            <Text style={styles.todaysJobHeading}>Rewards</Text>
                                        </View>
                                        <RewardListBox text="Extra Ipad Time" bgColor="#FF000066" bdColor="#FF0000" progressBg="#F08585" progress={3}></RewardListBox>
                                        <RewardListBox text="Do Maths homework" bgColor="#04DE0063" bdColor="#04DE00" progress={3} btnBg1="#7DFFFD" btnBg2="#3CBAB8"></RewardListBox>
                                        <RewardListBox text="Cleaning the Lawn" bgColor="#FAFF0066" bdColor="#FAFF00" progress={3} progressBg="#F5F5F5" progressColor="#000000"></RewardListBox>
                                    </>
                                }

                            </ScrollView>
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
        </>
    )
}

export default Rewards

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 22,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 15
    },

    todaysJobHeadingBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
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


    dailyChart: {
        backgroundColor: "#FFFFFF",
        paddingTop: 18,
        paddingBottom: 9,
        paddingHorizontal: 30,
        borderRadius: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40
    },
    dailyChartBox: {
        alignItems: "center"
    },
    dailyChartStar: {
        fontSize: 35,
        color: "#FFB800"
    },
    dailyChartText: {
        color: "#000000",
        fontWeight: "400",
        fontSize: 12
    },



    weeklyOrMontlyChart: {
        paddingTop: 12,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        flexDirection: "row",
        overflow: "hidden"
    },
    weeklyOrMontlyChartBox: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    weeklyOrMontlyChartBoxTop: {},
    weeklyOrMontlyChartBoxStar: {
        fontSize: 15,
        color: "#FFB800"
    },
    weeklyOrMontlyChartBoxBottom: {
        marginTop: 8,
        backgroundColor: "#3CBAB8",
        paddingVertical: 8,
        paddingHorizontal: 17.5,
        alignItems: "center"
    },
    weeklyOrMontlyChartBoxBottomText1: {
        fontSize: 12,
        fontWeight: "400",
        color: "#FFFFFF"
    },
    weeklyOrMontlyChartBoxBottomText2: {
        fontSize: 9,
        fontWeight: "400",
        color: "#FFFFFF"
    },



    wishlistBoxContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
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