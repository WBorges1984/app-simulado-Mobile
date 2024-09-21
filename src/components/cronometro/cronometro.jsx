import { View, Text } from 'react-native';
import styles from './timer.style.js';

export default function Timer() {
  return (
    <View style={styles.vCronometro}>
      <Text style={styles.cronometro}>00:05:59</Text>
    </View>
  );
}
