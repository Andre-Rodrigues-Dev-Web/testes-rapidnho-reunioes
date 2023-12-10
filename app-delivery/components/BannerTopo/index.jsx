import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import BannerTopo from './BannerTopo';
import { Dimensions } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  top: 50%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
`;

const ArrowButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const BannerTop = () => {
  const [banners, setBanners] = useState([]);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    const loadBanners = async () => {
      try {
        const response = await axios.get('https://api.rapidinhodelivery.com.br/lista-banner-topo.php');
        if (response.data.success) {
          setBanners(response.data.data);
        } else {
          console.error('Erro ao buscar banners:', response.data.message);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    loadBanners();
  }, []);

  const renderItem = ({ item }) => (
    <BannerTopo source={{ uri: item.banner }} />
  );

  const goPrev = () => {
    carouselRef.current.snapToPrev();
  };

  const goNext = () => {
    carouselRef.current.snapToNext();
  };

  return (
    <Container>
      <ArrowButton style={{ left: 10 }} onPress={goPrev}>
        <ArrowButtonText>←</ArrowButtonText>
      </ArrowButton>
      <ArrowButton style={{ right: 10 }} onPress={goNext}>
        <ArrowButtonText>→</ArrowButtonText>
      </ArrowButton>
      
      <Carousel
        ref={carouselRef}
        data={banners}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        autoplay={true}
        loop={true}
        autoplayDelay={1000}
        autoplayInterval={3000}
      />
    </Container>
  );
};

const windowWidth = Math.round(Dimensions.get('window').width);

export default BannerTop;
