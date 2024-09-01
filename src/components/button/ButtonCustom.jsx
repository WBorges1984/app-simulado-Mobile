import { Text, TouchableOpacity } from "react-native";
import styles from "./buttonCustom.style";


function Button({texto, textoErro, onPress}) {
    return <TouchableOpacity style={styles.btn} onPress={onPress}>
        
        {
            textoErro ? 
                <><Text style={styles.texto}>{texto}</Text>
                <Text style={styles.textoErro}>{textoErro}</Text></>:        
                <Text style={styles.texto}>{texto}</Text>
        
        }
        

    </TouchableOpacity>
}

export default Button;

