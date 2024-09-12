import { View, Text, StyleSheet, Image } from "react-native";
import React, { useContext } from "react";
import styles from "./inicialLogado.Style";
import logo from "../../assets/cart.png";
import Button from "../../components/button/ButtonCustom";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom";
import { AuthContext } from "../../context/AuthProvider";


export default function InicialLogado({navigation}) {
  const {userData, login} = useContext(AuthContext);
  const nome = userData.nome;
  console.log(userData)
  function Logof(){

    login('')

    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.name}>Bem vindo {nome}</Text>
      <View style={styles.buttons}>
        <View style={styles.btn}>
          <Button texto={"Simulado"} onPress={()=> navigation.navigate("pagePergunta")}/>
          <Button texto={"Simulado"} textoErro={"Com erros"}/>
        </View>
        <View style={styles.btn}>
          <Button texto={"Desempenho"} onPress={()=> navigation.navigate("Desempenho")}/>
          <Button texto={"Resultado "} onPress={()=> navigation.navigate("Resultado")}/>
        </View>
      </View>
      <View style={styles.deslogar}>
        <ButtonBottom texto={"Logof"} fullW colorBackGray textWhite onPress={Logof}/>
      </View>
    </View>
  );
}
