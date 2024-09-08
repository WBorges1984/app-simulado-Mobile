import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./ButtonBottom.style.js";

export default function ButtonBottom({ fullW, texto, textWhite, textBlue, textGreen, colorBackBlue, colorBackTrans, colorBackGray, onPress }) {
  
    const backgroundColorStyle = colorBackBlue 
    ? styles.colorBackBlue
    : colorBackTrans 
    ? styles.colorBackTrans 
    : colorBackGray 
    ? styles.colorBackGray 
    : null;
    return (  

        <TouchableOpacity style={fullW ? [backgroundColorStyle,styles.btnFullWidth] : backgroundColorStyle} onPress={onPress}>
        <Text style={textGreen ? styles.textGreen : textWhite ? styles.textWhite : textBlue ? styles.textBlue : null}>{texto}</Text>
      </TouchableOpacity>
      
      
  );
}
