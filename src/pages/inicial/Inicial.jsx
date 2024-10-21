import { View, Text, StyleSheet, Image, Alert } from "react-native";
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
          <Button texto={"Simulado"} onPress={()=>Alert.alert("Deverá estar logado para utilizar!", 
                                                              "Para se cadastrar é apenas nome, emal e senha ")}/>
          <Button texto={"Simulado"} textoErro={"Com erros"} onPress={()=>Alert.alert("Ainda será implementado.")}/>
        </View>
        <View style={styles.btn}>
          <Button texto={"Desempenho"} onPress={()=>Alert.alert("Deverá estar logado para utilizar!", 
                                                              "Para se cadastrar é apenas nome, emal e senha ")}/>
          <Button texto={"Resultado"} onPress={()=>Alert.alert("Deverá estar logado para utilizar!", 
                                                              "Para se cadastrar é apenas nome, emal e senha ")}/>
        </View>
      </View>
      <View style={styles.btnBottom}>
        <ButtonBottom texto={"Logar"} textWhite fullW colorBackBlue onPress={()=> navigation.navigate("Login")}/>
        <ButtonBottom texto={"Cadastrar"} textGreen fullW colorBackTrans onPress={()=> navigation.navigate("Cadastro")}/>
      </View>
    </View>
  );
}
