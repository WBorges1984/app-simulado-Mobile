import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './page.style.js'
import logo from "../../assets/cart.png";
import { useEffect, useState } from 'react';
import {dados}  from '../../constants/data.js'
import Button from '../../components/button/ButtonCustom.jsx';
import ButtonBottom from '../../components/ButtonBottom/ButtonBottom.jsx';

export default function Page() {
    const[nrPergunta, setNrPergunta] = useState(1);
    const[txtPergunta, setTxtPergunta] = useState("A altura, a carga, a largura e o peso máximo que devem ser obedecidos pelo condutor do veículo constam na sinalização vertical de:");



  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.vCronometro}>
        <Text style={styles.cronometro}>00:05:59</Text>
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.pergunta}>
            <Text style={styles.nrPergunta}>{nrPergunta}</Text>
            <Text style={styles.txtPergunta}>{txtPergunta}</Text>
        </View>
        <Image source="https://blog.sinalcenter.com.br/wp-content/uploads/2023/11/Placa-de-servico-auxiliar-transporte-sobre-agua-S-12-300x300.jpg" style={styles.logo} />
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
        
            <ButtonBottom colorBackTrans textBlue fullW texto="Corrigir"/>
            <ButtonBottom colorBackBlue textWhite fullW texto="Nova Prova"/>
        </View>
        
      
    </View>
  )
}