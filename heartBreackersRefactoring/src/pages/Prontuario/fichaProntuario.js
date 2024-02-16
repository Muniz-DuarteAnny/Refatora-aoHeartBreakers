
//importando bibliotecas que serão utilizadas no código, talvez seja necessário baixa-las
//Va até a pasta package.json e verifique se as bibliotecas react-native-masked-text, react-native-picker-select, @react-navigation/native estão instaladas.
//Caso elas não estiverem instaladas:
//No terminal do vs redirecione para a pasta que o seu projeto esta alocado e instale as bibliotecas 
//npm install react-native-picker-select react-native-masked-text @react-navigation/native.
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SectionList } from "react-native";
import {css} from '../../Style/cssProntuario.js';
import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';



const ProntuarioFicha = () => {

  const navigation = useNavigation();//remove
  //pega o que foi inserido no input e filtra na máscara e depois seta no input
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');
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
  const [inputMedicamentos, setInputMedicamentos] = useState('');
  const [items, setItems] = useState([])
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
  };

  const adicionarItem = () => {
    if (inputMedicamentos.trim() !== '') {
      setItems([...items, { id: items.length.toString(), texto: inputMedicamentos }]);
      setInputMedicamentos('');
    }
  };
  //marcação da página
  return (
    <ScrollView>
      <View style={css.pai}>
        <View style={css.containerPaiFichadopaciente}>
          <Text style={css.tituloFicha}>
            FICHA DO PACIENTE
          </Text>
          <View style={css.containerFilho1}>
            <Image source={require("../../assets/perfil.png")} style={css.imagemPerfil}></Image>
            <TouchableOpacity style={css.botaoTrocarImagem}>
              <Text style={css.botaoTrocarImagemTexto}>Trocar foto</Text>
            </TouchableOpacity>
          </View>
          <View style={css.containerFilho2}>
            <View style={css.containerInf}>
              <Text style={css.nomeInf}>Nome:</Text>
              <TextInput style={css.inserirInf} 
              placeholder="Digite o nome do paciente"
              value= {nome}
              onChangeText={(inputNome) => setNome(inputNome.replace(/[^a-zA-Z\s]/g, ''))}/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nomeInf}>CPF:</Text>
              <TextInputMask style={css.inserirInf} 
              type={'cpf'}
              value={cpf}
              onChangeText={(inputCpf) => setCpf(inputCpf)}
              placeholder="Digite o CPF do paciente"/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nomeInf}>RG:</Text>
              <TextInputMask style={css.inserirInf} 
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
              <Text style={css.nomeInf}>Endereço:</Text>
              <TextInput style={css.inserirInf} 
              placeholder="Digite o endereço do paciente"
              value={endereco}
              onChangeText={(inputEndereco) => setEndereco(inputEndereco)}/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nomeInf}>Data de nascimento:</Text>
              <TextInputMask style={css.inserirInf} 
              placeholder="Selecione a data de nascimento do paciente"
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={dataNascimento}
              onChangeText={(inputData) => setdataNascimento(inputData)}/>
            </View>
          </View>
          <View style={css.containerFilho3}>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Peso(KG)</Text>
              <TextInput style={css.inserirInf2}
              placeholder="Digite o peso" 
              keyboardType="numeric"
              value={peso}
              onChangeText={(inputPeso) => setPeso(inputPeso.replace(/[^0-9,]/g, ''))}/>
            </View>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Altura(metros)</Text>
              <TextInput style={css.inserirInf2} 
              placeholder="Digite a altura"
              keyboardType="numeric"
              value={altura}
              onChangeText={(inputAltura) => setAltura(inputAltura.replace(/[^0-9,]/g, ''))}/>
            </View>
          </View>
          <View style={css.containerFilho3}>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Sexo</Text>
              <RNPickerSelect style={css}
              value={sexo}
              items={sexoOpções}
              onValueChange={(selectSexo) => setSexo(selectSexo)}
              placeholder={{ label: 'Selecione...', value: null}}/>
            </View>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Tipo sanguíneo</Text>
              <RNPickerSelect style={css} 
              placeholder={{ label: 'Selecione...', value: null}}
              items={sangueOpções}
              onValueChange={(selectSangue) => setSangue(selectSangue)}
              value={sangue}/>
            </View>
          </View>
        </View>
        <View style={css.containerPaiProntuariodopaciente}>
          <Text style={css.tituloProntuario}>
            PRONTUARIO
          </Text>
          <View style={css.containerAnotacoes}>
            <Text style={css.tituloAnotacoes}>Queixa Principal</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={queixa}
            onChangeText={(inputQueixa) => setQueixa(inputQueixa)}/>
            <Text style={css.tituloAnotacoes}>Histórico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={historico}
            onChangeText={(inputHistorico) => setHistorico(inputHistorico)}/>
            <Text style={css.tituloAnotacoes}>Alergias</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={alergias}
            onChangeText={(inputAlergias) => setAlergias(inputAlergias)}/>
            <Text style={css.tituloAnotacoes}>CID</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={cid}
            onChangeText={(inputCid) => setCid(inputCid)}/>
            <Text style={css.tituloAnotacoes}>Exame Físico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={exameF}
            onChangeText={(inputExamef) => setExamef(inputExamef)}/>
            <Text style={css.tituloAnotacoes}>Conduta</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={conduta}
            onChangeText={(inputConduta) => setConduta(inputConduta)}/>
            <Text style={css.tituloAnotacoes}>Hipótese de Diagnóstico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={hipoteseD}
            onChangeText={(inputHipotesed) => setHipotesed(inputHipotesed)}/>
            <Text style={css.tituloAnotacoes}>Diagnóstico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}
            value={diagnostico}
            onChangeText={(inputDiagnostico) => setDiagnostico(inputDiagnostico)}/>
            <Text style={css.tituloAnotacoes}>Resultado dos Exames</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <TouchableOpacity style={[css.botaoAnexo, {marginBottom: 30,}]} >
              <Text style={css.botaoAnexarTexto}>
                Anexar arquivo
              </Text>
            </TouchableOpacity>
            <Text style={css.tituloAnotacoes}>Medicamentos</Text>
            <TextInput style={css.inserirMedicamentos}
            value={inputMedicamentos}
            onChangeText={text => setInputMedicamentos(text)}/>
            <TouchableOpacity style={css.botaoAnexo} onPress= {adicionarItem}>
              <Text style={css.botaoAnexarTexto}>
                Adicionar Medicamentos
              </Text>
            </TouchableOpacity>
            <SectionList
              sections={[{ title: 'Lista', data: items }]}
              renderItem={renderItem}
              renderSectionHeader={({ section: { title } }) => (
                <Text >{title}</Text>
              )}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        </View> 
        <View style={css.footerbotoes}>
          <TouchableOpacity style={css.botaoFooter} onPress={handleProntuario}>
            <Text style={css.botaoFooterText}>
                Salvar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.botaoFooter} onPress={ () => navigation.navigate('Login')}>
            <Text style={css.botaoFooterText}>
                Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.botaoFooter} onPress={excluirFormulario}>
            <Text style={css.botaoFooterText}>
                Excluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>  
    </ScrollView >
    
  )
}

 
export default ProntuarioFicha;
