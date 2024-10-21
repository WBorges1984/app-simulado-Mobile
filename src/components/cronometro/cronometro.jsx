import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {AuthContext} from '../../context/AuthProvider.js'

const Timer = ({StartStopClock}) => {
  const [seconds, setSeconds] = useState(0); // Estado para armazenar os segundos
  const {minutesTest} = useContext(AuthContext);

  useEffect(() => {
    if (seconds < 1800) { // 1800 segundos = 30 minutos
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000); // Incrementa a cada 1 segundo
      minutesTest(seconds)
      return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }else{
      StartStopClock(seconds);

    }
  }, [seconds]); // Dependência no estado de seconds

  // Função para formatar o tempo em minutos e segundos
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default Timer;