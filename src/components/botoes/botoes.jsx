import { View } from 'react-native';
import ButtonBottom from '../ButtonBottom/ButtonBottom.jsx';
import styles from  './buttons.style.js'
export default function Buttons({ proximaPergunta, Finaly, disable, FinalyNewQuestion }) {
  return (
    <View>
      <View style={styles.btnPar}>
        {/* <View style={styles.btn}>
          <ButtonBottom colorBackTrans textBlue fullW texto="Anterior" />
        </View> */}
        <View style={styles.btn}>
          <ButtonBottom disable={disable} onPress={proximaPergunta} colorBackTrans textBlue fullW texto="Próximo" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={Finaly} colorBackTrans textBlue fullW texto="Corrigir" />
        </View>
        <View style={styles.btn}>
          <ButtonBottom onPress={FinalyNewQuestion} colorBackBlue textWhite fullW texto="Nova Prova" />
        </View>
      </View>
      </View>
  );
}
