import React from 'react';
import { Text } from 'react-native';
import { textStyle } from './style';

export default function Text({ children, style }) {
  let style = textStyle.text;
  
  if(style?.fontWeight === 'bold') {
    style = textStyle.bolText;
  }

  return <Text style={[ style, textStyle ]}>{ children }</Text>
}


