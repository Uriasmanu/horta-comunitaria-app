import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParceirosFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Parceiros</Text>
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.parceiroText}>Toca imóveis</Text>
          <Text style={styles.parceiroText}>Padaria Baleias</Text>
          <Text style={styles.parceiroText}>Ceagesp</Text>
          <Text style={styles.parceiroText}>Marilan</Text>
          <Text style={styles.parceiroText}>Dori</Text>
          <Text style={styles.parceiroText}>Bell</Text>
          <Text style={styles.parceiroText}>Paróquia Santa Antonieta Padre Wilians</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.parceiroText}>Tauste</Text>
          <Text style={styles.parceiroText}>Unimar</Text>
          <Text style={styles.parceiroText}>Carino</Text>
          <Text style={styles.parceiroText}>Cooperativa Sicredi</Text>
          <Text style={styles.parceiroText}>Menin engenharia</Text>
          <Text style={styles.parceiroText}>Damila Ifood</Text>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
  
  },
  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    
  },
  parceiroText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 15,
  },
});

export default ParceirosFooter;
