import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
    btn: {
        width: 162,
        height:59,
        backgroundColor: COLORS.greenLight,
        borderRadius: 6
        
    },
    texto: {
        fontSize: FONT_SIZE[24],
        color: COLORS.white,
        padding: 14,
        textAlign: "center"
    },
    textWhite:{
        color: COLORS.white
    },
    textGreen:{
        color: COLORS.green
    }
  })

export default styles;