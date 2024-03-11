//importando bibliotecas que serão utilizadas no código, talvez seja necessário baixa-las
//Va até a pasta package.json e verifique se as bibliotecas react-native-masked-text, react-native-picker-select, @react-navigation/native estão instaladas.
//Caso elas não estiverem instaladas:
//No terminal do vs redirecione para a pasta que o seu projeto esta alocado e instale as bibliotecas 
//npm install react-native-picker-select react-native-masked-text @react-navigation/native.
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SectionList } from "react-native";
import foto from '../../assets/perfil.png';
import {css} from '../../Style/css';
import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Alteração na importação

const ProntuarioFicha = () => {

  const navigation = useNavigation();
  //pega o que foi inserido no input e filtra na máscara e depois seta no input
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [cpf, setCpf] = useState('');
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

  const handleProntuario = () => {
    // verificar as credenciais no servidor.
  
    console.log(nome)
    console.log(cpf) 
    console.log(rg)
    console.log(endereco)
    console.log(dataNascimento)
    console.log(peso)
    console.log(altura)
    console.log(sexo)
    console.log(sangue)
    console.log(queixa)
    console.log(historico)
    console.log(alergias)
    console.log(exameF)
    console.log(cid)
    console.log(conduta)
    console.log(hipoteseD)
     console.log(diagnostico)
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

  const excluirFormulario = () => {
    setNome('');
    setFoto('');
    setEndereco('');
    setdataNascimento('');
    setAltura('');
    setPeso('');
    setCpf('');
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

    <Image source={foto} style={css.profileImage} />
  
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
          <Image source={foto} style={css.profileImage}></Image>
          <TouchableOpacity style={css.bttImage} onPress={handleChoosePhoto}>
          <Text style={css.bttImageTxt}>Trocar foto</Text>
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
              <Text style={css.nameInf}>CPF:</Text>
              <TextInputMask style={css.insertInf} 
              type={'cpf'}
              value={cpf}
              onChangeText={(inputCpf) => setCpf(inputCpf)}
              placeholder="Digite o CPF do paciente"/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nameInf}>RG:</Text>
              <TextInputMask style={css.insertInf} 
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
              <TextInputMask style={css.insertInf} 
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
          <Text style={css.recordTitle}>
            PRONTUARIO
          </Text>
          <View style={css.containerNotes}>
            <Text style={css.titleNotes}>Queixa Principal</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={queixa}
            onChangeText={(inputQueixa) => setQueixa(inputQueixa)}/>
            <Text style={css.titleNotes}>Histórico</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={historico}
            onChangeText={(inputHistorico) => setHistorico(inputHistorico)}/>
            <Text style={css.titleNotes}>Alergias</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={alergias}
            onChangeText={(inputAlergias) => setAlergias(inputAlergias)}/>
            <Text style={css.titleNotes}>CID</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={cid}
            onChangeText={(inputCid) => setCid(inputCid)}/>
            <Text style={css.titleNotes}>Exame Físico</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={exameF}
            onChangeText={(inputExamef) => setExamef(inputExamef)}/>
            <Text style={css.titleNotes}>Conduta</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={conduta}
            onChangeText={(inputConduta) => setConduta(inputConduta)}/>
            <Text style={css.titleNotes}>Hipótese de Diagnóstico</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={hipoteseD}
            onChangeText={(inputHipotesed) => setHipotesed(inputHipotesed)}/>
            <Text style={css.titleNotes}>Diagnóstico</Text>
            <TextInput style={css.insertNotes}
            multiline={true}
            value={diagnostico}
            onChangeText={(inputDiagnostico) => setDiagnostico(inputDiagnostico)}/>
            <Text style={css.titleNotes}>Resultado dos Exames</Text>
            <TextInput style={css.insertNotes}
            multiline={true}/>
            <TouchableOpacity style={[css.attachBtt, {marginBottom: 30,}]} >
              <Text style={css.attachBttText}>
                Anexar arquivo
              </Text>
            </TouchableOpacity>
            <Text style={css.titleNotes}>Medicamentos</Text>
            <TextInput style={css.insertMedicines}
            value={inputMedicines}
            onChangeText={text => setInputMedicines(text)}/>
            <TouchableOpacity style={css.attachBtt} onPress= {addItem}>
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
            <TouchableOpacity style={css.attachBtt} onPress={ () => navigation.navigate('Medicamentos')}>
              <Text style={css.attachBttText}>
                Medicamentos
              </Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style={css.footerContainer}>
          <TouchableOpacity style={css.footerBtt} onPress={handleProntuario}>
            <Text style={css.footerBttText}> 
                Salvar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.footerBtt} onPress={ () => navigation.navigate('Login')}>
            <Text style={css.footerBttText}>
                Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.footerBtt} onPress={excluirFormulario}>
            <Text style={css.footerBttText}>
                Excluir
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView >
  )
}





export default ProntuarioFicha;