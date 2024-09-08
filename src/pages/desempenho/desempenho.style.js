import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        alignItems: "center"
    },
    title:{
        fontSize: FONT_SIZE[32],
        fontWeight: "bold",
        color: COLORS.blue,
        marginBottom:20
    },
    containerTextos:{
        marginBottom: 10
    },
    texto:{
        fontSize: FONT_SIZE[20],
        color: COLORS.grayDark
    },
    texto1:{
        flexDirection:"row",
        marginBottom:20
    },
    varAzul:{
        fontSize: FONT_SIZE[20],
        backgroundColor:COLORS.blueLight,
        color: COLORS.white,
        paddingBottom:2,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    varRed:{
        fontSize: FONT_SIZE[20],
        backgroundColor:COLORS.red,
        color: COLORS.white,
        paddingBottom:2,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    varGreen:{
        fontSize: FONT_SIZE[20],
        backgroundColor:COLORS.green,
        color: COLORS.white,
        paddingBottom:2,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    btnBottom:{
        width: "100%",
        position:"absolute",
        bottom: 0,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    containerConteudo:{
        marginTop: 40,
        padding: 20
    },
    mediaProb:{
        marginTop: 50
    }
}); 

export default styles;