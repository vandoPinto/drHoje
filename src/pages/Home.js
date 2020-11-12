import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cabecalho from '../componets/Cabecalho';

import Consultas from './Consultas';
import Exames from './Exames';

export default function Home() {
    const [consultaBool, mostrarConsulta] = useState(true);

   
    return (
        <View>
            <Cabecalho />
            <View style={styles.container} >
                <TouchableOpacity style={styles.botoes} onPress={() => { mostrarConsulta(true) }}>
                    <Text style={styles.textoBotao} >CONSULTAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes} onPress={() => { mostrarConsulta(false) }}>
                    <Text style={styles.textoBotao} >EXAMES</Text>
                </TouchableOpacity>
            </View>

            <View>
                {consultaBool ? (
                    <Consultas />
                ) : (
                        <Exames />
                    )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 21,
        backgroundColor: '#00000028',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    botoes: {
        backgroundColor: '#056CEF',
        borderRadius: 30,
        height: 30,
        width: 148,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBotao: {
        color: '#ffffff'
    },

    logo: {
        width: 71.07,
        height: 57.09,
        left: 144,
        top: 22.58,
    },
});