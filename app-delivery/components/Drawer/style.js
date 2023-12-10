import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const DrawerContainer = styled(Animated.View)`
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0;
  width: 250px;
  z-index: 1000;
`;

export const DrawerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonLogout = styled.TouchableOpacity`
  background-color: #e74c3c;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 300px;
`;

export const ButtonTextLogout = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
`;

export const CloseIconContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const DrawerBody = styled.View`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

export const LinkPagina = styled.TouchableOpacity`
  padding: 10px;
`;

export const LinkText = styled.Text`
  color: #2C346B;
  font-size: 18px;
  font-weight: 600;
  padding: 15px 0;
`;
