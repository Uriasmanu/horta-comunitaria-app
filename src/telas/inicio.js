import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import menu from '../../src/menu.png';

export default function Inicio(){
    return (
    <View style={estilos.container}>
        <Image source={topo} style={estilos.topo} />
        <Image source={menu} style={[estilos.menu, { tintColor: 'fff'}]} />
    </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topo: {
        width: 100, // Defina a largura desejada para o ícone
        height: 100, // Defina a altura desejada para o ícone
        resizeMode: 'contain', // Isso garante que a imagem seja redimensionada para caber no contêiner mantendo sua proporção
    },

    menu:{
        width: 45, // Defina a largura desejada para o ícone
        height: 45, // Defina a altura desejada para o ícone
        resizeMode: 'contain', // Isso garante que a imagem seja redimensionada para caber no contêiner mantendo sua proporção
        marginRight: '5%',
        
    }
});