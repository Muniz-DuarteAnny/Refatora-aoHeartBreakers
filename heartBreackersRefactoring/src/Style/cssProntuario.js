import { StyleSheet } from "react-native";
const css = StyleSheet.create({
    pai: {
      flex: 1,
      backgroundColor: '#DCDCDC',
    },
    containerPaiFichadopaciente: {
      //backgroundColor: '#DCDCDC',
      //justifyContent: 'center',
      alignItems: 'center',
      //flex: 1,
      paddingTop: 80,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    containerPaiProntuariodopaciente: {
      backgroundColor: '#A9A9A9',
      //justifyContent: 'center',
      alignItems: 'center',
      //flex: 1,
      paddingTop: 80,
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
    containerFilho1: {
      alignItems: 'center',
      width: '80%',
      marginTop: 80,
      marginBottom: 50,
    },
    containerFilho2: {
      flex: 1,
      flexDirection: 'column',
      width: '80%',
    },
    containerFilho3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 5,
      marginTop: 5,
    },
    tituloFicha: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#808080',
    },
    tituloProntuario: {
      color: '#DCDCDC',
      fontSize: 40,
      fontWeight: 'bold',
    },
    imagemPerfil: {
      width: '60%',
      height: 180,
    },
    botaoTrocarImagem: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#B22222',
      width: '50%',
      height: 30,
      borderRadius: 5,
    },
    botaoTrocarImagemTexto: {
      color: 'white',
      fontWeight: 'bold',
    },
    botaoAnexo: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B22222',
      width: '50%',
      height: 30,
      borderRadius: 5,
    },
    botaoAnexarTexto: {
      color: 'white',
      fontWeight: 'bold',
    },
    inserirInf: {
      backgroundColor: 'white',
      borderRadius: 5,
      width: '100%',
      paddingLeft: 5,
      fontSize: 12,
    },
    containerInf: {
      marginBottom: 5,
      marginTop: 5,
      width: '100%',
    },
    nomeInf: {
      width: '100%',
      color: '#808080',
    },
    containerInf2: {
      width: '45%',
    },
    inserirInf2: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: 5,
      fontSize: 12,
    },
    inputAndroid: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: 5,
      fontSize: 12,
    },
    inputIOS: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingLeft: 5,
      fontSize: 12,
    },
    containerAnotacoes: {
      alignItems: 'center',
      alignItems: 'center',
      width: '80%',
      marginTop: 80,
      marginBottom: 50,
    },
    tituloAnotacoes: {
      fontSize: 20,
      color: '#DCDCDC',
    },
    inserirAnotacoes: {
      borderRadius: 5,
      marginBottom: 30,
      width: '70%',
      backgroundColor: 'white',
      height: 80,
      paddingLeft: 5,
      paddingRight: 5,
  
    },
    footerbotoes: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'row',
      backgroundColor: '#A9A9A9',
    },
    botaoFooter: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B22222',
      width: '30%',
      height: 30,
      borderRadius: 5,
      marginBottom: 20,
    },
    botaoFooterText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  export {css};