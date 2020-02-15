import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const MainScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Hello MainScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40
    }
})