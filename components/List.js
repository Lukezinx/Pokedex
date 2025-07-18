import { ActivityIndicator, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListContainer, ItemWrapper, ItemTitle } from '../ListStyle/ListStyle';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); 

  async function fetchData() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ListContainer>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <ItemWrapper onPress={() => navigation.navigate('PokemonDetail', { url: item.url })}>
            <ItemTitle>{item.name.toUpperCase()}</ItemTitle>
          </ItemWrapper>
        )}
        keyExtractor={(item, index) => item.name || String(index)}
      />
    </ListContainer>
  );
};

export default PokemonList;