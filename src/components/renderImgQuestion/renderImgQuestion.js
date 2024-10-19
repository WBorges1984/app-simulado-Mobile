import React from 'react';
// import { Image } from 'expo-image';
import {View,Image } from 'react-native';
import imgQuestion from '../../assets/imgQuestion';
import styles from './renderImgQuestion.styles';
import FastImage from 'react-native-fast-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function QuestionImage({ imageUrl }) {
  if (!imageUrl) return null;

  return (

    <View style={styles.img}>
      <Image
        style={styles.imgItem}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
      {/* {imageUrl === "QUESTAO_1161" ? (
        <Image
          style={styles.imgItem}
          source={imgQuestion.QUESTAO_1161}
          resizeMode="contain"
        />
      ) : imageUrl === "QUESTAO_994" ? (
        <Image
          style={styles.imgItem}
          source={imgQuestion.QUESTAO_994}
          resizeMode="contain"
        />
      ) : (
        <Image
        style={styles.imgItem}
        source={imageUrl}
        placeholder={''}
        contentFit="cover"
        transition={1000}
      />
      )} */}
      {console.log(imageUrl)}
    </View>
  );
}