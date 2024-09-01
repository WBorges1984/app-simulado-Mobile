import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './ButtonBottom.style.js' 

export default function ButtonBottom({texto, textWhite, textGreen, colorBack, onPress}) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={textGreen ? (styles.textGreen): (styles.textWhite)}>{texto}</Text>
    </TouchableOpacity>
  )
}