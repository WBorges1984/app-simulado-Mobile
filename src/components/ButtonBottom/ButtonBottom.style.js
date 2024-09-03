import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

const styles = StyleSheet.create({
    btn: {
        width: 162,
        height:31,
        backgroundColor: COLORS.greenLight,
        borderRadius: 6
        
    },
    texto: {
        fontSize: FONT_SIZE[20],
        color: COLORS.white,
        padding: 14,
        textAlign: "center"
    },
    textWhite:{
        color: COLORS.white,
        fontSize: FONT_SIZE[20],
        textAlign:'center',
        justifyContent:'center'
    },
    textGreen:{
        color: COLORS.green,
        fontSize: FONT_SIZE[20],
        textAlign:'center',
        justifyContent:'center'
    },
    colorBackBlue:{
        width: 162,
        height:31,
        backgroundColor: COLORS.blue,
        borderRadius: 6,
    },
    colorBackTrans:{
        width: 162,
        height:31,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:COLORS.grayLight,
        borderRadius: 6,
    },
    colorBackGray:{
        width: 162,
        height:31,
        backgroundColor: COLORS.grayDark,
        borderRadius: 6,
    },
    btnFullWidth:{
        width:"100%"
    }
  })

export default styles;