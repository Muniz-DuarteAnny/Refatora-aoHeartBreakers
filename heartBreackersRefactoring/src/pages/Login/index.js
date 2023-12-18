// Importando as bibliotecas necessárias
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import HB from './assets/HB.png'

const LoginScreen = () => {
  // Estados para armazenar o nome de usuário e senha
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Função para lidar com o clique no botão de login
  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, verificar as credenciais no servidor.
    // Para este exemplo, apenas imprimiremos as credenciais.
    console.log('Username:', username)
    console.log('Password:', password)
  }
  
  return (
    <View style={styles.container}>
      
      <Image source={HB} style={styles.logo} />

      <Text style={styles.title}>Login</Text>

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={text => setUsername(text)}
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />


      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 16
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8
  },
  button: {
    backgroundColor:'#9a0019',
    padding: 10,
    borderRadius: 8
  },
  logo: {
    width: 100, // Ajuste a largura conforme necessário
    height: 100, // Ajuste a altura conforme necessário
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default LoginScreen 