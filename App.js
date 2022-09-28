import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, State } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

export default function App() {
  const [imc, setImc] = useState(0)
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [legenda, setLegenda] = useState('Indeterminido')
  const [cor, setCor] = useState('#bdc3c7')

  const calcularIMC = () => {
    const resultado = peso / (altura * altura);

    setImc(Math.ceil(resultado))

    if(resultado < 18.5){
      setLegenda('Magreza')
      setCor('#e74c3c')
    }else if(resultado >= 18.5 && resultado < 25){
      setLegenda('Normal')
      setCor('#2ecc71')
    }else if(resultado >= 25 && resultado < 30){
      setLegenda('Sobrepeso')
      setCor('#f1c40f')
    }else if(resultado >= 30 && resultado < 40){
      setLegenda('Obesidade')
      setCor('#e67e22')
    }else if(resultado >= 40){
      setLegenda('Obesidade Grave')
      setCor('#e74c3c')
    }else{
      setLegenda('Ops.. não tem valor digitado!')
      setImc('Inválido')
    }
  }

  return (
    <View style={styles.app}>
    <StatusBar style="auto" />

    <Text style={styles.legenda}>Seu imc</Text>

      <View style={[styles.painel, {backgroundColor: cor}]}>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput
           label="Peso" 
           style={styles.peso}
           onChangeText={value => {
           setPeso(value.replace(',', '.'));
           }}
           />
        <TextInput 
           label="Altura" 
           style={styles.altura}
           onChangeText={value => {
            setAltura(value.replace(',', '.'))
          }}
           />
        <Button mode="contained" onPress={calcularIMC}>Calcular</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
   padding: 25,
  },
  painel: {
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    padding: 8,
  },
  legenda: {
    textAlign: "center",
    fontWeight: 'bold'
  },
  resultado: {
     textAlign: 'center',
     fontSize: 24,
     fontWeight: 'bold'
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  peso: {
    marginVertical: 10,
  },
  altura: {
    marginVertical: 10,
  }
});
