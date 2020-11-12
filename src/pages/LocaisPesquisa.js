import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Cabecalho from '../componets/Cabecalho';
const DATA = require("../cidades.json");

export default function LocaisPesquisa(props) {
    const navigation = useNavigation();
    const item = props.route.params.item;
    const especialidade = item.ds_especialidade;

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.navigate('Buscando', { item: item, especialidade: especialidade })}>
            <Text style={styles.textoConsulta} >{item.nome}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <Cabecalho />
            <View style={styles.cabecalho}>
                <View style={styles.especialidade}>
                    <Text style={styles.textoCabecalho}>{item.ds_especialidade}</Text>
                </View>

                <View style={styles.cidade}>
                    <Text style={styles.textoCidade}>Brasilia</Text>
                </View>
            </View>

            <SafeAreaView style={{ height: 260 }}>
                <FlatList
                    data={DATA.cidades}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: '#00000028',
        height: 120,
        alignItems: 'center',
    },

    textoConsulta: {
        color: "#23252F",
        paddingTop: 15,
        paddingBottom: 15
    },

    especialidade: {
        backgroundColor: '#056CEF',
        borderRadius: 30,
        height: 24,
        width: 311,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    textoCabecalho: {
        color: '#FFFFFF',
    },

    textoCidade: {
        color: 'black', fontSize: 21
    },

    cidade: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        height: 44,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});