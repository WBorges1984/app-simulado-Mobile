import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
    container:{
        paddingRight:80
    },
    pergunta:{
        flexDirection: "row",
        marginBottom: 10,
        gap: 5,

    },
    containerConteudo:{
        paddingRight: 45,
        marginTop: 50
    },
    nrPergunta:{
        width: 35,
        height:35,
        backgroundColor: COLORS.blueLight,
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
        padding: 10,
        paddingRight: 15
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
        padding: 10,
        marginTop: 10
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
    },
    imgQ:{
        display:"flex",
        marginLeft: 50,
        justifyContent:"center"
    }
});

export default styles;