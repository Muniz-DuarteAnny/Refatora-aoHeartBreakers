// Importando os componentes
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

// Função geradora da 'página'
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#B22222" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
