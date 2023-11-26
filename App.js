import { StatusBar ,StyleSheet, Text, ScrollView} from 'react-native';
import Inicio from './src/telas/inicio';
import Card from './src/telas/projetos';
import Card2 from './src/telas/outrosProjetos';
import Mapa from './src/telas/localizacao';
import ParceirosFooter from './src/telas/footer';

export default function App() {
  return (
    <ScrollView style={estilosInicio.container}>
      <StatusBar/>
     <Inicio/>
     <Card/>
     <Card2/>
     <Mapa/>
     <ParceirosFooter/>
    </ScrollView>
  );
}


const estilosInicio = StyleSheet.create({
  container: {
    backgroundColor:"#3C533C",
    flex: 1,
  }
})