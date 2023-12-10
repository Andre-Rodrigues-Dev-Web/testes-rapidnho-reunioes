import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import {
    Button,
    Container,
    Input,
    Text,
    CheckboxContainer,
    CheckboxText,
    Logo
} from "./style";
import { Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
    const { setIsAuthenticated, setUserData } = useAuth();

    useEffect(() => {
        const loadRememberedData = async () => {
            try {
                const storedUsuario = await AsyncStorage.getItem('usuario');
                const storedSenha = await AsyncStorage.getItem('senha');
                const rememberMe = await AsyncStorage.getItem('rememberMe');

                if (storedUsuario && storedSenha) {
                    setUsuario(storedUsuario);
                    setSenha(storedSenha);
                }
                
                if (rememberMe && rememberMe === 'true') {
                    setIsRememberMeChecked(true);
                }

            } catch (error) {
                console.log('Erro ao carregar dados armazenados:', error);
            }
        };

        loadRememberedData();
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://api.rapidinhodelivery.com.br/login.php', { usuario, senha });

            if (response.data.success) {
                setIsAuthenticated(true);
                setUserData(response.data.data);
                navigation.navigate('Dashboard');
                
                if (isRememberMeChecked) {
                    await AsyncStorage.setItem('usuario', usuario);
                    await AsyncStorage.setItem('senha', senha);
                    await AsyncStorage.setItem('rememberMe', 'true');
                } else {
                    await AsyncStorage.removeItem('usuario');
                    await AsyncStorage.removeItem('senha');
                    await AsyncStorage.removeItem('rememberMe');
                }

            } else {
                Alert.alert('Erro', response.data.message);
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao fazer login: ' + error.message);
        }
    };

    return (
        <Container>
            <Logo source={require('../../imgs/logo/rapidinho.png')} />
            <Input
                placeholder="Usuário"
                value={usuario}
                onChangeText={setUsuario}
            />
            <Input
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <CheckboxContainer>
                <Checkbox
                    value={isRememberMeChecked}
                    onValueChange={setIsRememberMeChecked}
                />
                <CheckboxText>Lembrar meus dados</CheckboxText>
            </CheckboxContainer>
            <Button onPress={handleLogin}>
                <Text>Logar</Text>
            </Button>
        </Container>
    );
}

export default Login;
