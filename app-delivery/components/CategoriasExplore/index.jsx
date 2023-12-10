import React, { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Card,
  CardTitle
} from './style';

const STATIC_DATA = [
  {
    id: '1',
    imagem: require('../../imgs/icons/lanche.png'),
    nome: 'Lanches',
    rota: 'Lanches',
  },
  {
    id: '2',
    imagem: require('../../imgs/icons/bebidas.png'),
    nome: 'Bebidas',
    rota: 'rotaPadrao2',
  },
  {
    id: '3',
    imagem: require('../../imgs/icons/roupas.png'),
    nome: 'Roupas',
    rota: 'rotaPadrao2',
  },
  {
    id: '4',
    imagem: require('../../imgs/icons/aparelhos.png'),
    nome: 'Eletrônicos',
    rota: 'rotaPadrao2',
  },
];

export default function CategoriasExplore() {
  const [data, setData] = useState([]);
  const [isUsingStaticData, setIsUsingStaticData] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://api.rapidinhodelivery.com.br/categorias.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching data', error);
        setData(STATIC_DATA);
        setIsUsingStaticData(true);
      });
  }, []);

  const handleCardPress = (rota) => {
    navigation.navigate(rota);
  };

  const renderItem = ({ item }) => (
    <Card onPress={() => handleCardPress(item.rota)}>
      <Image source={item.imagem} style={{ width: 60, height: 60 }} />
      <CardTitle>{item.nome}</CardTitle>
    </Card>
  );

  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
