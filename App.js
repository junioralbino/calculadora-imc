import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, TextInput, Button, Text, View, State } from 'react-native';

// import {  } from 'react-native-paper';

export default function App() {
  const [imc, setImc] = useState(0)
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [legenda, setLegenda] = useState('Indeterminido')

  const calcularIMC = () => {
    const resultado = peso / (altura * altura);

    setImc(Math.ceil(resultado))

    if(resultado < 18.5){
      setLegenda('Magreza')
    }else if(resultado >= 18.5 && resultado < 25){
      setLegenda('Normal')
    }else if(resultado >= 25 && resultado < 30){
      setLegenda('Sobrepeso')
    }else if(resultado >= 30 && resultado < 40){
      setLegenda('Obesidade')
    }else if(resultado >= 40){
      setLegenda('Obesidade Grave')
    }else{
      setLegenda('Ops.. não tem valor digitado!')
      setImc('Inválido')
    }
  }

  return (
    <View style={styles.app}>
    <StatusBar style="auto" />

    <Text style={styles.legenda}>Seu imc</Text>

      <View>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput 
           style={styles.peso}
           onChangeText={value => {
           setPeso(value.replace(',', '.'));
           }}
           />
        <TextInput 
           style={styles.altura}
          onChangeText={value => {
            setAltura(value.replace(',', '.'))
          }}
           />
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
