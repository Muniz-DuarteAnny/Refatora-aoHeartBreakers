
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import HB from '../../assets/logoHB.png';
import { useNavigation } from '@react-navigation/native';
import {css} from '../../Style/css';

const LoginScreen = () => {


  const navigation = useNavigation();//remove
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // verificar as credenciais no servidor.
  
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ImageBackground source={require('../../assets/background3.jpg')} style={css.backgroundImageLogin}>
      <View style={css.containerLogin}>
        <Image source={HB} style={css.logoLogin} />
        <Text style={css.titleLogin}>BEM-VINDO(A)!</Text>

        <TextInput
          style={css.inputLogin}
          placeholder="CPF"
          placeholderTextColor={"white"}
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={css.inputLogin}
          placeholder="SENHA"
          placeholderTextColor={"white"}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity style={css.buttonLogin} onPress={handleLogin}>
          <Text style={css.buttonTextLogin}>Entrar</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={css.buttonLogin} onPress={ () => navigation.navigate('Prontuario')}>
          <Text style={css.buttonTextLogin}>prontuarioRemover</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
