import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cetaVoltar = require('../img/long-arrow-left-light.png');
const logo = require('../img/logo.png');

export default function Cabecalho() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.btnVoltar} onPress={() => { navigation.goBack(null) }}>
                <Image source={cetaVoltar} />
            </View>
            <Image style={styles.logo} source={logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000028',
        paddingTop: 22,
        height: 140,
    },

    btnVoltar: {
        left: 21,
        width: 20,
        height: 11.43,
        top: 45,
    },

    logo: {
        width: 71.07,
        height: 57.09,
        left: 144,
        top: 22.58,
    },
});