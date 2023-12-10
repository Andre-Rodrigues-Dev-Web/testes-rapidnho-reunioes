import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Card = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const EmpresaText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const DescricaoText = styled.Text`
  font-size: 14px;
`;

export const SegmentoText = styled.Text`
  font-size: 16px;
`;

export const EmpresaContainer = styled.View`
  flex-direction: column;
  gap: 5px;
`;

export const StatusContainer = styled.View`
  flex-direction: column;
`;

export const SearchBar = styled.TextInput`
  background-color: #fff;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  color: #333;
  font-weight: 600;
  height: 60px;
  margin: 10px 0;
  padding: 15px 10px;
`;

export const PaginationContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  padding: 10px 20px;
`;

export const PaginationButton = styled.TouchableOpacity`
  padding: 14px 20px;
  background-color: #2C346B;
  border-radius: 8px;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  text-transform: uppercase;
`;

