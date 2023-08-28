/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../assets/logo.png';
import useText from '../../../../hooks/useText';
import { headerStyles } from './style';

export default function Header({ bestFarmers }) {
  const { welcome, caption, captionBestFarmers } = useText();

  return <>
    <View style = { headerStyles.topo }>
      <Image source = { logo } style = { headerStyles.imagem } />
      <Text style = { headerStyles.welcome }> { bestFarmers ? '' : welcome }</Text>
      <Text style = { headerStyles.legenda }>{ bestFarmers ? captionBestFarmers : caption }</Text>
    </View>
  </>;
}