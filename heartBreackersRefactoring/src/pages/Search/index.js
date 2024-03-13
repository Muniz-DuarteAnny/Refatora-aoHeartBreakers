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
    { id: 4, nome: 'Nome: Pedro Augusto', codigoProntuario: 'Prontuário: 0000004', imagemUrl: 'https://imageserve.babycenter.com/18/000/416/UHSrrN03ASPW94xm2vdJ1BxYEDx7dd46_med.jpg' },
    { id: 5, nome: 'Nome: João Severino', codigoProntuario: 'Prontuário: 0000005', imagemUrl: 'https://thumbs.dreamstime.com/b/homem-anos-de-retratos-de-sorriso-velhos-90222901.jpg' },
    { id: 6, nome: 'Nome: Manoel Gomes', codigoProntuario: 'Prontuário: 0000006', imagemUrl: 'https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2023/08/manoel-gomes-70-mil-transformacao.jpg' },
    { id: 7, nome: 'Nome: Jair Inácio', codigoProntuario: 'Prontuário: 0000007', imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdseHY39fdjXwyIRMPQGDAcORuZzVuQGkcmMaYsRJxKgix2SsZcIxIom8Bw_Z1IydiIw0&usqp=CAU' },
    { id: 8, nome: 'Nome: Aparecida Cida', codigoProntuario: 'Prontuário: 0000008', imagemUrl: 'https://imgs.search.brave.com/EgZpFmjz3ktKcs1NrjIGZP63WO4T1e5hfKZbRqRE_z4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L211bGhlci1zZW5p/b3ItZXhwcmVzc2l2/YS1wb3NhbmRvXzM0/NDkxMi00OTkuanBn/P3NpemU9NjI2JmV4/dD1qcGc' },
    { id: 9, nome: 'Nome: Marilene Costa', codigoProntuario: 'Prontuário: 0000009', imagemUrl: 'https://imgs.search.brave.com/K0E6G3ocVSbP1d6p-7267q5gdM2Fkhht5NTCYNJZm30/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi80/ODAwNDE2LW11bGhl/ci1uZWdyYS1zb3Jy/aW5kby1lLW9saGFu/ZG8tZGUtbGFkby1k/dXJhbnRlLW8tdGVt/cG8tZW0tY2FzYS1m/b3RvLmpwZw' },
    { id: 10, nome: 'Nome: Larissa Alves', codigoProntuario: 'Prontuário: 0000010', imagemUrl: 'https://imgs.search.brave.com/5zjMkMwmX0X-LSGOmXAnUovDDwDiUW3vbokgSLhVsLE/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5v/YmpldG9kaXJldG8u/Y29tLmJyL2ZvdG9z/L3R1Y2ElMjAzeDQu/anBn' },
    { id: 11, nome: 'Nome: Jamile Silva', codigoProntuario: 'Prontuário: 0000011', imagemUrl: 'https://imgs.search.brave.com/gvf_z6XsN0RQPqQcZ77mV5KQdi-qNWumdGQitn-4H4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zLmds/YmltZy5jb20vam8v/ZzEvZi9vcmlnaW5h/bC8yMDEyLzA0LzEz/L3RlcmV6YV9mb3Rv/Ym9hXzMwMF80MDAu/anBn' },

  ];

  useEffect(() => {
    setMedicalRecord(unrealData);
  }, []);

  // filtragem da lista de pacientes por nome ou num de prontuário
  const handleFilterPatient = () => {
  const filteredData = unrealData.filter(item => {
    const patientName = item.nome.toLowerCase();
    const patientRecordNumber = item.codigoProntuario.toLowerCase();
    const filterText = filterPatient.toLowerCase();
    return patientName.includes(filterText) || patientRecordNumber.includes(filterText);
  });

  setMedicalRecord(filteredData);
  };

  // redirecionar a página de criacao de prontuario
  const handleNewPatient = () => {
    navigation.navigate('ficha');
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
    backgroundColor: '#583493',
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
