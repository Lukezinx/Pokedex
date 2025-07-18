import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Share } from 'react-native';
import {
  DetailContainer,
  LoadingContainer,
  HeaderSection,
  PokemonName,
  ShareButton,
  ShareButtonText, 
  PokemonImage,
  DetailSectionWrapper,
  SectionTitle,
  DetailText,
  StatRow,
  StatText,
  TypesContainer,
  TypeBadge,
  TypeText,
} from '../StyleDetail/PokemonDetailStyles'; 

const PokemonDetail = ({ route }) => {
  const { url } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const pokemonId = pokemon ? pokemon.id : null;
  // se pokemonId existir usa a URL com template de string
  const imageUrl = pokemonId ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png` : null;

  const handleShare = async () => {
    if (!pokemon) return;
    try {
      await Share.share({
        message: `Confira os detalhes do ${pokemon.name.toUpperCase()}! ${imageUrl}`,
        title: `Pokemon: ${pokemon.name.toUpperCase()}`,
      });
    } catch (error) {
      console.error('Erro ao compartilhar:', error.message);
    }
  };

  // verifica se vai achar os detalhes do Pokemon.
  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do Pokemon:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonDetails();
  }, [url]);

  if (loading || !pokemon) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#0000ff" />
      </LoadingContainer>
    );
  }

  return (
    <DetailContainer>
      
      <HeaderSection>
        <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
        <ShareButton onPress={handleShare}>
          
          <ShareButtonText>Share</ShareButtonText> {}
        </ShareButton>
      </HeaderSection>
      
      
      <PokemonImage
        source={{ uri: imageUrl }}
        onError={(e) => console.log("Falha ao carregar imagem:", e.nativeEvent.error)}
      />

      
      <DetailSectionWrapper>
        <SectionTitle>Basic Information</SectionTitle>
        <DetailText>ID: {pokemon.id}</DetailText>
        <DetailText>Peso: {(pokemon.weight / 10)} kg</DetailText>
        <DetailText>Altura: {(pokemon.height / 10)} m</DetailText>
      </DetailSectionWrapper>
      
      
      <DetailSectionWrapper>
        <SectionTitle>Stats</SectionTitle>
        {pokemon.stats.map((stat, index) => (
          <StatRow key={index}>
            <StatText>{stat.stat.name.toUpperCase()}: {stat.base_stat}</StatText>
          </StatRow>
        ))}
      </DetailSectionWrapper>

      
      <DetailSectionWrapper>
        <SectionTitle>Abilities</SectionTitle>
        {pokemon.abilities.map((ability, index) => (
          <DetailText key={index}>
            {ability.ability.name.toUpperCase()}
          </DetailText>
        ))}
      </DetailSectionWrapper>

      
      <DetailSectionWrapper>
        <SectionTitle>Types</SectionTitle>
        <TypesContainer>
          {pokemon.types.map((type, index) => (
            <TypeBadge key={index}>
              <TypeText>{type.type.name.toUpperCase()}</TypeText>
            </TypeBadge>
          ))}
        </TypesContainer>
      </DetailSectionWrapper>
    </DetailContainer>
  );
};

export default PokemonDetail;