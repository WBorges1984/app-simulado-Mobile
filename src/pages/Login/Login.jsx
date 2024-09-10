import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./login.style.js";
import InputText from "../../components/inputText/inputText.jsx";
import logo from "../../assets/cart.png";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import { apiPost } from "../../services/api.js";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider.js";

export default function Login({ navigation }) {
 
  const [messageErroLogin, setMessageErroLogin] = useState('');
  const [messageValida, setMessageValida] = useState('');
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const {login} = useContext(AuthContext)
  
    const handleLogin = async () => {
      // if(email == ''){
      //   return setMessage("Email não pode ser vazio")
      // }

      // if(senha == ''){
      //   return setMessage("Senha não pode ser vazio")
      // }

      // try {
        
      //   const postData = { email: email, senha: senha };
       
      //   const result = await apiPost('/usuarios/login', postData);
        
      //   login(result)
      //    navigation.navigate("InicialLogado");
      // } catch (error) {
      //   console.error(error.message);  // Adicione .message para uma descrição mais detalhada
      //   //console.error('Erro ao enviar dados:', error.message);  // Adicione .message para uma descrição mais detalhada
      // }

      if(email == ''){
        return setMessage("Email não pode ser vazio")
      }

      if(senha == ''){
        return setMessage("Senha não pode ser vazio")
      }
        const postData = { email: email, senha: senha };
       
        const result = await apiPost('/usuarios/login', postData);
        
        login(result)
         navigation.navigate("InicialLogado");
     
        console.error(error.message);  // Adicione .message para uma descrição mais detalhada
        //console.error('Erro ao enviar dados:', error.message);  // Adicione .message para uma descrição mais detalhada
     

      
    };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Acesse sua conta</Text>
      <View><Text>{messageValida != "" ? "teste": '' }</Text></View>
      <View style={styles.input}>
        <InputText label="E-mail" onChangeText={setEmail} value={email}/>
        <InputText label="Senha" isPassword onChangeText={setSenha} value={senha} />
      </View>
      <View style={styles.btn}>
        <ButtonBottom textWhite fullW colorBackBlue texto="Acessar" onPress={handleLogin}/>
      </View>
      <View style={styles.buttonFooter}>
        <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")}>
          <Text>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
