import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const Button = styled.TouchableOpacity`
    width: 150px;
    padding: 10px;
    background-color: red;
    align-items: center;
    border-radius: 5px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 18px;
`;

