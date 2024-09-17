import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button'

const LandingPage = () => {

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require("../Assets/home.jpg")}
                style={styles.background}
            >
                <View style={styles.buttons}>
                    <Button title={'SignUp'} color={'white'} />
                    <Button title={'Login'} color={'white'} />
                </View>
            </ImageBackground>
        </View>


    )
}

export default LandingPage

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        width: "auto",
        position: "absolute",
        margin: 20,

    },

})