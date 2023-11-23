import { StatusBar ,StyleSheet, Text, SafeAreaView} from 'react-native';
import Inicio from './src/telas/inicio';

export default function App() {
  return (
    <SafeAreaView style={estilosInicio.container}>
      <StatusBar/>
     <Inicio/>
    </SafeAreaView>
  );
}


const estilosInicio = StyleSheet.create({
  container: {
    backgroundColor:"#3C533C",
    flex: 1,
  }
})