import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./validacaoEmail.style.js";
import logo from "../../../assets/cart.png";
import InputText from "../../../components/inputText/inputText.jsx";
import ButtonBottom from "../../../components/ButtonBottom/ButtonBottom.jsx";
import { useRoute } from "@react-navigation/native";
import e_mail from 'react-native-email'
import { useEffect, useState } from "react";

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
    
    function handleEmail(){
      const to = email; 
      e_mail(to, {
          //cc: ['bazzy@moo.com', 'doooo@daaa.com'], 
          bcc: 'mee@mee.com', 
          subject: 'Mobile Simulado RJ',
          body: `Este é seu número de validação: ${randomNumber} `,
          checkCanOpen: false 
      }).catch(console.error)
    }


    handleGenerate();
    handleEmail();

  },[]);

  function ValidarEmail(){

    if(codigoDigitado == randomNumber || codigoDigitado == randomNumber2){
      () => navigation.navigate("InicialLogado")
    }else{
      alert(`O número deve ser igual ao que foi enviado para o email ${email}`)
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
        <ButtonBottom textWhite fullW colorBackBlue texto="Cadastrar" onPress={ValidarEmail()}/>
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
