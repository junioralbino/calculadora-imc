import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

// import {  } from 'react-native-paper';

export default function App() {
  const calcularIMC = () => {
    const peso = 94;
    const altura = 1.83;

    const imc = peso / (altura * altura);

    alert(imc);
  }


  const imc = 25;
  const legenda = 'Normal';

  return (
    <View style={styles.app}>
    <StatusBar style="auto" />
      <Text style={styles.legenda}>Seu IMC</Text>
      <View>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput style={styles.peso}/>
        <TextInput style={styles.altura}/>
        <Button title='Calcular' onPress={calcularIMC}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
   padding: 25,
  },
  legenda: {
    textAlign: "center",
    fontWeight: 'bold'
  },
  resultado: {
     textAlign: 'center',
     fontSize: 22,
     fontWeight: 'bold'
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  peso: {
    borderColor: '#000',
    borderWidth: 1
  },
  altura: {
    borderColor: '#000',
    borderWidth: 1
  }
});
