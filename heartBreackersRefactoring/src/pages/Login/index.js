
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

import HB from './assets/logoHB.png';

const LoginScreen = () => {

  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = () => {
    // verificar as credenciais no servidor.
  
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ImageBackground source={require('./assets/background3.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={HB} style={styles.logo} />
        <Text style={styles.title}>BEM VINDO!</Text>

        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor={"white"}
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="SENHA"
          placeholderTextColor={"white"}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    color:"white",
    marginBottom: 20
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ffff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#9a0019',
    padding: 10,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 0.5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 60,
    resizeMode:"stretch"
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    
   
  },

  
});




export default LoginScreen;
