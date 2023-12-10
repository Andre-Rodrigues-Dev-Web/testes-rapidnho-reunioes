import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f5f5f5;
  margin-bottom: 10px;
`;

export const Card = styled.View`
    align-items: center;
    border-radius: 15px;
    background: #fff;
    margin-right: 16px;
    padding: 13px 20px;
    width: 174px;
`;

export const CardTitle = styled.Text`
  color: #153e73;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 8px;
    width: 98%;
`;

export const CardBody = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 98%;
`;

export const CardFooter = styled.View`
    align-items: center;
    flex-direction: row;
    gap: 16px;
    justify-content: start;
    padding: 0px 2px;
    width: 99%;
`;

export const ButtonHeart = styled.TouchableOpacity`
    background-color: transparent;
`;

export const TextStatus = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: #153e73;
`;

export const ButtonAvante = styled.TouchableOpacity`
    background-color: transparent;
`;