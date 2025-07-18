import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const DetailContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    padding: 15,
    alignItems: 'center',
    flexGrow: 1,
  },
})`
  background-color: #f8f8f8;
`;

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderSection = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const PokemonName = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const ShareButton = styled(TouchableOpacity)`
  padding: 5px 10px; 
  background-color: #007AFF; 
  border-radius: 5px; 
`;

export const ShareButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const PokemonImage = styled(Image)`
  width: 180px;
  height: 180px;
  resize-mode: contain;
  margin-bottom: 20px;
`;

export const DetailSectionWrapper = styled(View)`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  border-width: 1px;
  border-color: #eee;
`;

export const SectionTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #444;
`;

export const DetailText = styled(Text)`
  font-size: 16px;
  margin-bottom: 5px;
  color: #555;
`;

export const StatRow = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const StatText = styled(Text)`
  font-size: 16px;
  color: #555;
  flex: 1;
`;

export const TypesContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const TypeBadge = styled(View)`
  padding-vertical: 5px;
  padding-horizontal: 10px;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: #ADD8E6;
`;

export const TypeText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 12px;
`;