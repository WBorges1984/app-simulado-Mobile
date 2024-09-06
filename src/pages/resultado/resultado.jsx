import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./resultado.style.js";
import logo from "../../assets/cart.png";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";

export default function Resultado({navigation}) {
  const data = [
    {
      id: "1", // Adicione uma chave única para cada item
      dt: "2024-09-01",
      time: "20",
      acertos: "21",
      percent: "70",
    },
     {
       id: "2", // Adicione uma chave única para cada item
       dt: "2024-09-02",
       time: "28",
       acertos: "18",
       percent: "60",
     },
    {
      id: "3", // Adicione uma chave única para cada item
      dt: "2024-09-02",
      time: "29",
      acertos: "25",
      percent: "83",
    },
    {
      id: "4", // Adicione uma chave única para cada item
      dt: "2024-09-02",
      time: "27",
      acertos: "16",
      percent: "30",
    },
    {
      id: "5", // Adicione uma chave única para cada item
      dt: "2024-09-02",
      time: "29",
      acertos: "16",
      percent: "30",
    },
    {
      id: "6", // Adicione uma chave única para cada item
      dt: "2024-09-02",
      time: "27",
      acertos: "16",
      percent: "30",
    },
  ];

  // Componente para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.ItemId}>
        <ButtonBottom texto={item.id} fullW/>
      </View>
      <View style={parseInt(item.percent) > 69 ? styles.dadosItemGreen : styles.dadosItemRed}>
        <View>
          <Text style={styles.textoDT}>Data: {item.dt}</Text>
          <Text style={styles.textoDT}>Tempo: {item.time}min</Text>
        </View>
        <View style={styles.dadosPerc}>
          <Text style={styles.textoAcertos}>{item.acertos}/30</Text>
          <Text style={styles.textoPorcento}>{item.percent}%</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.texto}>Resultado1</Text>
      <FlatList style={styles.flat}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Use a chave única correta
      />
      <View style={styles.btn}>
        <ButtonBottom colorBackBlue texto="Menu principal" fullW onPress={()=>navigation.navigate("InicialLogado")}/>
      </View>
    </View>
  );
}
