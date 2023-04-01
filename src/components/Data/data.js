import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


let userInfo = {}

export const userDataFn = async () => {
    try {
        const user = await AsyncStorage.getItem('user')
        if (user !== null) {
            console.log(JSON.parse(user))
            return userInfo = await JSON.parse(user)
        }
        else {
            return {}
        }
    } catch (error) {
        console.log(error)
    }
}
userDataFn()

export const userData = userInfo



function data() {

    return (
        <View>
            <Text>data</Text>
        </View>
    )
}

export default data

const styles = StyleSheet.create({})