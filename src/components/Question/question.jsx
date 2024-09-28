import { View, Text, Image } from 'react-native';
import styles from './question.style.js'

export default function Question({ nrQuestao, questionText, imageUrl }) {
  return (
    <View style={styles.container}>
      <View style={styles.pergunta}>
        <Text style={styles.nrPergunta}>{nrQuestao}</Text>
        <Text style={styles.txtPergunta}>{questionText}</Text>
      </View>
      {imageUrl && (
        <View style={styles.img}>
          <Image
            style={{ width: 150, height: 80 }}
            source={{ uri: imageUrl }}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
}
