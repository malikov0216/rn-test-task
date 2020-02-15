import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

export const AuthScreen = () => {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>Авторизация</Text>
            <View style={styles.button}>
                <Button title='Войти' />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    block : {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 150,
        width: '40%'
    }
})