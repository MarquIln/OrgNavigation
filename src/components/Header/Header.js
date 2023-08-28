import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Texto from './Texto';

import Gradient from '../../assets/gradient.svg'
import header from '../assets/header.png';
import backSVG from '../assets/back.svg';
import { headerStyle } from './style';

const width = Dimensions.get('screen').width;
const defaultHeight = 270;

export default function Topo({ title, image = header, height = defaultHeight }) {
  return <>
    <Image source = { image } style = { headerStyle.header } />
    <Gradient width = { height } height = { 130 / 360 * height } style = { headerStyle.gradient }/>
    <Texto style = { headerStyle.title }>{ title }</Texto>
    <TouchableOpacity 
      onPress = {() => {}}
      style = { headerStyle.backButton }>
      <backSVG color = 'white' style = { headerStyle.goBack } />
    </TouchableOpacity>
  </>
}

