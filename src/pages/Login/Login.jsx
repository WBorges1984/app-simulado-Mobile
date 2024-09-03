import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./login.style.js";
import InputText from "../../components/inputText/inputText.jsx";
import logo from "../../assets/cart.png";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Acesse sua conta</Text>
      <View style={styles.input}>
        <InputText label="E-mail" />
        <InputText label="Senha" isPassword />
      </View>
      <View style={styles.btn}>
        <ButtonBottom fullW colorBackBlue texto="Acessar" />
      </View>
      <View style={styles.buttonFooter}>
        <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")}>
          <Text>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
