
//importando bibliotecas que serão utilizadas no código, talvez seja necessário baixa-las
//No terminal do vs redirecione para a pasta que o seu projeto esta alocado e instale as bibliotecas 
//npm install react-native-picker-select
//npm install react-native-masked-text
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import {css} from '../../Style/cssProntuario.js';
import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';


const ProntuarioFicha = () => {
  //pega o que foi inserido no input e filtra na máscara e depois seta no input
  const [nome, setNome] = useState('');
  const [dataNascimento, setdataNascimento] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [sexo, setSexo] = useState(null);
  const [sangue, setSangue] = useState(null);

  //adiciona opções nos inputs
  const sexoOpções = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'},
    {label: 'Outro', value: 'O'},
  ];

  const sangueOpções =[
    {label: 'A+', value: '1'},
    {label: 'A-', value: '2'},
    {label: 'B+', value: '3'},
    {label: 'B-', value: '4'},
    {label: 'AB+', value: '5'},
    {label: 'AB-', value: '6'},
    {label: 'O+', value: '7'},
    {label: 'O-', value: '8'},
  ]
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
              type={'custom'}
              value= {nome}
              onChangeText={(input) => setNome(input.replace(/[^a-zA-Z]/g, ''))}/>
            </View>
            <View style={css.containerInf}>
              <Text style={css.nomeInf}>CPF:</Text>
              <TextInputMask style={css.inserirInf} 
              type={'cpf'}
              value={cpf}
              onChangeText={(formatted, extracted) => setCpf(extracted)}
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
                onChangeText={(extracted) => {setRg(extracted);}}
              />
            </View>
            <View style={css.containerInf}>
              <Text style={css.nomeInf}>Endereço:</Text>
              <TextInput style={css.inserirInf} 
              placeholder="Digite o endereço do paciente"/>
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
              onChangeText={(formatted, extracted) => setdataNascimento(extracted)}/>
            </View>
          </View>
          <View style={css.containerFilho3}>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Peso(KG)</Text>
              <TextInput style={css.inserirInf2}
              placeholder="Digite o peso" 
              type={'custom'}
              keyboardType="numeric"
              value={peso}
              onChangeText={(input) => setPeso(input.replace(/[^0-9,]/g, ''))}/>
            </View>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Altura(metros)</Text>
              <TextInput style={css.inserirInf2} 
              placeholder="Digite a altura"
              type={'custom'}
              keyboardType="numeric"
              value={altura}
              onChangeText={(input) => setAltura(input.replace(/[^0-9,]/g, ''))}/>
            </View>
          </View>
          <View style={css.containerFilho3}>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Sexo</Text>
              <RNPickerSelect style={css}
              value={sexo}
              items={sexoOpções}
              onValueChange={(value) => setSexo(value)}
              placeholder={{ label: 'Selecione...', value: null}}/>
            </View>
            <View style={css.containerInf2}>
              <Text style={css.nomeInf}>Tipo sanguíneo</Text>
              <RNPickerSelect style={css} 
              value={sangue}
              items={sangueOpções}
              onValueChange={(value) => setSangue(value)}
              placeholder={{ label: 'Selecione...', value: null}}/>
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
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Histórico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Alergias</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>CID</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Exame Físico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Conduta</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Hipótese de Diagnóstico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Diagnóstico</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <Text style={css.tituloAnotacoes}>Resultado dos Exames</Text>
            <TextInput style={css.inserirAnotacoes}
            multiline={true}/>
            <TouchableOpacity style={css.botaoAnexo}>
              <Text style={css.botaoAnexarTexto}>
                Baixar Anexo
              </Text>
            </TouchableOpacity>
          </View>
        </View> 
        <View style={css.footerbotoes}>
          <TouchableOpacity style={css.botaoFooter}>
            <Text style={css.botaoFooterText}>
                Salvar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.botaoFooter}>
            <Text style={css.botaoFooterText}>
                Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.botaoFooter}>
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
