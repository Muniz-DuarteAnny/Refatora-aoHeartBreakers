import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import HB from '../../assets/logoHB.png';
import {css} from '../../Style/css';

const LoginScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificar as credenciais no servidor.
    console.log('CPF inserido:', cpf);
    console.log('Senha inserida:', password);

    navigation.navigate('Search');
  };

  useEffect(() => {
    const receivedCpf = route.params?.receivedCpf;
    const receivedPass = route.params?.receivedPass;
  
    if (receivedCpf && receivedPass) {
      console.log('CPF recebido:', receivedCpf);
      console.log('Senha recebida:', receivedPass);
      setCpf(receivedCpf);
      setPassword(receivedPass);
    } else {
      console.log('Parâmetros ausentes na rota.');
    }
  }, [route.params]);

  // Função chamada ao clicar no texto "Não possuo conta."
  const handlePressAccount = () => {
    navigation.navigate('SignUp');
    handleAccountClick();
  };
  const handleAccountClick = () => {
    console.log('Navegando para  o componente: Signup');
  };

  return (
    <ImageBackground source={require('../../assets/background3.jpg')} style={css.backgroundImageLogin}>
      <View style={css.containerLogin}>

        {/* Teste */}
        {/* <Text>CPF: {cpf} - Senha: {password}</Text> */}


        <Image source={HB} style={css.logoLogin} />
        <Text style={css.titleLogin}>BEM-VINDO(A)!</Text>

        <TextInput
          style={css.inputLogin}
          placeholder="CPF"
          placeholderTextColor={"white"}
          onChangeText={text => setCpf(text)}
          value={cpf}
        />

        <TextInput
          style={css.inputLogin}
          secureTextEntry
          placeholder="SENHA"
          placeholderTextColor={"white"}
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <TouchableOpacity style={css.buttonLogin} onPress={handleLogin}>
          <Text style={css.buttonTextLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.buttonAccountLogin} onPress={handlePressAccount}>
          <Text style={css.textAccountLogin}>
            Não possuo uma conta.
          </Text>
        </TouchableOpacity>

        {/* Teste */}
        {/* <TouchableOpacity style={css.buttonLogin} onPress={ () => navigation.navigate('Prontuario')}>
          <Text style={css.buttonTextLogin}>prontuarioRemover</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
