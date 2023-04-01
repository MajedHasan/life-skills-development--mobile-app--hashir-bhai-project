import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const userData = async () => {
    try {
        const user = await AsyncStorage.getItem('user')
        if (user !== null) {
            return user
        }
        else {
            return {}
        }
    } catch (error) {
        console.log(error)
    }
}
const data = () => {

    return (
        <View>
            <Text>data</Text>
        </View>
    )
}

export default data

const styles = StyleSheet.create({})