import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';

import {
  DrawerContainer,
  DrawerHeader,
  ButtonLogout,
  ButtonTextLogout,
  CloseIconContainer,
  DrawerBody,
  LinkPagina,
  LinkText
} from './style';


const Drawer = ({ style, onClose }) => {
  const navigation = useNavigation();
  const { setIsAuthenticated, userData } = useAuth();

  const handleLogout = () => {
      setIsAuthenticated(false);
      navigation.navigate('Login');
  };
  return (
    <DrawerContainer style={[style, { width: 300, height: '100%', backgroundColor: 'white' }]}>
      <DrawerHeader>
        <CloseIconContainer onPress={onClose}>
            <Icon name="close-circle-outline" size={30} color="black" />
        </CloseIconContainer>
      </DrawerHeader>
      <DrawerBody>
        <LinkPagina onPress={() => navigation.navigate('Dashboard')}>
          <LinkText>Página Inicial</LinkText>
        </LinkPagina>

        <ButtonLogout onPress={handleLogout}>
          <ButtonTextLogout>Sair</ButtonTextLogout>
        </ButtonLogout>
      </DrawerBody>
    </DrawerContainer>
  );
};

export default Drawer;