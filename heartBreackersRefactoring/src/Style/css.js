import { StyleSheet } from "react-native";

const css = StyleSheet.create({
      // Estilização tela Landing
      container: {
        flex: 1, //Tamanho da tela inteira
        backgroundColor: '#B22222',
        alignItems: 'center', // Alinhamento horizontal
        justifyContent: 'center', // Alinhamento vertical
      },
      containerLogo: {
        flex: 2,
        paddingTop: 15,
      },
      logoHB: {
        resizeMode: 'contain',
        height: '50%',
        marginTop: 100,
      },
      containerForm: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '8%',
        paddingEnd: '5%',
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
      },
      text: {
        color: '#A1A1A1',
        fontSize: 15,
      },
      containerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '6%',
      },
      button: {
        position: 'absolute',
        backgroundColor: '#B22222',
        width: '60%',
        paddingVertical: 10,
        borderRadius: 50,
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonEnter: {
        fontWeight: 'bold',
        fontSize: 20,
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
        backgroundColor: '#9a0019',
        padding: 10,
        paddingLeft: 70,
        paddingRight: 70,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 0.5,
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
});

export {css};