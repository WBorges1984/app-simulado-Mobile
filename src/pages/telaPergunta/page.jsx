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
import { COLORS } from '../../constants/theme.js';

export default function Page({navigation}) {
  const [questao, setQuestao] = useState('');
  const [questaoGet, setQuestaoGet] = useState([]);
  const {userData, Login} = useContext(AuthContext);
  const {image_url} = questao;
  const [proxima, setProxima] = useState(0);
  const [nrQuestao, setNrQuestao] = useState(1);
  const [questaoFeita, setQuestaoFeita] = useState([]); // Lista de questões feitas
  const [letters, setLetters] = useState(['A','B','C','D']); 
  const [opcoes, setOpcoes] = useState(); 
  const [selectedOption, setSelectedOption] = useState(null);
  const [prova, setProva] = useState([]);
  const [provaFlash, setProvaFlash] = useState([]);



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
      //console.log('Questões já feitas:', questaoFeita);

      // Busca a questão da API
      const question = await apiGet(`/questao/${numQuestion}`);
      setQuestaoGet(question);
      setQuestao(question);

      const shuffledOptions = question.opcoes.sort(() => Math.random() - 0.5);
      setOpcoes(shuffledOptions);
      

    };

    getQuestion();
  }, [proxima]); // Chama a função sempre que `proxima` for alterado

  function proximaPergunga() {
    // Atualiza o número da questão e o contador `proxima` quando o botão "Próximo" é clicado
    setNrQuestao(prevNrQuestao => prevNrQuestao + 1);
    setProxima(prevProxima => prevProxima + 1);

    console.log("provaflash:> ", provaFlash)
    adicionaPergunta();
  }

  function adicionaPergunta(){
    let pergunta;
    let resposta;
    
    

    setProva(prevProva => [
      ...prevProva, // Spread dos itens já existentes no array
      { escolha: pergunta, prova: resposta } // Novo objeto a ser adicionado
    ]);

    console.log(prova)

  }

  function handleOptionSelect(resposta, pergunta) {
    // Define a opção selecionada e previne a seleção de outra até a próxima questão
    setSelectedOption('');
    setSelectedOption(resposta)

    //adiciona resposta na memoria
    setProvaFlash([{resposta, pergunta}])
    

    console.log(provaFlash)
  }

  function corrigir(){
    console.log(prova)
    navigation.navigate("resultadoFinal")
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
        {/* ------ OPÇÕES DA PERGUNTA ------*/}

        {opcoes && opcoes.map((item, i)=>{
          const isSelected = selectedOption === item.option_id;
          return(
            <TouchableOpacity key={item.option_id} 
              onPress={(e) => handleOptionSelect(item.option_id, item.question_id, item.option_letter)}
             
            >
              <View style={styles.opPergunta}>
                <Text style={selectedOption === item.option_id ? styles.letterOpSelect : styles.letterOp}>{letters[i]}</Text>
                  <Text style={styles.txtOpPergunta}>{item.option_text}{item.option_letter}</Text>
              </View>
            </TouchableOpacity>)
        })}
      </View>
      

      <View style={styles.btnBottom}>
        <View style={styles.btn}>
          <ButtonBottom colorBackTrans textBlue fullW texto="Anterior" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={proximaPergunga} colorBackTrans textBlue fullW texto="Próximo" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={corrigir}  colorBackTrans textBlue fullW texto="Corrigir"  />
        </View>
        <View style={styles.btn}>
          <ButtonBottom colorBackBlue textWhite fullW texto="Nova Prova" />
        </View>
      </View>
    </View>
  );
}
