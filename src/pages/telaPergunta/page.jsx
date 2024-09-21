import { View, Image } from 'react-native';
import styles from './page.style.js';
import logo from "../../assets/cart.png";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider.js';
import { apiGet } from '../../services/api.js';
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
  const [provaFlash, setProvaFlash] = useState([]);

  useEffect(() => {
    if (userData === '') {
      navigation.navigate("Login");
    }
  }, [userData]);

  useEffect(() => {
    const getQuestion = async () => {
      const qtdQuestions = await apiGet("/questao");
      let numQuestion;

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

      do {
        numQuestion = getRandomInt(1, qtdQuestions.length);
      } while (questaoFeita.includes(numQuestion));

      setQuestaoFeita([...questaoFeita, numQuestion]);
      const question = await apiGet(`/questao/${numQuestion}`);
      setQuestaoGet(question);
      setQuestao(question);

      const shuffledOptions = question.opcoes.sort(() => Math.random() - 0.5);
      setOpcoes(shuffledOptions);
    };

    getQuestion();
  }, [proxima]);

  function proximaPergunga() {
    setNrQuestao(prevNrQuestao => prevNrQuestao + 1);
    setProxima(prevProxima => prevProxima + 1);
  }

  function handleOptionSelect(resposta, pergunta) {
    setSelectedOption(resposta);
    setProvaFlash([{ resposta, pergunta }]);
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
