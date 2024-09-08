import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import styles from "./resultadoFinal.style.js";
import logo from "../../assets/cart.png";
import { useEffect, useState } from "react";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import gif from "../../assets/QUESTAO_1161.gif";
import img from "../../assets/cart.png";
import { pergunta1 } from "../../constants/data.js";
import ButtonResultado from "../../components/buttonResultado/buttonResultado.jsx";

export default function Page({ navigation }) {
  const pergunta = { id_pergunta: "", dsPergunda: "", imgPergunta: "" };
  const { id_pergunta } = pergunta1;
  const { dsPergunda } = pergunta1;
  const { imgPergunta } = pergunta1;

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image source={logo} style={styles.logo} />

        
          <View style={styles.txtPerc}>
            <Text style={styles.textoPerc}>Você obteve</Text>
            <Text style={styles.numPerc}>90%</Text>
          </View>
        
      </View>
      <View style={styles.containerDs}>
        <Text style={styles.dsPerc}>Das 30 questões você acertou 27</Text>
      </View>

      <View style={styles.quadroPerguntas}> 
        <View style={styles.linhaQuadro}>
           <ButtonResultado nr={1} red/>    
           <ButtonResultado nr={2} green/>    
           <ButtonResultado nr={3} green/>    
           <ButtonResultado nr={4} green/>    
           <ButtonResultado nr={5} green/>    
           <ButtonResultado nr={6} green/>    
           <ButtonResultado nr={7} green/>    
           <ButtonResultado nr={8} green/>    
           <ButtonResultado nr={9} green/>    
           <ButtonResultado nr={10} green/>    
        </View> 
        <View style={styles.linhaQuadro}>
           <ButtonResultado nr={11} green/>    
           <ButtonResultado nr={12} green/>    
           <ButtonResultado nr={13} green/>    
           <ButtonResultado nr={14} green/>    
           <ButtonResultado nr={15} red/>    
           <ButtonResultado nr={16} green/>    
           <ButtonResultado nr={17} red/>    
           <ButtonResultado nr={18} green/>    
           <ButtonResultado nr={19} green/>    
           <ButtonResultado nr={20} green/>    
        </View> 
        <View style={styles.linhaQuadro}>
           <ButtonResultado nr={21} green/>    
           <ButtonResultado nr={22} green/>    
           <ButtonResultado nr={23} green/>    
           <ButtonResultado nr={24} green/>    
           <ButtonResultado nr={25} green/>    
           <ButtonResultado nr={26} green/>    
           <ButtonResultado nr={27} green/>    
           <ButtonResultado nr={28} green/>    
           <ButtonResultado nr={29} green/>    
           <ButtonResultado nr={30} green/>    
        </View> 
        
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.pergunta}>
          <Text style={styles.nrPergunta}>{id_pergunta}</Text>
          <Text style={styles.txtPergunta}>{dsPergunda}</Text>
        </View>
        <View style={styles.img}>
          <Image source={{ uri: imgPergunta }} />
        </View>

        <TouchableOpacity>
          <View style={styles.opPergunta}>
            <Text style={styles.letterOp}>C</Text>
            <Text style={styles.txtOpPergunta}>indicação</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.opPergunta}>
            <Text style={styles.letterOp}>D</Text>
            <Text style={styles.txtOpPerguntaCorreta}>regulamentação</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.btnBottom}>
        <ButtonBottom colorBackTrans textBlue fullW texto="Menu Principal" onPress={() => navigation.navigate("InicialLogado")} />
        <ButtonBottom colorBackBlue textWhite fullW texto="Nova Prova" onPress={() => navigation.navigate("pagePergunta")} />
      </View>
    </View>
  );
}
