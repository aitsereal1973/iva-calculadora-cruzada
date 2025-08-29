import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [precio, setPrecio] = useState('');
  const [tasaIVA, setTasaIVA] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIVA = () => {
    const iva = (parseFloat(precio) * (parseFloat(tasaIVA) / 100)).toFixed(2);
    setResultado(iva);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Calculadora de IVA</Text>
      <TextInput
        placeholder='Precio sin IVA'
        keyboardType='numeric'
        value={precio}
        onChangeText={setPrecio}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <TextInput
        placeholder='Tasa de IVA (%)'
        keyboardType='numeric'
        value={tasaIVA}
        onChangeText={setTasaIVA}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title='Calcular IVA' onPress={calcularIVA} />
      {resultado !== null && <Text style={{ marginTop: 20 }}>IVA: ${resultado}</Text>}
    </View>
  );
};

export default App;