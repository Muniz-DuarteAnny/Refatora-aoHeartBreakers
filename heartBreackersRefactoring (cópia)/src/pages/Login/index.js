import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import HB from '../../assets/logoHB.png';
import { css } from '../../Style/css';

const db = SQLite.openDatabase({ name: 'heart_breakers.db', location: 'default' });

const LoginScreen = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await executeSqlAsync(
        `SELECT * FROM doctor WHERE cpf = ? AND password = ?;`,
        [cpf, password]
      );

      if (result.rows.length > 0) {
        // Credenciais válidas, navega para a tela 'Search'
        navigation.navigate('Search');
        // Limpa os campos de entrada após o login
        setCpf('');
        setPassword('');
      } else {
        // Credenciais inválidas, exibe uma mensagem de erro
        Alert.alert('Erro', 'CPF ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao executar a consulta no banco de dados:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao verificar as credenciais');
    }
  };

  const executeSqlAsync = (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          params,
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
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

  const handlePressAccount = () => {
    navigation.navigate('SignUp');
    handleAccountClick();
  };

  const handleAccountClick = () => {
    console.log('Navegando para o componente: Signup');
  };

  return (
    <ImageBackground source={require('../../assets/background3.jpg')} style={css.backgroundImageLogin}>
      <View style={css.containerLogin}>
        <Image source={HB} style={css.logoLogin} />
        <Text style={css.titleLogin}>BEM-VINDO(A)!</Text>

        <TextInput
          style={css.inputLogin}
          placeholder="CPF"
          placeholderTextColor="white"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
        />

        <TextInput
          style={css.inputLogin}
          secureTextEntry
          placeholder="SENHA"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity style={css.buttonLogin} onPress={handleLogin}>
          <Text style={css.buttonTextLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.buttonAccountLogin} onPress={handlePressAccount}>
          <Text style={css.textAccountLogin}>Não possuo uma conta.</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
