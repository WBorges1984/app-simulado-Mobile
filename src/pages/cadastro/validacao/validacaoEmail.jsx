import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./validacaoEmail.style.js";
import logo from "../../../assets/cart.png";
import InputText from "../../../components/inputText/inputText.jsx";
import ButtonBottom from "../../../components/ButtonBottom/ButtonBottom.jsx";

export default function ValidacaoEmail({ navigation, email }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Validação</Text>
      <View style={styles.input}>
        <InputText label="E-mail" />
        <InputText label="Digite o código" isPassword />
      </View>
      <View style={styles.btn}>
        <ButtonBottom textWhite fullW colorBackBlue texto="Cadastrar" onPress={() => navigation.navigate("InicialLogado")}/>
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
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Acessar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
