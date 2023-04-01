import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather"


const ChildListAndAddChildSection = () => {
    return (
        <>
            <ScrollView horizontal={true} style={styles.container}>
                <TouchableOpacity style={styles.box}>
                    <Image source={require("../../../assets/ChildListSection/ChildImg1.png")} style={styles.img} />
                    <Text style={styles.text}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.addChildBox}>
                        <Feather name="plus" style={styles.addChildBoxIcon} />
                    </View>
                    <Text style={styles.text}></Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default ChildListAndAddChildSection

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    },
    box: {
        justifyContent: "center",
        marginRight: 10
    },
    img: {},
    text: {},

    addChildBox: {},
    addChildBoxIcon: {}
})