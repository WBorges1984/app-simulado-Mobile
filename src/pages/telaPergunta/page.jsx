import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './page.style.js'
import logo from "../../assets/cart.png";
import { useContext, useEffect, useState } from 'react';
import ButtonBottom from '../../components/ButtonBottom/ButtonBottom.jsx';
import gif from '../../assets/QUESTAO_1161.gif'
import img from '../../assets/cart.png'
import { pergunta1 } from '../../constants/data.js';
import { AuthContext } from '../../context/AuthProvider.js';


export default function Page({navigation}) {

  const {userData, Login} = useContext(AuthContext);

  useEffect(()=>{
    if(userData == ''){
      navigation.navigate("Login");
    }
  },[userData]);

  useEffect(()=>{
    
  },[userData]);
  
    const pergunta={id_pergunta:'',
      dsPergunda:'',
      imgPergunta:''};
    const {id_pergunta} = pergunta1
    const{dsPergunda} = pergunta1
    const {imgPergunta} = pergunta1

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.vCronometro}>
        <Text style={styles.cronometro}>00:05:59</Text>
      </View>

      <View style={styles.containerConteudo}>
        
        <View style={styles.pergunta}>
            <Text style={styles.nrPergunta}>{id_pergunta}</Text>
            <Text style={styles.txtPergunta}>{dsPergunda}</Text>
        </View>
        <View  style={styles.img}>
          <Image source={{uri: imgPergunta}}
        />
        </View>
        <TouchableOpacity>
            <View style={styles.opPergunta}>
                <Text style={styles.letterOp}>A</Text>
                <Text style={styles.txtOpPergunta}>serviço</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.opPergunta}>
                <Text style={styles.letterOp}>B</Text>
                <Text style={styles.txtOpPergunta}>complementação</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.opPergunta}>
                <Text style={styles.letterOp}>C</Text>
                <Text style={styles.txtOpPergunta}>indicação</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.opPergunta}>
                <Text style={styles.letterOp}>D</Text>
                <Text style={styles.txtOpPergunta}>regulamentação</Text>
            </View>
        </TouchableOpacity>
      </View>
      
        <View style={styles.btnBottom}>
            <ButtonBottom colorBackTrans textBlue fullW texto="Anterior"/>
            <ButtonBottom colorBackTrans textBlue fullW texto="Próximo"/>
        
            <ButtonBottom colorBackTrans textBlue fullW texto="Corrigir" onPress={()=>navigation.navigate("resultadoFinal")}/>
            <ButtonBottom colorBackBlue textWhite fullW texto="Nova Prova"/>
        </View>
        
      
    </View>
  )
}