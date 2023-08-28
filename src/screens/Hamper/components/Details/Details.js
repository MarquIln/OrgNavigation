import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

import useTexts from '../../../hooks/useText';
import Text from '../../../componentes/Text';
import { detailsStyle } from './style';

export default function Details({ name, farmer, description, price }) {
  const { buyButton } = useTexts();

  return <>
    <Text style = { detailsStyle.name }>{ name }</Text>
    <View style = { detailsStyle.fazenda }>
      <Image source={ farmer.image } style = { detailsStyle.farmImage } />
      <Text style = { detailsStyle.nameFazenda }>{ farmer.name }</Text>
    </View>
    <Text style ={ detailsStyle.description }>{ description }</Text>
    <Text style ={ detailsStyle.price }>{ price }</Text>

    <TouchableOpacity 
      style = { detailsStyle.button } 
      onPress={() => {}}>
      <Text style = { detailsStyle.textButton }>{ buyButton }</Text>
    </TouchableOpacity>
  </>
}

