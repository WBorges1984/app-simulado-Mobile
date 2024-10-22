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
  const [codigoRecebido, setCodigoRecebido] = useState('');



  useEffect(()=>{
    const enviarEmail = async () => {
      const endpoint = `/validaEmail/${email}`;
      const body = {
        // Qualquer dado adicional que precise ser enviado
        subject: 'Validação de Email',
      };
    
      try {
        const response = await apiPost(endpoint, body);
        console.log('Resposta do servidor:', response);
        setCodigoRecebido(response.code)
        Alert.alert("Código enviado", `Código foi encaminhado para o email ${email} verificar também no SPAM ou Lixo Eletrônico.`)
      } catch (error) {
        console.error('Erro ao enviar email:', error.message);
      }
    };

    enviarEmail();

  },[]);

  

    async function Cadastrar(){

      try {
        if(codigoDigitado != codigoRecebido){
          return Alert.alert("Código de verificação errado!")
        }

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
        <InputText label="Digite o código" placeholder={"Digite com os traços"} onChangeText={(texto)=>setCodigoDigitado(texto)}/>
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