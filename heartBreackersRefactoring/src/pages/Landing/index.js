import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {css} from '../../Style/css';

// Verificando a conexão com o banco de dados
fetch('http://localhost/Refatora-aoHeartBreakers/heartBreackersRefactoring/src/backend/connection.php')
.then(response => response.json())
.then(data => {
    if (data.status === 'sucess') {
        console.log('Conexão com o banco de dados foi realizada corretamente.');
    } else {
        console.error('Erro ao conectar ao banco de dados:', data.mensagem);
    }
})
.catch(error => {
    console.error('Erro ao verificar a conexão com o banco de dados:', error);
});

export default function Landing() {
  const navigation = useNavigation();

  const handlePressSignup = () => {
    console.log('Navegando para  o componente: Signup');
    navigation.navigate('SignUp');
  };

  const handlePressLogin = () => {
    console.log('Navegando para  o componente: Login');
    navigation.navigate('Login');
  };
  
  return (
    <View style={css.containerLanding}>

      <View style={css.containerLogoLanding}>
        <Animatable.Image delay={600} style={(css.logoHBLanding)}
          animation="flipInY"
          source={require('../../assets/purpleLogoHB.png')}
        />
      </View>
        
      <Animatable.View delay={800} animation="fadeInUp" style={css.containerFormLanding}>
        <Text style={css.titleLanding}>Monitoramento de prontuário Heart Breakers!</Text>
        <Text style={css.textLanding}>Faça login ou cadastre-se para acessar o sistema.</Text>

        <View style={css.containerButtonsLanding}>
          {/* Botão de login */}
          <TouchableOpacity
          style={css.buttonLoginLanding}
          activeOpacity={0.7}
          onPress={handlePressLogin}
          >
            <Text style={css.buttonLoginTextLanding}>
              Logar
            </Text>
          </TouchableOpacity>

          {/* Botão de signup */}
          <TouchableOpacity
          style={css.buttonSignupLanding}
          activeOpacity={0.7}
          onPress={handlePressSignup}
          >
            <Text style={css.buttonSignupTextLanding}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
