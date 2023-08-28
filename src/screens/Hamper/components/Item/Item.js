import React from 'react';
import { View, Image } from 'react-native';

import Text from '../../../components/Text';

export default function Item({ item: { nome, imagem } }) {
  return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Text style={estilos.nome}>{ nome }</Text>
  </View>
}
