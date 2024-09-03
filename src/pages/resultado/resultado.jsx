import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './resultado.style.js';
import logo from "../../assets/cart.png";

export default function Resultado() {
  const data = [
    {
      id: "1", // Adicione uma chave única para cada item
      dt: "2024-09-01",
      time: "20",
      acertos: "21",
      percent: "70"
    },
    {
        id: "2", // Adicione uma chave única para cada item
        dt: "2024-09-02",
        time: "28",
        acertos: "18",
        percent: "60"
    },
    {
        id: "3", // Adicione uma chave única para cada item
        dt: "2024-09-02",
        time: "29",
        acertos: "25",
        percent: "83"
    },
    {
        id: "4", // Adicione uma chave única para cada item
        dt: "2024-09-02",
        time: "27:20",
        acertos: "16",
        percent: "30"
    },
  ];

  // Componente para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Data: {item.dt}</Text>
      <Text>Hora: {item.time}</Text>
      <Text>Acertos: {item.acertos}</Text>
      <Text>Percentual: {item.percent}%</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.texto}>Resultado</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Use a chave única correta
      />
    </View>
  );
}
