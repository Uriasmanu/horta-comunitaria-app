import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";

import mapa from '../../assets/Imagens/mapa.png';

const Mapa = () => {
    return (
      <View style={styles.container}>
    
        <View>
            <Image source={mapa} style={styles.mapa}/>
        </View>

      <View style={styles.containerEndereco}>
        <View style={styles.line}></View>
        <View>
          <Text style={styles.texto}>
            Endereço: Av. Antonieta Altenfelder, 1015-1279 - Jardim Santa Antonieta
          </Text>
          <Text style={styles.texto}>Marília - SP, 17512-130</Text>
        </View>
      </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1D241D',
    },

    mapa: {
        width: '90%',
        margin: 17,
        
    },

    containerEndereco:{
        flexDirection: 'row',
        margin: 17,
    },

    line: {
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
        marginHorizontal: 2,
        width: '2%',
        justifyContent: 'space-between',
      },

    texto: {
      color: '#FFFFFF', // Adicionando a cor branca ao estilo do texto
    },
  });
  
  export default Mapa;
  