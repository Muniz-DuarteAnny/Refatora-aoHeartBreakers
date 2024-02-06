import { StyleSheet } from "react-native";

const css = StyleSheet.create({
      // Estilização tela Landing
      containerLanding: {
        flex: 1, //Tamanho da tela inteira
        backgroundColor: '#B22222',
        alignItems: 'center', // Alinhamento horizontal
        justifyContent: 'center', // Alinhamento vertical
      },
      containerLogoLanding: {
        flex: 2,
        paddingTop: 15,
      },
      logoHBLanding: {
        resizeMode: 'contain',
        height: '50%',
        marginTop: 100,
      },
      containerFormLanding: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '8%',
        paddingEnd: '5%',
      },
      titleLanding: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
      },
      textLanding: {
        color: '#A1A1A1',
        fontSize: 15,
      },
      containerButtonsLanding: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '10%',
      },
      buttonLoginLanding: {
        backgroundColor: '#B22222',
        width: '40%',
        paddingVertical: 10,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      },
      buttonLoginTextLanding: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
      },
      buttonSignupLanding: {
        backgroundColor: '#B22222',
        width: '40%',
        paddingVertical: 10,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      },
      buttonSignupTextLanding: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
      },

      // Estilização tela Login
      backgroundImageLogin: {
        flex: 1,
        resizeMode: 'cover',
      },
      containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      titleLogin: {
        fontSize: 30,
        marginBottom: 16,
        color:"white",
        marginBottom: 20,
      },
      inputLogin: {
        height: 40,
        width: '100%',
        borderColor: '#ffff',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        marginBottom: 30,
      },
      buttonLogin: {
        backgroundColor: '#B22222',
        padding: 10,
        paddingLeft: 90,
        paddingRight: 90,
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
      },
      logoLogin: {
        width: 100,
        height: 100,
        marginBottom: 60,
        resizeMode:"stretch",
      },
      buttonTextLogin: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
      },
      buttonAccountLogin: {
        marginTop: 20,
        alignSelf: 'center',
      },
      textAccountLogin: {
        color: '#A1A1A1'
      },

      // Estlização tela signup
      containerSignup: {
        flex: 1,
        backgroundColor: '#B22222',
      },
      containerHeaderSignup: {
        marginTop: '25%',
        marginBottom: '15%',
        paddingStart: '5%',
      },
      messageSignup: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
      },
      containerFormSignup: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
      },
      titleFormSignup: {
        fontSize: 20,
        marginTop: 28,
      },
      inputSignup: {
        borderBottomWidth: 1,
        height: 40,
        marginTop: 10,
        fontSize: 16
      },
      buttonSignup: {
        backgroundColor: '#B22222',
        width: '100%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: 25,
        justifyContent: 'enter',
        alignItems: 'center',
      },
      buttonTextSignup: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export {css};