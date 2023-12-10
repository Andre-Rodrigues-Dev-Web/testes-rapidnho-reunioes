// SplashScreen.js
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

const Logo = styled.Image`
    width: 221px;
    height: 180px;
    margin-bottom: 20px;
`;

const SplashScreen = () => {
    return (
        <Container>
            <Logo source={require('../../imgs/logo/rapidinho.png')} />
            <ActivityIndicator size="large" color="#FAAD17" />
        </Container>
    );
}

export default SplashScreen;
