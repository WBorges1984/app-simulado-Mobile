import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import styles from "./inicialStyle";
import logo from "../../assets/cart.png";
import Button from "../../components/button/ButtonCustom";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom";


export default function Inicial({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.buttons}>
        <View style={styles.btn}>
          <Button texto={"Simulado"} />
          <Button texto={"Simulado"} textoErro={"Com erros"}/>
        </View>
        <View style={styles.btn}>
          <Button texto={"Simulado"} />
          <Button texto={"Simulado "} />
        </View>
      </View>
      <View style={styles.btnBottom}>
        <ButtonBottom texto={"Logar"} colorBackBlue onPress={()=> navigation.navigate("Login")}/>
        <ButtonBottom texto={"Cadastrar"} textGreen colorBackTrans onPress={()=> navigation.navigate("Cadastro")}/>
      </View>
    </View>
  );
}
