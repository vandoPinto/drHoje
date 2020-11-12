import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const stethoscope = require('../img/stethoscope-light.png');
const camera = require('../img/camera.png');
const searchImg = require('../img/search.png');
const especialidades = require("../especialidades.json");

export default function Consultas() {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        setFilteredDataSource(especialidades.data.especialidades);
        setMasterDataSource(especialidades.data.especialidades);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{paddingLeft:20}} onPress={() => navigation.navigate('LocaisPesquisa', { item :item})}>
            <Text style={styles.textoConsulta} >{item.ds_especialidade}</Text>
        </TouchableOpacity>
    );

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.ds_especialidade
                    ? item.ds_especialidade.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <View>
            <View style={styles.container} >
                <TouchableOpacity style={styles.botoes} onPress={() => { }}>
                    <Image source={stethoscope}></Image>
                    <Text style={styles.textoBotao} >Consulta Presencial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes} onPress={() => { }}>
                    <Image source={camera}></Image>
                    <Text style={styles.textoBotao} >Consulta Online</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.barraProcurar}>
                <Searchbar
                    style={styles.barra}
                    placeholder="Pesquisar Consulta"
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    value={search}
                    inputStyle={styles.textInput}
                    icon={() => <Image source={searchImg}></Image>}
                />
            </View>
            <SafeAreaView style={{ height: 260 }}>
                <FlatList
                    data={filteredDataSource}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00000028',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textoConsulta: {
        color: "#23252F",
        paddingTop: 15,
        paddingBottom: 15
    },

    botoes: {
        borderRadius: 30,
        height: 30,
        width: 148,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
     
    barraProcurar: {
        backgroundColor: '#00000028',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 80,
    },

    barra: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        height: 50,
        width: 330,
    },

    textoBotao: {
        color: '#5C616C'
    },

    textInput: {
        borderRadius: 30,
        backgroundColor: '#FFFF',
        width: 325,
        height: 44,
        left: 50,
    },
});