import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './resultadoFinal.style.js'
import logo from "../../assets/cart.png";
import { useEffect, useState } from 'react';
import ButtonBottom from '../../components/ButtonBottom/ButtonBottom.jsx';
import gif from '../../assets/QUESTAO_1161.gif'
import img from '../../assets/cart.png'
import { pergunta1 } from '../../constants/data.js';


export default function Page({navigation}) {
    const pergunta={id_pergunta:'',
      dsPergunda:'',
      imgPergunta:''};const {id_pergunta} = pergunta1
    const{dsPergunda} = pergunta1
    const {imgPergunta} = pergunta1


  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image source={logo} style={styles.logo} />
        
        <View style={styles.perc}>
            <View style={styles.txtPerc}>
                <Text style={styles.textoPerc}>Você obteve</Text>
                <Text style={styles.numPerc}>90%</Text>
            </View>
        </View>
        
      </View>
            <View style={styles.containerDs}>
                <Text style={styles.dsPerc}>Das 30 questões você acertou 27</Text>
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
            <ButtonBottom colorBackTrans textBlue fullW texto="Menu Principal" onPress={()=>navigation.navigate("InicialLogado")}/>
            <ButtonBottom colorBackBlue textWhite fullW texto="Nova Prova"/>
        </View>
        
      
    </View>
  )
}