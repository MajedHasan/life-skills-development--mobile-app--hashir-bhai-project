import { StyleSheet } from "react-native";
import { PrimaryColor, SecondaryColor } from "../utils/Colors";


export default StyleSheet.create({
    primaryBtn: {
        borderRadius: 999,
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: PrimaryColor,
        color: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    primaryBtnOutline: {
        borderRadius: 999,
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: "transparent",
        color: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        borderColor: PrimaryColor,
        borderWidth: 1
    },
    secondaryBtn: {
        borderRadius: 999,
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: SecondaryColor,
        color: "white",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
})