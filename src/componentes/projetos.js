import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import primeira from '../../assets/Imagens/medicinal.jpg';
import segunda from '../../assets/Imagens/sopao.jpeg';
import terceira from '../../assets/Imagens/criancas.jpeg';
import iconeSeta from '../../src/arrow_forward.png';

const Card = ({ title, imageSource, onPress }) => {
  return (
    <View>
    <TouchableOpacity style={styles.card} onPress={() => alert('Botão  pressionado!')}>
      <Image source={primeira} style={styles.cardImage} />
      <Text style={styles.cardTitle}>Horta medicinal {title}</Text>
      <View style={styles.line}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Botão  pressionado!')}>
            <Text style={styles.buttonText}>Saiba mais</Text>
            <Image source={iconeSeta} style={[styles.seta, { tintColor: '#3C533C' }]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card} onPress={() => alert('Botão  pressionado!')}>
      <Image source={segunda} style={styles.cardImage} />
      <Text style={styles.cardTitle}>Projeto Sopão {title}</Text>
      <View style={styles.line}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Botão  pressionado!')}>
            <Text style={styles.buttonText}>Saiba mais</Text>
            <Image source={iconeSeta} style={[styles.seta, { tintColor: '#3C533C' }]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.card} onPress={() => alert('Botão  pressionado!')}>
      <Image source={terceira} style={styles.cardImage} />
      <Text style={styles.cardTitle}>Projeto com as crianças: Semeando o furturo {title}</Text>
      <View style={styles.line}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Botão  pressionado!')}>
            <Text style={styles.buttonText}>Saiba mais</Text>
            <Image source={iconeSeta} style={[styles.seta, { tintColor: '#3C533C' }]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>

    </View> 
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 17,
    overflow: 'hidden',
    width: '90%',
    backgroundColor: '#fff',
    elevation: 5, // Altura da sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  cardImage: {
    width: '100%',
    height: 270, // Ajuste conforme necessário
    resizeMode: 'cover',
  },

  cardTitle: {
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 2,
  },

  button: {
    padding: 9,
    marginTop: 9,
    borderWidth: 1,
    marginHorizontal: 2,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent:'space-between',
  },

  buttonText: {
    color: '#3C533C',
    fontSize: 15,
    fontWeight: 'bold',
    
  },
});

export default Card;
