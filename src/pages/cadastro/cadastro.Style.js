import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";


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
    }
});

export default styles;