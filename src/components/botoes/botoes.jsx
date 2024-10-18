import { View } from 'react-native';
import ButtonBottom from '../ButtonBottom/ButtonBottom.jsx';
import styles from  './buttons.style.js'
export default function Buttons({ proximaPergunta, corrigir, disable, FinalyNewQuestion }) {
  return (
    <View style={styles.btnBottom}>
      <View style={styles.btnPar}>
        {/* <View style={styles.btn}>
          <ButtonBottom colorBackTrans textBlue fullW texto="Anterior" />
        </View> */}
        <View style={styles.btn}>
          <ButtonBottom disable={disable} onPress={proximaPergunta} colorBackTrans textBlue fullW texto="Próximo" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={corrigir} colorBackTrans textBlue fullW texto="Corrigir" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={FinalyNewQuestion} colorBackBlue textWhite fullW texto="Nova Prova" />
        </View>
      </View>
      </View>
  );
}
