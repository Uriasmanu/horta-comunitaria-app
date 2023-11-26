import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import topo from '../../assets/topo.png';
import menu from '../../src/menu.png';
import iconeSeta from '../../src/arrow_forward.png';
import imagemInicio from '../../assets/Imagens/inicio.jpeg';

const Inicio = () => {
    return (
        <View style={estilos.body}>
            <View style={estilos.container}>
                <TouchableOpacity onPress={() => console.log('Botão de menu pressionado!')}>
                    <Image source={topo} style={estilos.topo} />
                </TouchableOpacity>

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

                    <Image source={imagemInicio} style={estilos.imagemInicio} />
                    
                </View>

                <View style={estilos.projetos}>
                    <Text style={estilos.subtitulo}>Principoais Projetos</Text>

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
        width: '98%',
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
        marginLeft: '4%',
        marginVertical: 15,
        width: '96%',
    },
    titulo: {
        fontSize: 25,
        color: '#fff',
    },
    containerBotao: {
        width: '98%',
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

    imagemInicio:{
        width: '94%',
        height: 300,
        resizeMode: 'contain',
    },

    subtitulo:{
        fontSize: 23,
        color: '#fff',
        alignSelf:'flex-start',
    },
});

export default Inicio;
