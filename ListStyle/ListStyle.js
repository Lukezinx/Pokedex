 import {Text, View,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

 
 export const ListContainer = styled(View)`
    flex: 1;
    margin-top: 50px;
    width: 100%;
    background-color: #f0f0f0;
  `;

  export const ItemWrapper = styled(TouchableOpacity)`
    background-color: white;
    padding: 20px;
    margin-vertical: 8px;
    margin-horizontal: 16px;
    border-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.4;
    shadow-radius: 3.9px;
    elevation: 5;
  `;

   export const ItemTitle = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #333;
  `;