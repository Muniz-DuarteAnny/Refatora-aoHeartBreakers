import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TextInput, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Item from './Item';
import {css} from '../../Style/css'

const Search = ({ navigation }) => {
  const [medicalRecord, setMedicalRecord] = useState([]);
  const [filterPatient, setFilterPatient] = useState('');

  const unrealData = [
    { id: 1, nome: 'Nome: Juscélio Alves', codigoProntuario: 'Prontuário: 0000001', imagemUrl: 'https://img.freepik.com/fotos-premium/homem-adulto-senior-rosto-sereno-expressao-estudio-retrato_53876-39177.jpg' },
    { id: 2, nome: 'Nome: Michelle Gusman', codigoProntuario: 'Prontuário: 0000002', imagemUrl: 'https://thumbs.dreamstime.com/b/retrato-normal-real-da-pessoa-22299720.jpg' },
    { id: 3, nome: 'Nome: Antônio Damião', codigoProntuario: 'Prontuário: 0000003', imagemUrl: 'https://thumbs.dreamstime.com/b/primer-del-hombre-mayor-sobre-blanco-38473450.jpg' },
  ];

  useEffect(() => {
    setMedicalRecord(unrealData);
  }, []);

  // filtragem de paciente;
  const handleFilterPatient = () => {
  // const filteredData = medicalRecord.filter(item => item.nome.includes(filterPatient));
  };

  // redirecionar a página de criacao de prontuario
  const handleNewPatient = () => {
    navigation.navigate('Prontuario');
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => navigation.navigate('Detalhes', { item })}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* barra de pesquisa */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          value={filterPatient}
          onChangeText={(text) => setFilterPatient(text)}
        />

      {/* botões */}
        <TouchableOpacity style={styles.buttons} title="Buscar" onPress={handleFilterPatient}>
        <Text style={styles.buttonsText}> BUSCAR </Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} title="Novo" onPress={handleNewPatient}>
          <Text style={styles.buttonsText}> NOVO </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={medicalRecord}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    backgroundColor: '#B22222',
    paddingVertical: 11 ,
    paddingHorizontal: 9,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "white",
    borderWidth: 0.5
  },

  buttonsText: {
    fontWeight: 'bold',
        fontSize: 13,
        color: '#FFF',
  },

  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    paddingTop: 45

  },  
  input: {
    width: '60%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
});

export default Search;
