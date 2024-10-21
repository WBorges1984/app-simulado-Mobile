import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./resultado.style.js";
import logo from "../../assets/cart.png";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import { apiGet } from "../../services/api.js";

export default function Resultado({navigation}) {
  const [resultados, setResultados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");


  const convertDate = (dateString) => {
    const date = new Date(dateString);
  
    // Obter o dia, mês e ano
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam de 0
    const year = date.getFullYear();
  
    // Retornar a data formatada
    return `${day}/${month}/${year}`;
  };

  function CalculaPercentual(perc){
    let calc = perc / 30 * 100 
    return calc.toFixed(0)
  }

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const dataResult = await apiGet('/resultados');
        if(dataResult == 0 || dataResult == null ){
          setMessage("Nenhuma prova ainda respondida! ")
        }
        setResultados(dataResult);
      } catch (err) {
        setError('Erro ao buscar resultados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResultados();
  }, []);
  
  // Componente para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      
      <View style={styles.ItemId}>
        <ButtonBottom textWhite texto={item.prova_nr} fullW/>
      </View>
   
      {/* <View style={parseInt(item.percent) > 69 ? styles.dadosItemGreen : styles.dadosItemRed}> */}
      <View style={ item.acertos > 20 ? styles.dadosItemGreen : styles.dadosItemRed}>
        <View>
          <Text style={styles.textoDT}>Data: {convertDate(item.dt_prova)}</Text>
          <Text style={styles.textoDT}>Tempo: {item.tempo}min</Text>
        </View>
        <View style={styles.dadosPerc}>
          <Text style={styles.textoAcertos}>{item.acertos}/30</Text>
          <Text style={styles.textoPorcento}>{CalculaPercentual(item.acertos)}%</Text>
        </View>
      </View>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.texto}>Resultado</Text>
      
      <FlatList style={styles.flat}
        data={resultados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {message && 
        <View style={styles.message}>
          <Text style={styles.textMessage}> {message}</Text>
        </View>
      }
      
    
      <View style={styles.btn}>
        <ButtonBottom  colorBackBlue texto="Menu principal" textWhite fullW onPress={()=>navigation.navigate("InicialLogado")}/>
      </View>
    </View>
  );
}
