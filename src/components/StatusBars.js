import { StatusBar } from "react-native"
import { DarkColor, PrimaryColor } from "../utils/Colors"

export const PrimaryStatusBar = () => <StatusBar animated={true} backgroundColor={PrimaryColor} barStyle={"light-content"} />
export const SecondaryStatusBar = () => <StatusBar animated={true} backgroundColor={DarkColor} barStyle={"light-content"} />
export const TransparentLightStatusBar = () => <StatusBar animated={true} backgroundColor="transparent" barStyle={"light-content"} />
export const TransparentDarkStatusBar = () => <StatusBar animated={true} backgroundColor="transparent" barStyle={"dark-content"} />