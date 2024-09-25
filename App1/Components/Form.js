import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import Button from './Button';
import LandingPage from '../Home/LandingPage';

const Form = () => {
    return (


        <LandingPage />

    );
};

export default Form;

const styles = StyleSheet.create({
    input: {
        top: "20%",
        backgroundColor: "red"
    },
    textinput: {
        marginLeft: 10,
        color: "black",
    }
});
