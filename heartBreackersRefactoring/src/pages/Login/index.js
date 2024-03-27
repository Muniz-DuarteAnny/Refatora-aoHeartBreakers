import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import HB from '../../assets/purpleLogoHB.png';
import { TextInputMask } from 'react-native-masked-text';
import {css} from '../../Style/css';
import { auth } from '../../Services/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const LoginScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    if (email == null || password == null) {
      Alert.alert(
        'Campos vazios',
        'Os campos devem ser preenchidos.'
      );
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigation.navigate('Search');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      

      // Verificar as credenciais no servidor.
      console.log('Email inserido:', email);
      console.log('Senha inserida:', password);

    };
  }

  useEffect(() => {
    const receivedEmail = route.params?.receivedEmail;
    const receivedPass = route.params?.receivedPass;
  
    if (receivedEmail && receivedPass) {
      console.log('Email recebido:', receivedEmail);
      console.log('Senha recebida:', receivedPass);
      setEmail(receivedEmail);
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
    <View style={css.backgroundLogin}>
      <View style={css.containerLogin}>

        {/* Teste */}
        {/* <Text>Email: {email} - Senha: {password}</Text> */}


        <Image source={HB} style={css.logoLogin} />
        <Text style={css.titleLogin}>BEM-VINDO(A)!</Text>

        <TextInput
          style={css.inputLogin}
          placeholder="Email"
          placeholderTextColor={"white"}
          onChangeText={text => setEmail(text)}
          value={email}
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

        {/* <TouchableOpacity style={css.buttonAccountLogin} onPress={handlePressAccount}>
          <Text style={css.textAccountLogin}>
            Não possuo uma conta.
          </Text>
        </TouchableOpacity> */}

        {/* Teste */}
        {/* <TouchableOpacity style={css.buttonLogin} onPress={ () => navigation.navigate('Prontuario')}>
          <Text style={css.buttonTextLogin}>prontuarioRemover</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default LoginScreen;
