import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './page.style.js';
import logo from "../../assets/cart.png";
import { useContext, useEffect, useState } from 'react';
import ButtonBottom from '../../components/ButtonBottom/ButtonBottom.jsx';
import gif from '../../assets/QUESTAO_1161.gif';
import img from '../../assets/cart.png';
// import { pergunta1 } from '../../constants/data.js';
import { AuthContext } from '../../context/AuthProvider.js';
import { apiGet } from '../../services/api.js';
import FastImage from 'react-native-fast-image';

export default function Page({navigation}) {
  const [questao, setQuestao] = useState('');
  const [questaoGet, setQuestaoGet] = useState([]);
  const {userData, Login} = useContext(AuthContext);
  const {image_url} = questao;
  const [proxima, setProxima] = useState(0);
  const [nrQuestao, setNrQuestao] = useState(1);
  const [questaoFeita, setQuestaoFeita] = useState([]); // Lista de questões feitas

  useEffect(() => {
    if (userData === '') {
      navigation.navigate("Login");
    }
  }, [userData]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    const getQuestion = async () => {
      const qtdQuestions = await apiGet("/questao");
      let numQuestion;

      // Gera números aleatórios até encontrar um que ainda não foi usado
      do {
        numQuestion = getRandomInt(1, qtdQuestions.length);
      } while (questaoFeita.includes(numQuestion));

      // Atualiza o array com a nova questão
      setQuestaoFeita([...questaoFeita, numQuestion]);
      console.log('Questões já feitas:', questaoFeita);

      // Busca a questão da API
      const question = await apiGet(`/questao/${numQuestion}`);
      setQuestaoGet(question);
      setQuestao(question);
    };

    getQuestion();
  }, [proxima]); // Chama a função sempre que `proxima` for alterado

  function proximaPergunga() {
    // Atualiza o número da questão e o contador `proxima` quando o botão "Próximo" é clicado
    setNrQuestao(prevNrQuestao => prevNrQuestao + 1);
    setProxima(prevProxima => prevProxima + 1);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.vCronometro}>
        <Text style={styles.cronometro}>00:05:59</Text>
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.pergunta}>
          <Text style={styles.nrPergunta}>{nrQuestao}</Text>
          <Text style={styles.txtPergunta}>{questao.question_text}</Text>
        </View>
        {questao.image_url && (
          <View style={styles.img}>
            <Image
              style={{ width: 150, height: 80 }}
              source={{ uri: questao.image_url }}
              resizeMode="contain"
            />
          </View>
        )}
        <TouchableOpacity>
          <View style={styles.opPergunta}>
            <Text style={styles.letterOp}>A</Text>
            <Text style={styles.txtOpPergunta}>serviço</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.opPergunta}>
            <Text style={styles.letterOp}>B</Text>
            <Text style={styles.txtOpPergunta}>complementação</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.opPergunta}>
            <Text style={styles.letterOp}>C</Text>
            <Text style={styles.txtOpPergunta}>indicação</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.opPergunta}>
            <Text style={styles.letterOp}>D</Text>
            <Text style={styles.txtOpPergunta}>regulamentação</Text>
          </View>
        </TouchableOpacity>
      </View>
      

      <View style={styles.btnBottom}>
        <View style={styles.btn}>
          <ButtonBottom colorBackTrans textBlue fullW texto="Anterior" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={proximaPergunga} colorBackTrans textBlue fullW texto="Próximo" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom colorBackTrans textBlue fullW texto="Corrigir" onPress={() => navigation.navigate("resultadoFinal")} />
        </View>
        <View style={styles.btn}>
          <ButtonBottom colorBackBlue textWhite fullW texto="Nova Prova" />
        </View>
      </View>
    </View>
  );
}
