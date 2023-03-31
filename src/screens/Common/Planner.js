import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalLayout from '../../components/Layouts/NormalLayout'
import BalanceBadge from '../../components/BalanceBadge'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useState } from 'react'
import TaskPlannerBox from '../../components/Common/TaskPlannerBox'
import WeekPicker from '../../components/Common/WeekPicker'
import Entypo from "react-native-vector-icons/Entypo"
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';



const Planner = ({ navigation, route }) => {

    const [planType, setPlanType] = useState("Daily")
    const [pickedDay, setPickedDay] = useState("Monday")
    const [selectedDate, setSelectedDate] = useState('');


    return (
        <>
            <NormalLayout headerLeft={<Text style={{ fontSize: 20, fontWeight: "600" }}>Task Planner</Text>} shadowShown={true} showNavMenu="child" navigation={navigation} route={route} >
                <View style={styles.container}>
                    <View style={{ ...styles.topBox }}>
                        <View style={styles.topBoxInnerBox}>
                            <View style={styles.topBoxIconBox}>
                                <FontAwesome5 name="calendar-alt" style={styles.topBoxIconBoxIcon} />
                            </View>
                            <View>
                                <View style={styles.topBoxSelectBox}>
                                    <SelectDropdown
                                        data={["Daily", "Weekly", "Monthly"]}
                                        defaultButtonText={planType}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return `${selectedItem} plan`
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        onSelect={(selectedItem, index) => {
                                            setPlanType(selectedItem)
                                        }}
                                        buttonStyle={{ width: 109, backgroundColor: "#FFFFFF", height: 20, padding: 0, marginRight: 0 }}
                                        buttonTextStyle={{ fontSize: 13, fontWeight: "300" }}
                                    />
                                    <FontAwesome5 name="chevron-down" />
                                </View>
                                <Text style={styles.topBoxText}>Text</Text>
                            </View>
                        </View>
                        <View>
                            <BalanceBadge />
                        </View>
                    </View>
                    {
                        planType === "Monthly" && <DatePicker
                            onSelectedChange={date => setSelectedDate(date)}
                            selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
                            backgroundColor="#FFFFFF"
                            mode="calendar"
                            style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
                        />
                    }
                    {
                        planType === "Weekly" && <WeekPicker setPickedDay={setPickedDay} />
                    }
                    {
                        planType !== "Weekly" && <View style={styles.mainContainer}>
                            <View style={styles.line}></View>
                            <ScrollView>
                                <TaskPlannerBox time={"02:00pm"} text={"Take bath & wash clothes"} bgColor={"#FF000066"} bdColor={"#FF0000"} starColor={"#D26A6A"} starCount={["", "", ""]} />
                                <TaskPlannerBox time={"04:00pm"} text={"Assignment Preperation"} bgColor={"#F374AE66"} bdColor={"#F374AE"} starColor={"#F39AC4"} starCount={["", "", "", "", "", ""]} />
                                <TaskPlannerBox time={"06:00pm"} text={"Clean the Lawn"} bgColor={"#04DE0066"} bdColor={"#04DE00"} starColor={"#FFB800"} starCount={["", ""]} isCompleted={true} />
                                <TaskPlannerBox time={"08:00pm"} text={"Make Bed Properly"} bgColor={"#FDFF99"} bdColor={"#FFB800"} starColor={"#FFB800"} starCount={["", "", "", ""]} isCompleted={true} />
                                <TaskPlannerBox time={"10:00pm"} text={"Sleep early"} bgColor={"#C79CF2"} bdColor={"#6F00DE"} starColor={"#FFB800"} starCount={["", "", "", "", ""]} isCompleted={true} />
                                <TaskPlannerBox time={"10:00pm"} text={"Clean the room"} bgColor={"#9DF1F1"} bdColor={"#09DBDB"} starColor={"#FFB800"} starCount={["", "", "", ""]} isCompleted={true} />
                            </ScrollView>
                        </View>
                    }
                    {
                        planType == "Weekly" && <>
                            <View style={styles.weekDayBox}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Entypo name='controller-play' style={{ fontSize: 20, color: "#3CBAB8" }} />
                                    <Text style={{ fontSize: 12, fontWeight: "600" }}>{pickedDay}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 12, fontWeight: "600" }}>07 / 12</Text>
                                    <Entypo name='star' style={{ fontSize: 20, color: "#FFB800" }} />
                                </View>
                            </View>
                            <View style={styles.mainContainer}>
                                <View style={styles.line}></View>
                                <ScrollView>
                                    <TaskPlannerBox time={"02:00pm"} text={"Take bath & wash clothes"} bgColor={"#FF000066"} bdColor={"#FF0000"} starColor={"#D26A6A"} starCount={["", "", ""]} />
                                    <TaskPlannerBox time={"04:00pm"} text={"Assignment Preperation"} bgColor={"#F374AE66"} bdColor={"#F374AE"} starColor={"#F39AC4"} starCount={["", "", "", "", "", ""]} />
                                    <TaskPlannerBox time={"06:00pm"} text={"Clean the Lawn"} bgColor={"#04DE0066"} bdColor={"#04DE00"} starColor={"#FFB800"} starCount={["", ""]} isCompleted={true} />
                                    <TaskPlannerBox time={"08:00pm"} text={"Make Bed Properly"} bgColor={"#FDFF99"} bdColor={"#FFB800"} starColor={"#FFB800"} starCount={["", "", "", ""]} isCompleted={true} />
                                    <TaskPlannerBox time={"10:00pm"} text={"Sleep early"} bgColor={"#C79CF2"} bdColor={"#6F00DE"} starColor={"#FFB800"} starCount={["", "", "", "", ""]} isCompleted={true} />
                                    <TaskPlannerBox time={"10:00pm"} text={"Clean the room"} bgColor={"#9DF1F1"} bdColor={"#09DBDB"} starColor={"#FFB800"} starCount={["", "", "", ""]} isCompleted={true} />
                                </ScrollView>
                            </View>
                        </>
                    }
                </View>
            </NormalLayout>
        </>
    )
}

export default Planner

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBox: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 12,
        paddingHorizontal: 24,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    topBoxInnerBox: {
        flexDirection: "row"
    },
    topBoxIconBox: {
        width: 35,
        height: 35,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#262A2B",
        marginRight: 10
    },
    topBoxIconBoxIcon: {
        color: "#FFFFFF",
        fontSize: 17
    },
    topBoxSelectBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    topBoxText: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 15
    },


    mainContainer: {
        flexDirection: "row",
        position: "relative"
    },
    line: {
        width: 1,
        height: "100%",
        backgroundColor: "#3CBAB8",
        top: 0,
        left: 48.5,
        position: "absolute"
    },


    weekDayBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#B9B9B9",
        backgroundColor: "#F5F5F5",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginHorizontal: 10
    }
})