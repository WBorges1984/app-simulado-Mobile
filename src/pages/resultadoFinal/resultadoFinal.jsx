import { View, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import styles from "./resultadoFinal.style.js";
import logo from "../../assets/cart.png";
import { useEffect, useState } from "react";
import ButtonBottom from "../../components/ButtonBottom/ButtonBottom.jsx";
import gif from "../../assets/QUESTAO_1161.gif";
import img from "../../assets/cart.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import { pergunta1 } from "../../constants/data.js";
import ButtonResultado from "../../components/buttonResultado/buttonResultado.jsx";
import { apiGet, apiPost, apiPut } from "../../services/api.js";
import { useRoute } from '@react-navigation/native';

export default function ResultadoFinal({ navigation }) {
  const { imgPergunta } = pergunta1;
  const [answers, setAnswers] = useState([]);
  const [optionCorreta, setOptionCorreta] = useState('');
  const [optionErrada, setOptionErrada] = useState('A');
  const [questaoText, setQuestaoText] = useState('')
  const [pagina, setPagina] = useState(0);
  const [resultado, setResultado] = useState({});
  const [minutos, setMinutos] = useState(0);

  
  const route = useRoute();
  const { params } = route;
  const questionId = params.params;
  const TestMinutes = params.minutes;

  async function getAnswersNumber(id, pagina) {
    setPagina(pagina)
    //Busca totas as respostas do user
    const response = await apiGet("/answers");

    //filtra para a resposta solicitada
    const idAnswers = response.filter((item) => item.question_id === id);
    
    setOptionCorreta(idAnswers[0].options[0].option_text)
    if(idAnswers[0].options[1]){
      setOptionErrada(idAnswers[0].options[1].option_text)
    }else{
      setOptionErrada("A")
    }
    

    //Busca a questao completa baseado no id recebido
    const buscaPergunta = await apiGet(`/questao/${idAnswers[0].options[0].question_id}`)
    setQuestaoText(buscaPergunta.question_text)
    // console.log('resposta user: ', idAnswers[0].options[0], 'Questão', buscaPergunta);
    
  }

  useEffect(() => {
    const getAnswers = async () => {
      const response = await apiGet("/answers");
      setAnswers(response);
    };
    getAnswers();
  }, []);

  async function BuscaResultado(){
    const result = await apiGet('/answers/ErrosAcertos');
    setResultado(result[0])
  }

  useEffect(() => {
    getAnswersNumber(questionId,1);
    BuscaResultado(); 
  }, []);

  function CalcularPercentual(acertos){
    const calc = (acertos / 30) * 100;
    return calc.toFixed(0);
  }

  async function FinalyInitial(){
    const result ={
      user: 1, 
      prova_nr: 0, 
      tempo: 0, 
      acertos: 0
    }
    let provaMinutos =0;
    try {

      if(TestMinutes < 60){
        provaMinutos = 0
      }else{
        provaMinutos = TestMinutes / 60;
      }
      console.log(Math.floor(provaMinutos))
      const {nr} = await apiGet("/resultado/provanr")
      result.prova_nr = nr + 1;
      result.tempo = Math.floor(provaMinutos);
      result.acertos = resultado.total;
      await apiPost("/resultado", result);
      await apiPut("/truncate/", { tableName: "answers" }); 
      navigation.navigate("InicialLogado")
    } catch (error) {
      console.error(error)
    }
  }

  async function FinalyNewQuestion(){
    const result ={
      user: 1, 
      prova_nr: 0, 
      tempo: 0, 
      acertos: 0
    }
    try {
      const {nr} = await apiGet("/resultado/provanr")
      result.prova_nr = nr + 1;
      result.tempo = 21;
      result.acertos = resultado.total;
      await apiPost("/resultado", result);
      await apiPut("/truncate/", { tableName: "answers" }); 
      navigation.navigate("pagePergunta")
      navigation.replace('pagePergunta');
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image source={logo} style={styles.logo} />
        <View style={CalcularPercentual(resultado.total) > 69 ? styles.txtPerc : styles.txtPercRed}>
          <Text style={styles.textoPerc}>Você obteve</Text>
          <Text style={styles.numPerc}>{CalcularPercentual(resultado.total)}%</Text>
        </View>
      </View>
      <View style={styles.containerDs}>
        <Text style={styles.dsPerc}>Das 30 questões você acertou {resultado.total}</Text>
      </View>

      <View style={styles.quadroPerguntas}>
        <View style={styles.linhaQuadro}>
          {answers &&
            answers.map((item) => {
              return (
                <ButtonResultado
                key={item.id}
                  onPress={() => getAnswersNumber(item.question_id, item.pagina)}
                  nr={item.pagina}
                  certo={item.options.length}
                />
              );
            })}
        </View>
      </View>
      <ScrollView style={styles.scrollView}>      
      <View style={styles.containerConteudo}>
         <View style={styles.pergunta}>
                    <Text style={styles.nrPergunta}>{pagina}</Text>
                    <Text style={styles.txtPergunta}>
                      {questaoText}
                  </Text>
                  </View>
                  <View style={styles.img}>
                    <Image source={{ uri: imgPergunta }} />
                  </View>

                  <TouchableOpacity>
                    <View style={styles.opPergunta}>
                      <Image source={like}/>
                      <Text style={styles.txtOpPerguntaCorreta}>{optionCorreta}</Text>
                    </View>
                  </TouchableOpacity>

                {optionErrada != 'A' ?
                  <TouchableOpacity>
                    <View style={styles.opPergunta}>
                      <Image source={dislike}/>
                      <Text style={styles.txtOpPergunta}>{optionErrada}</Text>
                    </View>
                  </TouchableOpacity> : ''
                }
      </View>
      </ScrollView>
      <View style={styles.btnBottom}>
        <ButtonBottom
          colorBackTrans
          textBlue
          texto="Menu Principal"
          onPress={FinalyInitial}
        />
        <ButtonBottom
          colorBackBlue
          textWhite
          texto="Nova Prova"
          onPress={FinalyNewQuestion}
        />
      </View>
    </View>
  );
}
