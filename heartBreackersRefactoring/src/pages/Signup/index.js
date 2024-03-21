import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../Style/css';
import config from '../../../config/config.json';

export default function SignUp() {
  const navigation = useNavigation();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  // Variáveis que armazenam o email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (extracted) => {
    setEmail(extracted);
  };

  // Função que pega o texto digitado na senha
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // Função que verifica a senha ao clicar no botão Cadastrar
  const handleSignUp = () => {
    // Variável de verificação da senha
    const passwordRegex = /^(?=.*\d).{6,}$/;
;
    // Verifica se a senha atende aos requisitos
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Senha inválida',
        'A senha deve ter pelo menos 6 caracteres, contendo no mínimo um algarismo! Certifique-se de atender aos critérios e tente novamente.'
      );
      console.log('Senha inválida.');
      return;
    }

    // Armazenar email e senha se a senha for válida
    const validEmail = email;
    const validPass = password;

    //Enviando dados do form ao Backend
    async function drLogin() {
      let req = await fetch(config.urlRootNode+'create',{
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          emailUser: validEmail,
          passwordUser: validPass
        })
      });
    };

    //Mudando de página
    console.log('Navegando para  o componente: Login');
    //Email e senha válidos
    console.log('Email Válido:', validEmail);
    console.log('Senha Válida:', validPass);

    navigation.navigate('Login', {
      receivedEmail: validEmail,
      receivedPass: validPass,
    });
  };

  return (
    <View style={css.containerSignup}>
      <Animatable.View animation="fadeInLeft" delay={500} style={css.containerHeaderSignup}>
        <Text style={css.messageSignup}>Bem-Vindo(a)!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={500} style={css.containerFormSignup}>
      <Text style={css.titleFormSignup}>Email</Text>
        <TextInput
          style={css.inputSignup}
          type={'email'}
          options={{
            format: '###.###.###-##',
          }}
          onChangeText={handleEmailChange}
          placeholder="Ex: 000.000.000-00"
          keyboardType="numeric"
          value={email}
        />

        <Text style={css.titleFormSignup}>Senha</Text>
        <TextInput
          style={css.inputSignup}
          placeholder="Ex: abc012"
          secureTextEntry
          onChangeText={handlePasswordChange}
          value={password}
        />

        <TouchableOpacity style={css.buttonSignup} onPress={handleSignUp}>
          <Text style={css.buttonTextSignup}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
