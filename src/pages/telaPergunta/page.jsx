import { View, Image, Alert, ScrollView } from "react-native";
import styles from "./page.style.js";
import logo from "../../assets/cart.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider.js";
import { apiGet, apiPost } from "../../services/api.js";
import FastImage from "react-native-fast-image";
import { COLORS } from "../../constants/theme.js";
import Question from "../../components/Question/question.jsx";
import Timer from "../../components/cronometro/cronometro.jsx";
import Buttons from "../../components/botoes/botoes.jsx";
import Options from "../../components/options/options.jsx";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page({ navigation }) {
  const [questao, setQuestao] = useState("");
  const [questaoGet, setQuestaoGet] = useState([]);
  const { userData } = useContext(AuthContext);
  const { image_url } = questao;
  const [proxima, setProxima] = useState(0);
  const [nrQuestao, setNrQuestao] = useState(1);
  const [questaoFeita, setQuestaoFeita] = useState([]);
  const [letters, setLetters] = useState(["A", "B", "C", "D"]);
  const [opcoes, setOpcoes] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [provaFlash, setProvaFlash] = useState([{}]);
  const [provaNr, setProvaNr] = useState("");
  const [disable, setDisable] = useState(false);

  const user = userData.nome;

  //sql verificar resposta correta-> select option_letter from options where question_id= 2 and id = 7
  //sql pega resposta correta-> select * from options where question_id= 2 and option_letter = 'A'

  useEffect(() => {
    if (userData === "") {
      navigation.navigate("Login");
    }
  }, [userData]);

  const getNrProva = async () => {
    if (provaNr == "") {
      const { nr } = await apiGet("/resultado/provanr");
      //console.log(nr)
      if (nr == null || nr == 0) {
        provaNr = 1;
      }
      setProvaNr(nr + 1);
    }
  };

  useEffect(() => {
    //verifica nr da prova e adiciona em provaNr
    getNrProva();
    const getQuestion = async () => {
      const qtdQuestions = await apiGet("/questao");
      let numQuestion;

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

       // Loop até achar a questão que não foi escolhida e que existe
       let perguntaExistente = false;

       do {
           numQuestion = getRandomInt(1, qtdQuestions.length);
          
           // Verifica se a pergunta existe na tabela
           perguntaExistente = await verificarPerguntaExistente(numQuestion);
       } while (questaoFeita.includes(numQuestion) || !perguntaExistente);

      //acrescenta a nova questão
      setQuestaoFeita([...questaoFeita, numQuestion]);

      //busca a questão esclohida
      const question = await apiGet(`/questao/${numQuestion}`);
      setQuestaoGet(question);
      setQuestao(question);

      //sorteia a ordem das respostas
      const shuffledOptions = question.opcoes.sort(() => Math.random() - 0.5);
      setOpcoes(shuffledOptions);
    };

    getQuestion();
  
  }, [proxima]);

  // Função para verificar se a pergunta existe
  async function verificarPerguntaExistente(id) {
    try {
        const resposta = await apiGet(`/questao/${id}`);
        const res = false;
        if(resposta.erro){
          return false
        }else{
          return true;
        }
        
      ; // Verifica se a resposta existe
    } catch (error) {
        console.error('Erro ao verificar a pergunta:', error);
        return false;
    }
    
  }

  //função grava resposta na tabela answers
  const gravarResposta = async (questionID, user, selectedOption, pagina) => {
    try {
      const postData = { idQuestion: questionID, pagina: pagina, selectedOption: selectedOption, userId: user };

      const gravar = await apiPost("/answers/inserir", postData);
    } catch (error) {
      console.log(error);
    }
  };

  function proximaPergunta() {
    if (selectedOption == undefined || provaFlash == undefined) {
      //valida se selecionou alguma pergunta
      return Alert.alert("Precisa selecionar uma opção.");
    } else if(nrQuestao == 30){
      //valida se já chegou na pergunta final que é sempre 30
      setDisable(true)
      return Alert.alert("Essa é a ultima pergunta");
    }else{
      const { pergunta, resposta } = provaFlash;
      gravarResposta(pergunta, 1, resposta, nrQuestao);
      setNrQuestao((prevNrQuestao) => prevNrQuestao + 1);
      setProxima((prevProxima) => prevProxima + 1);
      setProvaFlash(undefined);
    }
  }

  function handleOptionSelect(resposta, pergunta) {
    setSelectedOption(resposta);
    setProvaFlash({ resposta, pergunta });
  }

  async function getFirstAnswers() {
    const idFirst = await apiGet("/answers/first");
    return idFirst.question_id;
}

async function corrigir() {

  if (selectedOption == undefined || provaFlash == undefined) {
   return Alert.alert("Você deve selecionar uma opção")
  } 

  if(nrQuestao != 30){
    Alert.alert(
      "Concluir Prova",
      "Você deseja concluir a prova sem responder todas as perguntas?",
      [
        {
          text: "Não",
          onPress: () => console.log("Prova continua"), // Não faz nada, apenas fecha o alerta
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            const idFirst = await getFirstAnswers(); // Aguarda a resposta da função assíncrona
            
            // Certifique-se de que 'idFirst' seja um número antes de passar para a navegação
            navigation.navigate("resultadoFinal", {
              params: idFirst, // Passe o question_id diretamente
            });
          },
        },
      ],
      { cancelable: false }
    );

  }
    const idFirst = await getFirstAnswers(); // Aguarda a resposta da função assíncrona
    
    // Certifique-se de que 'idFirst' seja um número antes de passar para a navegação
    navigation.navigate("resultadoFinal", {
        params: idFirst, // Passe o question_id diretamente
    });
  
  
}

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={logo} style={styles.logo} />
        <Timer />
        <View style={styles.containerConteudo}>
          <ScrollView style={styles.scrollView}>
            <Question nrQuestao={nrQuestao} questionText={questao.question_text} imageUrl={image_url} />
            <Options options={opcoes} letters={letters} selectedOption={selectedOption} handleOptionSelect={handleOptionSelect} />
          </ScrollView>
        </View>
      </ScrollView>
      <Buttons disable={disable} proximaPergunta={proximaPergunta} corrigir={corrigir} />
    </View>
  );
}
