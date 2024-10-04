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

export default function ResultadoFinal({ navigation }) {
  const { imgPergunta } = pergunta1;
  const [answers, setAnswers] = useState([]);
  const [questNum, setQuestNum] = useState([{pergunta: '', correta:'', errada:''}]);
  const [questaoText, setQuestaoText] = useState('')

  async function getAnswersNumber(id) {
    //Busca totas as respostas do user
    const response = await apiGet("/answers");

    //filtra para a resposta solicitada
    const idAnswers = response.filter((item) => item.question_id === id);
    
    //Busca a questao completa baseado no id recebido
    const buscaPergunta = await apiGet(`/questao/${idAnswers[0].options[0].question_id}`)
    setQuestaoText(buscaPergunta.question_text)
    console.log('resposta user: ', idAnswers, 'Questão', buscaPergunta);
  }

  useEffect(() => {
    const getAnswers = async () => {
      const response = await apiGet("/answers");
      setAnswers(response);
    };
    getAnswers();
  }, []);

  useEffect(() => {getAnswersNumber(1)}, []);

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
          {answers &&
            answers.map((item) => {
              return (
                <ButtonResultado
                  onPress={() => getAnswersNumber(item.question_id)}
                  nr={item.pagina}
                  certo={item.options.length}
                  key={item.id}
                />
              );
            })}
        </View>
      </View>

      <View style={styles.containerConteudo}>
         <View style={styles.pergunta}>
                    <Text style={styles.nrPergunta}>1</Text>
                    <Text style={styles.txtPergunta}>
                      {questaoText}
                  </Text>
                  </View>
                  <View style={styles.img}>
                    <Image source={{ uri: imgPergunta }} />
                  </View>

                  <TouchableOpacity green>
                    <View style={styles.opPergunta}>
                      <Text style={styles.letterOp}>GFDSDF</Text>
                      <Text style={styles.txtOpPergunta}>SDXVBVCD</Text>
                    </View>
                  </TouchableOpacity>
      </View>

      <View style={styles.btnBottom}>
        <ButtonBottom
          colorBackTrans
          textBlue
          texto="Menu Principal"
          onPress={''}
        />
        <ButtonBottom
          colorBackBlue
          textWhite
          texto="Nova Prova"
          onPress={() => navigation.navigate("pagePergunta")}
        />
      </View>
    </View>
  );
}
