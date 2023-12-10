// BannerTopo.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const BannerImage = styled(Animated.Image)`
  border-radius: 8px;
  width: 98%;
  height: 180px;
  margin: 10px auto; 
`;

const BannerTopo = ({ source }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return <BannerImage source={source} style={{ opacity }} />;
};

export default BannerTopo;
