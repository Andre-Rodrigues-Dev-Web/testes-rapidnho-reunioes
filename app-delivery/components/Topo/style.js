import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const SearchButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 35%;
`;

export const NotificationIcon = styled(MaterialIcons)`
  margin-right: 10px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const DrawerButton = styled.TouchableOpacity``;
