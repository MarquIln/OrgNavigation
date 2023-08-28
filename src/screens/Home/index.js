/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Farmer from './components/Farmer/Farmer';
import Header from './componentes/Header';
import useText from '../../hooks/useText';
import useFarmers from '../../hooks/useFarmers';

export default function Farmers({ bestFarmers }) {
  const list = useFarmers( bestFarmers );
  const { farmersTitle } = useText();

  const HeaderList = () => {
    return <>
      <Header bestFarmers = { bestFarmers } />
      <Text style = { estilos.titulo } >{ farmersTitle }</Text>
    </>;
  };

  return <FlatList
    data={list}
    renderItem = {
      ({ item }) => <Farmer {...item} onPress={() => {}} />
    }
    keyExtractor = {({ name }) => name}
    ListHeaderComponent = { HeaderList }
    style = { estilos.list } />;
}

const estilos = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
