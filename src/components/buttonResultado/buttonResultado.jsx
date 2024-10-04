import { View, Text, TouchableOpacity } from 'react-native'
import styles from './buttonResultado.style.js'
export default function ButtonResultado({onPress, nr, red, green, certo, key}) {
  return (
    <TouchableOpacity onPress={onPress} key={key} style={certo > 1 ? styles.containerRed : certo == 1 ? styles.containerGreen : null}>
        <Text style={styles.textoBtn}>{nr}</Text>
    </TouchableOpacity>
  )
}