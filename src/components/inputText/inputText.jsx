import { View, Text, TextInput } from 'react-native'
import styles from './inputText.style';

export default function InputText({label,placeholder,isPassword, onChangeText, value}) {
    return (
      <>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          onChangeText={onChangeText}
          value={value}
        />
      </>
    );
  }