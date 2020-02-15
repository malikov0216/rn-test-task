import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { Navbar } from './src/components/Navbar'
import { AuthScreen } from './src/mainApp/screens/AuthScreen'
import { MainScreen } from './src/mainApp/screens/MainScreen'

export default MainApp = () => {
    let [isAuthorized, authorize] = useState(false) 
    let content = (
        <AuthScreen />
    )
    if(isAuthorized) {
        content = (
            <MainScreen />
        )
    }
    return (
        <View>
            <Navbar title='Тестовое задание'/>
            <View>{content}</View>
        </View>
    )
}