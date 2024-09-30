import { View, Image, Alert } from 'react-native';
import styles from './page.style.js';
import logo from "../../assets/cart.png";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider.js';
import { apiGet, apiPost } from '../../services/api.js';
import FastImage from 'react-native-fast-image';
import { COLORS } from '../../constants/theme.js';
import Question from '../../components/Question/question.jsx';
import Timer from '../../components/cronometro/cronometro.jsx';
import Buttons from '../../components/botoes/botoes.jsx';
import Options from '../../components/options/options.jsx';


export default function Page({navigation}) {
  const [questao, setQuestao] = useState('');
  const [questaoGet, setQuestaoGet] = useState([]);
  const { userData } = useContext(AuthContext);
  const { image_url } = questao;
  const [proxima, setProxima] = useState(0);
  const [nrQuestao, setNrQuestao] = useState(1);
  const [questaoFeita, setQuestaoFeita] = useState([]);
  const [letters, setLetters] = useState(['A','B','C','D']); 
  const [opcoes, setOpcoes] = useState(); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [provaFlash, setProvaFlash] = useState([{}]);
  const [provaNr, setProvaNr] = useState('');
  const user = userData.nome;

  //sql verificar resposta correta-> select option_letter from options where question_id= 2 and id = 7
  //sql pega resposta correta-> select * from options where question_id= 2 and option_letter = 'A'

  useEffect(() => {
    if (userData === '') {
      navigation.navigate("Login");
    }
  }, [userData]);

  const getNrProva = async () =>{
    if(provaNr == ''){
      const {nr} = await apiGet('/resultado/provanr');
      if(nr == null || nr == 0){
        provaNr = 1;
      }
      setProvaNr(nr + 1);
      
    }
  }

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

      //loop até achar a questão que não foi escolhida
      do {
        numQuestion = getRandomInt(1, qtdQuestions.length);
      } while (questaoFeita.includes(numQuestion));


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

  //função grava resposta na tabela answers
  const gravarResposta = async (questionID, user, selectedOption, pagina )=>{
    
    try {
      const postData = { idQuestion: questionID, pagina: pagina, selectedOption: selectedOption, userId: user };
      console.log(postData)
      const gravar = await apiPost('/answers/inserir', postData );
    } catch (error) {
      console.log(error);
    }
  }

  function proximaPergunga() {
    
    if(selectedOption == undefined || provaFlash == undefined){
      return Alert.alert("Precisa selecionar uma opção.")
    }else{
      const {pergunta, resposta} = provaFlash;
      gravarResposta(pergunta, 1,resposta, nrQuestao)
      setNrQuestao(prevNrQuestao => prevNrQuestao + 1);
      setProxima(prevProxima => prevProxima + 1);

      console.log(pergunta, resposta)
      setProvaFlash(undefined)
    }
  }

  function handleOptionSelect(resposta, pergunta) {
    setSelectedOption(resposta);
    setProvaFlash({ resposta, pergunta });
    console.log(resposta, pergunta)
    console.log(provaFlash)
  }

  function corrigir() {
    navigation.navigate("resultadoFinal");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Timer />
      <View style={styles.containerConteudo}>
        <Question nrQuestao={nrQuestao} questionText={questao.question_text} imageUrl={image_url} />
        <Options options={opcoes} letters={letters} selectedOption={selectedOption} handleOptionSelect={handleOptionSelect} />
      </View>
      <Buttons proximaPergunga={proximaPergunga} corrigir={corrigir} />
    </View>
  );
}
