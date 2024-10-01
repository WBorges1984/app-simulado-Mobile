import { View, Text, TouchableOpacity } from 'react-native'
import styles from './buttonResultado.style.js'
export default function ButtonResultado({nr, red, green, certo}) {
  return (
    <TouchableOpacity style={certo > 1 ? styles.containerRed : certo == 1 ? styles.containerGreen : null}>
        <Text style={styles.textoBtn}>{nr}</Text>
    </TouchableOpacity>
  )
}