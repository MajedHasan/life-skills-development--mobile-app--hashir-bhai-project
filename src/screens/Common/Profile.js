import { StyleSheet, View } from 'react-native'
import BalanceBadge from '../../components/BalanceBadge'
import { PrimaryStatusBar } from '../../components/StatusBars'


const Profile = ({ navigation }) => {
    return (
        <>
            <PrimaryStatusBar></PrimaryStatusBar>
            <View style={styles.container}>

            </View>
        </>
    )
}

export default Profile



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
})