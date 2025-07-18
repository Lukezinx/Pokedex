import * as React from 'react';
import List from './components/List';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './components/List';
import PokemonDetail from './DetailPage/DetailPage';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen 
          name="PokemonList" 
          component={PokemonList} 
          options={{ title: 'Pokemon List' }}
        />
        <Stack.Screen 
          name="PokemonDetail" 
          component={PokemonDetail} 
          options={{ title: 'Pokemon Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

