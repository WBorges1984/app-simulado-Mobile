import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        paddingTop: 40,
        padding: 20,
    },
    texto:{
        fontSize: FONT_SIZE[32],
        color:COLORS.blue
    },
    item:{
        flexDirection:"row",
        width:"100%",
       
    },
    ItemId:{
        backgroundColor: COLORS.blue,
        width: "auto",
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        marginBottom: 20,
        
    },
    textoDT:{
        fontSize:FONT_SIZE[16],
        color: COLORS.white
    },
    textoAcertos:{
        fontSize:FONT_SIZE[16],
        color: COLORS.white,
        textAlignVertical:"bottom"
    },
    textoPorcento:{
        fontSize:FONT_SIZE[48],
        color: COLORS.white,
        fontWeight: "bold",
        textAlignVertical:"bottom",
        marginLeft:10
    },
    dadosItemGreen:{
        width:"100%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:10,
        paddingBottom: 10,
        marginBottom: 20,
        backgroundColor:COLORS.greenLight,
        flexDirection:"row",
        borderRadius: 10,
        gap: 20,
        
    },
    dadosItemRed:{
        width:"100%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:10,
        paddingBottom: 10,
        marginBottom: 20,
        backgroundColor:COLORS.red,
        flexDirection:"row",
        borderRadius: 10,
        gap: 20,
        
    },
    dadosPerc:{
        flexDirection: "row",
        marginRight: 20
    },
    btn:{
        width:"100%",
    },
    flat:{
        marginBottom: 10,
        marginTop: 10
    }
});

export default styles;