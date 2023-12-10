import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import { AuthProvider, useAuth } from './AuthContext';
import Lanches from './views/Categorias/Lanches';
import SplashScreen from './views/SplashScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const { isAuthenticated, loading } = useAuth();
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 5000);

        return () => clearTimeout(splashTimeout);
    }, []);

    if (showSplash) {
        return <SplashScreen />;
    }

    if (loading) {
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? [
                <Stack.Screen key="Dashboard" name="Dashboard" component={Dashboard} />,
                <Stack.Screen key="Lanches" name="Lanches" component={Lanches} />
            ] : (
                <Stack.Screen name="Login" component={Login} />
            )}
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </AuthProvider>
    );
}
