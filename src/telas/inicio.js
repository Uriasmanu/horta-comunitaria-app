import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import topo from '../../assets/topo.png';
import menu from '../../src/menu.png';
import iconeSeta from '../../src/arrow_forward.png';

const Inicio = () => {
    return (
        <View>
            <View style={estilos.container}>
                <Image source={topo} style={estilos.topo} />
                <TouchableOpacity style={estilos.botaoMenu} onPress={() => console.log('Botão de menu pressionado!')}>
                    <Image source={menu} style={[estilos.menu, { tintColor: '#ffffff' }]} />
                </TouchableOpacity>
            </View>

            <View style={estilos.introducao}>
                <Text style={estilos.titulo}>Horta Comunitaria: Vinha do Senhor</Text>

                <View style={estilos.containerBotao}>
                    <TouchableOpacity style={estilos.botao} onPress={() => console.log('Botão pressionado!')}>
                        <Text style={estilos.textoBotao}>Saiba mais</Text>
                        <Image source={iconeSeta} style={[estilos.seta, { tintColor: '#3C533C' }]} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '94%',
    },
    topo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    botaoMenu: {
        padding: 10,
        borderRadius: 5,
    },
    menu: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    introducao: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    titulo: {
        fontSize: 25,
        color: '#fff',
    },
    containerBotao: {
        alignItems:'center',
        width: '94%',
    },
    botao: {
        backgroundColor: '#98ff6c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '94%',
        height: 40,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#3C533C',
        fontSize: 15,
        fontWeight: 'bold',
    },
    seta: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    imagemNoBotao: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default Inicio;
