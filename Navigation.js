import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./src/screens/Common/Splash"
import Login from "./src/screens/Common/Login"
import ForgetPassword from './src/screens/Common/ForgetPassword';
import UserType from './src/screens/Common/UserType';
import Verification from './src/screens/Common/Verification';
import ResetPassword from './src/screens/Common/ResetPassword';
import Signup from './src/screens/Common/Singup';
import Connect from './src/screens/Common/Connect';
import ConnectScan from './src/screens/Common/ConnectScan';
import Notification from './src/screens/Common/Notification';
import Profile from './src/screens/Common/Profile';
import AddUser from './src/screens/Common/AddUser';
import AddUserFromContact from './src/screens/Common/AddUserFromContact';
import AddUserManually from './src/screens/Common/AddUserManually';
import ManageAccount from './src/screens/Common/ManageAccount';
import Checklist from './src/screens/Child/Checklist';
import Rewards from './src/screens/Common/Rewards';
import CaptureWork from './src/screens/Child/CaptureWork';
import CaptureVideo from './src/screens/Child/CaptureVideo';
import Wishlist from './src/screens/Common/Wishlist';
import WishlistItems from './src/screens/Common/WishlistItems';
import WishlistImg from './src/screens/Common/WishlistImg';
import AddWish from './src/screens/Child/AddWish';
import Planner from './src/screens/Common/Planner';
import Onboarding from './src/screens/Parent/Onboarding';
import SetupKids from './src/screens/Parent/SetupKids';


const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="UserType" component={UserType} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Connect" component={Connect} />
                <Stack.Screen name="ConnectScan" component={ConnectScan} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AddUser" component={AddUser} />
                <Stack.Screen name="AddUserFromContact" component={AddUserFromContact} />
                <Stack.Screen name="AddUserManually" component={AddUserManually} />
                <Stack.Screen name="ManageAccount" component={ManageAccount} />
                <Stack.Screen name="Checklist" component={Checklist} />
                <Stack.Screen name="Rewards" component={Rewards} />
                <Stack.Screen name="CaptureWork" component={CaptureWork} />
                <Stack.Screen name="CaptureVideo" component={CaptureVideo} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="WishlistItems" component={WishlistItems} />
                <Stack.Screen name="WishlistImg" component={WishlistImg} />
                <Stack.Screen name="AddWish" component={AddWish} />
                <Stack.Screen name="Planner" component={Planner} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="SetupKids" component={SetupKids} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation