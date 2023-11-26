import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";
import { WebView } from 'react-native-webview';

const Mapa = () =>{
    return (
    <View style={styles.container}>
        <View style={styles.line}></View>
        <View>
            <Text style={styles.texto}>Endereço: Av. Antonieta Altenfelder, 1015-1279 - Jardim Santa Antonieta</Text>
            <Text style={styles.texto}>Marília - SP, 17512-130</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1D241D',
        flexDirection: 'row'
    },
    
    line: {
        borderLeftWidth: 5,
        borderLeftColor: '#fff',
        marginHorizontal: 2,
        height: '100%',
      },

      texto:{
        color: '#fff',
        fontSize: 10,
      },
      
});

export default Mapa;