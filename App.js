import React from 'react';
import { StatusBar, StyleSheet, Text, ScrollView, View } from 'react-native';
import { useFonts, Arvo_400Regular, Arvo_700Bold } from '@expo-google-fonts/arvo';

import Inicio from './src/telas/inicio';
import Card from './src/telas/projetos';
import Card2 from './src/telas/outrosProjetos';
import Mapa from './src/telas/localizacao';
import ParceirosFooter from './src/telas/footer';

export default function App() {
  const [fonteLoad] = useFonts({
    'ArvoRegular': Arvo_400Regular,
    'ArvoBold': Arvo_700Bold,
  });

  if (!fonteLoad) {
    return <View />;
  }

  return (
    <ScrollView style={estilosInicio.container}>
      <StatusBar />
      <Inicio />
      <Card />
      <Card2 />
      <Mapa />
      <ParceirosFooter />
    </ScrollView>
  );
}

const estilosInicio = StyleSheet.create({
  container: {
    backgroundColor: "#3C533C",
    flex: 1,
  },
});
