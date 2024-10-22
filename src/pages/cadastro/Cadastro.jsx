import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./cadastro.Style.js";
import InputText from "../../components/inputText/inputText.jsx";
import logo from "../../assets/cart.png";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import { useState } from "react";
import { apiGet } from "../../services/api.js";

export default function Cadastro({ navigation }) {
  const [nome, setNome] =useState('');
  const [email, setEmail] =useState('');
  const [senha, setSenha] =useState('');
  const [validarSenha, setValidarSenha] =useState('');

  async function next() {

    if(senha != validarSenha){
      return Alert.alert("Senhas não conferem!")
    }

    try {
      const response = await apiGet(`/usuarios/email/${email}`);
      
      console.log(response)
      if(response == undefined || response == 0){
        navigation.navigate("ValidacaoEmail", {
          nome,
          email,
          senha,
          validarSenha,
        });
      }else{
        if(response.message.match(/400/)){
          return Alert.alert("Informe um email válido!", "Será necessário validar o email.")
        }
      
      

      if(response){
        return Alert.alert("Email já utilizado", "Utilize outro email ou tente logar se já possui uma conta.")
      }

      }
      
      
    } catch (error) {
      console.log(error)
    }
    
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
