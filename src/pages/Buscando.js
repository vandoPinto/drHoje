import React from 'react';
import { Text, View, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

const cetaVoltar = require('../img/long-arrow-left-light.png');
const DATA = require("../cidades.json");
const dadosClinicas = require("../dadosClinicas.json");

export default function Buscando(props) {
    const objeto = props.route.params;

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.nomeClinica}>{item.nomeMedico}</Text>
            <Text style={styles.preco}>R${item.preco}</Text>
            <Text style={styles.texto}>{item.especialidade}</Text>
            <Text style={styles.texto}>{item.nomeClinica}</Text>
            <Text style={styles.texto}>{item.endereco}</Text>
        </View>
    )

    return (
        <SafeAreaView>
            <View style={styles.cabecalho}>
                <View style={styles.btnVoltar}>
                    <Image source={cetaVoltar} />
                </View>
                <Text style={styles.buscando} >BUSCANDO</Text>
                <View style={styles.fundo}>
                    <Text style={styles.textoCabecalho}>{objeto.especialidade}</Text>
                </View>
                <View style={styles.fundo}>
                    <Text style={styles.textoCabecalho}>{objeto.item.nome}</Text>
                </View>
            </View>

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: -15.7915298,
                        longitude: -47.8921573,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
            
            <View style={styles.flat}>
                <FlatList
                    data={dadosClinicas.clinicas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    nomeClinica: {
        color: '#23252F',
        fontSize: 12,
    },

    texto: {
        color: '#8C939E',
        fontSize: 10,
    },

    preco: {
        color: '#75BC1E',
        position: 'absolute',
        right: 12,
        top: 24,
        fontSize: 12,
    },

    card: {
        borderColor: '#0000001A', 
        borderBottomWidth: 1, 
        borderTopWidth: 1, 
        paddingBottom: 10, 
        paddingTop: 10, 
        width: "100%"
    },

    flat: {
        position: 'absolute',
        top: 400,
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFF',
        padding: 22,
    },

    container: {
        ...StyleSheet.absoluteFillObject,
        top: 0,
        height: 450,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },

    cabecalho: {
        backgroundColor: '#00000028',
        height: 170,
        alignItems: 'center',
        padding: 22,
    },

    buscando: {
        color: '#5C616C',
        padding: 22,
    },

    textoConsulta: {
        color: "#23252F",
        paddingTop: 15,
        paddingBottom: 15
    },

    fundo: {
        backgroundColor: '#056CEF',
        borderRadius: 30,
        height: 24,
        width: 311,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },

    btnVoltar: {
        left: 21,
        width: 20,
        height: 11.43,
        top: 45,
        position: 'absolute',
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