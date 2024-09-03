import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../../constants/theme";


const styles = StyleSheet.create({    
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        width: "100%",
        padding: 30
    },
    input:{
        width: "100%",
        margin: 40
    },
    buttonFooter:{
        position:"absolute",
        bottom: 0,
        marginBottom:10
    },
    btn:{
        width: "100%",
        alignItems:"center",
        justifyContent:"center"
    },
    btnDown:{
        flexDirection:"row",
        width:"100%",
        justifyContent: "space-between",
        marginTop:10,
        paddingLeft:10,
        paddingRight:10,  
    },
    emailWrong:{
        color: COLORS.red,
        fontSize: FONT_SIZE[16]
    },
    reeviarCodigo:{
        color:COLORS.green,
        fontSize: FONT_SIZE[16]
    }
});

export default styles;