import { StyleSheet } from "react-native";

const css = StyleSheet.create({
      // Estilização tela Landing
      containerLanding: {
        flex: 1, //Tamanho da tela inteira
        backgroundColor: '#ff7f00',
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
        color: '#000',
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
        backgroundColor: '#583493',
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
        backgroundColor: '#583493',
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
      backgroundLogin: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#ff7f00',
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
        borderRadius: 10,
        marginBottom: 16,
        paddingLeft: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        marginBottom: 30,
      },
      buttonLogin: {
        backgroundColor: '#583493',
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
        width: 210,
        height: 200,
        marginBottom: 40,
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
        backgroundColor: '#ff7f00',
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
        backgroundColor: '#583493',
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
      textAccountLogin:{
        color: "#fff",
      },

      // Estlização tela record
      containerMedicalRecord: {
        flex: 1,
        backgroundColor: '#DCDCDC',
      },
      containerRecordPatient: {
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
      },
      containerRecord: {
        backgroundColor: '#A9A9A9',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
      },
      containerPhoto: {
        alignItems: 'center',
        width: '80%',
        marginTop: 80,
        marginBottom: 50,
      },
      containerData: {
        flex: 1,
        flexDirection: 'column',
        width: '80%',
      },
      containerData2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 5,
        marginTop: 5,
      },
      titlePatient: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#808080',
      },
      recordTitle: {
        color: '#DCDCDC',
        fontSize: 40,
        fontWeight: 'bold',
      },
      profileImage: {
        width: '60%',
        height: 180,
      },
      bttImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#ff7f00',
        width: '50%',
        height: 30,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 0.5,
      },
      bttImageTxt: {
        color: 'white',
        fontWeight: 'bold',
      },
      attachBtt: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#583493',
        width: '50%',
        height: 30,
        borderRadius: 5,
        borderColor: "grey",
        borderWidth: 0.5,
      },
      attachBttText: {
        color: 'white',
        fontWeight: 'bold',
      },
      insertInf: {
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
      nameInf: {
        width: '100%',
        color: '#808080',
      },
      containerInf2: {
        width: '45%',
      },
      insertInf2: {
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
        color: 'black',
      },
      inputIOS: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 5,
        fontSize: 12,
      },
      containerNotes: {
        alignItems: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: 80,
        marginBottom: 50,
      },
      titleNotes: {
        fontSize: 20,
        color: '#DCDCDC',
      },
      insertNotes: {
        borderRadius: 5,
        marginBottom: 30,
        width: '70%',
        backgroundColor: 'white',
        height: 80,
        paddingLeft: 5,
        paddingRight: 5,
      },
      footerContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#A9A9A9',
      },
      footerBtt: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#583493',
        width: '30%',
        height: 30,
        borderRadius: 50,
        marginBottom: 20,
        borderColor: "white",
        borderWidth: 0.5
      },
      footerBttText: {
        color: 'white',
        fontWeight: 'bold',
      },
      medicinesList: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '70%',
      },
      item: {
        fontSize: 18,
        marginBottom: 5,
      },
      containerFilho3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 5,
        marginTop: 5,
      },
      insertMedicines: {
        borderRadius: 5,
        marginBottom: 30,
        backgroundColor: 'white',
        width: '70%',
        paddingLeft: 5,
        paddingRight: 5,
      },

      containerMedicines1: {
        flex: 1,
        backgroundColor: '#A9A9A9',
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: 70,
      },
      containerMedicines2: {
        backgroundColor: '#DCDCDC',
        width: '90%',
        padding: '2%',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'orange'
        
      },
      TextMedicines: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'orange',
        width: '100%',
      },
      inputMedicine: {
        backgroundColor: 'white',
      },
      medicinesInformacoes: {
        backgroundColor: 'green',
        alignItems: 'center',
        widht: '100%',
        padding: '1%'
      },
      
      nameMedicines: {
        backgroundColor: 'purple',
        width: '100%',
      },
      saveInformation: {
        width: '33%',
        backgroundColor: '#583493',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        color: 'white',
      },
      pickercss: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      pickerMedicines: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      colorFont: {
        color: 'black',
        fontWeight: 'bold',
      },
      colorFontSave: {
        color: 'white',
        fontWeight: 'bold',
      }
       
});

export {css};