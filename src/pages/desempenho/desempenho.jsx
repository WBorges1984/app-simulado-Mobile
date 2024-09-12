import logo from "../../assets/cart.png";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./desempenho.style";
import ButtonBottom from '../../components/ButtonBottom/ButtonBottom'
import { apiGet } from "../../services/api";

export default function Desempenho({navigation}) {
  const [resultados, setResultados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [qtdProvas, setQtdProvas] = useState(0);
  const [provasRight, setProvasRight] = useState(0);
  const [provasWrong, setProvasWrong] = useState(0);
  const [numQuetions, setNumQuetions] = useState(0);
  const [numQuetionsWrong, setNumQuetionsWrong] = useState(0);
  const [numQuetionsRight, setNumQuetionsRight] = useState(0);
  const [mediaSimples, setMediaSimples] = useState(0);
  const [probabilidade, setProbabilidade] = useState(0);

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const dataResult = await apiGet('/resultados');
        
        setResultados(dataResult);

        //quantidade de provas//
        setQtdProvas(dataResult.length);

        //quantidade de provas certas e erradas//
        let right = 0;
        let wrong = 0;
        dataResult.forEach(item => {
          if(item.acertos > 20){
            right++;
          }else{
            wrong++;
          }
        });
        setProvasRight(right);
        setProvasWrong(wrong);

        //quantidade de questões respondidas//
        setNumQuetions(dataResult.length * 30)

        //quantidade de questões respondidas certas e erradas//
        let wrongUn = 0;
        let rightUn = 0;
        dataResult.forEach(item =>{
          wrongUn += 30 - item.acertos;
          rightUn += item.acertos;
        })

        setNumQuetionsRight(rightUn);
        setNumQuetionsWrong(wrongUn);
        
        setMediaSimples((right / dataResult.length) * 100);
        setProbabilidade((rightUn / (dataResult.length * 30)) * 100);


      } catch (err) {
        setError('Erro ao buscar resultados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResultados();
    
  }, []);




   
      


  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Desempenho</Text>

      <View style={styles.containerConteudo}>
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
                <Text style={mediaSimples > 49 ? styles.varGreen :styles.varRed}>{mediaSimples}% Aprovação </Text>
            </View>

            <View style={styles.texto1}>
            <Text style={styles.texto}>Probabilidade de acerto: </Text>
                <Text style={probabilidade < 50 ? styles.varRed: styles.varGreen}>{probabilidade}% Acerto</Text>
            </View>
      </View>
        <View style={styles.btnBottom}>
            <ButtonBottom colorBackBlue texto="Menu principal" textWhite fullW onPress={()=>navigation.navigate("InicialLogado")}/>
        </View>
    </SafeAreaView>
  );
}
