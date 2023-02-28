import { StatusBar, Platform } from "react-native"
import { DarkColor, PrimaryColor } from "../utils/Colors"

export const PrimaryStatusBar = () => <StatusBar animated={true} backgroundColor={PrimaryColor} barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
export const SecondaryStatusBar = () => <StatusBar animated={true} backgroundColor={DarkColor} barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
export const TransparentLightStatusBar = () => <StatusBar animated={true} backgroundColor="transparent" barStyle={"light-content"} />
export const TransparentDarkStatusBar = () => <StatusBar animated={true} backgroundColor="transparent" barStyle={"dark-content"} />