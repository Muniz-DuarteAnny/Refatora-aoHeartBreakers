import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet, StatusBar } from 'react-native';
import Item from './Item';

const Search = ({ navigation }) => {
  const [medicalRecord, setMedicalRecord] = useState([]);
  const [filterPatient, setFilterPatient] = useState('');

  const unrealData = [
    { id: 1, nome: 'Nome: Bluzão Silva', codigoProntuario: 'Prontuário: 40028922', imagemUrl: 'https://static.vakinha.com.br/uploads/vakinha/image/183818/maxresdefault.jpg' },
    { id: 2, nome: 'Nome: Kuduairo King', codigoProntuario: 'Prontuário: 08008080', imagemUrl: 'https://pbs.twimg.com/profile_images/1570418069339623426/w8oeQ2lD_400x400.jpg' },
    { id: 3, nome: 'Nome: Blue Pen', codigoProntuario: 'Prontuário: 777', imagemUrl: 'https://uploads.metropoles.com/wp-content/uploads/2019/11/16113237/caneta-azul.jpg' },
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
        <Button title="Buscar" color="#9A0019" onPress={handleFilterPatient} />
        <Button title="Novo" color="#9A0019" onPress={handleNewPatient} />
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
