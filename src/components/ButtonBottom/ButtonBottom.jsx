import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./ButtonBottom.style.js";

export default function ButtonBottom({ texto, textWhite, textGreen, colorBackBlue, colorBackTrans, colorBackGray, onPress }) {
  
    const backgroundColorStyle = colorBackBlue 
    ? styles.colorBackBlue
    : colorBackTrans 
    ? styles.colorBackTrans 
    : colorBackGray 
    ? styles.colorBackGray 
    : null;
    return (  

        <TouchableOpacity style={backgroundColorStyle} onPress={onPress}>
        <Text style={textGreen ? styles.textGreen : styles.textWhite}>{texto}</Text>
      </TouchableOpacity>
      
      
  );
}
