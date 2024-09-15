import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./cadastro.Style.js";
import InputText from "../../components/inputText/inputText.jsx";
import logo from "../../assets/cart.png";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import { useState } from "react";

export default function Cadastro({ navigation }) {
  const [nome, setNome] =useState('');
  const [email, setEmail] =useState('');
  const [senha, setSenha] =useState('');
  const [validarSenha, setValidarSenha] =useState('');

  function next() {
    navigation.navigate("ValidacaoEmail", {
      nome,
      email,
      senha,
      validarSenha,
    });
  }
  return (
    <View style={styles.container}>
      <Image source={logo}  />
      <Text>Crie sua conta</Text>
      <View style={styles.input}>
        <InputText label="Nome" onChangeText={(texto)=> setNome(texto)}/>
        <InputText label="E-mail" onChangeText={(texto)=> setEmail(texto)}/>
        <InputText label="Senha" isPassword onChangeText={(texto)=> setSenha(texto)}/>
        <InputText label="Confirma Senha" isPassword onChangeText={(texto)=> setValidarSenha(texto)}/>
      </View>
      <View style={styles.btn}>
        {/* <ButtonBottom textWhite fullW colorBackBlue texto="Próximo" onPress={()=>navigation.navigate("ValidacaoEmail")}/> */}
        <ButtonBottom textWhite fullW colorBackBlue texto="Próximo" onPress={next}/>
      </View>
      <View style={styles.buttonFooter}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text>Acessar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
