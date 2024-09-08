import { View, Text, TouchableOpacity } from 'react-native'
import styles from './buttonResultado.style.js'
export default function ButtonResultado({nr, red, green}) {
  return (
    <TouchableOpacity style={red ? styles.containerRed : green ? styles.containerGreen : null}>
        <Text style={styles.textoBtn}>{nr}</Text>
    </TouchableOpacity>
  )
}