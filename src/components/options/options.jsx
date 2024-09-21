import { View, Text, TouchableOpacity } from 'react-native';
import styles from './options.style.js';

export default function Options({ options, letters, selectedOption, handleOptionSelect }) {
  return (
    <View>
      {options && options.map((item, i) => {
        const isSelected = selectedOption === item.option_id;
        return (
          <TouchableOpacity
            key={item.option_id}
            onPress={() => handleOptionSelect(item.option_id, item.question_id, item.option_letter)}
          >
            <View style={styles.opPergunta}>
              <Text style={isSelected ? styles.letterOpSelect : styles.letterOp}>
                {letters[i]}
              </Text>
              <Text style={styles.txtOpPergunta}>
                {item.option_text} {item.option_letter}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
