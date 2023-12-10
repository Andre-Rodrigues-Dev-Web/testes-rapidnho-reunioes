import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import user from '../../imgs/logo/rapidinho.png'

const MenuTopo = styled.View`
  background-color: #2C346B;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContainerLogo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Logo = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  text-transform: uppercase;
`;

const Container = styled.View`
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const SearchButton = styled.TouchableOpacity``;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 35%;
`;

const NotificationIcon = styled(MaterialIcons)`
  margin-right: 10px;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const DrawerButton = styled.TouchableOpacity``;

const Topo = ({ title, onSearchPress, onDrawerButtonPress }) => {
  return (
    <MenuTopo>
      <ContainerLogo>
        <Logo>Rapidinho Delivery</Logo>
      </ContainerLogo>
      <Container>
        <SearchButton onPress={onSearchPress}>
          <MaterialIcons name="search" size={24} color="black" />
        </SearchButton>
        <Title>{title}</Title>
        <RightContainer>
          <NotificationIcon name="notifications" size={24} color="black" />
          <ProfileImage source={user} />
          <DrawerButton onPress={onDrawerButtonPress}>
            <MaterialIcons name="menu" size={24} color="black" />
          </DrawerButton>
        </RightContainer>
      </Container>
    </MenuTopo>
  );
};

export default Topo;
