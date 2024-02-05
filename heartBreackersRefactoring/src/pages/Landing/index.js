import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import {css} from '../../Style/css';

export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={css.container}>

      <View style={css.containerLogo}>
        <Animatable.Image delay={600} style={(css.logoHB)}
          animation="flipInY"
          source={require('../../assets/whiteLogoHB.png')}
        />
      </View>
        
      <Animatable.View delay={800} animation="fadeInUp" style={css.containerForm}>
        <Text style={css.title}>Monitoramento de prontuário Heart Breakers!</Text>
        <Text style={css.text}>Faça login para acessar o sistema.</Text>

        <Animatable.View animation="zoomInUp" delay={1200} duration={2000} style={css.containerButton}>
          <TouchableOpacity
          activeOpacity={0.7}
          style={css.button}
          onPress={ () => navigation.navigate('Login')}
          >
            <Text style={css.buttonEnter}>
              Entrar
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}
