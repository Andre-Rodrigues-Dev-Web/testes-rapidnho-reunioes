import React, { useState, useEffect } from 'react';
import { FlatList, Button } from 'react-native';

import {
  Container,
  Card,
  Logo,
  EmpresaText,
  DescricaoText,
  SegmentoText,
  EmpresaContainer,
  StatusContainer,
  SearchBar,
  PaginationContainer,
  PaginationButton,
  ButtonText
} from './style';

const ITEMS_PER_PAGE = 10;

const formatSegmento = (segmento) => {
  if (segmento === "Acai") {
    return "Açaí";
  }
  return segmento;
};

const GaleriaLanches = () => {
  const [empresas, setEmpresas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch('https://api.rapidinhodelivery.com.br/lista-lanchonetes.php')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(empresa => 
          empresa.empresa.toLowerCase().includes(searchText.toLowerCase())
        );
        setEmpresas(filteredData);
        setTotalPages(Math.ceil(filteredData.length / ITEMS_PER_PAGE));
      })
      .catch(error => console.error("Erro ao buscar empresas:", error));
  }, [searchText]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <SearchBar
        placeholder="Pesquise aqui"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={empresas.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Logo source={{ uri: 'https://appvendas.rapidinhodelivery.com.br/uploads/' + item.imagem }} />
            <EmpresaContainer>
              <EmpresaText>{item.empresa}</EmpresaText>
              <StatusContainer>
                <SegmentoText>Segmento: {formatSegmento(item.segmento)}</SegmentoText>
                <SegmentoText>Descrição: </SegmentoText>
                <DescricaoText>{item.descricao}</DescricaoText>
              </StatusContainer>
            </EmpresaContainer>
          </Card>
        )}
      />
      <PaginationContainer>
        <PaginationButton onPress={handlePrevPage} disabled={currentPage === 1}>
          <ButtonText>Voltar</ButtonText>
        </PaginationButton>
        <PaginationButton onPress={handleNextPage} disabled={currentPage === totalPages}>
          <ButtonText>Avançar</ButtonText>
        </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};

export default GaleriaLanches;
