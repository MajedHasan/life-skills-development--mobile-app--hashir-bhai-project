import { SafeAreaView, StatusBar } from "react-native";

const SafeAreaLayout = ({ children }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                {
                    children
                }
            </SafeAreaView>
        </>
    )
}

export default SafeAreaLayout