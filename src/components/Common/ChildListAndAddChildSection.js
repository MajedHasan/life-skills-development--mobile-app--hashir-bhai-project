import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather"


const ChildListAndAddChildSection = () => {
    return (
        <>
            <ScrollView horizontal={true} style={styles.container}>
                <TouchableOpacity style={styles.box}>
                    <Image source={require("../../../assets/ChildListSection/ChildImg1.png")} style={styles.img} />
                    <Text style={styles.text}>Kevin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Image source={require("../../../assets/ChildListSection/ChildImg2.png")} style={styles.img} />
                    <Text style={styles.text}>Kitara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Image source={require("../../../assets/ChildListSection/ChildImg3.png")} style={styles.img} />
                    <Text style={styles.text}>Kohli</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.addChildBox}>
                        <Feather name="plus" style={styles.addChildBoxIcon} />
                    </View>
                    <Text style={styles.text}>Add child</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default ChildListAndAddChildSection

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    box: {
        alignItems: "center",
        marginRight: 10
    },
    img: {
        width: 55,
        height: 55,
        borderRadius: 99
    },
    text: {
        fontSize: 10,
        fontWeight: "400",
        color: "#000000",
        marginTop: 7
    },

    addChildBox: {
        width: 55,
        height: 55,
        borderRadius: 99,
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center"
    },
    addChildBoxIcon: {
        fontSize: 25
    }
})