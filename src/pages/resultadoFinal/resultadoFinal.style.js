import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop:60,
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo:{
        width: 150,
        height: 48,
     },
    textoPerc:{
        color: COLORS.white,
        fontWeight:"bold",
        fontSize: FONT_SIZE[16]
    },
    topo:{
       flexDirection: "row", 
    },
    perc:{
        backgroundColor: COLORS.greenLight,
    },
    txtPerc:{
        flexDirection:"row",
        padding:10,
        alignItems:"baseline"
    },
    textoPerc:{
        color:COLORS.white,
        fontSize:FONT_SIZE[16],
        
    },
    numPerc:{
        color:COLORS.white,
        fontSize:FONT_SIZE[48],
        fontWeight:"bold"
    },  
    dsPerc:{
        color:COLORS.white,
        fontSize:FONT_SIZE[16],
        
    },  
    containerDs:{
        padding:10,
        backgroundColor: COLORS.greenLight
    
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
        padding: 10
    },
    opPergunta:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        paddingRight: 8,
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
    txtOpPergunta:{
        fontSize: FONT_SIZE[16],
        backgroundColor: COLORS.grayLight,
        width: "100%",
        height:"auto",
        padding: 10,
        marginTop: 10
    },
    btnBottom:{
        position:"absolute",
        bottom: 0,
        marginBottom:30,
        marginLeft: 13,
        width: "100%",
        alignItems:"center",
        justifyContent:"center",
        gap: 5
    },
    img:{
        position:"static",
        alignItems:"center"
    },
    
});

export default styles;