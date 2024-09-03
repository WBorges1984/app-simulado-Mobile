import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        paddingTop: 40
    },
    texto:{
        fontSize: FONT_SIZE[32],
        color:COLORS.blue
    },
    item:{
        backgroundColor:COLORS.grayLight
    }
});

export default styles;