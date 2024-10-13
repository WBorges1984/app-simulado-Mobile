import { View, Text, Image } from 'react-native';
import styles from './question.style.js'
import q1161 from '../../assets/QUESTAO_1161.gif'

export default function Question({ nrQuestao, questionText, imageUrl }) {
  return (
    <View style={styles.container}>
      <View style={styles.pergunta}>
        <Text style={styles.nrPergunta}>{nrQuestao}</Text>
        <Text style={styles.txtPergunta}>{questionText}</Text>
      </View>
      {imageUrl && (
        <View style={styles.img}>
          {imageUrl == "QUESTAO_1161" ?
            <Image
            style={{ width: 350, height: 80 }}
            source={q1161}
            resizeMode="contain"
          />:
          <Image
            style={{ width: 350, height: 80 }}
            source={{ uri: imageUrl }}
            resizeMode="contain"
          />
          }
        </View>
      )}
    </View>
  );
}
