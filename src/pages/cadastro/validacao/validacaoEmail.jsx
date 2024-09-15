import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./validacaoEmail.style.js";
import logo from "../../../assets/cart.png";
import InputText from "../../../components/inputText/inputText.jsx";
import ButtonBottom from "../../../components/ButtonBottom/ButtonBottom.jsx";
import { useRoute } from "@react-navigation/native";
import e_mail from 'react-native-email'
import { useEffect, useState } from "react";
import { apiPost } from "../../../services/api.js";
import Login from "../../Login/Login.jsx";

export default function ValidacaoEmail({ navigation, user }) {
  const route = useRoute();
  const { nome, email, senha, validarSenha } = route.params;
  const [randomNumber, setRandomNumber] = useState('');
  const [randomNumber2, setRandomNumber2] = useState('');
  const [codigoDigitado, setCodigoDigitado] = useState('');


  useEffect(()=>{

    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleGenerate = () => {
      // Gera dois números aleatórios de três dígitos
      const part1 = generateRandomNumber(100, 999); // Primeira parte (ex: 658)
      const part2 = generateRandomNumber(100, 999); // Segunda parte (ex: 745)
  
      // Define o número no formato "XXX-XXX"
      setRandomNumber(`${part1}-${part2}`);
      setRandomNumber2(`${part1}${part2}`);


    };
    
    


    handleGenerate();
    

  },[]);

  

    async function Cadastrar(){

      try {

        const postData = {"nome": nome, "email": email, "senha":senha}
    
        const result = await apiPost("/usuarios/registro", postData);

       
        console.log(result.result.affectedRows);
        if( result.result.affectedRows > 0){
          Alert.alert("Usuário cadastrado com sucesso!")
                navigation.navigate("Inicial");
        }
      } catch (error) {
        console.error("Erro ao cadastrar usuário: ", error)
      }
      

    }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Validação</Text>
      <View style={styles.input}>
        <InputText label="E-mail" value={email}  />
        <InputText label="Digite o código" onChangeText={(texto)=>setCodigoDigitado(texto)}/>
      </View>
      <View style={styles.btn}>
        <ButtonBottom textWhite fullW colorBackBlue texto="Cadastrar" onPress={Cadastrar}/>
      </View>
      <View style={styles.btnDown}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.emailWrong}>E-mail errado?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Código reenviado!")}>
        <Text style={styles.reeviarCodigo}>Reenviar código</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonFooter}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Text>Acessar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}