//importando bibliotecas que serão utilizadas no código, talvez seja necessário baixa-las
//Va até a pasta package.json e verifique se as bibliotecas react-native-masked-text, react-native-picker-select, @react-navigation/native estão instaladas.
//Caso elas não estiverem instaladas:
//No terminal do vs redirecione para a pasta que o seu projeto esta alocado e instale as bibliotecas 
//npm install react-native-picker-select react-native-masked-text @react-navigation/native.
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SectionList,} from "react-native";
// import foto from '../../assets/perfil.png';
import {css} from '../../Style/css';
import React, { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Alteração na importação


const PacienteFicha = () => {

  const navigation = useNavigation();
  //pega o que foi inserido no input e filtra na máscara e depois seta no input
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRg] = useState('');
  const [sexo, setSexo] = useState(null);
  const [sangue, setSangue] = useState(null);
  const [queixa, setQueixa] = useState('');
  const [historico, setHistorico] = useState('');
  const [alergias, setAlergias] = useState('');
  const [cid, setCid] = useState('');
  const [exameF, setExamef] = useState('');
  const [conduta, setConduta] = useState('');
  const [hipoteseD, setHipotesed] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  //const [resultadosE, setResultadose] = useState('');
  const [inputMedicines, setInputMedicines] = useState('');
  const [items, setItems] = useState([]);
  const [widthSection, setWidth] = useState('0%');
  const renderItem = ({ item }) => <Text style={css.item}>{item.texto}</Text>;

  const handleFicha = () => {
    // verificar as credenciais no servidor.
  
    console.log(nome)
    console.log(email) 
    console.log(rg)
    console.log(endereco)
    console.log(dataNascimento)
    console.log(peso)
    console.log(altura)
    console.log(sexo)
    console.log(sangue)
  };

  //adiciona opções nos inputs
  const sexoOpções = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'},
    {label: 'Outro', value: 'O'},
  ];

  const sangueOpções =[
    {label: 'A+', value: 'A+'},
    {label: 'A-', value: 'A-'},
    {label: 'B+', value: 'B+'},
    {label: 'B-', value: 'B-'},
    {label: 'AB+', value: 'AB+'},
    {label: 'AB-', value: 'AB-'},
    {label: 'O+', value: 'O+'},
    {label: 'O-', value: 'O-'},
  ]

  const excluirFicha = () => {
    setNome('');
    setFoto('');
    setEndereco('');
    setdataNascimento('');
    setAltura('');
    setPeso('');
    setEmail('');
    setRg('');
    setSexo('');
    setSangue('');
    setQueixa('');
    setHistorico('');
    setAlergias('');
    setCid('');
    setExamef('');
    setConduta('');
    setHipotesed('');
    setDiagnostico('');
    setItems([]);
    if (widthSection === '70%'){
      setWidth('0%')
    }
  };

  const addItem = () => {
    if (inputMedicines.trim() !== '') {
      setItems([...items, { id: items.length.toString(), texto: inputMedicines }]);
      setInputMedicines('');
      if (widthSection === '0%'){
        setWidth('70%')
      }
    }
  };

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão para acessar a biblioteca de mídia foi negada.');
      return;
    }
  
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        const source = { uri: result.uri };
        if (foto) {
          // Se já existe uma foto, substitui-a pela nova foto selecionada
          setFoto(source);
        } else {
          // Se não existe uma foto, adiciona a nova foto
          setFoto(source);
        }
      } else {
        console.log('Usuário cancelou a seleção de imagem.');
      }
    } catch (error) {
      console.log('Erro ao selecionar imagem:', error);
    }
  };
  

    


  //marcação da página
  return (
    <ScrollView>
      <View style={css.containerMedicalRecord}>
        <View style={css.containerRecordPatient}>
          <Text style={css.titlePatient}>
            FICHA DO PACIENTE
          </Text>
          <View style={css.containerPhoto}>
            <Image source={foto} style={css.profileImage}></Image>
            <TouchableOpacity style={css.bttImage} onPress={handleChoosePhoto}>
              <Text style={css.bttImageTxt}>Adicionar foto</Text>
            </TouchableOpacity>
          </View>
          <View style={css.containerData}>
            <View style={css.containerInf}>
              <Text style={css.nameInf}>Nome:</Text>
              <TextInput style={css.insertInf} 
              placeholder="Digite o nome do paciente"
              value= {nome}
              onChangeText={(inputNome) => setNome(inputNome.replace(/[^a-zA-Z\s]/g, ''))}/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nameInf}>Email:</Text>
              <TextInput style={css.insertInf} 
              type={'email'}
              value={email}
              onChangeText={(inputEmail) => setEmail(inputEmail)}
              placeholder="Digite o Email do paciente"/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nameInf}>RG:</Text>
              <TextInput style={css.insertInf} 
                placeholder="Digite o RG do paciente"
                type={'custom'}
                options={{
                  mask: 'AA-99.999.999',
                }}
                value={rg}
                onChangeText={(inputRg) => {setRg(inputRg);}}
              />
            </View>
            <View style={css.containerInf}>
              <Text style={css.nameInf}>Endereço:</Text>
              <TextInput style={css.insertInf} 
              placeholder="Digite o endereço do paciente"
              value={endereco}
              onChangeText={(inputEndereco) => setEndereco(inputEndereco)}/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nameInf}>Data de nascimento:</Text>
              <TextInput style={css.insertInf} 
              placeholder="Selecione a data de nascimento do paciente"
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={dataNascimento}
              onChangeText={(inputData) => setdataNascimento(inputData)}/>
            </View>
          </View>
          <View style={css.containerData2}>
            <View style={css.containerInf2}>
              <Text style={css.nameInf}>Peso(KG)</Text>
              <TextInput style={css.insertInf2}
              placeholder="Digite o peso" 
              keyboardType="numeric"
              value={peso}
              onChangeText={(inputPeso) => setPeso(inputPeso.replace(/[^0-9,]/g, ''))}/>
            </View>
            <View style={css.containerInf2}>
              <Text style={css.nameInf}>Altura(metros)</Text>
              <TextInput style={css.insertInf2} 
              placeholder="Digite a altura"
              keyboardType="numeric"
              value={altura}
              onChangeText={(inputAltura) => setAltura(inputAltura.replace(/[^0-9,]/g, ''))}/>
            </View>
          </View>
          <View style={css.containerFilho3}>
            <View style={css.containerInf2}>
              <Text style={css.nameInf}>Sexo</Text>
              <RNPickerSelect style={css}
              value={sexo}
              items={sexoOpções}
              onValueChange={(selectSexo) => setSexo(selectSexo)}
              placeholder={{ label: 'Selecione...', value: null}}/>
            </View>
            <View style={css.containerInf2}>
              <Text style={css.nameInf}>Tipo sanguíneo</Text>
              <RNPickerSelect style={css} 
              placeholder={{ label: 'Selecione...', value: null}}
              items={sangueOpções}
              onValueChange={(selectSangue) => setSangue(selectSangue)}
              value={sangue}/>
            </View>
          </View>
        </View>
        <View style={css.containerRecord}>
          <Text style={css.titleNotes}>Medicamentos</Text>
          <TextInput style={css.insertMedicines}
          value={inputMedicines}
          onChangeText={text => setInputMedicines(text)}/>
          <TouchableOpacity style={css.attachBtt1} onPress= {addItem}>
            <Text style={css.attachBttText}>
              Adicionar Medicamentos
            </Text>
          </TouchableOpacity>
          <SectionList
            sections={[{data: items }]}
            style={[css.medicinesList, {width: widthSection}]}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title } }) => (
              <Text >{title}</Text>
            )}
            keyExtractor={(item, index) => item.id}
          />
          <View style={css.buttonsAtalho}>
            <TouchableOpacity style={css.attachBtt} onPress={ () => navigation.navigate('Medicamentos', { data: items })}>
              <Text style={css.attachBttText}>
                Medicamentos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.attachBtt} onPress={ () => navigation.navigate('Prontuário')}>
              <Text style={css.attachBttText}>
                Prontuário
              </Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style={css.footerContainer}>
          <TouchableOpacity style={css.footerBtt} onPress={handleFicha}>
            <Text style={css.footerBttText}> 
                Salvar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.footerBtt} onPress={ () => navigation.navigate('Login')}>
            <Text style={css.footerBttText}>
                Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.footerBtt} onPress={excluirFicha}>
            <Text style={css.footerBttText}>
                Excluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView >
  )
}





export default PacienteFicha;