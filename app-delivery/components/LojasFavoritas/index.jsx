import React, { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import {
  Container,
  Card,
  CardTitle,
  CardHeader,
  ButtonHeart,
  CardBody,
  CardFooter,
  TextStatus,
  ButtonAvante
} from './style';

export default function LojasFavoritas() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://api.rapidinhodelivery.com.br/lista-lanchonetes.php')
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          const updatedData = response.data.map(item => ({ ...item, isFavorited: false })); 
          setData(updatedData);
        }
      })
      .catch(error => {
        console.error('There was an error fetching data', error);
        // Handle any error-specific logic here.
      });
  }, []);

  const handleCardPress = (rota) => {
    navigation.navigate(rota);
  };

  const toggleFavorite = (itemId) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === itemId
          ? { ...item, isFavorited: !item.isFavorited }
          : item
      )
    );
  };

  const renderItem = ({ item }) => {
    const imageSource = (item.imagem && typeof item.imagem === 'string') 
      ? { uri: 'https://appvendas.rapidinhodelivery.com.br/uploads/' + item.imagem } 
      : require('../../imgs/icons/galeria-de-imagens.png');

    return (
      <Card onPress={() => handleCardPress(item.rota)}>
        <CardHeader>
          <ButtonHeart onPress={() => toggleFavorite(item.id)}>
            <MaterialIcons
              name="favorite"
              size={24}
              color={item.isFavorited ? 'crimson' : 'black'}
            />
          </ButtonHeart>
        </CardHeader>
        <CardBody>
          <Image source={imageSource} style={{ width: 60, height: 60 }} />
          <CardTitle>{item.empresa}</CardTitle>
        </CardBody>
        <CardFooter>
          <TextStatus>Status: {item.status}</TextStatus>
          <ButtonAvante>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </ButtonAvante>
        </CardFooter>
      </Card>
    );
  };

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
