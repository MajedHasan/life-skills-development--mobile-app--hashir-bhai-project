import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./src/screens/Common/Splash"
import Login from "./src/screens/Common/Login"
import ForgetPassword from './src/screens/Common/ForgetPassword';
import UserType from './src/screens/Common/UserType';
import Verification from './src/screens/Common/Verification';


const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="UserType" component={UserType} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Verification" component={Verification} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation