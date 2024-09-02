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

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Acesse sua conta</Text>
      <View style={styles.input}>
        <InputText label="Nome" />
        <InputText label="E-mail" isPassword />
        <InputText label="Senha" isPassword />
        <InputText label="ConfirmaSenha" isPassword />
      </View>
      <View>
        <ButtonBottom colorBackBlue texto="Próximo" />
      </View>
      <View style={styles.buttonFooter}>
        <TouchableOpacity>
          <Text>Acessar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
