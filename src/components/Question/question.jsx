import { View, Text, Image } from 'react-native';
import styles from './question.style.js';
import QuestionImage from '../renderImgQuestion/renderImgQuestion.js';

export default function Question({ nrQuestao, questionText, imageUrl }) {
  return (
    <View style={styles.container}>
      <View style={styles.pergunta}>
        <Text style={styles.nrPergunta}>{nrQuestao}</Text>
        <Text style={styles.txtPergunta}>{questionText}</Text>
      </View>
      <View style={styles.imgQ}>
        
        {/* <Image source={{uri:"https://blog.sinalcenter.com.br/wp-content/uploads/2023/11/Placa-entroncamento-obliquo-a-esquerda-A-10a-300x300.jpg"}} style={{height: 80, width:80}}/> */}
       
        <QuestionImage imageUrl={imageUrl} />
      </View>
    </View>
  );
}