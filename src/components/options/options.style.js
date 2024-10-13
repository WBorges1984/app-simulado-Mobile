import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        width: "100%",
        paddingLeft: 10,
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
        
    },
    pergunta:{
        flexDirection: "row",
        marginBottom: 10,
        gap: 5
    },
    containerConteudo:{
        paddingRight: 45,
        marginTop: 50
    },
    nrPergunta:{
        width: 35,
        height:35,
        backgroundColor: COLORS.blue,
        color: COLORS.white,
        fontSize: FONT_SIZE[20],
        textAlignVertical:"center",
        textAlign: "center",
        borderRadius:5

    },
    txtPergunta:{
        backgroundColor: COLORS.grayLight,
        fontSize: FONT_SIZE[16],
        height:"auto",
        width:"100%",
        padding: 0
    },
    opPergunta:{
        flexDirection:"row",
        width:"100%",
        gap:10,
        paddingRight: 80,
    },
    letterOp:{
        width: 35,
        height:35,
        backgroundColor: COLORS.blue,
        color: COLORS.white,
        fontSize: FONT_SIZE[20],
        textAlignVertical:"center",
        textAlign: "center",
        borderRadius:5,
        marginTop:10,
    },
    letterOpSelect:{
        width: 35,
        height:35,
        backgroundColor: COLORS.greenLight,
        color: COLORS.white,
        fontSize: FONT_SIZE[20],
        textAlignVertical:"center",
        textAlign: "center",
        borderRadius:5,
        marginTop:10,
    },
    txtOpPergunta:{
        fontSize: FONT_SIZE[16],
        backgroundColor: COLORS.grayLight,
        width: "100%",
        height:"auto",
        marginTop: 10,
        paddingLeft:5,
        textAlign:"left",
    },
    btnBottom:{
        flexDirection:"row",
        position:"absolute",
        bottom: 0,
        marginBottom:30,
        marginLeft: 13,
        width: "100%",
        alignItems:"center",
        justifyContent:"center",
        gap: 2,

    },
    btn:{
        
    },  
    img:{
        position:"static",
        alignItems:"center",
        width: "auto",
        height:80,
    }
});

export default styles;