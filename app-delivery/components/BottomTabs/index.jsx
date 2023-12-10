import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContainerTabs = styled.View`
    background-color: #fff;
    position: fixed;
    bottom: -0px;
    width: 100%;
`;

const ContainerLinks = styled.View`
    flex-direction: row;
    gap: 5px;
    justify-content: space-around;
    margin: 0 auto;
    padding: 18px 0;
    width: 98%;
`;

export const ButtonTabs = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: column;
  align-items: center;
`;

export const TextTabs = styled.Text`
  background-color: #fff;
  font-weight: 600;
  flex-direction: column;
`;

const BottomTabs = () => {
  const navigation = useNavigation();

  return (
    <ContainerTabs>
      <ContainerLinks>
        <ButtonTabs onPress={() => navigation.navigate('Dashboard')}>
            <MaterialIcons name="home" size={24} color="black" />
            <TextTabs>Home</TextTabs>
        </ButtonTabs>
        <ButtonTabs>
            <MaterialIcons name="search" size={24} color="black" />
            <TextTabs>Pesquisa</TextTabs>
        </ButtonTabs>
        <ButtonTabs>
            <MaterialIcons name="shopping-bag" size={24} color="black" />
            <TextTabs>Meus Pedidos</TextTabs>
        </ButtonTabs>
        <ButtonTabs>
            <MaterialIcons name="person" size={24} color="black" />
            <TextTabs>Perfil</TextTabs>
        </ButtonTabs>
      </ContainerLinks>
     </ContainerTabs>
  );
}

export default BottomTabs;