import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";

import topo from '../../assets/topo.png';

export default function Inicio(){
    return <>
    <Image source={topo} style={estilos.topo} />

    </> 
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topo: {
        width: 100, // Defina a largura desejada para o ícone
        height: 100, // Defina a altura desejada para o ícone
        resizeMode: 'contain', // Isso garante que a imagem seja redimensionada para caber no contêiner mantendo sua proporção
    },
});