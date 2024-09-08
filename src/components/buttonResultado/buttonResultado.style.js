import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    containerGreen:{
        backgroundColor:COLORS.green,
        width:33,
        height: 33,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center"

    },
    containerRed:{
        backgroundColor:COLORS.red,
        width:33,
        height: 33,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center"

    },
    textoBtn:{
        color: COLORS.white,
        fontSize:FONT_SIZE[20],
        fontWeight: "bold"
    }
})

export default styles;