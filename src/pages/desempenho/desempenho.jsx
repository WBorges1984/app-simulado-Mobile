import logo from "../../assets/cart.png";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./desempenho.style";
import ButtonBottom from '../../components/ButtonBottom/ButtonBottom'

export default function Desempenho({navigation}) {
  const [qtdProvas, setQtdProvas] = useState(4);
  const [provasRight, setProvasRight] = useState(4);
  const [provasWrong, setProvasWrong] = useState(2);
  const [numQuetions, setNumQuetions] = useState(120);
  const [numQuetionsWrong, setNumQuetionsWrong] = useState(80);
  const [numQuetionsRight, setNumQuetionsRight] = useState(40);
  const [mediaSimples, setMediaSimples] = useState(50);
  const [probabilidade, setProbabilidade] = useState(66);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Desempenho</Text>

      <View >
        <View style={styles.texto1}>
          <Text style={styles.texto}>Até o momento </Text>
          <Text style={styles.varAzul}>{qtdProvas}</Text>
          <Text style={styles.texto}> testes foram feitos.</Text>
        </View>

        <View  style={styles.texto1}>
            <Text style={styles.texto}>Sendo </Text> 
            <Text style={styles.varGreen}> {provasRight} </Text> 
            <Text style={styles.texto}> aprovados e </Text> 
            <Text style={styles.varRed}> {provasWrong}</Text> 
            <Text style={styles.texto}> reprovados.</Text>
        </View>

        <View  style={styles.texto1}>
            <Text style={styles.texto}></Text>
            <Text style={styles.varAzul}>{numQuetions}</Text>    
            <Text style={styles.texto}> questões respondidas, </Text> 
            <Text style={styles.varGreen}>{numQuetionsRight} </Text>
            <Text style={styles.texto}> acertos.</Text>
        </View>

        <View style={styles.texto1}>
            <Text style={styles.varRed}>{numQuetionsWrong}</Text>
            <Text style={styles.texto}> erros.</Text>
        </View>
        
      </View>

      <View style={styles.mediaProb}> 
        <View style={styles.texto1}>
        <Text style={styles.texto}>Na média simples: </Text>
                <Text style={styles.varAzul}>{mediaSimples}% Aprovação </Text>
            </View>

            <View style={styles.texto1}>
            <Text style={styles.texto}>Probabilidade de acerto: </Text>
                <Text style={styles.varRed}>{probabilidade}% Acerto</Text>
            </View>
      </View>
        <View style={styles.btnBottom}>
            <ButtonBottom colorBackBlue texto="Menu principal" fullW onPress={()=>navigation.navigate("InicialLogado")}/>
        </View>
    </SafeAreaView>
  );
}
