import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop:30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    cronometro:{
        color: COLORS.green,
        fontWeight:"bold",
        fontSize: FONT_SIZE[32]
    },
    vCronometro:{
        alignItems:"flex-end",
        position: "absolute",
        right: 0,
        top: 105,
        paddingRight: 10,
        
    }
});

export default styles;