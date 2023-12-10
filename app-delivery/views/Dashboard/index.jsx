import React, { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { useAuth } from '../../AuthContext';
import { Container } from './style';
import Topo from '../../components/Topo';
import Drawer from '../../components/Drawer';
import CategoriasExplore from '../../components/CategoriasExplore';
import TitleContent from '../../components/TitleContent';
import BottomTabs from '../../components/BottomTabs';
import LojasFavoritas from '../../components/LojasFavoritas';
import BannerTop from '../../components/BannerTopo';

function Dashboard({ navigation }) {
    const { setIsAuthenticated, userData } = useAuth();
    //Drawer
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const drawerAnimValue = useRef(new Animated.Value(-250)).current;

    const handleDrawerButtonPress = () => {
        setDrawerOpen(prevState => !prevState);  // Alterna o estado atual
    };

    useEffect(() => {
        Animated.timing(drawerAnimValue, {
            toValue: isDrawerOpen ? 0 : -300,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [isDrawerOpen]);

    return (
        <Container>
            <Topo onDrawerButtonPress={handleDrawerButtonPress} />
            <Drawer
                style={{ transform: [{ translateX: drawerAnimValue }] }}
                onClose={handleDrawerButtonPress}
            />
            <BannerTop/>
            <TitleContent nameTitleContent="Explorar Categorias" />
            <CategoriasExplore />
            <TitleContent nameTitleContent="Lojas favoritas" />
            <LojasFavoritas/>
            <BottomTabs/>
        </Container>
    );
}

export default Dashboard;
