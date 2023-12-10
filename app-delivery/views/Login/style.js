import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Input = styled.TextInput`
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 15px 10px;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    background-color: #2C346B;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    align-items: center;
    height: 57px;
    justify-content: center;
    width: 350px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 20px;
`;
export const DrawerButton = styled.TouchableOpacity``;

export const CheckboxContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

export const CheckboxText = styled.Text`
    margin-left: 10px;
`;

export const Logo = styled.Image`
    width: 221px;
    height: 180px;
    margin-bottom: 20px;
`;