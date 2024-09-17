import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ title, color }) => {
    check = () => {
        console.log(` ${title} pressed`)
    }
    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={check}>
            <Text style={styles.txt}> {title} </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        borderRadius: 200,
        alignItems: "center",
        marginTop: 10,

    },
    txt: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "black"
    }
})