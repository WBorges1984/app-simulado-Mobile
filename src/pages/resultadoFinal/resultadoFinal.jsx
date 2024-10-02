import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import styles from "./resultadoFinal.style.js";
import logo from "../../assets/cart.png";
import { useEffect, useState } from "react";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import gif from "../../assets/QUESTAO_1161.gif";
import img from "../../assets/cart.png";
import { pergunta1 } from "../../constants/data.js";
import ButtonResultado from "../../components/buttonResultado/buttonResultado.jsx";
import { apiGet } from "../../services/api.js";

export default function Page({ navigation }) {
  const pergunta = { id_pergunta: "", dsPergunda: "", imgPergunta: "" };
  const { id_pergunta } = pergunta1;
  const { dsPergunda } = pergunta1;
  const { imgPergunta } = pergunta1;
  const [answers, setAnswers] = useState([])
  const [quest, setQuest] = useState ([])

  async function getQuest(id){
    let res = await apiGet(`http://localhost:8082/v1/questao/${id}`);
    setQuest(res)
  }
  
  useEffect((()=>{
    
    const getAnswers = async () =>{
      const response = await apiGet('/answers');
      setAnswers(response) 

    }
    getAnswers();
  }),[])

  useEffect((()=>{
    
  }),[])

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
          {answers && answers.map((item)=>{
                  
              return<ButtonResultado nr={item.pagina} certo={item.options.length} key={item.id}/> 

            })}
        </View>
                
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.pergunta}>
          <Text style={styles.nrPergunta}>1</Text>
          <Text style={styles.txtPergunta}>kjhg sdçlfkgjsçldf dçlfkjgl dçlfgkj</Text>
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
        
      </View>

      <View style={styles.btnBottom}>
        <ButtonBottom colorBackTrans textBlue  texto="Menu Principal" onPress={() => navigation.navigate("InicialLogado")} />
        <ButtonBottom colorBackBlue textWhite  texto="Nova Prova" onPress={() => navigation.navigate("pagePergunta")} />
      </View>
    </View>
  );
}
