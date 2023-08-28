import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Text from '../../components/Text';

import Header from '../../componentes/Header';
import useText from '../../hooks/useText';
import Details from './components/Details/Details';
import Item from './componentes/Item';

export default function Hamper({ details, itens, farmer }) {
  const { hamperHeader, itensTitle } = useText();

  return <>
    <FlatList
      data = {itens}
      renderItem = {Item}
      keyExtractor = {({ name }) => name }
      ListHeaderComponent = {() => {
        return <>
          <Header titulo = { hamperHeader } />
          <View style = { estilos.hamper }>
            <Details {...details} produtor = { farmer } />
            <Text style = { estilos.titulo }> { itensTitle }</Text>
          </View>
        </>
      }}
      style={estilos.list}
    />
  </>
}

const estilos = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  hamper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
